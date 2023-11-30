// Example script using Contentful and Algolia SDKs
const contentful = require('contentful')
const algoliasearch = require('algoliasearch')
require('dotenv').config()

// Set up Contentful client
const contentfulClient = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

// Set up Algolia client and index
const algoliaClient = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY
)
const algoliaIndex = algoliaClient.initIndex(process.env.ALGOLIA_INDEX_NAME)

// Fetch data from Contentful
contentfulClient
  .getEntries()
  .then(entries => {
    // Transform and push data to Algolia
    const records = entries.items.map(item => ({
      objectID: item.sys.id,
      title: item.fields.Title, 
      author: item.fields.Author, 
      summary: item.fields.Summary,
      coverImage: item.fields.CoverImage,
      content: item.fields.Content
    }))

    return algoliaIndex.saveObjects(records)
  })
  .then(() => {
    console.log('Data synced with Algolia')
  })
  .catch(error => {
    console.error('Error syncing data with Algolia:', error)
  })
