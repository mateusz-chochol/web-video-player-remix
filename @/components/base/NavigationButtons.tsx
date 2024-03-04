import { Link, useLocation } from "@remix-run/react";
import { Route } from "services/types";

import { Button } from "../ui";

interface NavigationButtonsProps {
	routes: Route[];
}

export const NavigationButtons = ({ routes }: NavigationButtonsProps) => {
	const location = useLocation();

	const getButtonClassName = (path: string) => {
		return `font-navigation ${location.pathname === path ? "" : "bg-inactiveNavButton"}`;
	};

	return (
		<>
			{routes.map((route) => (
				<Button
					key={route.path}
					variant={route.isIcon ? "icon" : "nav"}
					size={route.isIcon ? "iconSmall" : "sm"}
					className={getButtonClassName(route.path)}
					asChild
				>
					<Link to={route.path}>{route.isIcon ? route.icon : route.displayName}</Link>
				</Button>
			))}
		</>
	);
};
