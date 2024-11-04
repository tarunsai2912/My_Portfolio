/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: 'https://i.postimg.cc/Gt2Hcjht/taskImg.jpg',
		title: 'Pro Manage',
		skills: ['React', 'Node', 'Express', 'MongoDB', 'Github'],
		descripcion:
			'It is a full stack web application on creating, assigning and sharing tasks among different users and also gives analytics of every task.',
		demoURL: 'https://pro-manage-cuvette-webapp.vercel.app/',
		repoURL: 'https://github.com/tarunsai2912/tarunsairayapureddi-gmail.com_cuvette_final_evaluation_feb',
		anim: 'fade-right',
		averageBrightness: 0.1
	},
	{
		imgSrc: 'https://i.postimg.cc/7Y7fq9gs/webstory-Img.jpg',
		title: 'Share Story',
		skills: ['React', 'Node', 'Express', 'MongoDB', 'Github'],
		descripcion:
			'It is a full stack web application on creating, assigning and sharing tasks among different users and also gives analytics of every task.',
		demoURL: 'https://web-story-mern-frontend.vercel.app/',
		repoURL: 'https://github.com/tarunsai2912/WebStory_MERN_App',
		anim: 'fade-up',
		averageBrightness: 0.1
	},
	{
		imgSrc: 'https://i.postimg.cc/XYLNvzX8/quizImg.jpg',
		title: 'Quizzie',
		skills: ['React', 'Node', 'Express', 'MongoDB', 'Github'],
		descripcion:
			'It is a full stack web application on creating and sharing quizzes which also gives a detailed analytics of each quiz.',
		demoURL: 'https://quizzie-mern-frontend.vercel.app/',
		repoURL: 'https://github.com/tarunsai2912/Quizzie_MERN_App',
		anim: 'fade-left',
		averageBrightness: 0.1
	},
	{
		imgSrc: 'https://i.postimg.cc/3ww80FvH/jobfinder-Img.jpg',
		title: 'Job Finder',
		skills: ['React', 'Node', 'Express', 'MongoDB', 'Github'],
		descripcion:
			'It is a full stack web application on creation of jobs and finding of jobs based on user requirements.',
		demoURL: 'https://job-posting-frontend-eight.vercel.app/',
		repoURL: 'https://github.com/tarunsai2912/Job_Finder_MERN_App',
		anim: 'fade-left',
		averageBrightness: 0.1
	},
	{
		imgSrc: 'https://i.postimg.cc/s2GLLBFh/pocketnotes-Img.jpg',
		title: 'Pocket Notes',
		skills: ['React', 'HTML', 'CSS', 'JavaScript', 'Github'],
		descripcion:
			'It is a web application on notes taking app where user can take notes on different folders on different topics.',
		demoURL: 'https://tarunsai2912.github.io/Pocket_Notes/',
		repoURL: 'https://github.com/tarunsai2912/Pocket_Notes',
		anim: 'fade-left',
		averageBrightness: 0.1
	}
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
	Node: 'skill-icons:nodejs-dark',
    Express: 'skill-icons:expressjs-dark',
	MongoDB: 'skill-icons:mongodb',
	HTML: 'skill-icons:html',
	Github: 'skill-icons:github-dark'
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
