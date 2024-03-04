import { DiscountData } from "services/types";

interface DiscountCodeBannerProps {
	discountData?: DiscountData;
}

export const DiscountCodeBanner = ({ discountData }: DiscountCodeBannerProps) => {
	if (!discountData) {
		return null;
	}

	const [textBeforeCode, textAfterCode] = discountData.discountText.split("{code}");

	return (
		<div className="h-16 bg-headerBackground flex items-center justify-center font-inter text-sm font-medium">
			<span>{textBeforeCode}</span>
			<span className="bg-discountCode text-transparent bg-clip-text">
				&nbsp;{discountData.discountCode}&nbsp;
			</span>
			<span>{textAfterCode}</span>
		</div>
	);
};
