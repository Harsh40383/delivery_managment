import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../auth/authSlice";

const navigation = [
  { name: "Dashboard", link: "#", user: true },
  { name: "Team", link: "#", user: true },
  { name: "admin", link: "/admin", admin: true },
  { name: "orders", link: "/admin/orders", admin: true },
];
const userNavigation = [
  { name: "My Profile", link: "/profile" },
  { name: "My Orders", link: "/orders" },
  { name: "Sign out", link: "/logout" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar({ children }) {
  const user = useSelector(selectLoggedInUser);
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <h1 className="text-2xl font-bold text-white">
                      Delivery
                    </h1>
                    
                  </div>

                  {/* Mobile menu button */}
                </div>
              </div>
            </>
          )}
        </Disclosure>

        
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}

export default Navbar;
