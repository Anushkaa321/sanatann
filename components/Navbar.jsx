"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // for hamburger icon
import logo from "../public/sanatanlogo.png"; // <-- replace with your logo path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-600 h-25 flex items-center px-4 fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src={logo}
          alt="logo"
          width={87}
          height={87}
          className="animate-spin-slow rounded-full"
        />
      </div>

      {/* Mobile Center Text */}
      <div className="flex-3 flex justify-center sm:hidden">
        <span className="text-white text-2xl font-bold">
          सनातन युवा वाहिनी
        </span>
      </div>

      {/* Hamburger Menu */}
      <div className="ml-auto sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop Nav Links */}
      <div className="ml-auto hidden sm:flex space-x-8 text-lg font-semibold">
        <Link href="/" className="nav-link">होम</Link>
        <Link href="/mukhya-uddesh" className="nav-link">मुख्य उद्देश्य</Link>
        <Link href="/hamare-baareme" className="nav-link">हमारे बारे में</Link>
        <Link href="/gallery" className="nav-link">गैलरी</Link>
        <Link href="/sewayein" className="nav-link">सेवाएँ</Link>
        <Link href="/blog" className="nav-link">ब्लॉग</Link>
        <Link href="/daan-kre" className="nav-link">दान करें</Link>
        <Link href="/contact" className="nav-link">संपर्क करें</Link>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 right-4 bg-white rounded-lg shadow-lg p-4 space-y-4 w-48 sm:hidden">
          <Link href="/" className="block nav-link-mobile">होम</Link>
          <Link href="/mukhya-uddesh" className="block nav-link-mobile">मुख्य उद्देश्य</Link>
          <Link href="/hamare-baareme" className="block nav-link-mobile">हमारे बारे में</Link>
          <Link href="/gallery" className="block nav-link-mobile">गैलरी</Link>
          <Link href="/sewayein" className="block nav-link-mobile">सेवाएँ</Link>
          <Link href="/blog" className="block nav-link-mobile">ब्लॉग</Link>
          <Link href="/daan-kre" className="block nav-link-mobile">दान करें</Link>
          <Link href="/contact" className="block nav-link-mobile">संपर्क करें</Link>
        </div>
      )}

      {/* Tailwind styles for hover underline effect */}
      <style jsx>{`
        .nav-link {
          position: relative;
          color: white;
          transition: color 0.3s;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          background: #facc15;
          left: 0;
          bottom: -4px;
          transition: width 0.3s;
        }
        .nav-link:hover {
          color: #facc15;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link-mobile {
          color: #333;
          font-weight: 500;
        }
      `}</style>
    </nav>
  );
}
