"use client";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

const SiteContext = createContext(null);

export function SiteProvider({ children }) {
  const [theme, setThemeState] = useState("light");
  const [lang, setLangState] = useState("id");
  const [searchOpen, setSearchOpen] = useState(false);
  const lastFocusRef = useRef(null);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("portfolio-theme");
      if (savedTheme === "dark" || savedTheme === "light") {
        setThemeState(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
        document.documentElement.style.colorScheme = savedTheme;
      }
      const savedLang = localStorage.getItem("portfolio-lang");
      if (savedLang === "en" || savedLang === "id") {
        setLangState(savedLang);
        document.documentElement.lang = savedLang;
      }
    } catch (err) {
      // Storage unavailable in restricted browser contexts.
    }
  }, []);

  const setTheme = useCallback((nextTheme) => {
    setThemeState(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    document.documentElement.style.colorScheme = nextTheme;
    try {
      localStorage.setItem("portfolio-theme", nextTheme);
    } catch (err) {
      // Ignore storage errors when private browsing blocks writes.
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);

  const setLang = useCallback((nextLang) => {
    setLangState(nextLang);
    document.documentElement.lang = nextLang;
    try {
      localStorage.setItem("portfolio-lang", nextLang);
    } catch (err) {
      // Ignore storage errors when private browsing blocks writes.
    }
  }, []);

  const openSearch = useCallback(() => {
    lastFocusRef.current = document.activeElement;
    setSearchOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setSearchOpen(false);
    if (lastFocusRef.current && typeof lastFocusRef.current.focus === "function") {
      requestAnimationFrame(() => lastFocusRef.current.focus());
    }
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (searchOpen) closeSearch();
        else openSearch();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [searchOpen, openSearch, closeSearch]);

  return (
    <SiteContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        lang,
        setLang,
        searchOpen,
        openSearch,
        closeSearch,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) {
    throw new Error("useSite must be used inside SiteProvider");
  }
  return ctx;
}
