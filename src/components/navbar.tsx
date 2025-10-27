'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavbarProps {
    className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
    const [active, setActive] = useState<string>('Home');

    return (
        <div className={cn("fixed top-[2vw] inset-x-0 max-w-2xl  mx-auto z-50", className)}>
            <Menu setActive={(item) => item && setActive(item)}>
                <Link href="/">
                    <MenuItem setActive={setActive} active={active} item="Home">
                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Our courses">
                    
                    <div className="flex flex-col gap-2 p-4 text-sm">
                        <HoveredLink href="/courses">All Courses</HoveredLink>
                        <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
                        <HoveredLink href="/courses">Advanced Music Theory</HoveredLink>
                        <HoveredLink href="/courses">Music Production</HoveredLink>
                        <HoveredLink href="/courses">Music History</HoveredLink>
                    </div>
                </MenuItem>
                <Link href="/contact">
                    <MenuItem setActive={setActive} active={active} item="Contact us">
                
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    );
};

export default Navbar;