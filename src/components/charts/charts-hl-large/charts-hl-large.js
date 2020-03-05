import React from 'react'

import ChartLarge from './chart-large'

import './charts-hl-large.css'

export default function ChartsHlLarge(props) {
  return (
    <div className="charts-hl-large">
      <div className="chart-block-container">
        <div className="chart-block">
          <div className="chart-title-large">Biggest Gainer</div>
          <ChartLarge
            art="/images/old-town-road-album.jpeg"
            stat="21"
            subtitle="LIL' NAS X"
            title="Old Town Road"
            up
          />
        </div>
      </div>
      <div className="chart-block-container">
        <div className="chart-block">
          <div className="chart-title-large">Biggest Dropper</div>
          <ChartLarge
            art="/images/get-stupid-album.jpg"
            down
            stat="18"
            subtitle="ASTON MERRYGOLD"
            title="Get Stupid"
          />
        </div>
      </div>
      <div className="chart-block-container">
        <div className="chart-block">
          <div className="chart-title-large">Highest Chart Debut</div>
          <ChartLarge
            art="/images/old-town-road-album.jpeg "
            stat="#19"
            subtitle="LIL' NAS X"
            title="Old Town Road"
          />
        </div>
      </div>
      <div className="chart-block-container">
        <div className="chart-block">
          <div className="chart-title-large">Top Artist</div>
          <ChartLarge
            art="/images/taylor-swift-artist.jpg "
            stat="431,413"
            substat="Spins"
            title="Taylor Swift"
          />
        </div>
      </div>
      <div className="chart-block-container">
        <div className="chart-block">
          <div className="chart-title-large">Most Stations On</div>
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
