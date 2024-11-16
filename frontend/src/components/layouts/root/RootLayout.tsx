import { RootSidebar } from "@/components/layouts/root/sidebar/RootSidebar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({ children }: { children?: React.ReactNode }) {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="theme">
                <SidebarProvider>
                    <RootSidebar />
                    <SidebarInset>
                        {children}
                    </SidebarInset>
                </SidebarProvider>
        </ThemeProvider>
    )
}