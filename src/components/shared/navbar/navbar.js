import React from 'react'

import './navbar.css'

export default function Navbar(props) {
  return (
    <div class="navbar">
      <a href="/#"><img class="logo" alt="measuremusic" src="/images/measuremusic.png" /></a>

      <ul class="navlinks">
        <li class="flex-container inactive-link li-sp-lg"><a class="flex-link navlink" href="/#">Dashboard</a></li>
        <li class="li-sp-lg">
          <a class="flex-container navlink" href="/#">
            <span class="flex-link">Charts</span>
            <i class="fas fa-chevron-up fa-sm" />
          </a>
        </li>

        <ul class="charts-links">
          <li class="li-sp-sm">
            <a class="flex-container navlink" href="/#">
              <i class="fas fa-chevron-right fa-sm selected-link" />
              Hits50
            </a>
          </li>
          <li class="flex-container li-sp-sm inactive-link"><a class="charts-link flex-link" href="/#">Alternative</a></li>
          <li class="flex-container li-sp-sm inactive-link"><a class="charts-link flex-link" href="/#">AC</a></li>
          <li class="flex-container li-sp-sm inactive-link"><a class="charts-link flex-link" href="/#">Country</a></li>
          <li class="flex-container li-sp-sm inactive-link"><a class="charts-link flex-link" href="/#">Active Rock</a></li>
          <li class="flex-container li-sp-sm inactive-link"><a class="charts-link flex-link" href="/#">Smooth Jazz</a></li>
        </ul>

        <li class="li-sp-lg">
          <a class="inactive-link flex-container navlink" href="/#">
            <span class="flex-link">Artist Insights</span>
            <i class="fas fa-chevron-down fa-sm" />
          </a>
        </li>
        <li class="li-sp-lg">
          <a class="inactive-link flex-container navlink" href="/#">
            <span class="flex-link">Song Insights</span>
            <i class="fas fa-chevron-down fa-sm" />
          </a>
        </li>
        <li class="flex-container inactive-link li-sp-lg"><a class="flex-link navlink" href="/#">Label Insights</a></li>
        <li class="li-sp-lg">
          <a class="inactive-link flex-container navlink" href="/#">
            <span class="flex-link">Station Insights</span>
            <i class="fas fa-chevron-down fa-sm" />
          </a>
        </li>
        <li class="flex-container inactive-link li-sp-lg"><a class="flex-link navlink" href="/#">Market View</a></li>
        <li class="flex-container inactive-link li-sp-lg"><a class="flex-link navlink" href="/#">Compare</a></li>
      </ul>
    </div>
  )
}
