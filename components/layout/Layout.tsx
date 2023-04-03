import { useState, ReactNode } from "react";
import MainNav from "../navs/MainNav";
import SideNav from "../navs/SideNav";
import Footer from "../navs/Footer";
import { DefaultNavItems } from "../navs/DefaultNavItems";
import { MainNavProps } from "../navs/MainNav";
import { SideNavProps } from "../navs/SideNav";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const mainNavProps: MainNavProps = {
    isNavOpen,
    setIsNavOpen,
    navItems: DefaultNavItems,
  };

  const sideNavProps: SideNavProps = {
    isNavOpen,
    setIsNavOpen,
    navItems: DefaultNavItems,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav {...mainNavProps} /> {/* pass mainNavProps here */}
      <SideNav {...sideNavProps} /> {/* pass sideNavProps here */}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
