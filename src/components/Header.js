import React from "react";
import "../assets/index.css";

function Header() {
  return (
    <>
      <div class="flex flex-row bg-gray-900 h-96 ">
        <div class="flex flex-col self-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] mx-5 rounded-xl">
          <h1 class="text-white text-8xl px-10 font-poppins">Fedorov</h1>
          <h1 class="text-white text-8xl px-10 pb-5 font-poppins">Project</h1>
        </div>
        <div class="flex flex-row shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] mx-5 rounded-xl self-center mb-36 py-5">
          <button class="text-white text-4xl px-10 font-poppins transition-colors hover:bg-gray-800 rounded-2xl">
            Staff
          </button>
          <button class="text-white text-4xl px-10 font-poppins transition-colors hover:bg-gray-800 rounded-2xl">
            Info
          </button>
          <button class="text-white text-4xl px-10 font-poppins transition-colors hover:bg-gray-800 rounded-2xl">
            Contacts
          </button>
        </div>
      </div>
    </>
  );
}
export default Header;
