import AuthLayout from '@/layout/AuthLayout';
import Layout from '@/layout/Layout';
import Assets from '@/pages/Assets/Assets';
import AssetsCreate from '@/pages/Assets/AssetsCreate';
import AssetsEdit from '@/pages/Assets/AssetsEdit';
import AddCategory from '@/pages/Category/AddCategory';
import Category from '@/pages/Category/Category';
import EditCategory from '@/pages/Category/EditCategory';
import FooterPage from '@/pages/FooterPage/FooterPage';
import FooterPageCreate from '@/pages/FooterPage/FooterPageCreate';
import FooterPageEdit from '@/pages/FooterPage/FooterPageEdit';
import GeneralAbout from '@/pages/GeneralAbout/GeneralAbout';
import SubCategory from '@/pages/SubCategory/SubCategory';
import SubCategoryCreate from '@/pages/SubCategory/SubCategoryCreate';
import SubCategoryEdit from '@/pages/SubCategory/SubCategoryEdit';

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
					// add your routes here
					{
						path: '',
						element: <Layout />,
						children: [
							{
								path: '',
								element: <Dashboard />,
							},
						],
					},
					{
						path: 'login',
						element: <Login />,
					},
				],
			},

			// Don't use down below
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
						path: 'sub-category',
						children: [
							{
								path: '',
								element: <SubCategory />,
							},
							{
								path: 'new',
								element: <SubCategoryCreate />,
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
										element: <SubCategoryEdit />,
									},
								],
							},
						],
					},


					{
						path: 'assets',
						children: [
							{
								path: '',
								element: <Assets />,
							},
							{
								path: 'new',
								element: <AssetsCreate />,
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
										element: <AssetsEdit />,
									},
								],
							},
						],
					},


					{
						path: 'general-about-us',
						children: [
							{
								path: '',
								element: <GeneralAbout />,
							},
							
						],
					},


					{
						path: 'footer-page',
						children: [
							{
								path: '',
								element: <FooterPage />,
							},
							{
								path: 'new',
								element: <FooterPageCreate />,
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
										element: <FooterPageEdit />,
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
