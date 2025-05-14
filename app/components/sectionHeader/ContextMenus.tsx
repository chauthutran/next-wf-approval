'use client';

import { useEffect, useRef, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Menus from "./Menus";

export default function ContextMenus () {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef<HTMLUListElement>(null);
    
    const handleClickOutside = (e: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
          setShowMenu(false);
        }
      
    };
    
    useEffect(() => {
        if (showMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showMenu])
    
    const handleClick = () => setShowMenu(true);
    
    return (
        <div className="relative">
            <button onClick={handleClick} className="cursor-pointer">
                <HiOutlineDotsVertical />
            </button>

            {showMenu && (
                <ul
                    className="absolute z-50 bg-white shadow-lg border rounded w-48 py-1 right-0 text-black"
                    ref={menuRef}
                >
                    <Menus />
                </ul>
            )}
        </div>
    )
}