const constants = require("./constants");
const fetch = require("node-fetch");

async function fetchGraphQL(query) {
    return fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      }
    ).then((response) => response.json())
  }

const pages_query = `query {
    pageCollection{
      items{
        slug
        seo{
          ...SeoFields
        }
        showInHeader
        headerTitle
        headerOrder
        content{
          __typename
          ...on LandingPage{
            ${constants.LANDING_PAGE_FIELDS}
          }
          ...on PrivacyPolicy{
            ${constants.PRIVACY_POLICY_FIELDS}
          }
          ...on NewsletterSuccessPage{
            ${constants.NEWSLETTER_SUCCESS_PAGE}
          }
          ...on PartnershipPage{
            ${constants.PARTNERSHIP_PAGE_FIELDS}
          }
          ...on HomePage{
            ${constants.HOME_PAGE_FIELDS}
          }
        }
      }
    }
  }
  
  ${constants.SEO_FRAGMENT}
  }`

const normalizeSlug = function(slug){
  if(!slug.startsWith("/")){
    slug = "/" + slug;
  }
  if(!slug.endsWith("/")){
    slug = slug + "/";
  }
  return slug;
}

module.exports = async function() {

    let pages = fetchGraphQL(pages_query)
    .then(function(response){
      // console.log(response.data.pageCollection.items)

      let pages = response.data.pageCollection.items;
      pages = pages.map(page => {
        page.slug = normalizeSlug(page.slug);

        switch(page.content.__typename){
          case "PrivacyPolicy":
            page.layout = "layouts/privacyPolicy.njk"
            break;
          case "LandingPage":
            page.layout = "layouts/landingPage.njk"
            break;
          case "NewsletterSuccessPage":
            page.layout = "layouts/newsletterSuccess.njk"
            break;
          case "PartnershipPage":
            page.layout = "layouts/partnership.njk"
            break;
          case "HomePage":
            page.layout = "layouts/homepage.njk"
            break;
          default:
            page.layout = "base.njk"
        }

        
        // console.log(page)
        return page;
      })

      // console.log(pages)
      return pages;
    })
    .catch(console.error);

    return pages;
  };