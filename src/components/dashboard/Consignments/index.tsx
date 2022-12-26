import React, { useState } from 'react'
import DeliverConsignments from './DeliverConsignments'
import SendConsignments from './SendConsignments'

const tabList = [
  { id: 1, label: 'کالاهای ارسالی' },
  { id: 2, label: '  کالاهای دریافتی' },
]

function Consignments() {
  const [selectedTab, setSelectedTab] = useState(1)
  return (
    <article className="w-full  bg-white rounded-[10px] flex flex-col items-center p-[24px] h-[500px] section shadow-sm">
      <div className="w-full h-[48px] flex flex-row items-center gap-[1px]   z-20">
        {tabList.map((tab) => (
          <div
            onClick={() => {
              setSelectedTab(tab.id)
            }}
            className={` px-[10px] rounded-t-[10px] h-full w-[176px] flex justify-center items-center font-semibold relative cursor-pointer border-t border-l border-r ${
              selectedTab == tab.id
                ? '   bg-white  text-[#E10A0A]'
                : 'text-[#505050] bg-[#E1E1E1] '
            }`}
          >
            <span className="z-10"> {tab.label}</span>
          </div>
        ))}
      </div>
      <div className="w-full h-full -mt-[1px]">
        {selectedTab == 1 && <SendConsignments />}
        {selectedTab == 2 && <DeliverConsignments />}
      </div>
    </article>
  )
}

export default Consignments
