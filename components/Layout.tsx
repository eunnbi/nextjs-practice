import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
