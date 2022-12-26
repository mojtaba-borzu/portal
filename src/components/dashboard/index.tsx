//libraries
import React from 'react'

//components
import SummerySells from './SummerySells'
import Consignments from './Consignments'
import InPersonDelivery from './InPersonDelivery'
import ConsignmentStatus from './ConsignmentStatus'

function Dashboard() {
  return (
    <main className="w-full flex flex-col items-center p-[32px] bg-[#F9F9F9] rounded-b-[16px] rounded-tl-[16px]">
      <section className="w-full flex flex-row items-center gap-[48px]">
        <SummerySells />
        <ConsignmentStatus />
      </section>
      <section className="w-full h-full mt-[32px]">
        <InPersonDelivery />
      </section>
      <section className="w-full h-full mt-[32px]">
        <Consignments />
      </section>
    </main>
  )
}

export default Dashboard
