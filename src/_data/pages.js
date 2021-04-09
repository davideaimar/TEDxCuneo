const helpers = require('./helpers')
const api = require('./api')
const constants = require('./constants')

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
          ...on TedPage{
            ${constants.TED_PAGE_FIELDS}
          }
          ...on ContactsPage{
            ${constants.CONTACTS_PAGE_FIELDS}
          }
        }
      }
    }
  }
  
  ${constants.SEO_FRAGMENT}
  }`;

module.exports = async function() {

    let pages = api.fetchGraphQL(pages_query)
    .then(function(response){
      // console.log(response.data.pageCollection.items)

      let pages = response.data.pageCollection.items;
      pages = pages.map(page => {
        page.slug = helpers.normalizeSlug(page.slug);

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
          case "TedPage":
            page.layout = "layouts/ted.njk"
            break;
          case "ContactsPage":
            page.layout = "layouts/contacts.njk"
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