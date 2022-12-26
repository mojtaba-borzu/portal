//libraries
import React, { useState } from 'react'

//icons
import Plus_icon from '../../../icons/Plus_icon'
import Minimize_icon from '../../../icons/Minimize_icon'

const listShipments = [
  {
    id: 1,
    labelOne: 'DG-100548',
    labelTwo: 'زهره رحیمی',
    labelThree: '50,000,000',
    labelFour: '1401/8/12 | 14:00',
    labelFive: '1401/8/12 | 14:00',
    labelSix: 'ارسال شده',
    children: [
      {
        id: 1,
        labelOne: 'گوشی موبایل سامسونگ مدل Galaxy A13 SM-A135F/DS دو سیم ...',
        labelTwo: ' دی‌جی‌لند سعادت‌آباد',
        labelThree: '50,000,000',
        labelFour: '100',
        labelFive: '33,333,333',
        labelSix: ' 59847',
        labelSeven: ' 8546835',
      },
    ],
  },
  {
    id: 2,
    labelOne: 'DG-100548',
    labelTwo: 'زهره رحیمی',
    labelThree: '50,000,000',
    labelFour: '1401/8/12 | 14:00',
    labelFive: '1401/8/12 | 14:00',
    labelSix: 'ارسال شده',
    children: [
      {
        id: 1,
        labelOne: 'گوشی موبایل سامسونگ مدل Galaxy A13 SM-A135F/DS دو سیم ...',
        labelTwo: ' دی‌جی‌لند سعادت‌آباد',
        labelThree: '50,000,000',
        labelFour: '100',
        labelFive: '33,333,333',
        labelSix: ' 59847',
        labelSeven: ' 8546835',
      },
    ],
  },
  {
    id: 3,
    labelOne: 'DG-100548',
    labelTwo: 'زهره رحیمی',
    labelThree: '50,000,000',
    labelFour: '1401/8/12 | 14:00',
    labelFive: '1401/8/12 | 14:00',
    labelSix: 'ارسال شده',
    children: [
      {
        id: 1,
        labelOne: 'گوشی موبایل سامسونگ مدل Galaxy A13 SM-A135F/DS دو سیم ...',
        labelTwo: ' دی‌جی‌لند سعادت‌آباد',
        labelThree: '50,000,000',
        labelFour: '100',
        labelFive: '33,333,333',
        labelSix: ' 59847',
        labelSeven: ' 8546835',
      },
    ],
  },
  {
    id: 4,
    labelOne: 'DG-100548',
    labelTwo: 'زهره رحیمی',
    labelThree: '50,000,000',
    labelFour: '1401/8/12 | 14:00',
    labelFive: '1401/8/12 | 14:00',
    labelSix: 'ارسال شده',
    children: [
      {
        id: 1,
        labelOne: 'گوشی موبایل سامسونگ مدل Galaxy A13 SM-A135F/DS دو سیم ...',
        labelTwo: ' دی‌جی‌لند سعادت‌آباد',
        labelThree: '50,000,000',
        labelFour: '100',
        labelFive: '33,333,333',
        labelSix: ' 59847',
        labelSeven: ' 8546835',
      },
    ],
  },
  {
    id: 5,
    labelOne: 'DG-100548',
    labelTwo: 'زهره رحیمی',
    labelThree: '50,000,000',
    labelFour: '1401/8/12 | 14:00',
    labelFive: '1401/8/12 | 14:00',
    labelSix: 'ارسال شده',
    children: [
      {
        id: 1,
        labelOne: 'گوشی موبایل سامسونگ مدل Galaxy A13 SM-A135F/DS دو سیم ...',
        labelTwo: ' دی‌جی‌لند سعادت‌آباد',
        labelThree: '50,000,000',
        labelFour: '100',
        labelFive: '33,333,333',
        labelSix: ' 59847',
        labelSeven: ' 8546835',
      },
    ],
  },
  {
    id: 6,
    labelOne: 'DG-100548',
    labelTwo: 'زهره رحیمی',
    labelThree: '50,000,000',
    labelFour: '1401/8/12 | 14:00',
    labelFive: '1401/8/12 | 14:00',
    labelSix: 'ارسال شده',
    children: [
      {
        id: 1,
        labelOne: 'گوشی موبایل سامسونگ مدل Galaxy A13 SM-A135F/DS دو سیم ...',
        labelTwo: ' دی‌جی‌لند سعادت‌آباد',
        labelThree: '50,000,000',
        labelFour: '100',
        labelFive: '33,333,333',
        labelSix: ' 59847',
        labelSeven: ' 8546835',
      },
    ],
  },
  {
    id: 7,
    labelOne: 'DG-100548',
    labelTwo: 'زهره رحیمی',
    labelThree: '50,000,000',
    labelFour: '1401/8/12 | 14:00',
    labelFive: '1401/8/12 | 14:00',
    labelSix: 'ارسال شده',
    children: [
      {
        id: 1,
        labelOne: 'گوشی موبایل سامسونگ مدل Galaxy A13 SM-A135F/DS دو سیم ...',
        labelTwo: ' دی‌جی‌لند سعادت‌آباد',
        labelThree: '50,000,000',
        labelFour: '100',
        labelFive: '33,333,333',
        labelSix: ' 59847',
        labelSeven: ' 8546835',
      },
    ],
  },
  {
    id: 8,
    labelOne: 'DG-100548',
    labelTwo: 'زهره رحیمی',
    labelThree: '50,000,000',
    labelFour: '1401/8/12 | 14:00',
    labelFive: '1401/8/12 | 14:00',
    labelSix: 'ارسال شده',
    children: [
      {
        id: 1,
        labelOne: 'گوشی موبایل سامسونگ مدل Galaxy A13 SM-A135F/DS دو سیم ...',
        labelTwo: ' دی‌جی‌لند سعادت‌آباد',
        labelThree: '50,000,000',
        labelFour: '100',
        labelFive: '33,333,333',
        labelSix: ' 59847',
        labelSeven: ' 8546835',
      },
    ],
  },
]

