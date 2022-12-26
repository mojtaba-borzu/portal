//libraries
import Image from 'next/image'
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'

//styles
import 'react-toastify/dist/ReactToastify.css'

//oath

//components
import ErrorPage from '../components/auth/error/ErrorPage'

//icons
import Account_icon from '../icons/Account_icon'

//RTK slice
import {
  setAccessToken,
  selectAccessToken,
  selectShowErrorPage,
} from '../slices/commonSlice'
import { ToastContainer } from 'react-toastify'

//RTK stores
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { useRouter } from 'next/router'

//oath dynamic import
const Authsso = dynamic(() => import('../components/auth/Authsso'), {
  ssr: false,
})

const AppContextFc = dynamic(() => import('../components/auth/AppContextFc'), {
  ssr: false,
})

//list menu
const menuNameList = [
  { id: 1, label: 'داشبورد', link: '/dashboard' },
  { id: 2, label: '  فاکتورها', link: '/d' },
  { id: 3, label: 'محموله‌ها', link: '/f' },
]

function PrimaryLayout({ children }) {
  //instance
  const dispatch = useAppDispatch()
  const router = useRouter()

  //states
  const [token, setToken] = useState('')

  //selectors
  const accessToken = useAppSelector(selectAccessToken)
  const showErrorPage = useAppSelector(selectShowErrorPage)

  useEffect(() => {
    setTimeout(() => {}, 8000)
    setToken(localStorage.getItem('access_token'))
    dispatch(setAccessToken(localStorage.getItem('access_token')))
  }, [])

  return (
    <div
      dir="rtl"
      className={`w-full  bg-main-linear-gradient font-mainFa  ${
        router.asPath == '/' ? 'overflow-hidden' : 'min-h-screen pb-[20px]'
      }`}
    >
      <div
        className={`w-full min-h-screen bg-main bg-no-repeat  bg-top  flex flex-col items-center ${
          router.asPath == '/' ? 'overflow-hidden' : 'min-h-screen'
        }`}
      >
        <div className="w-full h-[80px] flex justify-center">
          <div className="w-full h-full  mx-auto container flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-[10px]">
              <div className="w-[178px] h-[40px] ">
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={178}
                  height={40}
                />
              </div>
              <div className="text-[#F9F9F9] text-[20px] font-semibold">
                | پرتال شعب
              </div>
            </div>
            <div
              onClick={() => {
                router.asPath == '/' && router.push('/dashboard')
              }}
              className="h-[40px] rounded-[10px] relative flex justify-center items-center cursor-pointer hover:shadow-md duration-150"
            >
              <div className="absolute w-full h-full rounded-[10px] bg-white opacity-10"></div>
              <div className="w-full flex flex-row items-center gap-[10px] px-[10px]">
                <span>
                  <Account_icon />
                </span>
                {/* <span className="text-white text-[12px] font-semibold">
                  شعبه اندرزگو | زهره رحیمی
                </span> */}
                <span className="text-white text-[12px] font-semibold">
                  ورود به پرتال
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* {!accessToken && !token && <AppContextFc />}
        {!accessToken && !token && <Authsso />}
        {showErrorPage && <ErrorPage />} */}
        {/* {accessToken && !showErrorPage && ( */}
        <div className="w-full h-full flex flex-col items-center mx-auto container mt-[8px]">
          {router.asPath != '/' && (
            <div className="w-full h-[50px] flex flex-row items-center gap-[10px]">
              {menuNameList.map((menu) => (
                <div
                  className={` px-[10px] rounded-t-[10px] h-full flex justify-center items-center font-semibold relative cursor-pointer ${
                    router.asPath.split('/').at(-1) ===
                    menu.link.split('/').at(-1).toLocaleLowerCase()
                      ? 'text-[#505050] bg-white'
                      : 'text-white'
                  }`}
                >
                  <div
                    className={`w-full h-full rounded-t-[10px] bg-[#F9F9F9] absolute ${
                      router.asPath.split('/').at(-1) ===
                      menu.link.split('/').at(-1).toLocaleLowerCase()
                        ? 'opacity-100 '
                        : 'opacity-10'
                    }`}
                  ></div>
                  <span className="z-10"> {menu.label}</span>
                </div>
              ))}
            </div>
          )}
          <div className="w-full h-full  rounded-tl-[10px] rounded-b-[10px]">
            {children}
          </div>
        </div>
        {/* )} */}
        <ToastContainer limit={1} />
      </div>
    </div>
  )
}

export default PrimaryLayout
