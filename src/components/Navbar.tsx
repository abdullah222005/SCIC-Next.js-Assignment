"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {

const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

useEffect(() => {
  const html = document.querySelector("html");
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}, [theme]);

const handleTheme = (checked:boolean) => {
  setTheme(checked ? "dark" : "light");
};

  return (
    <nav className="bg-yellow-50 dark:bg-blue-950/30 border-b-2 border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1>Clothique</h1>

        <ul className="flex gap-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/allClothes">All Clothes</Link>
          </li>
          <li>
            <Link href="/upcomingClothes">Upcoming Clothes</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex gap-5 items-center">
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            defaultChecked={localStorage.getItem("theme") === "dark"}
            className="toggle"
          />
          <button className="btn btn-primary">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
