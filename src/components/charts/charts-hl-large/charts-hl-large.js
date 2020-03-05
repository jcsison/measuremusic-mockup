import React from 'react'

import ChartLarge from './chart-large'

import './charts-hl-large.css'

export default function ChartsHlLarge(props) {
  return (
    <div className="charts-hl-large">
      <div className="chart-lg-block-container">
        <div className="chart-lg-block">
          <div className="chart-lg-title">Biggest Gainer</div>
          <ChartLarge
            art="/images/old-town-road-album.jpeg"
            stat="21"
            subtitle="LIL' NAS X"
            title="Old Town Road"
            up
          />
        </div>
      </div>

      <div className="chart-lg-block-container">
        <div className="chart-lg-block">
          <div className="chart-lg-title">Biggest Dropper</div>
          <ChartLarge
            art="/images/get-stupid-album.jpg"
            down
            stat="18"
            subtitle="ASTON MERRYGOLD"
            title="Get Stupid"
          />
        </div>
      </div>

      <div className="chart-lg-block-container">
        <div className="chart-lg-block">
          <div className="chart-lg-title">Highest Chart Debut</div>
          <ChartLarge
            art="/images/old-town-road-album.jpeg "
            stat="#19"
            subtitle="LIL' NAS X"
            title="Old Town Road"
          />
        </div>
      </div>

      <div className="chart-lg-block-container">
        <div className="chart-lg-block">
          <div className="chart-lg-title">Top Artist</div>
          <ChartLarge
            art="/images/taylor-swift-artist.jpg "
            stat="431,413"
            substat="Spins"
            title="Taylor Swift"
          />
        </div>
      </div>

      <div className="chart-lg-block-container">
        <div className="chart-lg-block">
          <div className="chart-lg-title">Most Stations On</div>
          <ChartLarge
            art="/images/old-town-road-album.jpeg"
            stat="431"
            substat="Stations"
            subtitle="LIL' NAS X"
            title="Old Town Road"
          />
        </div>
      </div>
    </div>
  )
}
