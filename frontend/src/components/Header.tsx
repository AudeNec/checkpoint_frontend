import { Link } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl font-bold text-nowrap">
            Checkpoint : frontend
          </h1>
          <NavigationMenu className="max-w-full">
            <NavigationMenuList className="flex-nowrap">
              <NavigationMenuLink>
                <Link
                  to="/"
                  className="sm:pl-8 sm:pr-8 px-4 rounded-md text-lg text-nowrap"
                >
                  Home
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink>
                <Link
                  to="/countries"
                  className="sm:pl-8 sm:pr-8 px-4 rounded-md text-lg text-nowrap"
                >
                  Countries
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink>
                <Link
                  to="/countries/new"
                  className="sm:pl-8 sm:pr-8 px-4 rounded-md text-lg text-nowrap"
                >
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
