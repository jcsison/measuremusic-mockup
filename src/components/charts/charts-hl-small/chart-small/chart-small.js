import React from 'react'
import { Tooltip } from 'react-tippy'

import ChartsOptions from '../../charts-options'

import './chart-small.css'

export default function ChartSmall(props) {
  return (
    <div className="chart-small">
      <div className="chart-sm-area">
        <div className="chart-sm-left">
          {props.art != null && (
            <img className="chart-sm-img" alt="Chart Art" src={props.art} />
          )}

          <span className="chart-sm-main">
            <div className="chart-sm-info">
              {props.title != null && (
                <div className="chart-sm-info-title">{props.title}</div>
              )}

              {props.subtitle != null && (
                <div className="chart-sm-info-subtitle">{props.subtitle}</div>
              )}
            </div>

            <Tooltip
              animation="shift"
              html={<ChartsOptions />}
              position="bottom-start"
              trigger="click"
            >
              <button className="chart-sm-options">
                <i className="chart-sm-icon-plus fas fa-plus fa-sm" />
              </button>
            </Tooltip>
          </span>
        </div>

        <div className="chart-sm-right">
          <div>
            {props.stat != null && (
              <div className="chart-sm-stat">
                {props.up === true && (
                  <i className="chart-sm-icon-up fas fa-arrow-up" />
                )}

                {props.down === true && (
                  <i className="chart-sm-icon-down fas fa-arrow-down" />
                )}

                {props.stat}
              </div>
            )}

            {props.substat != null && (
              <div className="chart-sm-substat">{props.substat}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
