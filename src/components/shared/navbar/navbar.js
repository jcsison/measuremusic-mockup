import React from 'react'

import './navbar.css'

export default function Navbar(props) {
  return (
    <div class="navbar">
      <img class="logo" alt="measuremusic" src="/images/measuremusic.png" />

      <ul class="navlinks">
        <li><a href="/#">Dashboard</a></li>
        <li>
          <a href="/#">Charts</a>
          <i class="fas fa-search" />
        </li>

        <ul class="charts-links">
          <li>
            <i class="fas fa-search" />
            <a href="/#">Hits50</a>
          </li>
          <li><a href="/#">Alternative</a></li>
          <li><a href="/#">AC</a></li>
          <li><a href="/#">Country</a></li>
          <li><a href="/#">Active Rock</a></li>
          <li><a href="/#">Smooth Jazz</a></li>
        </ul>

        <li>
          <a href="/#">Artist Insights</a>
          <i class="fas fa-search" />
        </li>
        <li>
          <a href="/#">Song Insights</a>
          <i class="fas fa-search" />
        </li>
        <li><a href="/#">Label Insights</a></li>
        <li>
          <a href="/#">Station Insights</a>
          <i class="fas fa-search" />
        </li>
        <li><a href="/#">Market View</a></li>
        <li><a href="/#">Compare</a></li>
      </ul>
    </div>
  )
}
