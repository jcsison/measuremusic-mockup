import React from 'react'

import './searchbar-search.css'

export default function SearchbarSearch(props) {
  return (
    <div className="searchbar-search">
      <input
        className="search-input"
        placeholder="Search Artists, Songs, Stations, or Markets on MeasureMusic"
      />
    </div>
  )
}
