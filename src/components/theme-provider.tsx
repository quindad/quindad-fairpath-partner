"use client";
import {createContext,useContext,useEffect,useState} from "react";
type Theme="light"|"dark";
const ThemeContext=createContext({theme:"dark" as Theme,toggle:()=>{}});
export function ThemeProvider({children}:{children:React.ReactNode}){
 const [theme,setTheme]=useState<Theme>("dark");
 useEffect(()=>{const saved=localStorage.getItem("fairpath-theme") as Theme|null; const next=saved??(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"); setTheme(next); document.documentElement.dataset.theme=next;},[]);
 const toggle=()=>setTheme(t=>{const n=t==="dark"?"light":"dark";document.documentElement.dataset.theme=n;localStorage.setItem("fairpath-theme",n);return n});
 return <ThemeContext.Provider value={{theme,toggle}}>{children}</ThemeContext.Provider>
}
export const useTheme=()=>useContext(ThemeContext);
