import React from 'react'

import ChartsHeader from '../charts-header'
import ChartsHlLarge from '../charts-hl-large'
import ChartsHlSmall from '../charts-hl-small'
import ChartsTabbar from '../charts-tabbar'
import ChartsTable from '../charts-table'
import Divider from '../../shared/divider'
import Navbar from '../../shared/navbar'
import Searchbar from '../../shared/searchbar'

import './hits50.css'

export default function Hits50(props) {
  // todo: move shared components into a layout component

  const [menuOpen, setMenuOpen] = React.useState(true)

  return (
    <div className="hits50">
      <Navbar
        menuOpen={menuOpen}
        position={'navbar-top'}
        setMenuOpen={setMenuOpen}
      />

      <div className="hits50-container">
        <Searchbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Navbar
          menuOpen={menuOpen}
          position={'navbar-bottom'}
          setMenuOpen={setMenuOpen}
        />

        <div className="hits50-content">
          <ChartsHeader />
          <ChartsTabbar />
          <ChartsHlLarge />
          <Divider />
          <ChartsHlSmall />
          <ChartsTable />
        </div>
      </div>
    </div>
  )
}
