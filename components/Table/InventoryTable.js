import Link from "next/link";
import React, { useState } from "react";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import DataTable from "react-data-table-component";
import { HiOutlineUser } from "react-icons/hi2";
import Popup from "../Popup";
import Image from "next/image";

export default function InventoryTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownVisible, setDropdownVisible] = useState({});
  const [isDistributePopupOpen, setDistributePopupOpen] = useState(false);

  const openDistributePopup = () => setDistributePopupOpen(true);
  const itemsPerPage = 3;

  const handleDropdownToggle = (id) => {
    setDropdownVisible((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const activeUsers = [
    {
      id: 1,
      name: "Antony Rogers",
      email: "antony@gmail.com",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      location: "New York",
      userid: "12747",
      type: "Monthly",
      approval: "In Review",
      usageColor: "bg-yellow-100 text-yellow-700",
    },
    {
      id: 2,
      name: "Linda Parkers",
      email: "linda@gmail.com",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      location: "New York",
      userid: "25747",
      type: "Yearly",
      approval: "Onboarded",
      usageColor: "bg-green-100 text-green-700",
    },
    {
      id: 3,
      name: "Anda Parkers",
      email: "licnda@gmail.com",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      location: "New York",
      userid: "6",
      type: "Yearly",
      approval: "Rejected",
      usageColor: "bg-red-100 text-red-700",
    },
  ];

  const totalPages = Math.ceil(activeUsers.length / itemsPerPage);
  const paginatedData = activeUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      width: "250px",
      cell: (row) => (
        <div className="flex items-center gap-3">
          <img
            src={row.avatar}
            alt={row.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="font-semibold text-gray-800">{row.name}</div>
            <div className="text-sm text-gray-500">{row.email}</div>
          </div>
        </div>
      ),
    },
    {
      name: "Location",
      selector: (row) => row.location,
      sortable: true,
    },
    {
      name: "User ID",
      selector: (row) => row.userid,
      sortable: true,
    },
    {
      name: "Processing Type",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "Approval",
      selector: (row) => row.approval,
      cell: (row) => (
        <div
          className={`text-sm px-3 py-1 rounded-full font-medium ${row.usageColor}`}
        >
          {row.approval}
        </div>
      ),
    },
    {
      name: "Edit",
      cell: (row) => (
        <div className="relative">
          <HiOutlineDotsVertical
            onClick={() => handleDropdownToggle(row.id)}
            className="text-gray-500 cursor-pointer"
          />
          {dropdownVisible[row.id] && (
            <div className="absolute left-9 -bottom-9 mt-2 bg-white shadow-md rounded-lg border border-gray-300 z-20">
              <ul className="text-sm w-24">
                <li className="px-4 py-2 hover:bg-gray-100">Option 1</li>
                <li className="px-4 py-2 hover:bg-gray-100">Option 2</li>
                <li className="px-4 py-2 hover:bg-gray-100">Option 3</li>
              </ul>
            </div>
          )}
        </div>
      ),
    },
  ];

  const customStyles = {
    table: {
      style: {
        borderRadius: "16px",
        border: "none",
        width: "100%",
      },
    },
    head: {
      style: {
        minHeight: "72px",
        width: "99%",
        margin: "10px 2px",
        backgroundColor: "#E5F0FE",
        borderRadius: "8px",
        outline: "1px solid #E5F0FE",
      },
    },
    headCells: {
      style: {
        paddingLeft: "20px",
        paddingRight: "20px",
        backgroundColor: "#E5F0FE",
        fontSize: "16px",
      },
    },
    rows: {
      style: {
        minHeight: "72px",
        width: "99%",
        margin: "10px 2px",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        outline: "1px solid #ebe6e7",
      },
      highlightOnHoverStyle: {
        backgroundColor: "#f1f5ff",
        borderRadius: "8px",
        outline: "1px solid #3b82f6",
      },
    },
    cells: {
      style: {
        paddingLeft: "20px",
        paddingRight: "20px",
        fontSize: "14px",
      },
    },
    pagination: {
      style: {
        padding: "12px 20px",
      },
    },
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="fund-table border border-gray-200 py-6 px-6 rounded-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <span className="w-12 h-12 rounded-full bg-[#D1E7D1] text-2xl flex items-center justify-center">
              <HiOutlineUser />
            </span>
            Product List
          </h2>
         <div className="flex gap-4">
         <div className="flex gap-2">
            <button
              onClick={openDistributePopup}
              className="    border border-gray-200 text-gray-500 font-medium px-5 py-2 rounded-full text-sm"
            >
              + Upload Spreadsheet
            </button>
            <button
              onClick={openDistributePopup}
              className="bg-[#5B9425] hover:bg-green-700 text-white font-medium px-5 py-2 rounded-full text-sm"
            >
              + Add User
            </button>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="#"
              onClick={() => handlePageChange(currentPage - 1)}
              className={`flex items-center text-[#5B9425] px-2 py-2 text-sm drop-shadow-sm rounded-xl bg-white ${
                currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              <IoChevronBackSharp />
            </Link>
            <div className="items-center hidden lg:flex gap-x-3">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Link
                    href="#"
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-1 text-sm rounded-md text-[#5B9425] ${
                      currentPage === page
                        ? "bg-[#D1E7D1]"
                        : "hover:bg-[#D1E7D1]"
                    }`}
                  >
                    {page}
                  </Link>
                )
              )}
            </div>
            <Link
              href="#"
              onClick={() => handlePageChange(currentPage + 1)}
              className={`flex items-center text-[#5B9425] px-2 py-2 text-sm drop-shadow-sm rounded-xl bg-white ${
                currentPage === totalPages
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
            >
              <IoChevronForwardSharp />
            </Link>
          </div>
         </div>
        </div>

        <DataTable
          columns={columns}
          data={paginatedData}
          customStyles={customStyles}
          highlightOnHover
          pointerOnHover
          responsive
        />
      </div>

      <Popup
        isOpen={isDistributePopupOpen}
        onClose={() => setDistributePopupOpen(false)}
        widthClass="w-250"
      >
        {/* Your popup form stays the same */}
        {/* ... */}
      </Popup>
    </>
  );
}
