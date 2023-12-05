// components/AlgoliaHits.js
import React from 'react'
require('dotenv').config()


const AlgoliaHits = ({ hits }) => (
  <ul>
    {hits.map(hit => (
      <li key={hit.objectID}>
        <h3>{hit.title}</h3>
        <p>{hit.summary}</p>
      </li>
    ))}
  </ul>
)

export default AlgoliaHits
