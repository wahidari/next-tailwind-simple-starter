import { useEffect, useState } from "react";
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from "@heroicons/react/outline";

export default function ThemeChanger({ simple }) {
  // https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const handleDarkMode = () => {
    if (theme == 'light') {
      setTheme('dark')
    } else setTheme('light')
  };

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  if (simple) {
    return (
      theme == 'dark' ?
        <button onClick={() => setTheme('light')} aria-label="Light">
          <SunIcon className="h-6 w-6 text-neutral-400 hover:text-neutral-200 transition-all" />
        </button>
        :
        <button onClick={() => setTheme('dark')} aria-label="Dark">
          <MoonIcon className="h-6 w-6 text-neutral-500 hover:text-neutral-700 transition-all" />
        </button>
    )
  }

  return (
    <>
      {theme == 'dark' ?
        <button onClick={() => setTheme('light')} aria-label="Light">
          <SunIcon className="h-6 w-6 text-neutral-400 hover:text-neutral-200 transition-all" />
        </button>
        :
        <button onClick={() => setTheme('dark')} aria-label="Dark">
          <MoonIcon className="h-6 w-6 text-neutral-500 hover:text-neutral-700 transition-all" />
        </button>
      }
      <div onClick={handleDarkMode} aria-label="Change Theme" className="transition-all cursor-pointer w-12 h-7 dark:bg-blue-500 bg-neutral-200 rounded-full relative">
        <div className="h-5 w-5 bg-white rounded-full absolute top-1 transition-all dark:left-6 left-1"></div>
      </div>
      <button onClick={handleDarkMode} aria-label="Change Theme" className={`${theme === "dark" ? "bg-neutral-800" : "bg-neutral-200"} relative flex gap-1 items-center px-1 py-0.5 rounded-full h-7`}>
        <span className="absolute w-5 h-5 rounded-full bg-blue-500 dark:left-[1.7rem] left-[5px] transition-all"></span>
        <span aria-hidden={true}><SunIcon className={`${theme === "dark" ? "text-white bg-white" : ""}h-5 w-5`} /></span>
        <span aria-hidden={true}><MoonIcon className="h-5 w-5 " /></span>
      </button>
      {theme == 'dark' ?
        <button onClick={handleDarkMode} aria-label="Change Theme" className="w-8 h-8 p-1 transition-all ease-in duration-200 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full">
          <SunIcon className="h-6 w-6 text-neutral-300 hover:text-neutral-200 transition-all" />
        </button>
        :
        <button onClick={handleDarkMode} aria-label="Change Theme" className="w-8 h-8 p-1 transition-all ease-in duration-200 bg-neutral-100 hover:bg-neutral-200 rounded-full">
          <MoonIcon className="h-6 w-6 text-neutral-600 hover:text-neutral-800 transition-all" />
        </button>
      }
    </>
  )
}