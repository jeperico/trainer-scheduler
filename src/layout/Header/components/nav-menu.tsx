"use client";

import React from "react";
import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import formatSlug from "@/utils/format-slug";
import Link from "next/link";

interface NavMenuProps {
  title: string;
  filters: Array<{
    name: string;
    isDisabled: boolean;
  }>;
}

const NavMenu: React.FC<NavMenuProps> = ({ title, filters }) => {
  return (
    <MenubarMenu>
      <MenubarTrigger>{title}</MenubarTrigger>
      <MenubarContent>
        {filters.map((filter) => (
          <MenubarItem key={filter.name} disabled={filter.isDisabled}>
            <Link href={`/?${formatSlug(title)}=${formatSlug(filter.name)}`}>
              {filter.name}
            </Link>
          </MenubarItem>
        ))}
      </MenubarContent>
    </MenubarMenu>
  );
};

export default NavMenu;
