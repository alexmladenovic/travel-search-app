import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div>
      <div className="bg-blue-500 text-orange-400 flex justify-center items-center h-[30px]">
        <p className="text-center">Welcome</p>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export { Layout };
