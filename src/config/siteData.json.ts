export interface SiteDataProps {
	name: string;
	title: string;
	tel: string;
	mail: string;
	author: string;
	description: string;
	useViewTransitions?: boolean; 
 
	defaultImage: {
		src: string;
		alt: string;
	};
}

const siteData: SiteDataProps = {
	name: "Naturastudio",
	author: "Nuria Fluvia",
	tel: "34654209978",
	mail: "nuria@naturastudio.com",
	title: "Naturastudio - Fotografía y Diseño Gráfico",
	description:
		"¡Hola! Soy Nuria Fluvia, una apasionada fotógrafa y diseñadora gráfica de 26 años. Mi travesía en el mundo de la imagen comenzó por la capacidad de usar las fotografías para contar historias y transmitir emociones únicas.",
	useViewTransitions: true,
 
	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/media/sessions/familiar/1.jpg",
		alt: "Naturastudio logo",
	},
};

export default siteData;
