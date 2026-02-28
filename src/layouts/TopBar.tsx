"use client";
import ArrowUp from "@/icons/ArrowUp";
import { APP_ROUTES } from "@/routes/appRoutes";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles/Navigation.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import Menu from "@/icons/Menu";

function TopBar() {
  const pathname = usePathname();
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const links = [
    {
      label: "Home",
      path: APP_ROUTES.HOME,
    },
    {
      label: "About",
      path: APP_ROUTES.ABOUT,
    },
    {
      label: "Services",
      path: APP_ROUTES.SERVICES,
    },
    {
      label: "Portfolio",
      path: APP_ROUTES.PORTFOLIO,
    },
    {
      label: "Contact",
      path: APP_ROUTES.CONTACT,
    },
  ];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMenuOpen]);

  return (
    <nav className={styles.navigation} ref={menuRef}>
      <Link href="/">
        <Image
          width={100}
          height={50}
          src="/logo.png"
          alt="909 Equity Capital Logo"
          quality={100}
        />
      </Link>
      <ul className={isMenuOpen ? styles.open : ""}>
        {links.map((link, i) => (
          <li key={i} className={pathname === link.path ? styles.active : ""}>
            <Link href={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
      {windowWidth > 500 ? (
        <Link href={APP_ROUTES.BOOKING} className={styles.btn}>
          <span>Book a Call</span>
          <ArrowUp />
        </Link>
      ) : (
        <div className={styles.mobile_menu}>
          <Link href={APP_ROUTES.BOOKING} className={styles.btn}>
            <span>Book a Call</span>
            <ArrowUp />
          </Link>
          <button
            className={styles.menu}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <Menu />
          </button>
        </div>
      )}
    </nav>
  );
}

export default TopBar;
