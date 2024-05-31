import AuthLayout from '@/layout/AuthLayout';
import Layout from '@/layout/Layout';
import AddCategory from '@/pages/Category/AddCategory';
import Category from '@/pages/Category/Category';
import EditCategory from '@/pages/Category/EditCategory';

import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Admin = lazy(() => import('@/pages/setting/admin/admin'));

const AdminAdd = lazy(() => import('@/pages/setting/admin/adminAdd'));
const AdminView = lazy(() => import('@/pages/setting/admin/adminView'));
const AdminEdit = lazy(() => import('@/pages/setting/admin/adminEdit'));
const Application = lazy(() =>
	import('@/pages/setting/application/application')
);

// Pages
const Login = lazy(() => import('@/pages/auth/login'));
const Dashboard = lazy(() => import('@/pages/dashboard'));
const Slider = lazy(() => import('@/pages/website/slider/slider'));

const SliderAdd = lazy(() => import('@/pages/website/slider/sliderAdd'));
const SliderEdit = lazy(() => import('@/pages/website/slider/sliderEdit'));
const SliderView = lazy(() => import('@/pages/website/slider/sliderView'));

const router = createBrowserRouter([
	{
		path: '',
		// errorElement: <Error />,
		children: [
			{
				path: '',
				element: <AuthLayout />,
				children: [
					{
						path: 'login',
						element: <Login />,
					},
				],
			},
			{
				path: 'admin',
				element: <Layout type="admin" />,
				children: [
					{
						path: '',
						element: <Dashboard />,
					},

					{
						path: 'slider',
						children: [
							{
								path: '',
								element: <Slider />,
							},
							{
								path: 'new',
								element: <SliderAdd />,
							},
							{
								path: ':id',
								children: [
									{
										path: '',
										element: <SliderView />,
									},
									{
										path: 'edit',
										element: <SliderEdit />,
									},
								],
							},
						],
					},

					{
						path: 'category',
						children: [
							{
								path: '',
								element: <Category />,
							},
							{
								path: 'new',
								element: <AddCategory />,
							},
							{
								path: ':id',
								children: [
									// {
									// 	path: '',
									// 	element: <SliderView />,
									// },
									{
										path: 'edit',
										element: <EditCategory />,
									},
								],
							},
						],
					},

					{
						path: 'admin',
						children: [
							{
								path: '',
								element: <Admin />,
							},
							{
								path: 'new',
								element: <AdminAdd />,
							},
							{
								path: ':id',
								children: [
									{
										path: '',
										element: <AdminView />,
									},
									{
										path: 'edit',
										element: <AdminEdit />,
									},
								],
							},
						],
					},

					{
						path: 'edit',
						element: <Application />,
					},
					{
						path: 'level',
						element: <Dashboard />,
					},
					{
						path: 'level2',
						element: <Dashboard />,
					},
					// 2_operation,
					// ----------------------- 3_accounts--------------------------,

					//  4_general_user
				],
			},

			/*---------------Branch-------------- */
			{
				path: 'branch',
				element: <Layout type="branch" />,
				children: [],
			},

			/*---------------Rider-------------- */
			{
				path: 'rider',
				element: <Layout type="rider" />,
				children: [],
			},
		],
	},
]);

export default router;
