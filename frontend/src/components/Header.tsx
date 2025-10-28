import { Link } from "react-router-dom";

import { useIsMobile } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

export function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl font-bold">Checkpoint : frontend</h1>
          <NavigationMenu viewport={isMobile}>
            <NavigationMenuList className="flex-wrap">
              <NavigationMenuLink>
                <Link to="/" className="pl-8 pr-8 rounded-md">
                  Home
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink>
                <Link to="/countries" className="pl-8 pr-8 rounded-md">
                  Countries
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink>
                <Link to="/countries/new" className="pl-8 pr-8 rounded-md">
                  Add Country
                </Link>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}
