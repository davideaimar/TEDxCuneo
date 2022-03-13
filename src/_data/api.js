const fetch = require("node-fetch");
const constants = require("./constants");

module.exports = {
  fetchGraphQL: function (query) {
    return fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      }
    ).then((response) => response.json());
  },

  fetchHomepage: async function(content_id){
    const query = `
      query{
        homePage(id: "${content_id}"){
          ${constants.HOME_PAGE_FIELDS}
        }
      }
    `

    let homepage = await this.fetchGraphQL(query)
      .then(function(response){
        // console.log(response.data.homePage)

        response.data.homePage.speakersCollection.items = response.data.homePage.speakersCollection.items.map(function(speaker){
          if (speaker.__typename=="Page"){
            speaker.content.speaker.slug = speaker.slug;
            return speaker.content.speaker;
          }
          else
            return speaker;
        });

        // console.log(response.data.homePage.speakersCollection.items)

        return response.data.homePage
      })
      .catch(console.error);
    
    return homepage;
  },

  fetchTedPage: async function(content_id){
    const query = `
      query{
        tedPage(id: "${content_id}"){
          ${constants.TED_PAGE_FIELDS}
        }
      }
    `

    let page = await this.fetchGraphQL(query)
      .then(function(response){
        // console.log(response.data.tedPage)

        return response.data.tedPage
      })
      .catch(console.error);
    
    return page;
  },

  fetchEventPage: async function(content_id){
    const query = `
      query{
        eventPage(id: "${content_id}"){
          ${constants.EVENT_PAGE_FIELDS}
        }
      }
    `
    let page = await this.fetchGraphQL(query)
      .then(function(response){
        // console.log(response)

        response.data.eventPage.talksCollection.items = response.data.eventPage.talksCollection.items.map(function(speaker){
          if (speaker.__typename=="Page"){
            speaker.content.speaker.slug = speaker.slug;
            return speaker.content.speaker;
          }
          else
            return speaker;
        });

        // console.log(response.data.eventPage.talksCollection.items)

        return response.data.eventPage
      })
      .catch(console.error);
    
    return page;
  },

  fetchEventsPage: async function(content_id){
    const query = `
      query{
        eventsPage(id: "${content_id}"){
          ${constants.EVENTS_PAGE_FIELDS}
        }
      }
    `
    let page = await this.fetchGraphQL(query)
      .then(function(response){
        // console.log(response)

        response.data.eventsPage.events = response.data.eventsPage.ctaEventsCollection.items;

        return response.data.eventsPage
      })
      .catch(console.error);
    
    return page;
  },

  fetchPartnershipPage: async function(content_id){
    const query = `
      query{
        partnershipPage(id: "${content_id}"){
          ${constants.PARTNERSHIP_PAGE_FIELDS}
        }
      }
    `
    let page = await this.fetchGraphQL(query)
      .then(function(response){
        // console.log(response)

        return response.data.partnershipPage
      })
      .catch(console.error);
    
    return page;
  },

  fetchSpeakersPage: async function(content_id){
    const query = `
      query{
        speakersPage(id: "${content_id}"){
          ${constants.SPEAKERS_PAGE_FIELDS}
        }
      }
    `
    let page = await this.fetchGraphQL(query)
      .then(function(response){
        // console.log(response)

        return response.data.speakersPage
      })
      .catch(console.error);
    
    return page;
  },

  fetchSpeakerPage: async function(content_id){
    const query = `
      query{
        speakerPage(id: "${content_id}"){
          ${constants.SPEAKER_PAGE_FIELDS}
        }
      }
    `
    let page = await this.fetchGraphQL(query)
      .then(function(response){
        // console.log(response)

        return response.data.speakerPage
      })
      .catch(console.error);
    
    return page;
  },

  fetchTeamPage: async function(content_id){
    const query = `
      query{
        teamPage(id: "${content_id}"){
          ${constants.TEAM_PAGE_FIELDS}
        }
      }
    `
    let page = await this.fetchGraphQL(query)
      .then(function(response){
        // console.log(response)

        return response.data.teamPage
      })
      .catch(console.error);
    
    return page;
  },

  fetchUbuntuLandingPage: async function(content_id){
    const query = `
      query{
        ubuntuLanding(id: "${content_id}"){
          ${constants.LANDING_UBUNTU_FIELDS}
        }
      }
    `
    let page = await this.fetchGraphQL(query)
      .then(function(response){
        // console.log(response)

        return response.data.ubuntuLanding
      })
      .catch(console.error);
    
    return page;
  },

  fetchPartnerPage: async function(content_id){
    const query = `
      query{
        partnersPage(id: "${content_id}"){
          ${constants.PARTNER_PAGE_FIELDS}
        }
      }
    `
    let page = await this.fetchGraphQL(query)
      .then(function(response){
        // console.log(response)

        return response.data.partnersPage
      })
      .catch(console.error);
    
    return page;
  },

  fetchJoinTeamPage: async function(content_id){
    const query = `
      query{
        jointTeamPage(id: "${content_id}"){
          ${constants.JOINUS_PAGE_FIELDS}
        }
      }
    `
    let page = await this.fetchGraphQL(query)
      .then(function(response){
        // console.log(response)

        return response.data.jointTeamPage
      })
      .catch(console.error);
    
    return page;
  },

  fetchTicketsPage: async function(content_id){
    const query = `
      query{
        ticketsPage(id: "${content_id}"){
          ${constants.TICKETS_PAGE_FIELDS}
        }
      }
    `
    let page = await this.fetchGraphQL(query)
      .then(function(response){
        // console.log(response)

        return response.data.ticketsPage
      })
      .catch(console.error);
    
    return page;
  }
};
