import Link from "next/link";
import React from "react";
import { VscBell } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import Image from "next/image";

export default function index() {
  return (
    <>
      <section className="h-screen main-bg py-8 px-6">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="m-wrap space-y-8">
            <div className="name-warp flex items-center justify-between">
              <div>
                <h3 className="text-base font-[500]">Hello,</h3>
                <h2 className="text-4xl font-semibold">Herry</h2>
              </div>
              <div>
                <Link href={""} className="relative">
                  <span className="text-[13px] absolute    bg-red-600   text-white font-semibold  items-center flex justify-center rounded-full w-6 h-6 -right-2 -top-2">
                    1
                  </span>
                  <span className="text-3xl">
                    <VscBell />
                  </span>
                </Link>
              </div>
            </div>
            <div className="search-wrap relative">
              <input
                type="text"
                placeholder="Search Here"
                className="w-full h-14 rounded-full px-5 outline-none bg-white"
              />
              <button className="absolute text-3xl right-4 top-0 bottom-0">
                <CiSearch />
              </button>
            </div>
            <div className="blance-wrap">
              <div className=" bg-[#5B9425] rounded-2xl px-8 py-6">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Available Balance
                    </h3>
                    <h4 className="text-[13px] font-[500] text-white">
                      Today, 01 May 2025
                    </h4>
                  </div>
                  <div className="flex gap-3 items-center ">
                    <h2 className="text-4xl font-bold text-white">$90.00</h2>
                    <span className="text-2xl text-white">
                      <FiEye />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="his-wrap bg-white rounded-2xl px-8 py-6 space-y-6">
              <div className="flex items-center justify-between ">
                <h3 className="text-xl font-semibold text-black">
                  Transaction History
                </h3>
                <div className="">
                  <Link href={""} className="text-[14px] font-bold text-[#5B9425]">
                    View All
                  </Link>
                </div>
              </div>
              <div>
             <div className="space-y-2">
             {Array(4).fill().map((_, index) => (
                 <div className="flex items-center justify-between mt-4 drop-shadow-md bg-white rounded-2xl px-4 py-3" key={index}>
                 <div className="flex gap-3 items-center">
                   <div className="w-14 h-14 bg-[#E6F1FE] rounded-2xl text-center flex items-center justify-center">
                       <Image src={'/img/coin.svg'} width={30} height={30} alt="coin"  />
                   </div>
                   <div className=" ">
                     <h3 className="text-base font-semibold text-black">
                     E-COI Store
                     </h3>
                     <h4 className="text-[13px] font-[500] text-[#B1B1B1]">
                     8:01am
                     </h4>
                   </div>
                 </div>
                 <Link href={'/grocery'} className="text-[13px] font-bold text-red-500 bg-[#FECECE] px-4 py-1 rounded-2xl">-$42.00</Link>
               </div>
               ))}
             </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
