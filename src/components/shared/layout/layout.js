import React from 'react'

import Navbar from '../../shared/layout/navbar'
import Searchbar from '../../shared/layout/searchbar'

import './layout.css'

export default function Layout(props) {
  const [menuOpen, setMenuOpen] = React.useState(true)

  return (
    <div className="layout">
      <Navbar
        menuOpen={menuOpen}
        position={'navbar-top'}
        setMenuOpen={setMenuOpen}
      />

      <div className="layout-container">
        <Searchbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Navbar
          menuOpen={menuOpen}
          position={'navbar-bottom'}
          setMenuOpen={setMenuOpen}
        />
        <div className="page-content">{props.content}</div>
      </div>
    </div>
  )
}
