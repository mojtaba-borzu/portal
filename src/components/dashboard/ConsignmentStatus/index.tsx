//libraries
import React from 'react'

//icons
import Time_icon from '../../../icons/Time_icon'
import Send_icon from '../../../icons/Send_icon'
import Cancel_icon from '../../../icons/Cancel_icon'
import Deliver_icon from '../../../icons/Deliver_icon'
import Sends_icon from '../../../icons/StayTime_icon'
import StayTime_icon from '../../../icons/StayTime_icon'

const consignmentStatusList = [
  {
    id: 1,
    label: 'در انتظار دریافت',
    icon: <Time_icon />,
    value: '5',
    color: '#FEF6E9',
  },
  {
    id: 2,
    label: ' در انتظار ارسال',
    icon: <StayTime_icon />,
    value: '6',
    color: '#F3E4FF',
  },
  {
    id: 3,
    label: ' دریافت شده',
    icon: <Deliver_icon />,
    value: '9',
    color: '#E6F3FF',
  },
  {
    id: 4,
    label: 'ارسال شده',
    icon: <Send_icon />,
    value: '3',
    color: '#EAF7F0',
  },
]

function ConsignmentStatus() {
  return (
    <div className="w-1/2 flex flex-col items-start bg-white rounded-[10px] p-[20px] shadow-sm">
      <div className="text-[#505050] text-[18px]"> محموله ها </div>
      <article className="flex flex-row items-center w-full justify-between mt-[12px]">
        {consignmentStatusList.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center h-[138px] gap-[8px]">
              <div
                style={{ backgroundColor: `${item.color}` }}
                className="flex justify-center items-center w-[40px] h-[40px] rounded-[15px]"
              >
                {item.icon}
              </div>
              <div className="text-[#505050] text-[16px]">{item.label}</div>
              <div className="text-[#A4A4A4] text-[22px] font-semibold mt-[8px]">
                {item.value}
              </div>
            </div>
            {consignmentStatusList.length - 1 != index && (
              <div className="border-l border-dashed h-[124px]"></div>
            )}
          </React.Fragment>
        ))}
      </article>
    </div>
  )
}

export default ConsignmentStatus
