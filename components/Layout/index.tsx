import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Layout;