function InPersonDelivery() {
  const [showChildStatus, setShowChildStatus] = useState(0)
  return (
    <article className="w-full  bg-white rounded-[10px] flex flex-col items-center p-[20px] max-h-[360px] section shadow-sm">
      <div className="w-full text-[#505050] text-[18px] font-semibold">
        تحویل‌های حضوری
      </div>
      <div className="w-full mt-[16px] overflow-auto section">
        <table className="table-auto w-full border-separate">
          <thead className="header-fixed ">
            <tr className=" h-[48px] text-[#888888] text-[14px] ">
              <th className="border-t border-b border-r h-[48px] rounded-r-[10px]"></th>
              <th className="border-t border-b"> شناسه سفارش</th>
              <th className="border-t border-b"> نام مشتری</th>
              <th className="border-t border-b"> مبلغ کل</th>
              <th className="border-t border-b"> زمان سفارش</th>
              <th className="border-t border-b"> زمان آخرین تغییر</th>
              <th className="border-t border-b"> وضعیت</th>
              <th className="border-t border-b border-l rounded-l-[10px]"></th>
            </tr>
          </thead>
          <tbody className="">
            {listShipments.map((item, index) => (
              <tr
                key={index}
                className="h-[48px] bg-[#F9F9F9] text-[#505050] text-center "
              >
                <td className="rounded-r-[10px]">
                  <div className="w-full flex justify-center items-center">
                    <div
                      onClick={() => {
                        if (showChildStatus) {
                          setShowChildStatus(0)
                        } else {
                          setShowChildStatus(item.id)
                        }
                      }}
                      className="w-[32px] h-[32px] rounded-[4px] bg-white flex justify-center items-center cursor-pointer"
                    >
                      {showChildStatus == item.id ? (
                        <Minimize_icon />
                      ) : (
                        <Plus_icon />
                      )}
                    </div>
                  </div>
                </td>
                <td>{item.labelOne}</td>
                <td>{item.labelTwo}</td>
                <td>{item.labelThree}</td>
                <td>{item.labelFour}</td>
                <td>{item.labelFive}</td>
                <td>
                  <div className="w-full h-full flex justify-center items-center">
                    <div className="px-[5px] w-[106px] h-[30px] rounded-[4px] text-[#27AE60] bg-[#EAF7F0] flex justify-center items-center">
                      {item.labelSix}
                    </div>
                  </div>
                </td>
                <td className="rounded-r-[10px] w-[76px] px-[10px]">
                  <div className="w-[126px] h-[40px] rounded-[10px] bg-white text-[#0085FF] text-[14px] flex justify-center items-center cursor-pointer">
                    مشاهده سفارش
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  )
}

export default InPersonDelivery
