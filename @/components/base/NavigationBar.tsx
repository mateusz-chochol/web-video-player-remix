import { leftNavigationMenuRoutes, rightNavigationMenuRoutes } from "@/lib/constants";
import { LogoIcon } from "@/svgs";

import { NavigationButtons } from "./NavigationButtons";

export const NavigationBar = () => {
	return (
		<header className="h-16 flex justify-between items-center self-center w-[70%]">
			<div className="flex gap-4 w-1/3 justify-center">
				<NavigationButtons routes={leftNavigationMenuRoutes} />
			</div>
			<div className="w-1/3 flex justify-center">
				<LogoIcon />
			</div>
			<div className="w-1/3 flex gap-4 justify-center">
				<NavigationButtons routes={rightNavigationMenuRoutes} />
			</div>
		</header>
	);
};
