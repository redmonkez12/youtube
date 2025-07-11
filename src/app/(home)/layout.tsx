import { HomeLayout } from "@/modules/home/ui/layouts/home-layout";
import { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <HomeLayout>
            {children}
        </HomeLayout>
    );
}

export default Layout;
