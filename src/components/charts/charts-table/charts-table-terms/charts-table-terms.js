import React from 'react'

import './charts-table-terms.css'

export default function ChartsTableTerms(props) {
  return (
    <div className="charts-table-terms">
      <div className="charts-tbl-terms-title">LEGEND</div>

      <div className="charts-tbl-terms-list">
        <div className="charts-tbl-terms-list-item">
          <span className="charts-tbl-term">Chart Week</span> - Monday at 12:00
          am to Sunday at 11:59 pm.
        </div>
        <div className="charts-tbl-terms-list-item">
          <span className="charts-tbl-term">TW</span> - This week. The title’s
          chart position in the current Chart Week.
        </div>
        <div className="charts-tbl-terms-list-item">
          <span className="charts-tbl-term">LW</span> - Last Week. The title’s
          chart position in the previous Chart Week.
        </div>
        <div className="charts-tbl-terms-list-item">
          <span className="charts-tbl-term">Weeks On</span> - How many weeks a
          title has been in the top 40 positions of any chart. The title’s first
          “week” on a particular chart is marked by its first appearance in the
          top 40 positions of that particular chart.
        </div>
        <div className="charts-tbl-terms-list-item">
          <span className="charts-tbl-term">Panel</span> - The group of radio
          stations that Measure Music monitors for each music format. Each
          format has a panel of stations specific to its format.
        </div>
        <div className="charts-tbl-terms-list-item">
          <span className="charts-tbl-term">Stations On</span> - The number of
          radio stations in the format panel playing the specific title.
        </div>
        <div className="charts-tbl-terms-list-item">
          <span className="charts-tbl-term">Title</span> - Song title.
        </div>
        <div className="charts-tbl-terms-list-item">
          <span className="charts-tbl-term">Spin</span> - One play of one title
          (song) on one station.
        </div>
        <div className="charts-tbl-terms-list-item">
          <span className="charts-tbl-term">"+/-"</span> - The number of spins a
          title (song) has increased or decreased from LW to TW.
        </div>
        <div className="charts-tbl-terms-list-item">
          <span className="charts-tbl-term">Bullet</span> - The circle around a
          specific TW chart position that indicates a title is flat or up spins
          from LW.
        </div>
        <div className="charts-tbl-terms-list-item">
          <span className="charts-tbl-term">Building Chart</span> - A chart that
          reflects song spins during the course of a Chart Week. A Building
          Chart shows daily spins and cumulative spins throughout the week.
          Building Tracking for specific songs will show the songs day-to-day
          spins during a Chart Week.
        </div>
      </div>
    </div>
  )
}
