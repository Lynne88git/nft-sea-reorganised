import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/static/logo.svg";

const Footer = () => {
  const now = new Date();
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-black shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <Link href="/">
        <Image
          src={Logo}
          alt="logo"
          className=""
          width={200}
          height={37}
          priority
        />
      </Link>
      <span className="text-sm sm:text-center">
        NFT Sea {new Date().getFullYear()}© All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm sm:mt-0">
        <button
          className="bg-gradient-to-r
        from-indigo-600
        via-indigo-400
        to-pink-500 text-white p-4 rounded-sm"
        >
          Explore Marketplace
        </button>
      </ul>
    </footer>
  );
};

export default Footer;
