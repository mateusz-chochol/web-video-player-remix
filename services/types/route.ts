export type Route =
	| {
			path: string;
			displayName: string;
			isIcon: false;
	  }
	| {
			path: string;
			icon: React.ReactNode;
			isIcon: true;
	  };
