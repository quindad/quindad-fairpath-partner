"use client";
import {Moon,Sun} from "lucide-react";
import {useTheme} from "./theme-provider";
export function ThemeToggle(){const {theme,toggle}=useTheme();return <button className="iconButton" onClick={toggle} aria-label="Toggle color theme">{theme==="dark"?<Sun size={18}/>:<Moon size={18}/>}</button>}
