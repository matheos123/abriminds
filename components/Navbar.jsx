import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex flex-row lg:px-40 px-4 justify-between items-center mt-4">
      <div className="bg-primary-brand p-2 px-4 rounded-full">
        <Image
          src="/Images/AbriMinds_logo.png"
          width={120}
          height={120}
          alt="logo"
        />
      </div>
      <nav className="flex flex-row space-x-4">
        <p>HOME</p>
        <p>ABOUT</p>
        <p>TRAINING</p>
        <p>BLOGS</p>
        <p>CONNECT</p>
      </nav>
    </div>
  );
};

export default Navbar;
