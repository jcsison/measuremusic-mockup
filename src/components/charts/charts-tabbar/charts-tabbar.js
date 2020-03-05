import React from 'react'

import './charts-tabbar.css'

export default function ChartsTabbar(props) {
  return (
    <div className="charts-tabbar">
      <div className="tabbar-area">
        <a className="tab-label tab-label-active tab-label-first" href="/#">
          Published
        </a>
        <a className="tab-label" href="/#">
          Building
        </a>
        <a className="tab-label" href="/#">
          Recurrent
        </a>
        <a className="tab-label" href="/#">
          Most&nbsp;FADs
        </a>
        <a className="tab-label" href="/#">
          Most&nbsp;Increased
        </a>
        <a className="tab-label" href="/#">
          Chartbound
        </a>
        <a className="tab-label tab-label-last" href="/#">
          Panel
        </a>
      </div>
    </div>
  )
}
