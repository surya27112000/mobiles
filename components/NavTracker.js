"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const KEY = "navStack";
let popped = false; // true when the last navigation was a browser/phone Back or Forward

// Keeps a small stack of the pages visited inside this site (per tab).
// BackBar uses it to know if there is a previous in-app page to go back to.
export default function NavTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const onPop = () => {
      popped = true;
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    try {
      let stack = JSON.parse(sessionStorage.getItem(KEY) || "[]");
      if (!Array.isArray(stack)) stack = [];

      if (stack[stack.length - 1] !== pathname) {
        if (popped) {
          stack.pop(); // went back one page
          if (stack[stack.length - 1] !== pathname) stack.push(pathname);
        } else {
          stack.push(pathname); // opened a new page
        }
        sessionStorage.setItem(KEY, JSON.stringify(stack.slice(-50)));
      }
    } catch {}
    popped = false;
  }, [pathname]);

  return null;
}