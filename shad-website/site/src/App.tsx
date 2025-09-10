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
import { forwardRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Quote from "./pages/Quote";
import Pricing from "./pages/Pricing";
import Tickets from "./pages/Tickets";
import "./App.css";

function Navigation() {
  const location = useLocation();

  return (
    <div className="w-full relative z-50">
      <div className="mx-auto flex items-center max-w-7xl px-4 relative">
        {/* Logo - Hidden on small devices */}
        <div className="absolute left-0 flex items-center hidden lg:flex">
          <Link to="/">
            <img
              src="/shad.png"
              alt="Shad Software Logo"
              className="h-30 w-auto"
            />
          </Link>
        </div>

        {/* Centered Navigation */}
        <div className="flex-1 flex justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg font-medium">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          to="/"
                        >
                          <div className="mb-2 mt-4 text-xl font-medium">
                            Our Products
                          </div>
                          <p className="text-base leading-tight text-muted-foreground">
                            Discover our range of innovative solutions designed
                            to meet your needs.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/" title="Website Design">
                      Modern custom designs made for your brand.
                    </ListItem>
                    <ListItem href="/" title="Mobile Apps">
                      Intelligent mobile solutions for iOS and Android.
                    </ListItem>
                    <ListItem href="/" title="Maintenance">
                      Website maintenance and support services.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-lg font-medium",
                      location.pathname === "/pricing" ? "bg-accent" : ""
                    )}
                    to="/pricing"
                  >
                    Pricing
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-lg font-medium",
                      location.pathname === "/quote" ? "bg-accent" : ""
                    )}
                    to="/quote"
                  >
                    Get Quote
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-lg font-medium",
                      location.pathname === "/tickets" ? "bg-accent" : ""
                    )}
                    to="/tickets"
                  >
                    Support
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Auth Buttons - Hidden on small devices */}
        <div className="absolute right-0 flex items-center gap-4 hidden lg:flex">
          <button
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent hover:bg-accent text-lg font-medium px-5 py-5" 
            )}
          >
            Log In
          </button>
          <button
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-blue-400 text-primary-foreground hover:bg-primary/90 text-lg font-medium px-5 py-5"
            )}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navigation />
      <div className="relative z-10 mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
      </div>
    </Router>
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
          <div className="text-base font-medium leading-none">{title}</div>
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
