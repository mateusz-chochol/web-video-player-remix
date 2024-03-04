import { DiscountData } from "services/types";

export const getDiscountData = async (): Promise<DiscountData> => {
	return new Promise((resolve) => {
		resolve({
			discountCode: "WELCOME15",
			discountText: "NEW CUSTOMERS GET 15% OFF! USE CODE {code}",
		});
	});
};
