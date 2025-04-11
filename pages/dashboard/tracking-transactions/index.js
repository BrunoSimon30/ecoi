import Dashboardlayout from "@/components/Layout/Dashboardlayout";
import { HiOutlineUser } from "react-icons/hi2";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { MdOutlineArrowForward } from "react-icons/md";
import Popup from "@/components/Popup";
import FundTableLayout from "@/components/Table/FundTable";

export default function TrackingTransactions() {
  const [isDistributePopupOpen, setDistributePopupOpen] = useState(false);

  const openDistributePopup = () => setDistributePopupOpen(true);

  const openApplyPopup = () => {
    setDistributePopupOpen(false);
  };

  return (
    <Dashboardlayout heading={"Tracking Management"}>
      <div className="fund-wrap space-y-6">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">
            <div className="fund-top flex gap-6">
              {/* Total Funds Card */}
              <div className="w-full border border-gray-200 py-4 px-6 rounded-2xl space-y-6">
                <div className="flex gap-6">
                  <div className="flex items-center gap-4">
                    <span className="w-12 h-12 rounded-full bg-[#D1E7D1] text-2xl flex items-center justify-center">
                      <HiOutlineUser />
                    </span>
                    <h3 className="text-black text-xl">Total Transaction</h3>
                  </div>
                  
                </div>
                <div className="flex gap-6 items-center">
                  <h3 className="text-black text-3xl font-semibold">$10,000</h3>
                  <div className="w-full">
                  <button className="flex border border-gray-200 px-4 py-2 items-center gap-4 rounded-full bg-gray-300 text-gray-700">
                  22% than the last month
                    </button>
                  </div>
                </div>
              </div>

              {/* Distribution Card */}
              <div className="w-full border border-gray-200 py-4 px-6 rounded-2xl space-y-6">
                <div className="flex gap-6">
                  <div className="flex items-center gap-4">
                    <span className="w-12 h-12 rounded-full bg-[#D1E7D1] text-2xl flex items-center justify-center">
                      <HiOutlineUser />
                    </span>
                    <h3 className="text-black text-xl">Total Donate Per Person</h3>
                  </div>
                </div>
                <div className="flex gap-6 items-center">
                  <h3 className="text-black text-3xl font-semibold">$2,000</h3>
                  <div className="w-full">
                    <button className="flex border border-gray-200 px-4 py-2 items-center gap-4 rounded-full bg-gray-300 text-gray-700">
                      5 Per Person
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <FundTableLayout />
          </div>
          <div className="track-rigth space-y-8">
          <div className="w-full border border-gray-200 py-4 px-6 rounded-2xl space-y-6">
          <div className="tran-top space-y-10">
          <div className="flex justify-between items-center">
          <h3 className="text-black text-xl">Transaction</h3>
          <button className="bg-[#FAD89C] rounded-full px-4 py-2">Monthly</button>
          </div>
          <button onClick={openDistributePopup} className="w-full  border border-gray-200 rounded-full px-4 py-2 text-[#0069FF]">Total Transaction</button>
          <div className="space-y-2">
          <h3 className="text-black text-3xl font-semibold">$10,000</h3>
          <p className="text-base text-gray-500">This month day sale volume is 16% <br/>large than last month.</p>
          </div>
          </div>

          </div>
          <div className="w-full border border-gray-200 py-4 px-6 rounded-2xl space-y-6">
          <div className="tran-top space-y-10">
          <div className=" ">
          <h3 className="text-black text-xl">Transaction View</h3>
          
          </div>
          
          </div>

          </div>

          </div>
        </div>
      </div>

      {/* Popups */}
      <Popup
        isOpen={isDistributePopupOpen}
        onClose={() => setDistributePopupOpen(false)}
        widthClass="w-120"
      >
        <div className="space-y-4 py-5">
          <div className="text-center">
            <h1 className="text-xl font-semibold">
              Emergency Fund Period Ended
            </h1>
            <p className="text-[15px] text-gray-500">
              Your 3-month emergency fund has ended. You can provide feedback or
              apply for another fund.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={openApplyPopup}
              className="w-full  border border-gray-200 px-4 py-2   gap-4 rounded-full bg-[#5B9425] text-white text-center"
            >
              Apply Another Fund
            </button>
            <button
              onClick={openApplyPopup}
              className="w-full     px-4 py-2   gap-4 rounded-full border border-[#5B9425] text-black text-center"
            >
              Provide Feedback
            </button>
          </div>
        </div>
      </Popup>
    </Dashboardlayout>
  );
}
