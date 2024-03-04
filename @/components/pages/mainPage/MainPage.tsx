import { Suspense } from "react";

import { Await } from "@remix-run/react";
import { DiscountData } from "services/types";

import { Footer, NavigationBar, SectionDivider } from "../../base";
import { Content } from "./Content";
import { DiscountCodeBanner } from "./components";

interface MainPageProps {
	discountData: DiscountData | Promise<DiscountData>;
	heroSectionPlaceholderImage: typeof import("*.jpg");
	heroSectionVideo: typeof import("*.mp4") | undefined;
	hideDiscountCodeBanner?: boolean;
	hideNavigationBar?: boolean;
	hideFooter?: boolean;
}

export const MainPage = ({
	discountData,
	heroSectionPlaceholderImage,
	heroSectionVideo,
	hideDiscountCodeBanner,
	hideNavigationBar,
	hideFooter,
}: MainPageProps) => {
	return (
		<div className="min-h-dvh min-w-full flex flex-col">
			{hideDiscountCodeBanner ? null : (
				<Suspense fallback={null}>
					<Await resolve={discountData}>
						{(discountData) => (
							<>
								<DiscountCodeBanner discountData={discountData} />
								<SectionDivider />
							</>
						)}
					</Await>
				</Suspense>
			)}
			{hideNavigationBar ? null : <NavigationBar />}
			<div className="grow">
				<Content placeholderImage={heroSectionPlaceholderImage} video={heroSectionVideo} />
			</div>
			{hideFooter ? null : (
				<>
					<SectionDivider />
					<Footer />
				</>
			)}
		</div>
	);
};
