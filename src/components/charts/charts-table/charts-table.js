import React from 'react'
import { Tooltip } from 'react-tippy'

import ChartsTableTerms from './charts-table-terms'
import Table from './table'

import tableData from './objects/table-data.json'

import './charts-table.css'

export default function ChartsTable(props) {
  const columns = React.useMemo(
    () => [
      {
        Header: 'TW',
        accessor: 'tw',
        collapse: true,
        Cell: e => (
          <div className="table-tw-cell">
            <div
              className={
                e.cell.row.id === '1' ||
                e.cell.row.id === '2' ||
                e.cell.row.id === '5' ||
                e.cell.row.id === '6' ||
                e.cell.row.id === '7'
                  ? 'table-bubble'
                  : ''
              }
            >
              {e.cell.value}
            </div>
          </div>
        )
      },
      {
        Header: 'LW',
        accessor: 'lw',
        collapse: true
      },
      {
        Header: 'Weeks On',
        accessor: 'weeks',
        collapse: true
      },
      {
        Header: 'Artist',
        accessor: 'artist',
        Cell: e => (
          <a className="table-link" href="/#">
            {e.cell.value}
            <i className="fas fa-arrow-right table-link-arrow" />
          </a>
        )
      },
      {
        Header: 'Title',
        accessor: 'title',
        Cell: e => (
          <a className="table-link" href="/#">
            {e.cell.value}
            <i className="fas fa-arrow-right table-link-arrow" />
          </a>
        )
      },
      {
        Header: 'Stations On',
        accessor: 'stations',
        collapse: true
      },
      {
        Header: 'Spins',
        accessor: 'spins',
        collapse: true
      },
      {
        Header: '+/-',
        accessor: 'change',
        collapse: true
      }
    ],
    []
  )

  const data = React.useMemo(() => tableData, [])

  return (
    <div className="charts-table">
      <div className="charts-tbl-term-label">
        <Tooltip
          animation="shift"
          html={<ChartsTableTerms />}
          position="bottom-end"
          trigger="mouseenter"
        >
          <i className="charts-tbl-question fas fa-question-circle" />
          Chart Terminology Definitions
        </Tooltip>
      </div>

      <Table columns={columns} data={data} />
    </div>
  )
}
