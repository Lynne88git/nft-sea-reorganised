import { NavItem } from "./SideNav";
import Link from "next/link";
import Image from "next/image";
import SideNav from "./SideNav";
import Logo from "../../public/static/logo.svg";
import WalletIcon from "../../public/static/wallet.svg";

export interface MainNavProps {
  isNavOpen: boolean;
  setIsNavOpen: (isOpen: boolean) => void;
  navItems: NavItem[];
}

const MainNav = ({ isNavOpen, setIsNavOpen, navItems }: MainNavProps) => {
  return (
    <nav className="flex justify-between items-center p-8">
      <div className="flex items-center">
        <Link href="/">
          <Image src={Logo} alt="logo" className="" width={200} height={37} />
        </Link>
      </div>
      <div className="hidden md:flex items-center">
        <ul className="flex items-center">
          <li>
            <button
              className="flex items-center"
              onClick={() => setIsNavOpen(true)}
            >
              <div className="text-white hover:text-gray-300 px-3 py-2 rounded">
                Explore Marketplace
              </div>
              <Image
                src={WalletIcon}
                alt="logo"
                className=""
                width={28}
                height={29}
              />
            </button>
          </li>
        </ul>
      </div>
      <SideNav
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        navItems={navItems}
      />
    </nav>
  );
};

export default MainNav;
