import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import Image from "next/image";
import { IoChevronBackSharp } from "react-icons/io5";
import { TfiLineDashed } from "react-icons/tfi";
import { BiScan } from "react-icons/bi";

export default function code() {
  return (
    <section className="h-screen main-bg py-16 px-6  ">
      <div className="container mx-auto max-w-screen-2xl">
        <div className="m-wrap space-y-24">
          <div className="name-warp flex items-start justify-between ">
            <div className="back-btn">
              <Link
                href={"/"}
                className="text-2xl bg-[#5b94251f] text-[#5B9425] inline-block rounded p-2"
              >
                <IoChevronBackSharp />
              </Link>
            </div>
            <div className="text-center space-y-2">
              <div>
                <div className="w-14 h-14 bg-[#F8B13F] rounded-2xl text-center flex items-end justify-center overflow-hidden m-auto">
                  <Image
                    className="object-cover "
                    src={"/img/profile.png"}
                    width={50}
                    height={50}
                    alt="profile"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-black">Herry</h2>
                <h4 className="text-[13px] font-[500] text-gray-400">
                  User ID : 1830
                </h4>
                <h4 className="text-[13px] font-[500] text-gray-400">
                  Generate Date : 12-April-2025
                </h4>
              </div>
            </div>
            <div>
              <Link
                href={""}
                className="text-2xl bg-[#5b94251f] text-[#5B9425] inline-block rounded p-2"
              >
                <BiScan />
              </Link>
            </div>
          </div>

          <div className="blance-wrap">
            <div className="text-center    bg-white drop-shadow-md rounded-2xl px-8 py-4">
              <div className="space-y-12">
                <div>
                  <div className="w-full text-center">
                    <Image
                      src="/img/s-logo.svg"
                      alt="Logo"
                      width={112}
                      height={53}
                      className="m-auto"
                      
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-black">
                    Customer QR Code : 1830
                  </h2>
                </div>
                <div>
                  <div className="w-52 h-52 bg-gray-600   rounded-2xl m-auto"></div>
                </div>
                <div className="flex items-center justify-between">
                  <h4 className="text-[13px] font-[500] text-gray-400">
                    Expire In 2 Minutes
                  </h4>
                  <Link
                    href={""}
                    className="text-white bg-[#5B9425]  px-8 py-3 rounded-full"
                  >
                    Hide
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
