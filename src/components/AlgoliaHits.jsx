// AlgoliaHits.js
import React from 'react'

const AlgoliaHits = ({ hits }) => {
  console.log('Hits:', hits)

  return (
    <div>
      {hits.map(hit => (
        <div key={hit.objectID}>
          {/* Display your hit data here */}
          <p>{hit.title}</p>
          <p>{hit.description}</p>
        </div>
      ))}
    </div>
  )
}

export default AlgoliaHits
