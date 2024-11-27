import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import SidebarDashboard from "../../components/SidebarDashboard"


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SidebarDashboard />
      <SidebarTrigger />
      <SidebarInset>
        <main className="w-full">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}