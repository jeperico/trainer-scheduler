import React from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import formatSlug from '@/utils/format-slug';
import { Separator } from '@/components/ui/separator';

interface NavMenuProps {
  title: string;
  filters: Array<string>;
}

const NavMenu: React.FC<NavMenuProps> = ({ title, filters }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[420px]">
              {filters.map((filter) => (
                <NavigationMenuLink
                  key={filter}
                  href={`/?${formatSlug(title)}=${formatSlug(filter)}`}
                >
                  {filter}
                  <Separator />
                </NavigationMenuLink>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
