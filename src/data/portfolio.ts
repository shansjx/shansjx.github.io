// All the words on the site live here. The page only lays them out.
// To add a project or role, add an object to the right list: no layout change needed.
// Visible text rule: no em dashes. Use a period, comma, colon or parentheses.

export type Figure = {
	src: string;
	w: number;
	h: number;
	alt: string;
	caption: string;
};

export type Link = { label: string; href: string };

export type FeaturedProject = {
	name: string;
	when: string;
	context: string;
	team?: string;
	tools: string[];
	summary: string;
	role: string;
	figures: Figure[];
	links?: Link[];
};

export type IndexItem = {
	when: string;
	name: string;
	context: string;
	line: string;
	tools?: string;
	link?: Link;
};

export type Role = {
	org: string;
	unit?: string;
	title: string;
	when: string;
	lede: string; // may contain a {count:N} token, rendered as a counting number
	points: string[];
	figures?: Figure[];
	links?: Link[];
};

export const person = {
	name: 'Shana Soh',
	fullName: 'Soh Jin Xin Shana',
	line: 'I work between people, design and code.',
	meta: 'Computer Science & Design, SUTD. Graduating June 2027.',
	email: 'shanasjx@gmail.com',
	linkedin: 'https://www.linkedin.com/in/shanasjx',
	shop: 'https://beacons.ai/shan.artz',
};

export const about = [
	'I started my foundation with a diploma in Business & Financial Technology, then moved into Computer Science & Design at SUTD. I like knowing why a feature matters before I build it, and I like being the one who can explain it to everyone afterwards.',
	'Right now I am a software and product engineering intern at NUS City Syntax Lab. I work closely with government agencies, researchers and testers on the Singapore Building Carbon Calculator, and I ship the code that comes out of those conversations.',
	'As a hobby, I draw. I run a small art shop, and a few of my merchandise designs have raised money for Kitten Sanctuary SG and other non-profits. Hence, the cat theme! ',
];

export const education = [
	{
		school: 'Singapore University of Technology & Design',
		what: 'BEng Computer Science and Design',
		when: '2023 to 2027',
		note: 'CGPA 3.96 / 5.0',
	},
	{
		school: 'University of Newcastle, Australia',
		what: 'Global Exchange Program',
		when: 'Jan to May 2026',
		note: '2 High Distinctions, 2 Distinctions',
	},
	{
		school: 'Nanyang Polytechnic',
		what: 'Diploma in Business & Financial Technology',
		when: '2020 to 2023',
		note: "CGPA 3.47 / 4.0, Director's List",
	},
];

export const featuredProjects: FeaturedProject[] = [
	{
		name: 'DiceRealm',
		when: 'Feb to Apr 2025',
		context: 'SUTD Information Systems project, CSD Showcase',
		team: 'Team of 7',
		tools: ['Java', 'Spring Boot', 'Android', 'OpenAI API'],
		summary:
			'An online multiplayer tabletop RPG for Android, with an AI game master narrating the story as you play.',
		role: 'I led front-end product development: the core gameplay loops, the MVVM architecture, and the client logic that keeps real-time dialogue and combat in step between players.',
		figures: [
			{
				src: '/img/dicerealm-booth.webp',
				w: 960,
				h: 1280,
				alt: 'Shana behind the DiceRealm booth: a laptop and monitor running the game, with dice, figurines and a printed poster on the table.',
				caption: 'DiceRealm at the showcase booth.',
			},
		],
		links: [{ label: 'Code and documentation', href: 'https://github.com/LamJingJie/dicerealm' }],
	},
	{
		name: 'Thrive-Thru',
		when: 'Feb to Apr 2024',
		context: 'SUTD Design Thinking & Innovation',
		team: 'Team of 5',
		tools: ['Design Thinking', 'Prototyping', 'Lighting'],
		summary:
			'An interactive display for passers-by, made to make SUTD more recognisable. You drive a small car along a track, each section lights up as you pass, and a lift carries the car back to the start.',
		role: 'We designed the journey so the whole interaction fits inside one minute, which is about as long as anyone walking past will give you.',
		figures: [
			{
				src: '/img/thrive-thru.webp',
				w: 492,
				h: 380,
				alt: 'A coloured pencil sketch of a two-storey display box, with a red line tracing the car route through campus scenes.',
				caption: 'The concept sketch (drawn by me).',
			},
			{
				src: '/img/thrive-thru-2.webp',
				w: 774,
				h: 614,
				alt: 'The built display: an acrylic tower with tracks, LED strips and painted scenes of campus life.',
				caption: 'The build, with synced lighting.',
			},
		],
	},
];

