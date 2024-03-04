import { Badge, Button } from "@/components/ui";

export const DescriptionSection = () => {
	return (
		<div className="min-h-[16rem] w-full flex justify-center items-center mt-8 mb-8">
			<div className="max-w-[60%] flex flex-col items-center justify-center gap-4">
				<Badge className="h-[2.5rem] bg-white text-black border border-solid border-black p-6 font-exo">
					EXAMPLE SECTION
				</Badge>
				<div>
					<span className="text-darkGray text-3xl font-semibold">Lorem </span>
					<span className="page-gradient-text text-3xl font-semibold">
						ipsum dolor sit amet consectetur adipiscing elit etiam molestie ex vel{" "}
					</span>
					<span className="text-darkGray text-3xl font-semibold">
						massa lacinia ultricies. Suspendisse lobortis vehicula eros, sed sodales eros mollis eget. Morbi
						vitae libero in nunc sodales.
					</span>
				</div>
				<Button variant="link">SEE MORE</Button>
			</div>
		</div>
	);
};
