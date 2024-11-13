import { Separator } from "@radix-ui/react-separator";
import { Quit, WindowIsMaximised, WindowMinimise, WindowToggleMaximise } from "@wailsjs/runtime/runtime";
import { Maximize, Minimize, Minus, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button, ButtonProps } from "../button";
import { SidebarTrigger } from "../sidebar";

export default function TitleBar({
    children,
    endContent,
}: {
    children?: React.ReactNode
    endContent?: React.ReactNode
}) {
    const [isMaximized, setIsMaximized] = useState(false);

    useEffect(() => {
        WindowIsMaximised().then(setIsMaximized);
    }, []);

    function toggleMaximize() {
        setIsMaximized(!isMaximized);
        WindowToggleMaximise();
    }

    return (
        <header
            className="flex h-14 shrink-0 items-center gap-2 wails-draggable"
            onDoubleClick={toggleMaximize}
        >
            <div className="flex flex-1 items-center gap-2 px-3">
                <SidebarTrigger />
                <Separator orientation="vertical" className="mr-2 h-4" />

                {children}
            </div>
            <div className="ml-auto px-3 flex items-center gap-2">
                {endContent}
                <WindowControls
                    isMaximized={isMaximized}
                    toggleMaximize={toggleMaximize}
                />
            </div>
        </header>
    )
}

function WindowControls({
    isMaximized,
    toggleMaximize,
}: {
    isMaximized: boolean
    toggleMaximize: () => void
}) {

    const buttonProps: ButtonProps = {
        className: "h-7 w-7",
        variant: "ghost",
        size: "icon",
    }

    return (
        <>
            <Button onClick={WindowMinimise} {...buttonProps}>
                <Minus size={18} />
            </Button>
            <Button onClick={toggleMaximize} {...buttonProps}>
                {isMaximized ? <Minimize size={18} /> : <Maximize size={18} />}
            </Button>
            <Button onClick={Quit} {...buttonProps} >  {/* // maybe add a dialog?  */}
                <X size={18} />
            </Button>
        </>
    )
}