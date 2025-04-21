import Image from "next/image";
import Link from "next/link";

 



export default function Home() {
  return (
    <>
      <section className=" main-bg">
        <div className="h-screen flex items-center justify-center">
         <div className="space-y-24">
         <div className="sloo-wrp w-[340px] h-[340px] bg-[#DDEDE4] p-5 rounded-full relative mb-40">
          <img src="/img/loadi.png" alt="Logo" className="logo absolute -top-25 z-10  left-0 right-0 m-auto" />
          <div className="s-logo bg-white w-[300px] h-[300px] flex items-center justify-center rounded-full   relative">
            <Image
              src="/img/s-logo.svg"
              alt="Logo"
              width={222}
              height={84}
              className="logo"
            />
          </div>
          </div>
          <div>
            <Link className="btn-a" href={'/sign-in'}>Sign In</Link>
          </div>
         </div>
         
        </div>
      </section>
    </>
  );
}
