"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface CommandMenuItem {
  id: string;
  label: string;
  category: string;
  action: () => void;
  shortcut?: string;
}

export function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const commands: CommandMenuItem[] = [
    {
      id: "home",
      label: "Home",
      category: "Navigation",
      action: () => {
        router.push("/");
        setOpen(false);
      },
    },
    {
      id: "about",
      label: "About",
      category: "Navigation",
      action: () => {
        router.push("/about");
        setOpen(false);
      },
    },
    {
      id: "contact",
      label: "Contact",
      category: "Navigation",
      action: () => {
        router.push("/contact");
        setOpen(false);
      },
    },
    {
      id: "demo",
      label: "Demo",
      category: "Navigation",
      action: () => {
        router.push("/demo");
        setOpen(false);
      },
    },
    {
      id: "blog",
      label: "Blog",
      category: "Navigation",
      action: () => {
        router.push("/blog");
        setOpen(false);
      },
    },
    {
      id: "data",
      label: "Data Management",
      category: "Navigation",
      action: () => {
        router.push("/data");
        setOpen(false);
      },
    },
    {
      id: "dashboard",
      label: "Dashboard",
      category: "Navigation",
      action: () => {
        router.push("/dashboard");
        setOpen(false);
      },
    },
  ];

  const categories = Array.from(new Set(commands.map((c) => c.category)));

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0 overflow-hidden max-w-2xl">
        <Command className="rounded-lg border shadow-md">
          <div className="flex items-center border-b px-3">
            <span className="text-lg mr-2">🔍</span>
            <Command.Input
              placeholder="Type a command or search..."
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              ESC
            </kbd>
          </div>
          <Command.List className="max-h-[300px] overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
              No results found.
            </Command.Empty>
            {categories.map((category) => (
              <Command.Group
                key={category}
                heading={category}
                className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground"
              >
                {commands
                  .filter((command) => command.category === category)
                  .map((command) => (
                    <Command.Item
                      key={command.id}
                      value={command.label}
                      onSelect={command.action}
                      className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                    >
                      {command.label}
                      {command.shortcut && (
                        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                          {command.shortcut}
                        </kbd>
                      )}
                    </Command.Item>
                  ))}
              </Command.Group>
            ))}
          </Command.List>
          <div className="border-t p-2 text-xs text-muted-foreground">
            <div className="flex items-center justify-between">
              <span>Press ⌘K or Ctrl+K to open</span>
              <span>↑↓ to navigate • ↵ to select • ESC to close</span>
            </div>
          </div>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
