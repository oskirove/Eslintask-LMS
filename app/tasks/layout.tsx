import SidebarDashboard from "@/components/SidebarDashboard"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import Modal from "./_components/Modal"
import { Toaster } from "@/components/ui/sonner"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <SidebarProvider>
        <SidebarDashboard />
        <SidebarTrigger />
        <SidebarInset>
          <main className="w-full">
            {children}
            <Toaster position="bottom-right"/>
            <Modal />
          </main>
        </SidebarInset>
      </SidebarProvider>
    )
  }