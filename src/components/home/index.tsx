import Image from 'next/image'
import React from 'react'

function Home() {
  return (
    <div className="w-full h-full  flex justify-center items-center select-none">
      <div className="h-[405px] w-[905px] relative flex justify-end items-end mt-[200px]">
        <div className="w-full h-full  z-10 relative  shadow-sm rounded-[46px]">
          <div className="w-[133px] h-[133px] absolute z-20 -mt-[50px] -mr-[50px]">
            <Image
              width={133}
              height={133}
              src="/images/frontBall.png"
              alt="logo"
              className=" absolute"
            />
          </div>

          <div className=" w-full h-full absolute bg-white opacity-10 rounded-[46px] flex flex-row justify-center items-start ">
            <div className="w-[127px] h-[127px]  flex justify-center rounded-tl-[0px]  bg-red-700 z-20 -mt-[px] -ml-[2px]  rounded-full">
              <div className="w-[130px] h-[130px]  flex justify-center   z-20 bg-white rounded-[35px]"></div>
            </div>

            <div className="w-[127px] h-[127px]  flex justify-center   z-20 -mt-[50px] bg-red-700 rounded-full"></div>
            <div className="w-[127px] h-[127px]  flex justify-center rounded-tr-[0px]  bg-red-700 z-20 -mt-[px] -mr-[2px]  rounded-full">
              <div className="w-[130px] h-[130px]  flex justify-center   z-20 bg-white rounded-[35px]"></div>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-start">
            <div className="w-[147px] h-[147px]  flex justify-center items-center absolute z-20 -mt-[60px]">
              <Image
                width={137}
                height={137}
                src="/images/logoDgland.png"
                alt="logo"
                quality={100}
                className=" absolute"
              />
            </div>
            <div className="w-full flex flex-col items-center  px-[40px]">
              <div className="w-full mt-[75px] text-[40px] font-extrabold text-white text-center">
                فروش آنلاین بیست و چهار ساعته در پرتال فروشگاه‌های زنجیره‌ای
                دی‌جی‌لند
              </div>
              <div className="w-full mt-[14px] text-[20px] text-white text-center">
                با استفاده از پرتال شعب در فروشگاه اینترنتی دی‌جی‌لند، شما
                می‌توانید کالاهای موجود در شعبه خود را در تمامی ایران به‌فروش
                برسانید. به این ترتیب علاوه بر افزایش سرعت فروش، این فرصت را
                خواهید داشت تا با امکان دریافت کالا به‌صورت حضوری توسط مشتری و
                تعامل با آن، میزان فروش خود را بالاتر برده و از رقبا پیشی
                بگیرید.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[179px] h-[179px] absolute pt-[50px]">
          <Image
            width={179}
            height={179}
            src="/images/backBall.png"
            alt="logo"
            className="blur-sm absolute"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
