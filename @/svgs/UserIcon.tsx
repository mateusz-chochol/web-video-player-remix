import { IconProps } from "services/types";

export const UserIcon = ({ className }: IconProps) => {
	return (
		<svg
			width="43"
			height="43"
			viewBox="0 0 43 43"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className ? className : "h-[2.5rem]"}
		>
			<circle cx="21.5" cy="21.5" r="21" fill="#D9D9D9" stroke="#827D7D" />
			<path
				d="M21.5 21.5C24.1244 21.5 26.25 19.3744 26.25 16.75C26.25 14.1256 24.1244 12 21.5 12C18.8756 12 16.75 14.1256 16.75 16.75C16.75 19.3744 18.8756 21.5 21.5 21.5ZM21.5 23.875C18.3294 23.875 12 25.4662 12 28.625V31H31V28.625C31 25.4662 24.6706 23.875 21.5 23.875Z"
				fill="#443B3B"
			/>
		</svg>
	);
};
