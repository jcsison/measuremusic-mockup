import React from 'react'

import ChartsHeader from '../../components/charts/charts-header'
import ChartsHlLarge from '../../components/charts/charts-hl-large'
import ChartsHlSmall from '../../components/charts/charts-hl-small'
import ChartsTabbar from '../../components/charts/charts-tabbar'
import ChartsTable from '../../components/charts/charts-table'
import Divider from '../../components/shared/divider'
import Layout from '../../components/shared/layout'

export default function Hits50(props) {
  const content = (
    <div className="hits50">
      <ChartsHeader />
      <ChartsTabbar />
      <ChartsHlLarge />
      <Divider />
      <ChartsHlSmall />
      <ChartsTable />
    </div>
  )

  return <Layout content={content} />
}
