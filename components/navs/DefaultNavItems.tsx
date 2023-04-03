import React from "react";
import Image from "next/image";
import SideNav, { NavItem } from "./SideNav";
import MetaMask from "../../public/static/metamask.svg";
import Portis from "../../public/static/portis.svg";
import Torus from "../../public/static/torus.svg";
import WalletLink from "../../public/static/walletlink.svg";

export const DefaultNavItems: NavItem[] = [
  {
    label: "Connect Metamask",
    href: "/",
    icon: (
      <Image
        src={MetaMask}
        alt="connect-metamask"
        className="mr-2"
        width={20}
        height={20}
      />
    ),
  },
  {
    label: "Connect Portis",
    href: "/",
    icon: (
      <Image
        src={Portis}
        alt="connect-portis"
        className="mr-2"
        width={16}
        height={16}
      />
    ),
  },
  {
    label: "Connect Torus",
    href: "/",
    icon: (
      <Image
        src={Torus}
        alt="connect-torus"
        className="mr-2"
        width={20}
        height={20}
      />
    ),
  },
  {
    label: "Connect Walletlink",
    href: "/",
    icon: (
      <Image
        src={WalletLink}
        alt="connect-wallet-link"
        className="mr-2"
        width={20}
        height={20}
      />
    ),
  },
];
