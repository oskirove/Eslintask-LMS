import SidebarDashboard from "@/components/SidebarDashboard"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import Modal from "./_components/Modal"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <SidebarProvider>
        <SidebarDashboard />
        <SidebarTrigger />
        <SidebarInset>
          <main className="w-full">
            {children}
            <Modal />
          </main>
        </SidebarInset>
      </SidebarProvider>
    )
  }