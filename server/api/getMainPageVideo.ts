export const getMainPageVideo = async ({ doesScreenHaveLowResolution }: { doesScreenHaveLowResolution: boolean }) => {
	await new Promise((resolve) => {
		setTimeout(resolve, 1000);
	});

	return doesScreenHaveLowResolution
		? import("assets/videos/hero-section-video-540p.mp4")
		: import("assets/videos/hero-section-video-1080p.mp4");
};
