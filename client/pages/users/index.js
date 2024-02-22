import React from 'react'
import Head from 'next/head'
import Login from './login'

export default function Users() {
  return (
    <>
      {/* 登入頁面 */}
      <Head>
        <title>會員登入</title>
      </Head>
      <Login />
    </>
  )
}
