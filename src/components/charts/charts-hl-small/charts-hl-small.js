import React from 'react'

import ChartSmall from './chart-small'

import './charts-hl-small.css'

export default function ChartsHlSmall(props) {
  return (
    <div className="charts-hl-small">
      <div className="charts-hl-sm-group">
        <div className="chart-sm-title">Top 3 Gainers</div>

        <div className="charts-hl-sm-blocks">
          <div className="chart-sm-block-container">
            <div className="chart-sm-block">
              <ChartSmall
                art="/images/old-town-road-album.jpeg"
                stat="21"
                subtitle="LIL' NAS X"
                title="Old Town Road"
                up
              />
            </div>
          </div>

          <div className="chart-sm-block-container">
            <div className="chart-sm-block">
              <ChartSmall
                art="/images/old-town-road-album.jpeg"
                stat="21"
                subtitle="LIL' NAS X"
                title="Old Town Road"
                up
              />
            </div>
          </div>

          <div className="chart-sm-block-container">
            <div className="chart-sm-block">
              <ChartSmall
                art="/images/old-town-road-album.jpeg"
                stat="21"
                subtitle="LIL' NAS X"
                title="Old Town Road"
                up
              />
            </div>
          </div>
        </div>
      </div>

      <div className="charts-hl-sm-group">
        <div className="chart-sm-title">Top 3 Droppers</div>

        <div className="charts-hl-sm-blocks">
          <div className="chart-sm-block-container">
            <div className="chart-sm-block">
              <ChartSmall
                art="/images/old-town-road-album.jpeg"
                down
                stat="18"
                subtitle="LIL' NAS X"
                title="Old Town Road"
              />
            </div>
          </div>

          <div className="chart-sm-block-container">
            <div className="chart-sm-block">
              <ChartSmall
                art="/images/old-town-road-album.jpeg"
                down
                stat="18"
                subtitle="LIL' NAS X"
                title="Old Town Road"
              />
            </div>
          </div>

          <div className="chart-sm-block-container">
            <div className="chart-sm-block">
              <ChartSmall
                art="/images/old-town-road-album.jpeg"
                down
                stat="18"
                subtitle="LIL' NAS X"
                title="Old Town Road"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
