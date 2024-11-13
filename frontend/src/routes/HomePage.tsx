import BreadcrumpItems from "@/components/ui/headers/BreadcrumpItems";
import TitleBar from "@/components/ui/headers/TitleBar";
import { MoreVertical } from "lucide-react";
// import { EllipsisVertical } from "lucide-react";

export default function HomePage() {
    return (
        <>
            <TitleBar endContent={<MoreVertical />}>
                <BreadcrumpItems items={[{ link: "ddd", label: "tag1" }, "Home"]} />
            </TitleBar>
            <div className="flex flex-1 flex-col gap-4 px-4 py-10">
                <div className="mx-auto h-52 w-full max-w-3xl rounded-xl bg-muted/50" />
                <div className="mx-auto h-full w-full max-w-3xl rounded-xl bg-muted/50" />
            </div>
        </>
    )
}