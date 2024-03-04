import { IconProps } from "services/types";

export const PlayIcon = ({ className }: IconProps) => {
	return (
		<svg
			width="50"
			height="50"
			viewBox="0 0 50 50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className ? className : "h-[2.5rem]"}
		>
			<ellipse cx="25.1951" cy="25.1988" rx="24.2985" ry="24.2803" fill="#101215" stroke="#888E8E" />
			<path
				d="M23.7 32.2961H21.8309V17.3544H23.7V19.2221H25.5691V22.0237H27.4382V23.8914H29.3073V25.7591H27.4382V27.6268H25.5691V30.4284H23.7V32.2961Z"
				fill="#CAE771"
			/>
		</svg>
	);
};
