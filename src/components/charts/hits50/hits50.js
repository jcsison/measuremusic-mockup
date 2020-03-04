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
  return (
    <div class="flex-container">
      <Navbar />

      <div class="flex-subcontainer">
        <Searchbar />

        <div class="hits50">
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
