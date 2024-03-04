import { IconProps } from "services/types";

export const CartIcon = ({ className }: IconProps) => {
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
				d="M17.6973 32C17.175 32 16.7281 31.8141 16.3565 31.4424C15.9843 31.07 15.7982 30.6225 15.7982 30.1C15.7982 29.5775 15.9843 29.13 16.3565 28.7576C16.7281 28.3859 17.175 28.2 17.6973 28.2C18.2195 28.2 18.6664 28.3859 19.038 28.7576C19.4103 29.13 19.5964 29.5775 19.5964 30.1C19.5964 30.6225 19.4103 31.07 19.038 31.4424C18.6664 31.8141 18.2195 32 17.6973 32ZM27.1927 32C26.6705 32 26.2236 31.8141 25.852 31.4424C25.4798 31.07 25.2936 30.6225 25.2936 30.1C25.2936 29.5775 25.4798 29.13 25.852 28.7576C26.2236 28.3859 26.6705 28.2 27.1927 28.2C27.715 28.2 28.1622 28.3859 28.5344 28.7576C28.906 29.13 29.0918 29.5775 29.0918 30.1C29.0918 30.6225 28.906 31.07 28.5344 31.4424C28.1622 31.8141 27.715 32 27.1927 32ZM21.7803 19.935C21.6062 19.7608 21.5192 19.5392 21.5192 19.27C21.5192 19.0008 21.6062 18.7792 21.7803 18.605L22.6112 17.75H19.5964C19.3273 17.75 19.102 17.6591 18.9203 17.4773C18.738 17.295 18.6468 17.0692 18.6468 16.8C18.6468 16.5308 18.738 16.3051 18.9203 16.1227C19.102 15.9409 19.3273 15.85 19.5964 15.85H22.6112L21.7566 14.995C21.5667 14.805 21.4758 14.5833 21.4841 14.33C21.4917 14.0767 21.5904 13.855 21.7803 13.665C21.9702 13.4908 22.1918 13.3996 22.445 13.3914C22.6982 13.3838 22.9198 13.475 23.1097 13.665L25.5785 16.135C25.6735 16.23 25.7409 16.3329 25.7808 16.4437C25.82 16.5546 25.8396 16.6733 25.8396 16.8C25.8396 16.9267 25.82 17.0454 25.7808 17.1562C25.7409 17.2671 25.6735 17.37 25.5785 17.465L23.1097 19.935C22.9356 20.1092 22.7182 20.2 22.4573 20.2076C22.1959 20.2159 21.9702 20.125 21.7803 19.935ZM17.6973 27.25C16.9693 27.25 16.4195 26.9371 16.0479 26.3114C15.6757 25.6863 15.6716 25.065 16.0356 24.4475L17.3175 22.12L13.8991 14.9H12.9495C12.6805 14.9 12.4551 14.8088 12.2735 14.6264C12.0912 14.4446 12 14.2192 12 13.95C12 13.6808 12.0912 13.455 12.2735 13.2726C12.4551 13.0909 12.6805 13 12.9495 13H14.4926C14.6666 13 14.8328 13.0475 14.9911 13.1425C15.1493 13.2375 15.268 13.3721 15.3471 13.5463L19.1691 21.55H25.8159L29.2105 15.3988C29.2896 15.2404 29.4045 15.1176 29.5552 15.0301C29.7052 14.9434 29.8673 14.9 30.0414 14.9C30.4054 14.9 30.6785 15.0583 30.8608 15.375C31.0425 15.6917 31.0463 16.0083 30.8722 16.325L27.4776 22.4525C27.3035 22.7692 27.074 23.0146 26.7892 23.1888C26.5043 23.3629 26.1799 23.45 25.8159 23.45H18.7418L17.6973 25.35H28.1423C28.4113 25.35 28.6367 25.4409 28.8184 25.6226C29.0007 25.805 29.0918 26.0308 29.0918 26.3C29.0918 26.5692 29.0007 26.7946 28.8184 26.9764C28.6367 27.1588 28.4113 27.25 28.1423 27.25H17.6973Z"
				fill="#443B3B"
			/>
		</svg>
	);
};