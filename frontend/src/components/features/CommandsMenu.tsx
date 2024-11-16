import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function CommandsMenu() {
    const [open, setOpen] = useState(true)

    const input = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "q" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    function onSearch(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            e.preventDefault()
            const query = e.currentTarget.value.trim()
            if (query) {
                // if it exists open it, else add it
                console.log("search", query)
            }
        }
    }

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput ref={input} onKeyDown={onSearch} placeholder="Type a URL or Title......" />
            <CommandList>
                <CommandEmpty>Not Found, Press "Enter" to add it</CommandEmpty>
                <CommandGroup heading="options">
                    <CommandItem>
                        <Plus />
                        <span>Add Item</span>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    )
}

/**
 * Jobs:
 * - Search
 * - Quick Add
 */