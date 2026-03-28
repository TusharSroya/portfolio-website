"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Tab {
  title: string;
  icon: LucideIcon;
  dropdown?: { title: string; href: string }[];
  type?: never;
}

interface Separator {
  type: "separator";
  title?: never;
  icon?: never;
}

type TabItem = Tab | Separator;

interface ExpandableTabsProps {
  tabs: TabItem[];
  className?: string;
  activeColor?: string;
  activeTab?: number | null;
  forceShowLabels?: boolean;
  onChange?: (index: number | null) => void;
}

const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
  },
  animate: (isSelected: boolean) => ({
    gap: isSelected ? ".5rem" : 0,
    paddingLeft: isSelected ? "1rem" : ".5rem",
    paddingRight: isSelected ? "1rem" : ".5rem",
  }),
};

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 },
};

const transition = { delay: 0.1, type: "spring" as const, bounce: 0, duration: 0.6 };

export function ExpandableTabs({
  tabs,
  className,
  activeColor = "text-primary",
  activeTab = null,
  forceShowLabels = false,
  onChange,
}: ExpandableTabsProps) {
  const [hovered, setHovered] = React.useState<number | null>(null);

  const Separator = () => (
    <div className="mx-1 h-[24px] w-[1.2px] bg-border" aria-hidden="true" />
  );

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "flex items-center gap-2 rounded-2xl border bg-background p-1 shadow-sm",
        forceShowLabels ? "justify-start xs:justify-center whitespace-nowrap" : "",
        className
      )}
    >
      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          // Hide separators on mobile when forcing labels to save space
          if (forceShowLabels) return null;
          return <Separator key={`separator-${index}`} />;
        }

        const Icon = tab.icon;
        return (
          <div 
            key={index} 
            className="relative"
            onMouseEnter={() => !forceShowLabels && setHovered(index)}
            onMouseLeave={() => !forceShowLabels && setHovered(null)}
          >
            <motion.button
              layout
              variants={buttonVariants}
              initial={false}
              animate="animate"
              custom={hovered === index || activeTab === index}
              onClick={() => {
                if (tab.dropdown) {
                  setHovered(hovered === index ? null : index);
                }
                onChange?.(index);
              }}
              transition={transition}
              className={cn(
                "relative flex items-center rounded-xl transition-colors duration-300 shrink-0",
                forceShowLabels ? "px-1.5 xs:px-2.5 py-1.5 gap-1" : "px-4 py-2",
                (hovered === index || activeTab === index)
                  ? cn("bg-muted", activeColor)
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon size={forceShowLabels ? 14 : 20} />
                <AnimatePresence initial={false}>
                  {(hovered === index || activeTab === index || forceShowLabels) && (
                    <motion.span
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "auto", opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={transition}
                      className={cn(
                        "overflow-hidden whitespace-nowrap",
                        forceShowLabels ? "text-[10px] sm:text-xs" : ""
                      )}
                    >
                      {tab.title}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              <AnimatePresence>
                {hovered === index && tab.dropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                      "absolute top-[calc(100%+0.5rem)] z-50 flex flex-col min-w-48 bg-background border border-sage/20 rounded-xl p-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.6)]",
                      index > 2 ? "right-0" : "left-0"
                    )}
                  >
                    <div className="flex flex-col w-full gap-0.5 relative">
                      {tab.dropdown.map(drop => (
                        <a 
                          key={drop.title} 
                          href={drop.href} 
                          className="text-left text-accent-cream/80 hover:text-sage hover:bg-sage/10 px-3 py-2 rounded-lg transition-colors text-sm whitespace-nowrap block w-full z-[60]"
                          onClick={(e) => {
                            e.stopPropagation();
                            setHovered(null);
                          }}
                        >
                          {drop.title}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
      })}
    </div>
  );
}
