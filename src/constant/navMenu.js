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
		title: 'Setting',
		icon: 'mdi:computer',
		child: [
			{
				childtitle: 'Admin User',
				childlink: '/admin/admin',
			},
			{
				childtitle: 'Application',
				childlink: '/admin/application',
			},
		],
	},
];

export default navMenu;