// Older and smaller work. Kept on purpose: the site is the full backlog.
export const earlierProjects: IndexItem[] = [
	{
		when: '2025',
		name: 'Hack&Roll',
		context: 'Hackathon',
		line: 'A prototype app that lets friends recommend restaurants to each other, with sharing reviews and ratings to each other.',
	},
	{
		when: '2023',
		name: 'Smart Assignment',
		context: 'NYP final year project',
		line: 'A machine learning model that suggests the best-fit final year project for each diploma student, served to a Ruby on Rails app.',
		tools: 'Azure ML Studio, Python, Ruby on Rails',
	},
	{
		when: '2023',
		name: 'Insurtech web app',
		context: 'NYP Business Innovation Project',
		line: 'Nutrition tracking and health goals, prototyped in Figma, then coded against a food database API.',
		tools: 'Node.js, Handlebars, Figma',
		link: { label: 'GitHub', href: 'https://github.com/shansjx/InsurTech' },
	},
	{
		when: '2022',
		name: 'PSA Code Sprint',
		context: 'Competition',
		line: 'Took part in the 2022 sprint.',
	},
	{
		when: 'NYP',
		name: 'Senior housing data study',
		context: 'Data analysis & visualisation',
		line: 'Research, cleaning, modelling and dashboards that built a story to test our hypothesis about senior housing in Singapore.',
	},
	{
		when: 'NYP',
		name: 'Hotel website wireframe',
		context: 'UX design, solo',
		line: 'An interactive Figma wireframe for a fictional hotel, designed around its target users.',
		tools: 'Figma',
	},
	{
		when: 'NYP',
		name: 'E-business web app',
		context: 'Team project',
		line: 'From proposal and UX to database design and code, on a server-side .NET stack.',
		tools: 'C#, .NET, SQL',
	},
	{
		when: 'NYP',
		name: 'Art website',
		context: 'Solo, my first site',
		line: 'A site about art, built from the fundamentals.',
		tools: 'HTML, CSS, JavaScript',
	},
];

export const roles: Role[] = [
	{
		org: 'NUS City Syntax Lab',
		title: 'Software & Product Engineer Intern',
		when: 'May 2026 to now',
		lede: 'Requirements contact and engineer on the Singapore Building Carbon Calculator.',
		points: [
			'Turn feedback from government agencies, researchers and testers into prioritised features we can actually build, in short agile iterations.',
			'Integrated Stripe end to end in NestJS. I chose embedded checkout over a hosted redirect to keep people in the app, with signature-verified webhooks and session-level idempotency so credits arrive exactly once.',
			'Designed a credit-wallet pricing model, with margins checked against the Stability AI inference costs underneath it.',
			'Moved staging and production from Supabase to AWS RDS (PostgreSQL 15) with Terraform workspaces, and added app-wide rate limiting.',
			"Started the team's planning documents: scope, milestones and action plans.",
		],
		links: [{ label: 'SBCC contributors', href: 'https://carboncalculator.sg/about' }],
	},
	{
		org: 'Building and Construction Authority',
		unit: 'Digitalisation Team',
		title: 'Software Engineer Intern',
		when: 'Sep to Dec 2025',
		lede: 'Key contributor to a full-stack web app used by {count:2290}+ built environment professionals.',
		points: [
			'Ran user interviews and UAT on my own, turned the feedback into priorities, and presented milestones to department leadership.',
			"Automated all of a department's manual deadline tracking with scheduled email notifications (PlumberSG).",
			'Packaged Python scripts into a one-click desktop app (Tkinter) for teams who do not code.',
			'Turned the IFC Calculator logic into flowcharts that engineers and business users could both follow, and built an export of carbon data into industry-standard Excel templates.',
			'Wrote Dynamo scripts in Revit that compare IFC and RVT models and rebuild wall geometry.',
		],
		figures: [
			{
				src: '/img/bca-ifc-flowchart.webp',
				w: 1565,
				h: 941,
				alt: 'A flowchart titled IFC Calculator Calculations, shown in a modal inside the web app.',
				caption: 'The IFC Calculator flowchart, inside the app.',
			},
			{
				src: '/img/bca-dynamo.webp',
				w: 552,
				h: 328,
				alt: 'Two 3D Revit views of a small floor plan, one rebuilt from the other.',
				caption: 'Walls rebuilt in Revit from a linked IFC model.',
			},
		],
	},
	{
		org: 'Zing Experiential Studio',
		title: 'Multimedia Experiential Developer Intern',
		when: 'May to Jul 2024',
		lede: 'Interactive work for live audiences, including an education experience that engaged {count:70000}+ visitors.',
		points: [
			'Built a high-fidelity Next.js prototype of a gamified education platform, owning the core screens and user flow.',
			'Developed an animated touchscreen in Unity for the World Cities Summit, used by 1,000+ delegates exploring ESG frameworks.',
			'Published a Spark AR Instagram filter for a sustainability campaign, and set up Google Analytics tags for an e-commerce brand.',
			'Presented milestones in client meetings and came back with the changes.',
		],
		figures: [
			{
				src: '/img/zing-photo.webp',
				w: 1200,
				h: 1600,
				alt: 'An exhibition booth wall with a mounted screen, titled Urban Growth.',
				caption: 'On site for a booth install, June 2024.',
			},
		],
	},
];

