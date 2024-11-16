import { SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { type LucideIcon } from "lucide-react"
import React from "react"

export interface SideNavMenuItem {
  title: string
  url?: string
  icon: LucideIcon
  badge?: React.ReactNode
  isActive?: boolean
}

export function SidebarNavMenu({
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

type SideNavMenuButton = React.ComponentProps<typeof SidebarMenuButton> & SideNavMenuItem & { href?: string }

export function SidebarNavMenuButton({
  title,
  url,
  href,
  badge,
  ...props
}: SideNavMenuButton) {

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild {...props}>
        <a href={href || url}>
          <props.icon size={24} />
          <span>{title}</span>
        </a>
      </SidebarMenuButton>
      {badge && <SidebarMenuBadge>{badge}</SidebarMenuBadge>}
    </SidebarMenuItem>
  )
}
