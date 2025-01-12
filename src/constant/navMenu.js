const navMenu = (user_type, type) => [
	{
		isHeadr: true,
		title: 'menu',
	},



	{
		title: 'Dashboard',
		icon: 'heroicons-outline:home',
		link: '/admin',
	},

	{
		title: 'Slider',
		icon: 'mdi:world',
		child: [
			{
				childtitle: 'Slider',
				childlink: '/admin/slider',
			},

		],
	},

	{
		title: 'Category',
		icon: 'heroicons-outline:users',
		child: [
			{
				childtitle: 'Category',
				childlink: '/admin/category',
			},

			{
				childtitle: 'Sub-Category',
				childlink: '/admin/sub-category',
			},

			{
				childtitle: 'Assets',
				childlink: '/admin/assets',
			},

		],
	},


	{
		title: 'General About Us',
		icon: 'heroicons-outline:users',
		child: [
			{
				childtitle: 'General About Us',
				childlink: '/admin/general-about-us',
			},
		],
	},


	{
		title: 'Footer Pages',
		icon: 'heroicons-outline:users',
		child: [
			{
				childtitle: 'Footer Page',
				childlink: '/admin/footer-page',
			},
		],
	},

	{
		title: 'Social',
		icon: 'heroicons-outline:users',
		child: [
			{
				childtitle: 'Social',
				childlink: '/admin/social',
			},

		],
	},


	{
		title: 'Application Settings',
		icon: 'heroicons-outline:users',
		child: [
			{
				childtitle: 'Application Settings',
				childlink: '/admin/application-settings',
			},
		],
	},

	{
		title: 'Blogs',
		icon: 'mdi:world',
		child: [
			{
				childtitle: 'Blogs',
				childlink: '/admin/blogs',
			},

		],
	},

	{
		title: 'Supported By',
		icon: 'mdi:world',
		child: [
			{
				childtitle: 'Supported By',
				childlink: '/admin/supported-by',
			},

		],
	},

	{
		title: 'Innovative',
		icon: 'mdi:world',
		child: [
			{
				childtitle: 'Innovative',
				childlink: '/admin/innovative',
			},

		],
	},

	{
		title: 'SEO Analytics',
		icon: 'heroicons-outline:users',
		child: [
			{
				childtitle: 'SEO Analytics',
				childlink: 'https://www.semrush.com/projects/18255438/',
			},
		],
	},



	// {
	// 	title: 'Setting',
	// 	icon: 'mdi:computer',
	// 	child: [
	// 		{
	// 			childtitle: 'Admin User',
	// 			childlink: '/admin/admin',
	// 		},
	// 		{
	// 			childtitle: 'Application',
	// 			childlink: '/admin/application',
	// 		},
	// 	],
	// },


];

export default navMenu;
