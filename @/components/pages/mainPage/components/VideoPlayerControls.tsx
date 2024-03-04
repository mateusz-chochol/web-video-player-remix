import { useCallback, useState } from "react";

import { Button, Progress } from "@/components/ui";
import { getFormattedTime } from "@/lib/utils";
import { PauseIcon, PlayIcon } from "@/svgs";

interface VideoPlayerControlsProps {
	video: typeof import("*.mp4") | undefined;
	videoRef: React.RefObject<HTMLVideoElement>;
	currentPlayTimeProgress: number;
}

export const VideoPlayerControls = ({ video, videoRef, currentPlayTimeProgress }: VideoPlayerControlsProps) => {
	const shouldControlsBeDisabled = !video || !videoRef.current;
	const [isVideoPlaying, setIsVideoPlaying] = useState(true);
	const [hoverTime, setHoverTime] = useState<string | null>(null);
	const [currentMouseXPosition, setCurrentMouseXPosition] = useState<number | null>(null);

	const triggerVideoPlayer = useCallback(() => {
		if (!videoRef.current) {
			return;
		}

		setIsVideoPlaying(videoRef.current.paused);

		if (videoRef.current.paused) {
			videoRef.current.play();
		} else {
			videoRef.current.pause();
		}
	}, [videoRef]);

	const handleVideoProgressClick = useCallback(
		(e: React.MouseEvent<HTMLDivElement>) => {
			if (!videoRef.current) {
				return;
			}

			const boundingRect = e.currentTarget.getBoundingClientRect();
			const clickPositionX = e.pageX - boundingRect.x;
			const clickPositionToTotalLengthRatio = clickPositionX / e.currentTarget.clientWidth;

			videoRef.current.currentTime = clickPositionToTotalLengthRatio * videoRef.current.duration;
		},
		[videoRef]
	);

	const handleVideoProgressHover = useCallback(
		(e: React.MouseEvent<HTMLDivElement>) => {
			if (!videoRef.current) {
				return;
			}

			const boundingRect = e.currentTarget.getBoundingClientRect();
			const hoverPositionX = e.pageX - boundingRect.x;
			const hoverPositionToTotalLengthRatio = hoverPositionX / e.currentTarget.clientWidth;

			const hoverTime = hoverPositionToTotalLengthRatio * videoRef.current.duration;

			if (isNaN(hoverTime)) {
				return;
			}

			setHoverTime(getFormattedTime(hoverTime));
			setCurrentMouseXPosition(e.pageX + e.currentTarget.offsetLeft - boundingRect.x);
		},
		[videoRef]
	);

	const handleVideoProgressHoverLeave = useCallback(() => {
		setHoverTime(null);
		setCurrentMouseXPosition(null);
	}, []);

	return (
		<div className="flex gap-4 items-center p-4 border border-solid border-playerControlsBorder bg-playerControlsBackground rounded-lg">
			<Button variant="icon" size="icon" onClick={triggerVideoPlayer} disabled={shouldControlsBeDisabled}>
				{isVideoPlaying && !shouldControlsBeDisabled ? <PauseIcon /> : <PlayIcon />}
			</Button>
			<Progress
				className={`${shouldControlsBeDisabled ? "pointer-events-none" : ""} `}
				value={currentPlayTimeProgress}
				onClick={handleVideoProgressClick}
				onMouseMove={handleVideoProgressHover}
				onMouseOut={handleVideoProgressHoverLeave}
			/>
			{hoverTime && (
				<p
					className="absolute pointer-events-none font-exo mt-[-2.5rem] text-white"
					style={{ left: `${currentMouseXPosition}px` }}
				>
					{hoverTime}
				</p>
			)}
			{videoRef.current && !isNaN(videoRef.current.duration) && (
				<p className="font-exo text-white">{getFormattedTime(videoRef.current.duration)}</p>
			)}
		</div>
	);
};
