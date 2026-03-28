"use client";

import { useRouter, usePathname } from "next/navigation";
import { ExpandableTabs } from "./ExpandableTabs";
import { Wrench, FolderGit2, Mail, Home, FileText, User } from "lucide-react";

export function HomeTabs({ forceShowLabels = false }: { forceShowLabels?: boolean }) {
  const router = useRouter();
  const pathname = usePathname();

  const links = ["/about", "", "#capabilities", "", "#work", "", "/resume", "", "#contact"];
  const activeTab = pathname === "/about" ? 0 : 
                    pathname === "/resume" ? 6 : 
                    pathname.startsWith("/portfolio") ? 4 : null;

  const navTabs = [
    { title: "About", icon: User },
    { type: "separator" },
    { title: forceShowLabels ? "Tools" : "Capabilities", icon: Wrench },
    { type: "separator" },
    { title: forceShowLabels ? "Work" : "My Work", 
      icon: FolderGit2,
      dropdown: [
        { title: "ValGenesis Escalations", href: "/portfolio/valgenesis" },
        { title: "NurseShield HealthTech MVP", href: "/portfolio/nurseshield" },
        { title: "Attio CRM Architecture", href: "/portfolio/attio" }
      ]
    },
    { type: "separator" },
    { title: forceShowLabels ? "CV" : "Resume", icon: FileText },
    { type: "separator" },
    { title: forceShowLabels ? "Mail" : "Contact", icon: Mail },
  ] as any;

  return (
    <ExpandableTabs 
      tabs={navTabs} 
      activeTab={activeTab}
      activeColor="text-sage" 
      forceShowLabels={forceShowLabels}
      className="border-sage/20 bg-background/50 backdrop-blur-md"
      onChange={(index) => {
        if (index !== null && links[index]) {
          router.push(links[index]);
        }
      }} 
    />
  );
}

export function PortfolioTabs({ forceShowLabels = false }: { forceShowLabels?: boolean }) {
  const router = useRouter();
  const pathname = usePathname();

  const links = ["/", "", "/about", "", "/#capabilities", "", "/#work", "", "/resume", "", "/#contact"];
  const activeTab = pathname === "/" ? 0 : 
                    pathname === "/about" ? 2 : 
                    pathname === "/resume" ? 8 : 
                    pathname.startsWith("/portfolio") ? 6 : null;

  const navTabs = [
    { title: "Home", icon: Home },
    { type: "separator" },
    { title: "About", icon: User },
    { type: "separator" },
    { title: forceShowLabels ? "Tools" : "Capabilities", icon: Wrench },
    { type: "separator" },
    { 
      title: forceShowLabels ? "Work" : "My Work", 
      icon: FolderGit2,
      dropdown: [
        { title: "ValGenesis Escalations", href: "/portfolio/valgenesis" },
        { title: "NurseShield HealthTech MVP", href: "/portfolio/nurseshield" },
        { title: "Attio CRM Architecture", href: "/portfolio/attio" }
      ]
    },
    { type: "separator" },
    { title: forceShowLabels ? "CV" : "Resume", icon: FileText },
    { type: "separator" },
    { title: forceShowLabels ? "Mail" : "Contact", icon: Mail },
  ] as any;

  return (
    <ExpandableTabs 
      tabs={navTabs} 
      activeTab={activeTab}
      activeColor="text-sage" 
      forceShowLabels={forceShowLabels}
      className="border-sage/20 bg-background/50 backdrop-blur-md"
      onChange={(index) => {
        if (index !== null && links[index]) {
          router.push(links[index]);
        }
      }} 
    />
  );
}
