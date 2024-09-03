import React from "react";
import {
  HomeIcon,
  SearchIcon,
  HeartIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { CiSettings } from "react-icons/ci";

const LeftSideBar = () => {
  return (
    <div className="w-[25%] h-screen p-4 flex flex-col space-y-6 border-r border-gray-200">
      {/* Navigation Items */}
      <nav className="flex flex-col space-y-4">
        <NavItem Icon={HomeIcon} label="Home" to="/" />
        <NavItem Icon={SearchIcon} label="Search" to="/about" />
        <NavItem Icon={HeartIcon} label="Notifications" />
        <NavItem Icon={UserIcon} label="Profile" to="/profile" />
      </nav>

      {/* Extra Links */}
      <div className="mt-auto pt-[20em]">
        <NavItem Icon={CiSettings} label="Settings" />
      </div>
    </div>
  );
};

const NavItem = ({
  Icon,
  label,
  to,
}: {
  Icon: React.ComponentType<any>;
  label: string;
  to?: string;
}) => {
  return (
    <Link href={`${to}`}>
      <div className="flex items-center space-x-3 cursor-pointer p-2 hover:bg-gray-100 rounded-lg">
        <Icon className="h-6 w-6 text-gray-600" iconNode={[]} />
        <span className="text-gray-800 text-lg font-medium">{label}</span>
      </div>
    </Link>
  );
};

export default LeftSideBar;
