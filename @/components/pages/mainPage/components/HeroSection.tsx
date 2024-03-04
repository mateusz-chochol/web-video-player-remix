import { useEffect, useRef, useState } from "react";

import { Badge } from "@/components/ui";

import { VideoPlayerControls } from "./VideoPlayerControls";

export type HeroSectionProps = {
	placeholderImage: typeof import("*.jpg");
	video: typeof import("*.mp4") | undefined;
};

export const HeroSection = ({ placeholderImage, video }: HeroSectionProps) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [currentPlayTimeProgress, setCurrentPlayTimeProgress] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (!videoRef.current) {
				return;
			}

			setCurrentPlayTimeProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
		}, 30);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="flex justify-center h-40rem relative">
			<video
				playsInline
				autoPlay
				muted
				loop
				poster={placeholderImage.default}
				className="w-full object-cover object-center pointer-events-none"
				ref={videoRef}
			>
				{video && <source src={video.default} type="video/mp4" />}
				<img src={placeholderImage.default} alt="placeholder" />
			</video>
			<div className="flex flex-col absolute gap-4 bottom-[20%] w-3/4">
				<div>
					<Badge className="h-[2.5rem] bg-heroBadge">LOREM IPSUM</Badge>
				</div>
				<div>
					<p className="w-fit page-gradient-text text-5xl font-spaceGrotesk font-semibold">
						Lorem Ipsum Dolor Sit amet
					</p>
					<p className="text-5xl w-fit max-w-[60rem] mb-8 font-spaceGrotesk font-semibold">
						Donec cursus ligula diam, nec congue augue ultrices nec.
					</p>
				</div>
				<VideoPlayerControls
					video={video}
					videoRef={videoRef}
					currentPlayTimeProgress={currentPlayTimeProgress}
				/>
			</div>
		</div>
	);
};
