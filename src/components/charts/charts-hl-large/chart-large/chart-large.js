import React from 'react'

import './chart-large.css'

export default function ChartLarge(props) {
  return (
    <div className="chart-large">
      <div className="chart-lg-area">
        <div className="chart-lg-left">
          {props.art != null && (
            <img className="chart-lg-img" alt="Chart Art" src={props.art} />
          )}

          <span className="chart-lg-main">
            <div className="chart-lg-info">
              {props.title != null && (
                <div className="chart-lg-info-title">{props.title}</div>
              )}

              {props.subtitle != null && (
                <div className="chart-lg-info-subtitle">{props.subtitle}</div>
              )}
            </div>

            <button className="chart-lg-options">
              <i className="chart-lg-icon-plus fas fa-plus fa-sm" />
              Options
            </button>
          </span>
        </div>

        <div className="chart-lg-right">
          <div>
            {props.stat != null && (
              <div className="chart-lg-stat">
                {props.up === true && (
                  <i className="chart-lg-icon-up fas fa-arrow-up" />
                )}

                {props.down === true && (
                  <i className="chart-lg-icon-down fas fa-arrow-down" />
                )}

                {props.stat}
              </div>
            )}

            {props.substat != null && (
              <div className="chart-lg-substat">{props.substat}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
