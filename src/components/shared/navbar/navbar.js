import React from 'react'

import './navbar.css'

export default function Navbar(props) {
  return (
    <div className="navbar">
      <a href="/#">
        <img
          className="logo"
          alt="measuremusic"
          src="/images/measuremusic.png"
        />
      </a>

      <ul className="navlinks">
        <li className="flex-container li-sp-lg">
          <a className="flex-link inactive-link navlink" href="/#">
            Dashboard
          </a>
        </li>
        <li className="li-sp-lg">
          <a className="active-link flex-container navlink" href="/#">
            <span className="flex-link">Charts</span>
            <i className="fas fa-chevron-up fa-sm" />
          </a>
        </li>

        <ul className="charts-links">
          <li className="li-sp-sm">
            <a className="active-link flex-container navlink" href="/#">
              <i className="fas fa-chevron-right fa-sm selected-link" />
              Hits50
            </a>
          </li>
          <li className="flex-container li-sp-sm">
            <a className="charts-link inactive-link flex-link" href="/#">
              Alternative
            </a>
          </li>
          <li className="flex-container li-sp-sm">
            <a className="charts-link inactive-link flex-link" href="/#">
              AC
            </a>
          </li>
          <li className="flex-container li-sp-sm">
            <a className="charts-link inactive-link flex-link" href="/#">
              Country
            </a>
          </li>
          <li className="flex-container li-sp-sm">
            <a className="charts-link inactive-link flex-link" href="/#">
              Active Rock
            </a>
          </li>
          <li className="flex-container li-sp-sm">
            <a className="charts-link inactive-link flex-link" href="/#">
              Smooth Jazz
            </a>
          </li>
        </ul>

        <li className="li-sp-lg">
          <a className="inactive-link flex-container navlink" href="/#">
            <span className="flex-link">Artist Insights</span>
            <i className="fas fa-chevron-down fa-sm" />
          </a>
        </li>
        <li className="li-sp-lg">
          <a className="inactive-link flex-container navlink" href="/#">
            <span className="flex-link">Song Insights</span>
            <i className="fas fa-chevron-down fa-sm" />
          </a>
        </li>
        <li className="flex-container li-sp-lg">
          <a className="flex-link inactive-link navlink" href="/#">
            Label Insights
          </a>
        </li>
        <li className="li-sp-lg">
          <a className="inactive-link flex-container navlink" href="/#">
            <span className="flex-link">Station Insights</span>
            <i className="fas fa-chevron-down fa-sm" />
          </a>
        </li>
        <li className="flex-container li-sp-lg">
          <a className="flex-link inactive-link navlink" href="/#">
            Market View
          </a>
        </li>
        <li className="flex-container li-sp-lg">
          <a className="flex-link inactive-link navlink" href="/#">
            Compare
          </a>
        </li>
      </ul>
    </div>
  )
}
