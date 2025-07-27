import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { forwardRef, useState } from "react";
import Hero from "./Hero";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full relative z-50">
        <div className="mx-auto flex items-center max-w-7xl px-4 relative">
          {/* Centered Navigation */}
          <div className="flex-1 flex justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Our Products
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Discover our range of innovative solutions
                              designed to meet your needs.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem
                        href="/products/software"
                        title="Software Solutions"
                      >
                        Custom software development and enterprise applications.
                      </ListItem>
                      <ListItem href="/products/web" title="Web Development">
                        Modern web applications and responsive websites.
                      </ListItem>
                      <ListItem href="/products/mobile" title="Mobile Apps">
                        Native and cross-platform mobile applications.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    href="/tickets"
                  >
                    Tickets
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    href="/about"
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    href="/pricing"
                  >
                    Pricing
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Auth Buttons - Positioned absolutely to the right */}
          <div className="absolute right-4 flex items-center gap-4">
            <button
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent hover:bg-accent"
              )}
            >
              Log In
            </button>
            <button
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-blue-400 text-primary-foreground hover:bg-primary/90"
              )}
            >
              Register
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Hero />
      </div>
    </>
  );
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default App;
