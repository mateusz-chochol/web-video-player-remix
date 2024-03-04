import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export const getFormattedTime = (time: number) => {
	const minutes = Math.floor(time / 60);
	const seconds = Math.ceil(time - minutes * 60);

	return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};
