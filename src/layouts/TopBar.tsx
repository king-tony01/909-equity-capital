"use client";
import ArrowUp from "@/icons/ArrowUp";
import { APP_ROUTES } from "@/routes/appRoutes";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles/Navigation.module.css";
import { usePathname } from "next/navigation";

function TopBar() {
  const pathname = usePathname();
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
  return (
    <nav className={styles.navigation}>
      <Link href="/">
        <Image
          width={100}
          height={50}
          src="/logo.png"
          alt="909 Equity Capital Logo"
          quality={100}
        />
      </Link>
      <ul>
        {links.map((link, i) => (
          <li key={i} className={pathname === link.path ? styles.active : ""}>
            <Link href={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <Link href={APP_ROUTES.BOOKING} className={styles.btn}>
        <span>Book a Call</span>
        <ArrowUp />
      </Link>
    </nav>
  );
}

export default TopBar;
