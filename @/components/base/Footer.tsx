import { LogoIcon } from "@/svgs";

export const Footer = () => {
	return (
		<footer className="min-h-24 h-fit w-full flex justify-center items-center bg-footerBackground">
			<div className="flex gap-12 w-[60%] min-w-[20rem] items-center justify-center">
				<div className="flex items-center gap-4">
					<LogoIcon className="h-[3.5rem]" />
					<span className="text-brandName font-exo font-semibold text-2xl whitespace-nowrap">Brand name</span>
				</div>
				<p className="font-inter text-xs text-footerStatement p-4">
					© 2024 <span className="font-bold">Brand Name</span> All rights reserved. Unauthorized use or
					copying of this brand is strictly prohibited. No part of this website may be reproduced,
					distributed, or transmitted in any form or by any means, including photocopying, recording, or other
					electronic or mechanical methods, without the prior written permission of{" "}
					<span className="font-bold">Brand Name</span>, except in the case of brief quotations embodied in
					critical reviews and certain other non-commercial uses permitted by copyright law.
				</p>
			</div>
		</footer>
	);
};
