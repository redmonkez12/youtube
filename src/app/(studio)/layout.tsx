import { StudioLayout } from "@/modules/studio/ui/layouts/studio-layout";
import { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <StudioLayout>
            {children}
        </StudioLayout>
    );
}

export default Layout;
