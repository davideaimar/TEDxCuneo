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

        return response.data.eventPage
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
