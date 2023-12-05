// components/Search.js
import React from 'react'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'
import AlgoliaHits from './AlgoliaHits' 

const Search = () => {
  return (
    <InstantSearch
      appId={process.env.ALGOLIA_APP_ID}
      apiKey={process.env.ALGOLIA_API_KEY}
      indexName={process.env.ALGOLIA_INDEX_NAME}
    >
      <SearchBox />
      <Hits hitComponent={AlgoliaHits} />
    </InstantSearch>
  )
}

export default Search
