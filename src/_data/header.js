const helpers = require('./helpers')
const api = require('./api')

const header_query = `query {
  pageCollection(where: {show_in_header: true${ process.env.DEBUG ? "" : ", public: true"}}, order: header_order_ASC ){
    items{
      headerOrder
      headerTitle
      showInHamburger
      slug
    }
  }
}`;

module.exports = async function() {

    let header = api.fetchGraphQL(header_query)
    .then(function(response){
      // console.log(response.data.pageCollection.items)

      let header = response.data.pageCollection.items;
      header = header.map(item => {
        item.slug = helpers.normalizeSlug(item.slug);
                
        // console.log(item)
        return item;
      })

      // console.log(header)
      return header;
    })
    .catch(console.error);

    return header;
  };