"use client";

import { trpc } from "@/trpc/client";

export const PageClient = () => {
    const [data] = trpc.hello.useSuspenseQuery({ text: "client" });

    return (
        <div>
            <h1>Client {data.greeting}</h1>
        </div>
    );
}