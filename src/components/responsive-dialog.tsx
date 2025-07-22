import { useIsMobile } from "@/hooks/use-mobile";
import { PropsWithChildren } from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "./ui/drawer";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface ResponsiveDialogProps {
  open: boolean;
  title: string;
  onOpenChange: (open: boolean) => void;
}

export const ResponsiveDialog = ({
  open,
  title,
  onOpenChange,
  children,
}: PropsWithChildren<ResponsiveDialogProps>) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
          </DrawerHeader>
          {children}
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
