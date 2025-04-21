"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsQrCodeScan } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/available-balance", icon: <IoWalletOutline /> },
    { href: "/qr-scan", icon: <BsQrCodeScan /> },
    { href: "/profile", icon: <HiOutlineUser /> },
  ];

  return (
    <div className="w-full absolute bottom-0 flex bg-amber-200">
      <div className="grid grid-cols-3 w-full divide-x divide-gray-200">
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className={`px-8 py-4 inline-flex w-full justify-center ${
              pathname === item.href ? "bg-[#E5F0FE] text-[#5B9425]" : "bg-white text-gray-500"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
