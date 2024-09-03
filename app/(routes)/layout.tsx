import LeftSideBar from "@/components/shared/leftSideBar/LeftSideBar";
import Navbar from "@/components/shared/navbar/Navbar";
import RightSideBar from "@/components/shared/rightSideBar/RightSideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <div className="flex min-h-screen">
        <LeftSideBar />
        <div
          className="mx-auto w-full max-w-5xl"
          style={{ backgroundColor: "#fae5df", minHeight: "100vh" }}
        >
          {children}
        </div>
        <RightSideBar />
      </div>
    </main>
  );
};

export default Layout;
