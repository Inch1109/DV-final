import React from 'react'
import Head from 'next/head'
import Menu from '@/components/dashboard/menu'
import Form from '@/components/dashboard/form/coupons'

export default function Coupons() {
  return (
    <>
      <Head>
        <title>優惠券</title>
      </Head>
      <Menu />
      <Form />
    </>
  )
}
