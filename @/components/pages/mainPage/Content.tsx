import { DescriptionSection, HeroSection, HeroSectionProps } from "./components";

interface ContentProps extends HeroSectionProps {}

export const Content = (props: ContentProps) => {
	return (
		<div>
			<HeroSection {...props} />
			<DescriptionSection />
		</div>
	);
};
