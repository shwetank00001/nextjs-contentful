// components/Search.js
import React from 'react'
import {
  InstantSearch,
  SearchBox,
  Hits,
  Configure,
  connectStateResults
} from 'react-instantsearch-dom'
import AlgoliaHits from './AlgoliaHits' 
import algoliasearch from 'algoliasearch/lite'

const searchClient = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_SEARCH_KEY
)

const SearchResults = connectStateResults(({ searchState }) =>
  searchState && searchState.query ? <Hits hitComponent={AlgoliaHits} /> : null
)

const Search = () => {
  return (
    <InstantSearch
      indexName={process.env.ALGOLIA_INDEX_NAME}
      searchClient={searchClient}
    >
      <Configure hitsPerPage={5} />
      <SearchBox />
      <SearchResults />
    </InstantSearch>
  )
}

export default Search
