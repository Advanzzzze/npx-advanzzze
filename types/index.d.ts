type SiteConfig = {
	name: string;
	description: string;
	url: string;
	ogImage: string;
	links: {
		instagram: string;
		github: string;
	};
};

type NavLinkConfig = {
	title: string;
	href: string;
};

type MainNavConfig = NavLinkConfig[];
