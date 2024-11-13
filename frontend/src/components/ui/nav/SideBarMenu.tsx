import { SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { type LucideIcon } from "lucide-react"
import React from "react"

export interface SideNavMenuItem {
  title: string
  url: string
  icon: LucideIcon
  badge?: React.ReactNode
  isActive?: boolean
}

export function SideNavMenu({
  items,
  ...props
}: {
  items: SideNavMenuItem[]
} & React.ComponentPropsWithoutRef<typeof SidebarMenu>) {
  return (
    <SidebarMenu {...props}>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild isActive={item.isActive}>
            <a href={item.url}>
              <item.icon size={24} />
              <span>{item.title}</span>
            </a>
          </SidebarMenuButton>
          {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
