const navMenu = (user_type, type) => [
	{
		isHeadr: true,
		title: 'menu',
	},
	// 1_admin, 2_operation, 3_accounts, 4_general_user
	// For Admin
	...(user_type === 'admin'
		?
		[
			// 1_admin
			...(type === 1 ? [
				{
					title: 'Dashboard',
					icon: 'heroicons-outline:home',
					link: '/admin',
				},

				{
					title: 'Website',
					icon: 'mdi:world',
					child: [
						{
							childtitle: 'Slider',
							childlink: '/admin/slider',
						},
						{
							childtitle: 'Designation',
							childlink: '/admin/designation',
						},
						{
							childtitle: 'Team Member',
							childlink: '/admin/teamMember',
						},
						{
							childtitle: 'Partner',
							childlink: '/admin/partner',
						},
						{
							childtitle: 'Customer Feedback',
							childlink: '/admin/customerFeedback',
						},
						{
							childtitle: 'Frequently Ask Question',
							childlink: '/admin/frequentlyAskQuestion',
						},
						{
							childtitle: 'Objective',
							childlink: '/admin/objective',
						},
						{
							childtitle: 'Service',
							childlink: '/admin/service',
						},
						{
							childtitle: 'Delivery Service',
							childlink: '/admin/deliveryService',
						},
						{
							childtitle: 'Feature',
							childlink: '/admin/feature',
						},
						{
							childtitle: 'Blog',
							childlink: '/admin/blog',
						},
						{
							childtitle: 'Social Link',
							childlink: '/admin/socialLink',
						},
						{
							childtitle: 'Parcel Step',
							childlink: '/admin/parcelStep',
						},
						{
							childtitle: 'About Point',
							childlink: '/admin/aboutPoint',
						},
						{
							childtitle: 'Page Content',
							childlink: '/admin/pageContent',
						},
						{
							childtitle: 'Visitor Message',
							childlink: '/admin/visitor-messages',
						},
						{
							childtitle: 'News Letter',
							childlink: '/admin/news-letter',
						},
						{
							childtitle: 'Office',
							childlink: '/admin/offices',
						},
						{
							childtitle: 'Become Merchant',
							childlink: '/admin/become-merchant',
						},
						{
							childtitle: 'Become Franchise',
							childlink: '/admin/become-franchise',
						},
					],
				},

				{
					title: 'Team',
					icon: 'heroicons-outline:users',
					child: [
						{
							childtitle: 'Branch',
							childlink: '/admin/branch',
						},
						{
							childtitle: 'Branch Users',
							childlink: '/admin/branch-users',
						},
						{
							childtitle: 'Merchant',
							childlink: '/admin/merchant',
						},
						{
							childtitle: 'Rider',
							childlink: '/admin/rider',
						},
					],
				},

				{
					title: 'Parcel',
					icon: 'heroicons-outline:users',
					child: [
						{
							childtitle: 'All Parcel List',
							childlink: '/admin/all-parcel-list',
						},
						{
							childtitle: 'Order Tracking',
							childlink: '/admin/order-tracking',
						},
					],
				},

				{
					title: 'Application Setting',
					icon: 'mdi:bus',
					child: [
						{
							childtitle: 'Service Area',
							childlink: '/admin/service-area',
						},
						{
							childtitle: 'Weight Package',
							childlink: '/admin/weight-package',
						},
						{
							childtitle: 'Weight Custom Charge',
							childlink: '/admin/weight-custom-charge',
						},
						{
							childtitle: 'Service Type',
							childlink: '/admin/service-type',
						},
						{
							childtitle: 'Item Type',
							childlink: '/admin/item-type',
						},
						{
							childtitle: 'District',
							childlink: '/admin/district',
						},
						{
							childtitle: 'Area',
							childlink: '/admin/area',
						},
					],
				},

				{
					title: 'Notice OR News',
					icon: 'fe:notice-on',
					link: '/admin/notice',
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
			] : []),
			//  2_operation
			...(type === 2 ? [
				{
					title: 'Dashboard',
					icon: 'heroicons-outline:home',
					link: '/admin',
				},

				{
					title: 'Website',
					icon: 'mdi:world',
					child: [
						{
							childtitle: 'Slider',
							childlink: '/admin/slider',
						},
						{
							childtitle: 'Designation',
							childlink: '/admin/designation',
						},
						{
							childtitle: 'Team Member',
							childlink: '/admin/teamMember',
						},
						{
							childtitle: 'Partner',
							childlink: '/admin/partner',
						},
						{
							childtitle: 'Customer Feedback',
							childlink: '/admin/customerFeedback',
						},
						{
							childtitle: 'Frequently Ask Question',
							childlink: '/admin/frequentlyAskQuestion',
						},
						{
							childtitle: 'Objective',
							childlink: '/admin/objective',
						},
						{
							childtitle: 'Service',
							childlink: '/admin/service',
						},
						{
							childtitle: 'Delivery Service',
							childlink: '/admin/deliveryService',
						},
						{
							childtitle: 'Feature',
							childlink: '/admin/feature',
						},
						{
							childtitle: 'Blog',
							childlink: '/admin/blog',
						},
						{
							childtitle: 'Social Link',
							childlink: '/admin/socialLink',
						},
						{
							childtitle: 'Parcel Step',
							childlink: '/admin/parcelStep',
						},
						{
							childtitle: 'About Point',
							childlink: '/admin/aboutPoint',
						},
						{
							childtitle: 'Page Content',
							childlink: '/admin/pageContent',
						},
						{
							childtitle: 'Visitor Message',
							childlink: '/admin/visitor-messages',
						},
						{
							childtitle: 'News Letter',
							childlink: '/admin/news-letter',
						},
						{
							childtitle: 'Office',
							childlink: '/admin/offices',
						},
						{
							childtitle: 'Become Merchant',
							childlink: '/admin/become-merchant',
						},
						{
							childtitle: 'Become Franchise',
							childlink: '/admin/become-franchise',
						},
					],
				},

				{
					title: 'Team',
					icon: 'heroicons-outline:users',
					child: [
						{
							childtitle: 'Branch',
							childlink: '/admin/branch',
						},
						{
							childtitle: 'Branch Users',
							childlink: '/admin/branch-users',
						},
						{
							childtitle: 'Merchant',
							childlink: '/admin/merchant',
						},
						{
							childtitle: 'Rider',
							childlink: '/admin/rider',
						},
					],
				},

				{
					title: 'Parcel',
					icon: 'heroicons-outline:users',
					child: [
						{
							childtitle: 'All Parcel List',
							childlink: '/admin/all-parcel-list',
						},
						{
							childtitle: 'Order Tracking',
							childlink: '/admin/order-tracking',
						},
					],
				},

				{
					title: 'Application Setting',
					icon: 'mdi:bus',
					child: [
						{
							childtitle: 'Service Area',
							childlink: '/admin/service-area',
						},
						{
							childtitle: 'Weight Package',
							childlink: '/admin/weight-package',
						},
						{
							childtitle: 'Weight Custom Charge',
							childlink: '/admin/weight-custom-charge',
						},
						{
							childtitle: 'Service user_type',
							childlink: '/admin/service-user_type',
						},
						{
							childtitle: 'Item user_type',
							childlink: '/admin/item-user_type',
						},
						{
							childtitle: 'District',
							childlink: '/admin/district',
						},
						{
							childtitle: 'Area',
							childlink: '/admin/area',
						},
					],
				},

				{
					title: 'Notice OR News',
					icon: 'fe:notice-on',
					link: '/admin/notice',
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
			] : []),
			// 3_accounts
			...(type === 3 ? [
				{
					title: 'Dashboard',
					icon: 'heroicons-outline:home',
					link: '/admin',
				},
				{
					title: 'Profile',
					icon: 'gg:profile',
					link: '/admin/profile',
				},



				{
					title: 'Report',
					icon: 'mdi:report-line',
					link: '/admin/report',
				},

				// {
				// 	title: 'Request',
				// 	icon: 'eos-icons:pull-request-outlined',
				// 	child: [
				// 		{
				// 			childtitle: 'Payment Request List',
				// 			childlink: '/admin/branch',
				// 		},
				// 		{
				// 			childtitle: 'Payment Generate List',
				// 			childlink: '/admin/branch-users',
				// 		},
				// 	],
				// },

				{
					title: 'Branch Payment',
					icon: 'streamline:payment-10',
					child: [
						{
							childtitle: 'Pending Delivery Payment',
							childlink: '/admin/branchDeliveryPaymentList',
						},
						{
							childtitle: 'Received Payment List',
							childlink: '/admin/branchDeliveryReceivePaymentList',
						},
					],
				},

				{
					title: 'Merchant Payment',
					icon: 'material-symbols:payments-outline-sharp',
					child: [
						{
							childtitle: 'Pending Delivery Payment',
							childlink: '/admin/merchantPaymentDeliveryGenerate',
						},
						{
							childtitle: 'Delivery Payment List',
							childlink: '/admin/merchentDeliveryPaymentList',
						},
						// {
						// 	childtitle: 'Statement',
						// 	childlink: '/admin/weight-package',
						// },
					],
				},
				{
					title: 'Salary',
					icon: 'mdi:account-payment-outline',
					child: [
						{
							childtitle: 'Staff List',
							childlink: '/admin/staff',
						},
						{
							childtitle: 'Staff Payment',
							childlink: '/admin/staffPayment',
						},
						{
							childtitle: 'Rider List',
							childlink: '/admin/rider',
						},
						{
							childtitle: 'Rider Payment',
							childlink: '/admin/rider-payment',
						},
						// {
						// 	childtitle: 'Statement',
						// 	childlink: '/admin/admin',
						// },
					],
				},
				{
					title: 'Income/Expense',
					icon: 'icon-park-outline:flash-payment',
					child: [
						{
							childtitle: 'Income/Expence List',
							childlink: '/admin/expence',
						},
						{
							childtitle: 'Income/Expence Head',
							childlink: '/admin/expenceHead',
						},
						{
							childtitle: 'Receipt & Payments',
							childlink: '/admin/receiptPayment',
						},
						{
							childtitle: 'Income Statement',
							childlink: '/admin/incomeStatement',
						},
					],
				},
				{
					title: 'Merchants List',
					icon: 'tabler:shopping-bag',
					link: '/admin/merchantlist',
				},
			] : []),
			// 4_general_user
			...(type === 4 ? [
				{
					title: 'Dashboard',
					icon: 'heroicons-outline:home',
					link: '/admin',
				},

				{
					title: 'Website',
					icon: 'mdi:world',
					child: [
						{
							childtitle: 'Slider',
							childlink: '/admin/slider',
						},
						{
							childtitle: 'Designation',
							childlink: '/admin/designation',
						},
						{
							childtitle: 'Team Member',
							childlink: '/admin/teamMember',
						},
						{
							childtitle: 'Partner',
							childlink: '/admin/partner',
						},
						{
							childtitle: 'Customer Feedback',
							childlink: '/admin/customerFeedback',
						},
						{
							childtitle: 'Frequently Ask Question',
							childlink: '/admin/frequentlyAskQuestion',
						},
						{
							childtitle: 'Objective',
							childlink: '/admin/objective',
						},
						{
							childtitle: 'Service',
							childlink: '/admin/service',
						},
						{
							childtitle: 'Delivery Service',
							childlink: '/admin/deliveryService',
						},
						{
							childtitle: 'Feature',
							childlink: '/admin/feature',
						},
						{
							childtitle: 'Blog',
							childlink: '/admin/blog',
						},
						{
							childtitle: 'Social Link',
							childlink: '/admin/socialLink',
						},
						{
							childtitle: 'Parcel Step',
							childlink: '/admin/parcelStep',
						},
						{
							childtitle: 'About Point',
							childlink: '/admin/aboutPoint',
						},
						{
							childtitle: 'Page Content',
							childlink: '/admin/pageContent',
						},
						{
							childtitle: 'Visitor Message',
							childlink: '/admin/visitor-messages',
						},
						{
							childtitle: 'News Letter',
							childlink: '/admin/news-letter',
						},
						{
							childtitle: 'Office',
							childlink: '/admin/offices',
						},
						{
							childtitle: 'Become Merchant',
							childlink: '/admin/become-merchant',
						},
						{
							childtitle: 'Become Franchise',
							childlink: '/admin/become-franchise',
						},
					],
				},

				{
					title: 'Team',
					icon: 'heroicons-outline:users',
					child: [
						{
							childtitle: 'Branch',
							childlink: '/admin/branch',
						},
						{
							childtitle: 'Branch Users',
							childlink: '/admin/branch-users',
						},
						{
							childtitle: 'Merchant',
							childlink: '/admin/merchant',
						},
						{
							childtitle: 'Rider',
							childlink: '/admin/rider',
						},
					],
				},

				{
					title: 'Parcel',
					icon: 'heroicons-outline:users',
					child: [
						{
							childtitle: 'All Parcel List',
							childlink: '/admin/all-parcel-list',
						},
						{
							childtitle: 'Order Tracking',
							childlink: '/admin/order-tracking',
						},
					],
				},

				{
					title: 'Application Setting',
					icon: 'mdi:bus',
					child: [
						{
							childtitle: 'Service Area',
							childlink: '/admin/service-area',
						},
						{
							childtitle: 'Weight Package',
							childlink: '/admin/weight-package',
						},
						{
							childtitle: 'Weight Custom Charge',
							childlink: '/admin/weight-custom-charge',
						},
						{
							childtitle: 'Service user_type',
							childlink: '/admin/service-user_type',
						},
						{
							childtitle: 'Item user_type',
							childlink: '/admin/item-user_type',
						},
						{
							childtitle: 'District',
							childlink: '/admin/district',
						},
						{
							childtitle: 'Area',
							childlink: '/admin/area',
						},
					],
				},

				{
					title: 'Notice OR News',
					icon: 'fe:notice-on',
					link: '/admin/notice',
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
			] : []),
		]
		: []),

	// For Branch
	...(user_type === 'branch'
		? [

			{
				title: 'Add New Parcel',
				icon: 'logos:parcel-icon',
				link: '/branch/addtoparcel',
			},

			{
				title: 'Dashboard',
				icon: 'heroicons-outline:home',
				link: '/branch',
			},

			{
				title: 'All Parcel List',
				icon: 'heroicons-outline:home',
				link: '/branch/all-parcel-list',
			},


			{
				title: 'Pickup Parcel',
				icon: 'heroicons-outline:users',
				child: [

					{
						childtitle: 'PickUp Parcel List',
						childlink: '/branch/pickup-parcel-list',
					},

					{
						childtitle: 'Pending List',
						childlink: '/branch/pickup-parcel-pending-list',
					},

					{
						childtitle: 'Processing List',
						childlink: '/branch/pickup-parcel-processing-list',
					},

					{
						childtitle: 'Generate Branch Transfer (Trip)',
						childlink: '/branch/generate-branch-transfer',
					},

					{
						childtitle: 'Delivery Branch Transfer List (Trip)',
						childlink: '/branch/delivery-branch-transfer-list',
					},

				],
			},


			{
				title: 'Delivery Parcel',
				icon: 'heroicons-outline:users',
				child: [
					{
						childtitle: 'Delivery Parcel List',
						childlink: '/branch/delivery-parcel-list',

					},

					{
						childtitle: 'Reshedule / Pending Parcel List',
						childlink: '/branch/reshedule-delivery-parcel-list',

					},

					{
						childtitle: 'Pending List',
						childlink: '/branch/delivery-parcel-pending-list',
					},

					{
						childtitle: 'Processing List',
						childlink: '/branch/delivery-parcel-processing-list',
					},

					{
						childtitle: 'Received Branch Transfer List',
						childlink: '/branch/received-branch-transfer-list',
					}



				],
			},

			{
				title: 'Return Parcel',
				icon: 'heroicons-outline:users',
				child: [
					{
						childtitle: 'Return Branch Transfer Generate',
						childlink: '/branch/return-branch-transfer-generate',
					},

					{
						childtitle: 'Return Branch Transfer List',
						childlink: '/branch/return-branch-transfer-list',
					},

					{
						childtitle: 'Return Parcel List',
						childlink: '/branch/return-parcel-list',
					},

					{
						childtitle: 'Pending List',
						childlink: '/branch/return-parcel-pending-list',
					},

					{
						childtitle: 'Processing List',
						childlink: '/branch/return-parcel-processing-list',
					},

					{
						childtitle: 'Received Return Branch Transfer List',
						childlink: '/branch/received-return-branch-transfer-list',
					},

					{
						childtitle: 'Complete Return Parcel List',
						childlink: '/branch/complete-return-parcel-list',
					}
				]

			},


			{
				title: 'Complete Delivery Payment',
				icon: 'heroicons-outline:users',
				child: [
					{
						childtitle: 'Complete Delivery Payment List',
						childlink: '/branch/complete-delivery-payment-list',
					},

					{
						childtitle: 'Pending Payment ',
						childlink: '/branch/delivery-payment-generate',

					},

					{
						childtitle: 'Processing Payment List',
						childlink: '/branch/processing-payment-list',
					},




				]

			},



			{
				title: 'Order Tracking',
				icon: 'fluent-mdl2:issue-tracking',
				link: '/branch/order-tracking',
			},
			{
				title: 'Profile',
				icon: 'iconoir:profile-circle',
				link: '/branch/profile',
			},
			{
				title: 'Rider List',
				icon: 'streamline:transfer-motorcycle-solid',
				link: '/branch/riderListByBranch',
			},
			{
				title: 'Merchant List',
				icon: 'ant-design:shop-outlined',
				link: '/branch/merchantListByBranch',
			},
		]

		: []),

	// For rider
	...(user_type === 'rider'
		? [
			{
				title: 'Dashboard',
				icon: 'heroicons-outline:home',
				link: '/rider',
			},
			{
				title: 'Profile',
				icon: 'iconoir:profile-circle',
				link: '/rider/profile',
			},
			{
				title: 'Parcel',
				icon: 'logos:parcel-icon',
				child: [
					{
						childtitle: 'Pickup Parcel List',
						childlink: '/rider/pickupParcelList',
					},
					{
						childtitle: 'Delivery Parcel List',
						childlink: '/rider/deliveryParcelList',
					},
					{
						childtitle: 'Delivery Complete Parcel List',
						childlink: '/rider/deliveryCompleteParcelList',
					},
					{
						childtitle: 'Return Parcel List',
						childlink: '/rider/returnParcelList',
					},



				],
			},
			{
				title: 'Payment',
				icon: 'tabler:coin-taka',
				child: [
					{
						childtitle: 'Collection Parcel List',
						childlink: '/rider/collectionParcelList',
					},
					{
						childtitle: 'Paid Amount Parcel List',
						childlink: '/rider/paidAmountParcelList',
					},

				],
			},

		]

		: []),

	// {
	// 	title: 'Multi Level',
	// 	icon: 'heroicons:share',
	// 	link: '#',
	// 	child: [
	// 		{
	// 			childtitle: 'Level 1.1',
	// 			childlink: '/admin/level',
	// 		},
	// 		{
	// 			childtitle: 'Level 1.2',
	// 			childlink: 'Level-1',
	// 			multi_menu: [
	// 				{
	// 					multiTitle: 'Level 2.1',
	// 					multiLink: '/admin/level2',
	// 				},
	// 				{
	// 					multiTitle: 'Level 2.2',
	// 					multiLink: 'Level-2.3',
	// 				},
	// 			],
	// 		},
	// 	],
	// },
];

export default navMenu;
