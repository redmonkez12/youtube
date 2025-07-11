import { PropsWithChildren } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";

export const HomeLayout = ({ children }: PropsWithChildren) => {
    return (
        <SidebarProvider>
            <div className="w-full">
                <HomeNavbar />
                {children}
            </div>
        </SidebarProvider>
    );
}
