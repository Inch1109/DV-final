import { useState } from 'react'

import Star from '@/components/product/star/star'
import ProductRecommond from '@/components/product/detail/product-recommond'
import Link from 'next/link'

export default function Switch({
  imgDetails,
  id,
  category,
  detail,
  rating,
  setRating,
}) {
  const [isSwitchOn, setIsSwitchOn] = useState(false)

  const handleSwitchToggle = () => {
    setIsSwitchOn(!isSwitchOn)
  }
  return (
    <div className="mt-4">
      {/* 轉換按鈕 -- 商品介紹/評價 */}
      <div className="form-check form-switch d-flex justify-content-end">
        <div className="switch text-center m-2">
          <input
            className="switch-checkbox"
            id="switchID1"
            type="checkbox"
            name="switch-checkbox"
            checked={isSwitchOn}
            onChange={handleSwitchToggle}
          />
          <label className="switch-label" for="switchID1">
            <span className="switch-txt" turnOn="評價" turnOff="細節"></span>
            <span className="switch-Round-btn"></span>
          </label>
        </div>
        {/* <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          checked={isSwitchOn}
          onChange={handleSwitchToggle}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {isSwitchOn ? '評價' : '細節'}
        </label> */}
      </div>
      {isSwitchOn && (
        <div>
          {/* 顯示顧客評價 */}
          <h3 className="text-center my-2">顧客評價</h3>
          <div className="container">
            <form>
              <div className="form-group">
                <label className="mx-2" for="exampleFormControlTextarea1">
                  來為 --- 評價吧～
                </label>
                <Star rating={rating} setRating={setRating} />
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="請撰寫評價"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary d-flex btn-comment"
              >
                送出評價
              </button>
            </form>
          </div>

          {/* 用戶評價 */}
          <div className="containermt-5 d-flex align-items-center justify-content-center">
            <div className="mt-2">
              <div className="d-flex justify-content-between align-items-center mt-3">
                <div className="avatar d-none d-sm-block">
                  <img src="/images/product/test/20/1-1.webp" alt="..." />
                </div>
                <div className="content">
                  <h6>安妮雅 2024/01/01</h6>
                  <Star rating={rating} setRating={setRating} />
                  <p>
                    若沒有潛水的存在，那麼後果可想而知。亦舒曾經說過，人生短短數十載，最要緊的是滿足自己，不是討好他人。這影響了我的價值觀。
                  </p>
                </div>
              </div>

              <hr />
              <button
                type="submit"
                className="btn btn-primary d-flex btn-comment"
              >
                更多評價
              </button>
            </div>
          </div>
        </div>
      )}
      {!isSwitchOn && (
        <div>
          {/* 顯示商品細節 */}
          <h3 className="text-center my-2">商品介紹</h3>

          {/* 商品介紹 */}
          <div className="row mt-2 mx-2 my-5">
            <div className="col-sm-12">
              <p className="text-center my-3 font-weight-light">
                <p
                  className="p-3"
                  dangerouslySetInnerHTML={{
                    __html: detail.replace(/\n/g, '<br>'),
                  }}
                ></p>
              </p>
              <div className="img-container">
                {imgDetails.map((imgDetail) => {
                  return (
                    <div key={imgDetail}>
                      <div className="p-2 my-3 custom-image-container">
                        <img
                          className="my-2"
                          src={`/images/product/images/${category}/${id}/${imgDetail}`}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
      <br />
      <br />
      <style>{`    
      .form-check-input{
        width: 40px;
        height:20px;
      }
      .btn-comment {
          background-color: #265475;
          margin: 18px auto;
          border-radius: 100px;
          padding: 10px 20px;
        }
      .custom-image-container {
          margin: 0 auto;
          max-width: 600px;
          max-height: 480px;
        }
        .custom-image-container img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .content {
          height: 80px;
        }
        .avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          margin: 15px;
        }
        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .switch {
          /*設定開關鈕的長寬*/
          position: relative;
          width: 79px;
          height: 30px;
          line-height: 30px;
        }
        .switch-checkbox {
          position: absolute;
          display: none;
        }
        .switch-label {
          display: block;
          overflow: hidden;
          cursor: pointer;
          border-radius: 20px;
        }
        .switch-txt {
          display: block;
          width: 200%;
          margin-left: -100%;
          transition: margin 0.3s ease-in 0s;
        }
        .switch-txt::before,
        .switch-txt::after {
          display: block;
          float: right;
          width: 50%;
          font-size: 13px;
          color: #fff;
          font-weight: bold;
          box-sizing: border-box;
        }
        /*開關鈕底色(開啟時)*/
        .switch-txt::after {
          content: attr(turnOn);
          padding-left: 19px;
          background: #265475;
          color: #fff;
          text-align: left;
        }
        /*開關鈕底色(關閉時)*/
        .switch-txt::before {
          content: attr(turnOff);
          padding-right: 19px;
          background: #265475;
          color: #fff;
          text-align: right;
        }
        /*開關鈕的顏色與大小*/
        .switch-Round-btn {
          position: absolute;
          display: block;
          width: 18px;
          height: 18px;
          margin: 6px 5px;
          background: #fff;
          top: 0;
          bottom: 0;
          right: 50px;
          border-radius: 15px;
          transition: all 0.3s ease-in 0s;
        }
        .switch-checkbox:checked + .switch-label .switch-txt {
          margin-left: 0;
        }
        .switch-checkbox:checked + .switch-label .switch-Round-btn {
          right: 0;
        }
      `}</style>
    </div>
  )
}
