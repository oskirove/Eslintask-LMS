"use client";

import { Feather, HelpCircle, LayoutDashboard, MessagesSquare, Notebook, Settings2 } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";

const items = [
    {
        title: "Panel",
        url: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Mensajes",
        url: "#",
        icon: MessagesSquare,
    },
    {
        title: "Tareas",
        url: "/tasks",
        icon: Notebook,
    },
    {
        title: "Ajustes",
        url: "#",
        icon: Settings2,
    },
    {
        title: "Super Eslint",
        url: "/pricing",
        icon: Feather,
    },
]

export default function SidebarDashboard() {

    const path = usePathname();

    return (
        <Sidebar variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <div className="flex pt-3 px-1 items-center">
                            <div className="p-2 h-12 w-12 shadow-lg bg-blue-600 dark:bg-blue-900 rounded-xl">
                                <Image
                                    priority
                                    src="/logos/icono.png"
                                    alt="Logo de la app web de organización y optimización de tareas Eslintask."
                                    width={30}
                                    height={30}
                                    className=""
                                />
                            </div>
                            <div className="px-2 ">
                                <p className="font-bold">Bienvenido</p>
                                <p className="text-xs font-thin">a tu espacio personal</p>
                            </div>

                        </div>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Inicio</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}
                                            className={`${path === item.url && "bg-blue-200 text-blue-600 bg-opacity-30 bg-blue-200/40 dark:bg-blue-900 dark:text-blue-500 dark:bg-opacity-30 "}`}
                                        >
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent >
            <SidebarFooter>
                <SidebarMenu>
                    <p className="duration-200 flex h-8 shrink-0 items-center rounded-md text-sm mx-2 font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0,group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0">Lints disponibles: 4</p>
                    <SidebarMenuItem>
                        <div className="px-2">
                            <Progress value={20} />
                            <span className="flex items-center gap-1">
                                <p className="duration-200 flex h-6 shrink-0 items-center rounded-md text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0,group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0">1 de 5 Lints utilizados</p>
                                <Link href="/dashboard/pricing" className="font-bold text-xs">
                                    <AnimatedShinyText className="items-center justify-center transition ease-out">
                                        obtén más
                                    </AnimatedShinyText>
                                </Link>
                            </span>
                        </div>
                    </SidebarMenuItem>
                </SidebarMenu>
                <SidebarGroupLabel>Soporte</SidebarGroupLabel>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <HelpCircle /> Ayuda
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar >
    )
}
