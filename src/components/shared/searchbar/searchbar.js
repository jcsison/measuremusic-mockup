import React from 'react'

import SearchbarAccount from './searchbar-account'
import SearchbarSearch from './searchbar-search'

import './searchbar.css'

export default function Searchbar(props) {
  return (
    <div className="searchbar">
      <SearchbarSearch />
      <SearchbarAccount />
    </div>
  )
}
