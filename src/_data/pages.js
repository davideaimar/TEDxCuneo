const helpers = require('./helpers')
const api = require('./api')
const constants = require('./constants')

const pages_query = `query {
    pageCollection(limit: 50${ process.env.DEBUG ? "" : ", where: {public: true}"}){
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
            sys{
              id
            }
          }
          ...on HomePage{
            sys{
              id
            }
          }
          ...on TedPage{
            sys{
              id
            }
          }
          ...on ContactsPage{
            ${constants.CONTACTS_PAGE_FIELDS}
          }
          ...on EventPage{
            sys{
              id
            }
          }
          ...on SpeakersPage{
            sys{
              id
            }
          }
          ...on TeamPage{
            sys{
              id
            }
          }
          ...on PartnersPage{
            sys{
              id
            }
          }
          ...on TicketsPage{
            ${constants.TICKETS_PAGE_FIELDS}
          }
        }
      }
    }
  }
  
  ${constants.SEO_FRAGMENT}`;

module.exports = async function() {

    let pages = await api.fetchGraphQL(pages_query);
    pages = pages.data.pageCollection.items;
    pages = pages.map(async function(page) {
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
          page.content = await api.fetchPartnershipPage(page.content.sys.id);
          page.layout = "layouts/partnership.njk"
          break;
        case "HomePage":
          page.content = await api.fetchHomepage(page.content.sys.id);
          page.layout = "layouts/homepage.njk"
          break;
        case "TedPage":
          page.content = await api.fetchTedPage(page.content.sys.id);
          page.layout = "layouts/ted.njk"
          break;
        case "ContactsPage":
          page.layout = "layouts/contacts.njk"
          break;
        case "EventPage":
          page.content = await api.fetchEventPage(page.content.sys.id);
          page.layout = "layouts/event.njk"
          break;
        case "TicketsPage":
          // page.content = await api.fetchTicketsPage(page.content.sys.id);
          page.layout = "layouts/tickets.njk"
          break;
        case "SpeakersPage":
          page.content = await api.fetchSpeakersPage(page.content.sys.id);
          page.layout = "layouts/speakers.njk"
          break;
        case "TeamPage":
          page.content = await api.fetchTeamPage(page.content.sys.id);
          page.layout = "layouts/team.njk"
          break;
        case "PartnersPage":
          page.content = await api.fetchPartnerPage(page.content.sys.id);
          page.layout = "layouts/partner.njk"
          break;
        default:
          page.layout = "base.njk"
      }
      return page;
    });

    // pages = await Promise.all(pages)
    // console.log(pages)

    return Promise.all(pages);
  };