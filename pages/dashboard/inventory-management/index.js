import Dashboardlayout from "@/components/Layout/Dashboardlayout";
import React, { useState } from "react";
import Popup from "@/components/Popup";
import InventoryTable from "@/components/Table/InventoryTable";


export default function InventoryManage() {
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
    <Dashboardlayout heading={'Inventory Managerment'}>
      <div className="users-wrap space-y-6">
         

        <InventoryTable />
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
