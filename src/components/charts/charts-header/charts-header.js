import React from 'react'

import './charts-header.css'

export default function ChartsHeader(props) {
  return (
    <div className="charts-header">
      <div className="header-path">Charts > Hits50</div>
      <div className="header-title">Hits50 Premium Charts</div>
      <div className="header-subtitle">
        chart for the week of <span className="header-date">Dec 9</span> to{' '}
        <span className="header-date">Dec 15</span>
      </div>
    </div>
  )
}
