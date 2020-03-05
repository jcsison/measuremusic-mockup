import React from 'react'

import './chart-options.css'

export default function ChartOptions(props) {
  return (
    <div className="chart-options">
      <div className="chart-option">
        <a className="chart-option-link" href="/#">
          <i className="chart-option-icon fas fa-guitar" />
          Go to Artist page
        </a>
      </div>
      <div className="chart-option">
        <a className="chart-option-link" href="/#">
          <i className="chart-option-icon fas fa-music" />
          Go to Song page
        </a>
      </div>
      <div className="chart-option">
        <a className="chart-option-link" href="/#">
          <i className="chart-option-icon fas fa-columns" />
          Add to Comparison
        </a>
      </div>
      <div className="chart-option">
        <a className="chart-option-link" href="/#">
          <i className="chart-option-icon fas fa-star" />
          Add to Dashboard
        </a>
      </div>
      <div className="chart-option">
        <a className="chart-option-link" href="/#">
          <i className="chart-option-icon fas fa-share" />
          Share on Socials
        </a>
      </div>
    </div>
  )
}
