import Link from "next/link";
import React, { useState } from "react";
import { IoChevronBackSharp, IoChevronForwardSharp, IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";

export default function index() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <section className="h-screen main-bg py-8 px-6">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="space-y-24">
            <div className="back-btn">
              <Link
                href={'/'}
                className="text-2xl bg-[#5b94251f] text-[#5B9425] inline-block rounded p-2"
              >
                <IoChevronBackSharp />
              </Link>
            </div>
            <div>
              <h1 className="text-5xl font-semibold md:text-center">Forget Password</h1>
            </div>
            <form>
              <div className="space-y-16">
                <div className="space-y-6">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full p-4 border-b border-[#D9D9D9] rounded outline-0"
                    />
                  </div>
                 
                  <div className="text-right">
                    <Link href={''} className="text-[#5B9425] font-semibold text-base">Resend Code</Link>
                  </div>
                </div>
                <div className="text-center">
                  <Link href={'/reset-password'} className="btn-b flex items-center justify-center gap-12">
                    <span className="inline-block pl-3">Continue</span>
                    <span className="inline-block text-[#5B9425] bg-white rounded-full p-2">
                      <IoChevronForwardSharp />
                    </span>
                  </Link>
                </div>
              </div>
            </form>
           
          </div>
        </div>
      </section>
    </>
  );
}
