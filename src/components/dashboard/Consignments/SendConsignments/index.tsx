import React from 'react'

const listShipments = [
  {
    id: 1,
    labelOne: 'DG-100548',
    labelTwo: '1020304050',
    labelThree: ' گوشی موبایل سامسونگ',
    labelFour: 'آبی',
    labelFive: 'طنین',
    labelSix: '1',
    labelSeven: '1401/8/12 | 14:00',
    labeleEight: 'دی‌جی‌لند چارسو',
  },
  {
    id: 1,
    labelOne: 'DG-100548',
    labelTwo: '1020304050',
    labelThree: ' گوشی موبایل سامسونگ',
    labelFour: 'آبی',
    labelFive: 'طنین',
    labelSix: '1',
    labelSeven: '1401/8/12 | 14:00',
    labeleEight: 'دی‌جی‌لند چارسو',
  },
  {
    id: 1,
    labelOne: 'DG-100548',
    labelTwo: '1020304050',
    labelThree: ' گوشی موبایل سامسونگ',
    labelFour: 'آبی',
    labelFive: 'طنین',
    labelSix: '1',
    labelSeven: '1401/8/12 | 14:00',
    labeleEight: 'دی‌جی‌لند چارسو',
  },
  {
    id: 1,
    labelOne: 'DG-100548',
    labelTwo: '1020304050',
    labelThree: ' گوشی موبایل سامسونگ',
    labelFour: 'آبی',
    labelFive: 'طنین',
    labelSix: '1',
    labelSeven: '1401/8/12 | 14:00',
    labeleEight: 'دی‌جی‌لند چارسو',
  },
  {
    id: 1,
    labelOne: 'DG-100548',
    labelTwo: '1020304050',
    labelThree: ' گوشی موبایل سامسونگ',
    labelFour: 'آبی',
    labelFive: 'طنین',
    labelSix: '1',
    labelSeven: '1401/8/12 | 14:00',
    labeleEight: 'دی‌جی‌لند چارسو',
  },
  {
    id: 1,
    labelOne: 'DG-100548',
    labelTwo: '1020304050',
    labelThree: ' گوشی موبایل سامسونگ',
    labelFour: 'آبی',
    labelFive: 'طنین',
    labelSix: '1',
    labelSeven: '1401/8/12 | 14:00',
    labeleEight: 'دی‌جی‌لند چارسو',
  },
  {
    id: 1,
    labelOne: 'DG-100548',
    labelTwo: '1020304050',
    labelThree: ' گوشی موبایل سامسونگ',
    labelFour: 'آبی',
    labelFive: 'طنین',
    labelSix: '1',
    labelSeven: '1401/8/12 | 14:00',
    labeleEight: 'دی‌جی‌لند چارسو',
  },
  {
    id: 1,
    labelOne: 'DG-100548',
    labelTwo: '1020304050',
    labelThree: ' گوشی موبایل سامسونگ',
    labelFour: 'آبی',
    labelFive: 'طنین',
    labelSix: '1',
    labelSeven: '1401/8/12 | 14:00',
    labeleEight: 'دی‌جی‌لند چارسو',
  },
  {
    id: 1,
    labelOne: 'DG-100548',
    labelTwo: '1020304050',
    labelThree: ' گوشی موبایل سامسونگ',
    labelFour: 'آبی',
    labelFive: 'طنین',
    labelSix: '1',
    labelSeven: '1401/8/12 | 14:00',
    labeleEight: 'دی‌جی‌لند چارسو',
  },
  {
    id: 1,
    labelOne: 'DG-100548',
    labelTwo: '1020304050',
    labelThree: ' گوشی موبایل سامسونگ',
    labelFour: 'آبی',
    labelFive: 'طنین',
    labelSix: '1',
    labelSeven: '1401/8/12 | 14:00',
    labeleEight: 'دی‌جی‌لند چارسو',
  },
]
function SendConsignments() {
  return (
    <article className="w-full  bg-white rounded-[10px] flex flex-col items-center h-[400px] section">
      {/* <div className="w-full text-[#505050] text-[18px] font-semibold">
        محموله‌های ارسالی
      </div> */}
      <div className="w-full  overflow-auto section">
        <table className="table-auto w-full border-separate  first:border-spacing-y-0 border-spacing-y-1  ">
          <thead className="header-fixed border-0 ">
            <tr className=" h-[48px] text-[#888888] text-[14px]  border-spacing-y-0">
              <th className="border-t border-b border-r h-[48px] rounded-br-[10px]">
                شناسه سفارش
              </th>
              <th className="border-t border-b">کد سیستمی</th>
              <th className="border-t border-b">نام محصول</th>
              <th className="border-t border-b"> رنگ</th>
              <th className="border-t border-b"> گارانتی</th>
              <th className="border-t border-b"> تعداد</th>
              <th className="border-t border-b"> زمان ثبت</th>
              <th className="border-t border-b">دریافت کننده</th>

              <th className="border-t border-b border-l rounded-l-[10px]"></th>
            </tr>
          </thead>
          <tbody className="">
            {listShipments.map((item, index) => (
              <tr
                key={index}
                className="h-[48px] bg-[#F9F9F9] text-[#505050] text-center "
              >
                <td className="rounded-r-[10px] border-t border-b border-r border-white">
                  {item.labelOne}
                </td>
                <td className="border-t border-b border-white">
                  {item.labelTwo}
                </td>
                <td className="border-t border-b border-white">
                  {item.labelThree}
                </td>
                <td className="border-t border-b border-white">
                  {item.labelFour}
                </td>
                <td className="border-t border-b border-white">
                  {item.labelFive}
                </td>
                <td className="border-t border-b border-white">
                  {item.labelSix}
                </td>
                <td className="border-t border-b border-white">
                  {item.labelSeven}
                </td>

                <td className="border-t border-b border-white">
                  {item.labeleEight}
                </td>
                <td className="rounded-l-[10px] w-[76px] px-[10px] border-t border-b  border-l border-white">
                  <div className="w-[76px] h-[35px] rounded-[10px] bg-white text-[#0085FF] text-[14px] flex justify-center items-center cursor-pointer">
                    عملیات
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

export default SendConsignments
