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
  }
};