export const earlierRoles: IndexItem[] = [
	{
		when: '2023',
		name: 'Pico Art International',
		context: 'Intern',
		line: 'Followed projects from design to installation, on site for production. Procurement with suppliers, invoices and purchase orders.',
	},
	{
		when: '2022',
		name: 'Kalos Consultancy',
		context: 'Part-time',
		line: 'Wrote and managed articles, ran social media, and improved search ranking for the company site.',
	},
	{
		when: '2022',
		name: 'Autovacstore',
		context: 'Intern (NYP)',
		line: 'Managed the e-commerce sites and helped customers choose and troubleshoot products.',
	},
	{
		when: '2020',
		name: 'A Drbrand',
		context: 'Clerical, part-time',
		line: 'Scanning, reviewing and filing customer documents.',
	},
];

export const elsewhere: IndexItem[] = [
	{
		when: '2021 to now',
		name: 'shan.artz',
		context: 'My small art business',
		line: 'Commissions, merchandise, market booths, social media and the books.',
		link: { label: 'Shop', href: 'https://beacons.ai/shan.artz' },
	},
	{
		when: 'Various',
		name: 'Kitten Sanctuary SG',
		context: 'Volunteer',
		line: 'Raised funds at two Catty Arty Furstival events and donated two merchandise designs.',
	},
	{
		when: '2024 to 25',
		name: 'Modern Visual Media Club, SUTD',
		context: 'Exco Secretary',
		line: 'Also designed fundraising merchandise for the Cat Appreciation Club, and co-designed cohort T-shirts.',
	},
	{
		when: '2022',
		name: 'Youth Camp Committee',
		context: 'Publicity I/C',
		line: 'Led a team over a nine-month planning cycle. Designed the logo, T-shirt and e-booklet, and ran the camp from registration to games.',
	},
	{
		when: '2021 to 22',
		name: 'Harvard Business Club Mentorship',
		context: 'Mentee',
		line: "Gave a keynote on 'Personal Resilience' to 200+ members and mentors.",
	},
	{
		when: '2018',
		name: 'Zhang Shou Shi National Calligraphy Exhibition',
		context: 'Merit Award',
		line: 'Chinese calligraphy and painting.',
	},
];

export const toolkit = [
	{ group: 'Languages', items: ['Python', 'Java', 'TypeScript', 'JavaScript', 'C#', 'SQL', 'HTML', 'CSS'] },
	{ group: 'Frameworks', items: ['Next.js', 'React', 'Node.js', 'NestJS', 'Spring Boot', 'Tailwind CSS', 'Unity'] },
	{
		group: 'Cloud & data',
		items: ['AWS (RDS)', 'Terraform', 'PostgreSQL', 'Supabase', 'TypeORM', 'REST APIs', 'Stripe API'],
	},
	{
		group: 'Product & people',
		items: ['Requirements gathering', 'Stakeholder management', 'User interviews', 'UAT', 'Agile iteration', 'Prototyping'],
	},
	{ group: 'Design & tools', items: ['Figma', 'Procreate', 'Git'] },
];

// The to-scale figure. Months are "YYYY-MM". Omit `to` for an ongoing row.
export const timeline = {
	from: '2020-01',
	to: '2027-06',
	now: '2026-11',
	rows: [
		{
			label: 'Study',
			kind: 'study',
			spans: [
				{ from: '2020-04', to: '2023-04', label: 'NYP diploma' },
				{ from: '2023-09', to: '2027-05', label: 'SUTD degree' },
				{ from: '2026-01', to: '2026-05', label: 'Exchange', accent: true },
			],
		},
		{ label: 'NUS City Syntax Lab', kind: 'now', spans: [{ from: '2026-05' }] },
		{ label: 'BCA', kind: 'work', spans: [{ from: '2025-09', to: '2025-12' }] },
		{ label: 'Zing Experiential', kind: 'work', spans: [{ from: '2024-05', to: '2024-07' }] },
		{ label: 'Pico Art', kind: 'earlier', spans: [{ from: '2023-05', to: '2023-07' }] },
		{
			label: 'Earlier, part-time',
			kind: 'earlier',
			spans: [
				{ from: '2020-09', to: '2020-10' },
				{ from: '2022-05', to: '2022-09' },
				{ from: '2022-10', to: '2022-11' },
			],
		},
	],
} as const;
