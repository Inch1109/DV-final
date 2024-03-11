import React from 'react'
import Link from 'next/link'

import CartStep from '@/components/cart/cart-step'
import { useRouter } from 'next/router'

const fetchData = async (url) => {
  try {
    const response = await fetch(url, { method: 'GET' })
    return await response.json()
  } catch (error) {
    console.error('An error occurred:', error)
    return null
  }
}

const [oData, pData, lData] = await Promise.all([
  fetchData('http://localhost:3005/api/order/'),
  fetchData('http://localhost:3005/api/order/product'),
  fetchData('http://localhost:3005/api/order/lesson'),
])

export default function Home() {
  const router = useRouter()
  const { orderId } = router.query

  let data = oData.filter((item) => {
    return item.order_id === orderId
  })

  let data2 = data.map((item) => {
    for (let i = 0; i < lData.length; i++) {
      if (item.lesson_id === lData[i].id) {
        item = {
          ...item,
          lessonName: lData[i].name,
          lessonPrice: lData[i].price,
        }
      }
    }
    for (let i = 0; i < pData.length; i++) {
      if (item.product_id === pData[i].id) {
        item = {
          ...item,
          productName: pData[i].name,
          productPrice: pData[i].price,
        }
      }
    }
    return item
  })

  let totalPrice = 0
  return (
    <div className="container">
      <CartStep step={3} />
      <div className="container">
        <div className="w-100 section-name text-center">
          <h5 className="span">訂單資訊</h5>
        </div>
        <div className="row">
          <p className="col fw-bold">訂單編號</p>
          <p className="col text-end">{orderId}</p>
        </div>
        <div className="row fw-bold">
          <p className="col-6">商品明細</p>
          <p className="col">數量</p>
          <p className="col  text-end">小計</p>
        </div>
        {data2.map((item, i) => {
          const { lessonName, lessonPrice, num, productName, productPrice } =
            item
          let price = (productPrice || lessonPrice) * num
          totalPrice += price
          return (
            <div className="row" key={i}>
              <p className="col-6 fw-bold">{productName || lessonName}</p>
              <p className="col">{num}</p>
              <p className="col text-end">NT${price}</p>
            </div>
          )
        })}
        {/* <div className="row">
          <p className="col-6 fw-bold">AB123 防寒衣 黑 / 女S</p>
          <p className="col">2</p>
          <p className="col text-end">NT$24000</p>
        </div> */}
        <hr />
        <div className="row">
          <p className="col fw-bold">合計</p>
          <p className="col fw-bold text-end">NT$ {totalPrice}</p>
        </div>
        <div className="text-end my-3">
          <Link href="../">
            <button type="button" className="btn next-step-btn text-white px-5">
              <h5 className="fw-bold py-1 px-3">返回商場</h5>
            </button>
          </Link>
        </div>
      </div>
      <style jsx>{`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin: 0;
        }

        .span {
          color: #013c64;
          font-weight: bold;
        }

        .row {
          margin-top: 1rem;
          margin-bottom: 1rem;
        }

        .section-name {
          background-color: #f5f5f5;
          padding-left: 0.5rem;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }

        .next-step-btn {
          background-color: #ff9720;
        }
      `}</style>
    </div>
  )
}