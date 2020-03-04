import React from 'react'

import './searchbar-search.css'

export default function SearchbarSearch(props) {
  return (
    <div class="searchbar-search">
      <i class="fas fa-search" />
      <input
        class="search-input"
        placeholder="Search Artists, Songs, Stations, or Markets on MeasureMusic"
      />
    </div>
  )
}
