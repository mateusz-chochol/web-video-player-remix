import { useEffect } from "react";

import { ActionFunctionArgs, type MetaFunction, defer, json } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { getDiscountData, getMainPagePlaceholderImage, getMainPageVideo } from "server/api";

import { MainPage } from "@/components/pages/mainPage";

export const meta: MetaFunction = () => {
	return [
		{ title: "Netfire" },
		{
			name: "description",
			content: "Recruitment project. Hero section with video background.",
		},
	];
};

export async function loader() {
	const discountData = getDiscountData();
	const heroSectionPlaceholderImage = await getMainPagePlaceholderImage();

	return defer({
		discountData,
		heroSectionPlaceholderImage,
	});
}

export const action = async ({ request }: ActionFunctionArgs) => {
	const formData = await request.formData();
	const isSmallScreen = formData.get("isSmallScreen") === "true";

	const heroSectionVideo = await getMainPageVideo({
		doesScreenHaveLowResolution: isSmallScreen,
	});

	return json({
		heroSectionVideo,
	});
};

export default function Index() {
	const { heroSectionPlaceholderImage, discountData } = useLoaderData<typeof loader>();
	const videoFetcher = useFetcher<typeof action>();

	useEffect(() => {
		if (videoFetcher.state === "idle" && !videoFetcher.data) {
			const isSmallScreen = window.innerWidth < 768;

			videoFetcher.submit({ isSmallScreen }, { method: "post" });
		}
	}, [videoFetcher]);

	return (
		<MainPage
			discountData={discountData}
			heroSectionVideo={videoFetcher.data?.heroSectionVideo}
			heroSectionPlaceholderImage={heroSectionPlaceholderImage}
		/>
	);
}
