import Link from "next/link";
// import { useContext } from "react";
// import { GlobalContext } from "@utils/GlobalContext";
// import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"
import ThemeChanger from "./ThemeChanger";

export default function Navbar() {
  // const [darkMode, setDarkMode] = useContext(GlobalContext);

  return (
    <nav className="sticky top-0 z-10 bg-white dark:bg-neutral-900 shadow dark:border-b dark:border-b-neutral-800">
      <div className="max-w-5xl py-4 px-4 mx-auto flex flex-wrap gap-3 justify-between">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <Link href="/" className="text-sky-500 hover:text-sky-600 transition-all font-medium">
          Home
        </Link>
      </div>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <ThemeChanger simple />
        <a href={process.env.REPO_URL} target="_blank" rel="noreferrer" className="text-sky-500 hover:text-sky-600 transition-all text-sm font-medium">
          <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" className="h-5 w-5 text-gray-700 dark:text-gray-200 dark:invert">
            <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </a>
      </div>
      </div>
    </nav>
  )
}