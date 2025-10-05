export interface navLinkItem {
	text: string;
	link: string;
	hoverImage: string; // optional image to show on hover
	newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}

 
export type navItem = navLinkItem;

const navConfig: navItem[] = [
	{
		text: "Home",
		link: "/inicio",
		hoverImage: "/media/subrallat/1.png",

	},
	{
		text: "sesiones",
		link: "/sesiones/",
		hoverImage: "/media/subrallat/2.png",
	},
	{
		text: "Sobre mi",
		link: "/inicio#sobre-mi",
		hoverImage: "/media/subrallat/3.png",		
	},
	{
		text: "Contacto",
		link: "/inicio#contact",
		hoverImage: "/media/subrallat/4.png",
	},
];

export default navConfig;
