"use client";

import { InfiniteScroll } from "@/components/infinite-scroll";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { snakeCaseToTitleCase } from "@/lib/utils";
import { VideoThumbnail } from "@/modules/videos/ui/components/video-thumbnail/video-thumbnail";
import { trpc } from "@/trpc/client";
import { format } from "date-fns";
import { GlobeIcon, LockIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export const VideosSection = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VideosSectionSuspense />
    </Suspense>
  );
};

const VideosSectionSuspense = () => {
  const [videos, query] = trpc.studio.getMany.useSuspenseInfiniteQuery(
    {
      limit: 5,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );

  return (
    <div>
      <div className="border-y">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-6 w-[510px]">Video</TableHead>
              <TableHead>Visibility</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="">Views</TableHead>
              <TableHead className="">Comments</TableHead>
              <TableHead className="">Likes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {videos.pages
              .flatMap((page) => page.items)
              .map((video) => (
                <TableRow key={video.id} className="cursor-pointer">
                  <TableCell>
                    <Link
                      href={`/studio/videos/${video.id}`}
                      prefetch
                      className="block"
                    >
                      <div className="flex items-center gap-4">
                        <div className="relative aspect-video w-36 shrink-0">
                          {/* <VideoThumbnail
                            imageUrl={video.thumbnailUrl}
                            previewUrl={video.previewUrl}
                            title={video.title}
                            duration={video.duration || 0}
                          /> */}
                        </div>
                        <div className="flex flex-col overflow-hidden gap-y-1">
                          <span className="text-sm text-muted-foreground line-clamp-1">
                            {video.title}
                          </span>
                          <span className="text-xs line-clamp-1">
                            {video.description || "No description"}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {/* {video.visibility === "private" ? (
                        <LockIcon className="size-4 mr-2" />
                      ) : (
                        <GlobeIcon className="size-4 mr-2" />
                      )} */}
                      {/* {snakeCaseToTitleCase(video.visibility)} */}
                    </div>
                  </TableCell>
                  <TableCell className="text-sm truncate">
                    <div className="flex items-center">
                      {/* {snakeCaseToTitleCase(video.muxStatus || "error loading")} */}
                    </div>
                  </TableCell>
                  <TableCell>{format(video.createdAt, "d MMM yyyy")}</TableCell>
                  <TableCell>Views</TableCell>
                  <TableCell>Comments</TableCell>
                  <TableCell>Likes</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      <InfiniteScroll
        isManual
        hasNextPage={query.hasNextPage}
        isFetchingNextPage={query.isFetchingNextPage}
        fetchNextPage={query.fetchNextPage}
      />
    </div>
  );
};
