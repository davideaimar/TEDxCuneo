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
            sys{
              publishedAt
            }
            ${constants.LANDING_PAGE_FIELDS}
          }
          ...on PrivacyPolicy{
            sys{
              publishedAt
            }
            ${constants.PRIVACY_POLICY_FIELDS}
          }
          ...on NewsletterSuccessPage{
            sys{
              publishedAt
            }
            ${constants.NEWSLETTER_SUCCESS_PAGE}
          }
          ...on PartnershipPage{
            sys{
              id
              publishedAt
            }
          }
          ...on HomePage{
            sys{
              publishedAt
              id
            }
          }
          ...on TedPage{
            sys{
              publishedAt
              id
            }
          }
          ...on ContactsPage{
            sys{
              publishedAt
            }
            ${constants.CONTACTS_PAGE_FIELDS}
          }
          ...on LivePage{
            sys{
              publishedAt
            }
            ${constants.LIVE_PAGE_FIELDS}
          }
          ...on EventPage{
            sys{
              publishedAt
              id
            }
          }
          ...on EventsPage{
            sys{
              publishedAt
              id
            }
          }
          ...on SpeakersPage{
            sys{
              publishedAt
              id
            }
          }
          ...on SpeakerPage{
            sys{
              publishedAt
              id
            }
          }
          ...on TeamPage{
            sys{
              publishedAt
              id
            }
          }
          ...on PartnersPage{
            sys{
              publishedAt
              id
            }
          }
          ...on JointTeamPage{
            sys{
              publishedAt
              id
            }
          }
          ...on TicketsPage{
            sys{
              publishedAt
              id
            }
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
      page.publishedAt = page.content.sys.publishedAt;
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
        case "JointTeamPage":
          page.content = await api.fetchJoinTeamPage(page.content.sys.id);
          page.layout = "layouts/joinTeam.njk"
          break;
        case "HomePage":
          page.content = await api.fetchHomepage(page.content.sys.id);
          page.content.speakersCollection.items = page.content.speakersCollection.items.filter(s=>s!=null)
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
        case "EventsPage":
          page.content = await api.fetchEventsPage(page.content.sys.id);
          page.layout = "layouts/events.njk"
          break;
        case "TicketsPage":
          page.content = await api.fetchTicketsPage(page.content.sys.id);
          page.layout = "layouts/tickets.njk"
          break;
        case "SpeakersPage":
          page.content = await api.fetchSpeakersPage(page.content.sys.id);
          page.layout = "layouts/speakers.njk"
          page.content.speakersCollection.items = page.content.speakersCollection.items.filter(s=>s!=null)
          break;
        case "SpeakerPage":
          page.content = await api.fetchSpeakerPage(page.content.sys.id);
          page.layout = "layouts/speaker.njk"
          break;
        case "TeamPage":
          page.content = await api.fetchTeamPage(page.content.sys.id);
          page.layout = "layouts/team.njk"
          break;
        case "PartnersPage":
          page.content = await api.fetchPartnerPage(page.content.sys.id);
          page.layout = "layouts/partner.njk"
          break;
        case "LivePage":
          page.layout = "layouts/live.njk"
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