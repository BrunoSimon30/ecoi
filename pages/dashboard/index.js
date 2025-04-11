import Dashboardlayout from "@/components/Layout/Dashboardlayout";
import { HiOutlineUser } from "react-icons/hi2";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { MdOutlineArrowForward } from "react-icons/md";
import Popup from "@/components/Popup";
import FundTableLayout from "@/components/Table/FundTable";

export default function FundDistributionPage() {
  const [isDistributePopupOpen, setDistributePopupOpen] = useState(false);
  const [isDistributefundOpen, setDistributefundOpen] = useState(false);
  const [isApplyPopupOpen, setApplyPopupOpen] = useState(false);
  const [isSubmitfundOpen, setSubmitfundOpen] = useState(false);
  const openDistributePopup = () => setDistributePopupOpen(true);
  const openDistributefunds = () => setDistributefundOpen(true);
  const openSubmitfundOpen = () => setSubmitfundOpen(true);
  const openApplyPopup = () => {
    setDistributePopupOpen(false);
    setSubmitfundOpen(false)
    setApplyPopupOpen(true);
  };
  const closeApplyPopup = () => setApplyPopupOpen(false);

  return (
    <Dashboardlayout  heading={'Fund Distribution'}>
      <div className="fund-wrap space-y-6">
        <div className="fund-top flex gap-6">
          {/* Total Funds Card */}
          <div className="w-full border border-gray-200 py-4 px-6 rounded-2xl space-y-6">
            <div className="flex gap-6">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-[#D1E7D1] text-2xl flex items-center justify-center">
                  <HiOutlineUser />
                </span>
                <h3 className="text-black text-xl">Total Funds</h3>
              </div>
              <div>
                <button  onClick={openSubmitfundOpen}  className="flex border border-gray-200 px-4 py-2 items-center gap-4 rounded-full">
                  <span className="w-7 h-7 text-white rounded-full bg-[#5B9425] flex items-center justify-center">
                    <FiPlus />
                  </span>
                  <span className="text-md font-semibold">Enter Funds</span>
                </button>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <h3 className="text-black text-3xl font-semibold">$10,000</h3>
              <div className="w-full">
                <button
                  onClick={openDistributePopup}
                  className="flex border border-gray-200 px-4 py-2 items-center gap-4 rounded-full bg-[#5B9425]"
                >
                  <span className="w-7 h-7 rounded-full bg-[#D1E7D1] flex items-center justify-center">
                    <MdOutlineArrowForward />
                  </span>
                  <span className="text-md text-white font-semibold">
                    Distribute Now
                  </span>
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
                <h3 className="text-black text-xl">Distribution</h3>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <h3 className="text-black text-3xl font-semibold">$2,000</h3>
              <div className="w-full">
                <button className="flex border border-gray-200 px-4 py-2 items-center gap-4 rounded-full bg-gray-300 text-gray-700">
                  Per Person
                </button>
              </div>
            </div>
          </div>

          {/* Add Distribution Card */}
          <div className="w-full border border-gray-200 py-4 px-6 rounded-2xl space-y-6">
            <div className="text-center gap-4">
              <button onClick={openDistributefunds} className="w-12 h-12 rounded-full bg-[#D1E7D1] text-2xl flex items-center justify-center m-auto">
                <FiPlus />
              </button>
            </div>
            <div className="text-center">
              <h3 className="text-black text-3xl font-semibold">
                Distribute Funds
              </h3>
            </div>
          </div>
        </div>

        <FundTableLayout />
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

      <Popup
        isOpen={isApplyPopupOpen}
        onClose={closeApplyPopup}
        widthClass="w-150"
      >
        <div className="space-y-4 py-2">
          <div className="">
            <h1 className="text-2xl font-semibold">
              Continued Support Request Form
            </h1>
            <p className="text-[15px] text-gray-500">
              Please fill in the required details to proceed
            </p>
          </div>
          <form className="space-y-4">
          <div className="form-group">
            <label class="block text-gray-700 font-medium mb-2">
              Current Financial/Employment Status
            </label>
            <div class="flex space-x-4 mb-2">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="financial_status"
                  class="form-radio text-blue-500"
                />
                <span class="ml-2">Yes</span>
              </label>
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="financial_status"
                  class="form-radio text-blue-500"
                />
                <span class="ml-2">No</span>
              </label>
            </div>
          </div>
          <div className="form-group">
            <label class="block text-gray-500   mb-2">
              If Yes, please describe the changes.
            </label>
            <input
              type="number"
              placeholder="0/50"
              maxlength="50"
              class="w-full p-2 border border-gray-300 rounded-full mb-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="form-group">
            <label class="block text-gray-500   mb-2">
              Are you currently employed?
            </label>
            <input
              type="number"
              placeholder="0/50"
              maxlength="50"
              class="w-full p-2 border border-gray-300 rounded-full mb-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="form-group">
            <label class="block text-gray-700 font-medium mb-2">
              Do you still require financial assistance?
            </label>
            <div class="flex space-x-4 mb-2">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="assistance_required"
                  class="form-radio text-blue-500"
                />
                <span class="ml-2">Yes</span>
              </label>
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="assistance_required"
                  class="form-radio text-blue-500"
                />
                <span class="ml-2">No</span>
              </label>
            </div>
          </div>
          <div className="form-group">
            <label class="block text-gray-500   mb-2">
              Reason for continued assistance.
            </label>
            <input
              type="number"
              placeholder="0/50"
              maxlength="50"
              class="w-full p-2 border border-gray-300 rounded-full mb-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="text-center">
            <button
              className="  border border-gray-200 px-8 py-2   gap-4 rounded-full bg-[#5B9425] text-white text-center"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        </div>

    
      </Popup>

      <Popup
        isOpen={isSubmitfundOpen}
        onClose={() => setSubmitfundOpen(false)}
        widthClass="w-96"
      >
         <div className="space-y-4 py-2">
          <div className="">
            <h1 className="text-2xl font-semibold">
            Enter Your Funds
            </h1>
            
          </div>
          <form className="space-y-4">
        
          <div className="form-group">
            <label class="block text-gray-500   mb-2">
            Enter Your Amount
            </label>
            <input
              type="number"
              placeholder="$10,000"
              maxlength="50"
              class="w-full p-2 border border-gray-300 rounded-full mb-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          

          <div className="text-center">
            <button
              className="  border border-gray-200 px-8 py-2   gap-4 rounded-full bg-[#5B9425] text-white text-center"
              type="submit"
            >
              Confirm
            </button>
          </div>
        </form>
        </div>
      </Popup>
      <Popup
        isOpen={isDistributefundOpen}
        onClose={() => setDistributefundOpen(false)}
        widthClass="w-120"
      >
        <div className="space-y-4 py-5">
          <div className="text-center">
            <h1 className="text-xl font-semibold">
            Do you want to distribute this amount?
            </h1>
            
          </div>
          <div className="flex gap-2">
            <button
             onClick={() => setDistributefundOpen(false)}
              className="w-full  border border-gray-200 px-4 py-2   gap-4 rounded-full bg-[#5B9425] text-white text-center"
            >
              Yes
            </button>
            <button
            onClick={() => setDistributefundOpen(false)}
              className="w-full     px-4 py-2   gap-4 rounded-full border border-[#5B9425] text-black text-center"
            >
           No
            </button>
            
          </div>
        </div>
      </Popup>
    </Dashboardlayout>
  );
}
