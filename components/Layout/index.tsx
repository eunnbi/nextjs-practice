import React from "react";
import NavBar from "./NavBar";

interface LayoutProps {
  navBar: boolean;
}

const Layout = ({ children, navBar }: React.PropsWithChildren<LayoutProps>) => {
  return (
    <>
      {navBar ? <NavBar /> : null}
      {children}
    </>
  );
};

export default Layout;
