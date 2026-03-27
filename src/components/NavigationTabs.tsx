"use client";

import { ExpandableTabs } from "./ExpandableTabs";
import { Wrench, FolderGit2, Mail, Home, FileText, User } from "lucide-react";

export function HomeTabs() {
  const navTabs = [
    { title: "About", icon: User },
    { type: "separator" },
    { title: "Capabilities", icon: Wrench },
    { type: "separator" },
    { 
      title: "My Work", 
      icon: FolderGit2,
      dropdown: [
        { title: "ValGenesis Escalations", href: "/portfolio/valgenesis" },
        { title: "NurseShield HealthTech MVP", href: "/portfolio/nurseshield" },
        { title: "Attio CRM Architecture", href: "/portfolio/attio" }
      ]
    },
    { type: "separator" },
    { title: "Resume", icon: FileText },
    { type: "separator" },
    { title: "Contact", icon: Mail },
  ] as any;

  return (
    <ExpandableTabs 
      tabs={navTabs} 
      activeColor="text-sage" 
      className="border-sage/20 bg-background/50 backdrop-blur-md"
      onChange={(index) => {
        const links = ["/about", "", "#capabilities", "", "#work", "", "/resume", "", "#contact"];
        if (index !== null && links[index]) {
          window.location.href = links[index];
        }
      }} 
    />
  );
}

export function PortfolioTabs() {
  const navTabs = [
    { title: "Home", icon: Home },
    { type: "separator" },
    { title: "About", icon: User },
    { type: "separator" },
    { title: "Capabilities", icon: Wrench },
    { type: "separator" },
    { 
      title: "My Work", 
      icon: FolderGit2,
      dropdown: [
        { title: "ValGenesis Escalations", href: "/portfolio/valgenesis" },
        { title: "NurseShield HealthTech MVP", href: "/portfolio/nurseshield" },
        { title: "Attio CRM Architecture", href: "/portfolio/attio" }
      ]
    },
    { type: "separator" },
    { title: "Resume", icon: FileText },
    { type: "separator" },
    { title: "Contact", icon: Mail },
  ] as any;

  return (
    <ExpandableTabs 
      tabs={navTabs} 
      activeColor="text-sage" 
      className="border-sage/20 bg-background/50 backdrop-blur-md"
      onChange={(index) => {
        const links = ["/", "", "/about", "", "/#capabilities", "", "/#work", "", "/resume", "", "/#contact"];
        if (index !== null && links[index]) {
          window.location.href = links[index];
        }
      }} 
    />
  );
}
