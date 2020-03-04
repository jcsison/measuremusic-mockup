import React from 'react'

import './searchbar-account.css'

export default function SearchbarAccount(props) {
  return (
    <a className="searchbar-anchor" href="/#">
      <div className="searchbar-account">
        <div className="account-info">
          <div className="account-name">Mike Spiegl</div>
          <div className="account-email">mike@hyperfocus.com</div>
        </div>

        <i className="account-chevron fas fa-chevron-down fa-sm" />
      </div>
    </a>
  )
}
