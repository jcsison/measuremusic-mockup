import React from 'react'

import SearchbarAccount from './searchbar-account'
import SearchbarSearch from './searchbar-search'

import './searchbar.css'

export default function Searchbar(props) {
  const menu = () => {
    if (props.menuOpen === true) {
      props.setMenuOpen(false)
    } else {
      props.setMenuOpen(true)
    }
  }

  return (
    <div className="searchbar">
      <SearchbarSearch />
      <SearchbarAccount />

      <div className="navbar-collapsed" onClick={menu}>
        <i className="fas fa-bars navbar-collapsed-icon" />
      </div>
    </div>
  )
}
