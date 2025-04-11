import React, { useState } from "react";
import SideBar from "../Sidebar";
import { CiSearch } from "react-icons/ci";
import { HiOutlineAdjustmentsHorizontal, HiBars3 } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";

export default function Dashboardlayout({ children, heading }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <section className="dashboard-layout flex gap-2 main-bg h-screen overflow-hidden relative">
      {/* Overlay with blur */}
      <div
        className={`fixed inset-0 z-40  backdrop-blur-sm transition-opacity md:hidden ${
          sidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed z-50 md:relative md:translate-x-0 md:block transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SideBar closeSidebar={() => setSidebarOpen(false)} />
      </div>

      {/* Main Content */}
      <div className="w-full p-4">
        <div className="h-full bg-white rounded-2xl">
          <header className="px-5 border-b border-gray-200 py-6">
            <div className="flex items-center justify-between">
              <div className="w-full">
                <h1 className="text-black text-3xl font-semibold">{heading}</h1>
                <p className="text-base text-gray-500">Lorem Ipsum Dolar</p>
              </div>
              <div className="w-full flex gap-4 items-center justify-end">
                {/* Mobile Hamburger */}
                <button
                  className="md:hidden text-3xl"
                  onClick={() => setSidebarOpen(true)}
                >
                  <HiBars3 />
                </button>

                <div className="search-wrap relative hidden md:block w-[60%]">
                  <input
                    type="text"
                    placeholder="Search Here"
                    className="w-full h-14 rounded-full drop-shadow-xl pl-14 outline-none bg-white"
                  />
                  <button className="absolute text-3xl left-4 top-0 bottom-0">
                    <CiSearch />
                  </button>
                </div>
                <Link
                  className="text-[#5B9425] bg-[#D1E7D1] text-3xl p-2 rounded hidden md:block"
                  href={""}
                >
                  <HiOutlineAdjustmentsHorizontal />
                </Link>
                <div className="w-14 h-14 bg-[#F8B13F] rounded-2xl text-center flex items-end justify-center overflow-hidden m-auto">
                  <Image
                    className="object-cover"
                    src={"/img/profile.png"}
                    width={50}
                    height={50}
                    alt="profile"
                  />
                </div>
              </div>
            </div>
          </header>
          <div className="right-wrap px-5 py-6">{children}</div>
        </div>
      </div>
    </section>
  );
}
