import React from "react";
import {
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import formatSlug from "@/utils/format-slug";
import Link from "next/link";

interface NavMenuProps {
  title: string;
  filters: Array<string>;
}

const NavMenu: React.FC<NavMenuProps> = ({ title, filters }) => {
  return (
    <MenubarMenu>
      <MenubarTrigger>{title}</MenubarTrigger>
      <MenubarContent>
        {filters.map((filter) => (
          <MenubarItem key={filter}>
            <Link href={`/?${formatSlug(title)}=${formatSlug(filter)}`}>
              {filter}
            </Link>
          </MenubarItem>
        ))}
      </MenubarContent>
    </MenubarMenu>
  );
};

export default NavMenu;
