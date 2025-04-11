import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter
import { SiAwsorganizations } from "react-icons/si";
import { AiOutlineLogout } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";

export default function SideBar() {
  const router = useRouter(); // Initialize router

  // Helper function to check if the current link is active
  const isActive = (path) =>
    router.pathname === path
      ? "bg-[#5B9425] text-white"
      : "bg-white text-black";

  return (
    <aside className="flex flex-col w-72 h-screen px-5 py-8 overflow-y-auto rtl:border-r-0 rtl:border-l dark:border-gray-700 space-y-12">
      <div>
        <img className="w-auto h-14" src="/img/s-logo.svg" alt="logo" />
      </div>
      
      <div className="flex flex-col justify-between flex-1">
        <nav className="flex-1 -mx-3 space-y-3">
          <Link
            className={`flex items-center px-3 py-3 transition-colors duration-300 transform rounded-lg ${isActive(
              "/dashboard"
            )} hover:bg-[#5dad12] hover:text-white`}
            href={"/dashboard"}
          >
            <span className="text-2xl">
              <SiAwsorganizations />
            </span>
            <span className="mx-4 text-md font-medium">Fund Distribution</span>
          </Link>

          <Link
            className={`flex items-center px-3 py-3 transition-colors duration-300 transform rounded-lg ${isActive(
              "/dashboard/manageusers"
            )} hover:bg-[#5dad12] hover:text-white`}
            href={"/dashboard/manageusers"}
          >
            <span className="text-2xl">
              <FiUsers />
            </span>
            <span className="mx-4 text-md font-medium">Managing Users</span>
          </Link>
        </nav>

        <div className="mt-6">
          <Link
            href=""
            className="text-[#5B9425] transition-colors duration-200 hover:text-gray-500 flex items-center gap-2"
          >
            <span>Logout</span>
            <span>
              <AiOutlineLogout />
            </span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
