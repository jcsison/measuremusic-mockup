import React from 'react'

import './charts-options.css'

export default function ChartsOptions(props) {
  return (
    <div className="charts-options">
      <div className="charts-option">
        <a className="charts-option-link" href="/#">
          <i className="charts-option-icon fas fa-guitar" />
          Go to Artist page
        </a>
      </div>
      <div className="charts-option">
        <a className="charts-option-link" href="/#">
          <i className="charts-option-icon fas fa-music" />
          Go to Song page
        </a>
      </div>
      <div className="charts-option">
        <a className="charts-option-link" href="/#">
          <i className="charts-option-icon fas fa-columns" />
          Add to Comparison
        </a>
      </div>
      <div className="charts-option">
        <a className="charts-option-link" href="/#">
          <i className="charts-option-icon fas fa-star" />
          Add to Dashboard
        </a>
      </div>
      <div className="charts-option">
        <a className="charts-option-link" href="/#">
          <i className="charts-option-icon fas fa-share" />
          Share on Socials
        </a>
      </div>
    </div>
  )
}
