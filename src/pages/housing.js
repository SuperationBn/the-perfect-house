import React from 'react'
import SectionVviendas from '../components/cardViviendas/SectionVviendas'
import Layout from '../components/Layout'
import SubTitleViviendas from '../components/viviendasText/SubTitleViviendas'

export default function Housing() {
  return (
    <Layout>
      <SubTitleViviendas />
      <SectionVviendas />
    </Layout>
  )
}
