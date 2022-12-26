//libraries
import React from 'react'

//icons
import Sun_icon from '../../../icons/Sun_icon'
import Sells_icon from '../../../icons/Sells_icon'
import Timer_icon from '../../../icons/Timer_icon'
import CurrentSells_icon from '../../../icons/CurrentSells_icon'

const detailsOrder = [
  {
    id: 1,
    label: 'فروش دیروز',
    icon: <Timer_icon />,
    value: '۲۷۹٬۳۴۵٬۳۴۰',
    color: '#F9F9F9',
  },
  {
    id: 2,
    label: 'فروش امروز',
    icon: <Sun_icon />,
    value: '۷٬۲۳۷٬۰۰۰',
    color: '#F9F9F9',
  },
  {
    id: 3,
    label: 'فروش هفته جاری',
    icon: <Sells_icon />,
    value: '۹۱٬۴۵۷٬۰۰۰',
    color: '#F9F9F9',
  },
  {
    id: 4,
    label: 'فروش ماه جاری',
    icon: <CurrentSells_icon />,
    value: '۲۷۹٬۳۴۵٬۳۴۰',
    color: '#F9F9F9',
  },
]

function SummerySells() {
  return (
    <div className="w-1/2 flex flex-col items-start  rounded-[10px] ">
      <article className="grid-cols-2 grid gap-[16px] items-center w-full justify-between">
        {detailsOrder.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center max-[138px] gap-[2px] bg-white py-[16px] px-[24px] rounded-[10px] shadow-sm"
          >
            <div className="flex flex-row items-center gap-[10px] w-full justify-start">
              <div
                style={{ backgroundColor: `${item.color}` }}
                className="flex justify-center items-center w-[40px] h-[40px] rounded-[15px] "
              >
                {item.icon}
              </div>
              <div className="text-[#505050] text-[18px]">{item.label}</div>
            </div>
            <div className="text-[#505050] text-[18px] font-semibold flex flex-row items-center gap-[3px] w-full justify-end">
              <span> {item.value}</span>
              <span className="text-[14px] font-normal">تومان</span>
            </div>
          </div>
        ))}
      </article>
    </div>
  )
}

export default SummerySells
