import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import Image from "next/image";
import { IoChevronBackSharp } from "react-icons/io5";
import { TfiLineDashed } from "react-icons/tfi";

export default function index() {
  return (
    <>
      <section className="h-screen main-bg py-8 px-6">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="m-wrap space-y-8">
            <div className="name-warp flex items-baseline  ">
              <div className="back-btn">
                <Link
                  href={"/"}
                  className="text-2xl bg-[#5b94251f] text-[#5B9425] inline-block rounded p-2"
                >
                  <IoChevronBackSharp />
                </Link>
              </div>
              <div className="w-full text-center">
                <Image
                  src="/img/s-logo.svg"
                  alt="Logo"
                  width={112}
                  height={53}
                  className="m-auto"
                />
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
              <div className="text-center    bg-[#F9B233] rounded-2xl px-8 py-6">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Total Grocery
                    </h3>
                    <h4 className="text-[13px] font-[300] text-[#f3f0f0]">
                      Today, 01 May 2025
                    </h4>
                  </div>
                  <div className="  ">
                    <h2 className="text-4xl font-bold text-white">$42.00</h2>
                    <h4 className="text-[13px] font-[300] text-[#f3f0f0]">
                      Today, 8:01am
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="his-wrap bg-white rounded-2xl px-8 py-6 space-y-6">
              <div className="flex items-center justify-between ">
                <h3 className="text-xl font-semibold text-black">
                  Items Perchased
                </h3>
                {/* <div className="">
                  <Link
                    href={""}
                    className="text-[14px] font-bold text-[#5B9425]"
                  >
                    View All
                  </Link>
                </div> */}
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  {Array(3)
                    .fill()
                    .map((_, index) => (
                      <div
                        className="flex items-center justify-between mt-4 drop-shadow-md bg-white rounded-2xl px-4 py-3"
                        key={index}
                      >
                        <div className="flex gap-3 items-center">
                          <div className="w-14 h-14 bg-[#E6F1FE] rounded-2xl text-center flex items-center justify-center overflow-hidden">
                            <Image
                              src={"/img/product.png"}
                              width={60}
                              height={60}
                              alt="product"
                            />
                          </div>
                          <div className=" ">
                            <h3 className="text-base font-semibold text-black">
                              Eggs (12)
                            </h3>
                            <h4 className="text-[13px] font-[500] text-[#B1B1B1]">
                              Qty: 1
                            </h4>
                          </div>
                        </div>
                        <Link
                          href={""}
                          className="text-[13px] font-bold text-[#5B9425] bg-green-200 px-4 py-1 rounded-2xl"
                        >
                          $12
                        </Link>
                      </div>
                    ))}
                </div>
                <div className="flex items-center justify-end gap-4">
                  <h3 className="capitalize text-xl">total</h3>
                  <span>
                    <TfiLineDashed />
                  </span>
                  <h4>$42</h4>
                </div>
              </div>
            </div>
            <div className="d-invice">
              <Link href={""} className="btn-a">
                Download Invoice
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
