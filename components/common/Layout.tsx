import React from "react";
import NavBar from "./NavBar";
import ThemeButton from "./ThemeButton";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Layout;
