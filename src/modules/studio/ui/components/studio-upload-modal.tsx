"use client";

import { ResponsiveDialog } from "@/components/responsive-dialog";
import { Button } from "@/components/ui/button";
import { trpc } from "@/trpc/client";
import { Loader2, Loader2Icon, PlusIcon } from "lucide-react";
import { toast } from "sonner";
import { StudioUploader } from "../studio-uploader";
import { useRouter } from "next/navigation";

export const StudioUploadModal = () => {
  const utils = trpc.useUtils();
  const router = useRouter();
  const create = trpc.videos.create.useMutation({
    onSuccess: () => {
      toast.success("Video created");
      utils.studio.getMany.invalidate();
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const onSuccess = () => {
    if (!create.data?.video.id) {
      return;
    }
    create.reset();
    router.push(`/studio/videos/${create.data?.video.id}`);
  };

  return (
    <>
      <ResponsiveDialog
        title="Upload a video"
        open={!!create.data}
        onOpenChange={() => create.reset()}
      >
        {create.data?.url ? (
          <StudioUploader
            endpoint={create.data.url}
            onSuccess={onSuccess}
          />
        ) : (
          <Loader2Icon />
        )}
      </ResponsiveDialog>
      <Button
        variant="secondary"
        onClick={() => create.mutate()}
        disabled={create.isPending}
      >
        {create.isPending ? <Loader2 className="animate-spin" /> : <PlusIcon />}
        Create
      </Button>
    </>
  );
};
