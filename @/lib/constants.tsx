import { Route } from "services/types";

import { CartIcon, SearchIcon, UserIcon } from "@/svgs";

export const routes: Route[] = [
	{
		path: "/",
		displayName: "HOME",
		isIcon: false,
	},
	{
		path: "/about",
		displayName: "ABOUT",
		isIcon: false,
	},
	{
		path: "/products",
		displayName: "PRODUCTS",
		isIcon: false,
	},
	{
		path: "/cart",
		icon: <CartIcon />,
		isIcon: true,
	},
	{
		path: "/user",
		icon: <UserIcon />,
		isIcon: true,
	},
	{
		path: "/search",
		icon: <SearchIcon />,
		isIcon: true,
	},
];

export const leftNavigationMenuRoutes: Route[] = [routes[0], routes[1], routes[2]];

export const rightNavigationMenuRoutes: Route[] = [routes[3], routes[4], routes[5]];
