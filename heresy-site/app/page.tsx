// GENERAL IMPORTS --+
import Image from "next/image";
import Link from "next/link";

// REACT IMPORTS --+
import * as React from "react";
import { FaArrowsToEye } from "react-icons/fa6";


// COMPONENT IMPORTS --+
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

function ListItem({ title, children, href, ...props }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}


export default function Home() {
    return (<>
        <NavigationMenu viewport={false}>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger><FaArrowsToEye /></NavigationMenuTrigger>
                    <NavigationMenuContent className="custom-menu-content">
                        <ul className="grid w-[200px] bg-stone-850">
                            <ListItem href="/" title="Home">Return to the home page.</ListItem>
                            <ListItem href="/lore" title="Lore">Explore lore entries.</ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        <h1 className="text-center text-4xl font-bold tracking-tight text-balance">
            RESEARCH & DEVELOPMENT IN DYSTOPIA
        </h1>
    </>);
}
