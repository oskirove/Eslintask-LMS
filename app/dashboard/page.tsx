import BlurFade from "@/components/ui/blur-fade";
import HeaderDashboard from "./_components/HeaderDashboard";
import BannerPanel from "./_components/BannerPanel";
import { Button } from "@/components/ui/button";
import { SquarePen } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
    return (
        <main>
            <div className="m-3 px-2">
                <HeaderDashboard />
                <BlurFade delay={0.25} inView>
                    <BannerPanel />
                    <div className="flex items-center justify-between w-full mt-2 p-3">
                        <Button type="button" className="rounded-xl bg-blue-200 text-blue-600 bg-opacity-30 hover:bg-blue-300/40 dark:bg-blue-900 dark:text-blue-500 dark:bg-opacity-30 dark:hover:bg-blue-900/40" variant="secondary">
                            <Link href="/create" className="flex items-center gap-1">
                                Crear <SquarePen />
                            </Link>
                        </Button>
                        <Button className="flex rounded-xl items-center bg-blue-200 text-blue-600 bg-opacity-30 hover:bg-blue-300/40 dark:bg-blue-900 dark:text-blue-500 dark:bg-opacity-30 dark:hover:bg-blue-900/40" variant="secondary">
                            Refrescar
                        </Button>
                    </div>
                </BlurFade>
            </div>
        </main>
    )
}
