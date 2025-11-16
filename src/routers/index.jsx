import AuthLayout from '@/layout/AuthLayout';
import Layout from '@/layout/Layout';
import ApplicationSettings from '@/pages/ApplicationSettings/ApplicationSettings';
import Assets from '@/pages/Assets/Assets';
import AssetsCreate from '@/pages/Assets/AssetsCreate';
import AssetsEdit from '@/pages/Assets/AssetsEdit';
import Blogs from '@/pages/Blogs/Blogs';
import BlogsAdd from '@/pages/Blogs/BlogsAdd';
import BlogsForm from '@/pages/Blogs/BlogsForm';
import BlogsUpdate from '@/pages/Blogs/BlogsUpdate';
import BlogsView from '@/pages/Blogs/BlogsView';
import AddCategory from '@/pages/Category/AddCategory';
import Category from '@/pages/Category/Category';
import EditCategory from '@/pages/Category/EditCategory';
import AddGallery from '@/pages/Gallery/AddGallery';
import Gallery from '@/pages/Gallery/Gallery';
import EditGallery from '@/pages/Gallery/EditGallery';
import FooterPage from '@/pages/FooterPage/FooterPage';
import FooterPageCreate from '@/pages/FooterPage/FooterPageCreate';
import FooterPageEdit from '@/pages/FooterPage/FooterPageEdit';
import GeneralAbout from '@/pages/GeneralAbout/GeneralAbout';
import Innovative from '@/pages/Innovative/Innovative';
import InnovativeAdd from '@/pages/Innovative/InnovativeAdd';
import InnovativeEdit from '@/pages/Innovative/InnovativeEdit';
import Social from '@/pages/Social/Social';
import SocialCreate from '@/pages/Social/SocialCreate';
import SocialEdit from '@/pages/Social/SocialEdit';
import SubCategory from '@/pages/SubCategory/SubCategory';
import SubCategoryCreate from '@/pages/SubCategory/SubCategoryCreate';
import SubCategoryEdit from '@/pages/SubCategory/SubCategoryEdit';
import AddSuportedBy from '@/pages/SupportedBy/AddSuportedBy';
import SupportedBy from '@/pages/SupportedBy/SupportedBy';
import UpdateSupportedBy from '@/pages/SupportedBy/UpdateSupportedBy';
import SketchShaperProCategory from '@/pages/SketchShaperPro/Category/SketchShaperProCategory';
import AddSketchShaperProCategory from '@/pages/SketchShaperPro/Category/AddSketchShaperProCategory';
import EditSketchShaperProCategory from '@/pages/SketchShaperPro/Category/EditSketchShaperProCategory';
import SketchShaperProFile from '@/pages/SketchShaperPro/File/SketchShaperProFile';
import UploadSketchShaperProFile from '@/pages/SketchShaperPro/File/UploadSketchShaperProFile';
import PatreonDashboard from '@/pages/Patreon/PatreonDashboard';
import PatreonUsers from '@/pages/Patreon/PatreonUsers';
import PatreonUserDetail from '@/pages/Patreon/PatreonUserDetail';

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
						path: 'social',
						children: [
							{
								path: '',
								element: <Social />,
							},
							{
								path: 'new',
								element: <SocialCreate />,
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
										element: <SocialEdit />,
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
						path: 'application-settings',
						children: [
							{
								path: '',
								element: <ApplicationSettings />,
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
						path: 'blogs',
						children: [
							{
								path: '',
								element: <Blogs />,
							},
							{
								path: 'new',
								element: <BlogsAdd />,
							},
							{
								path: ':id',
								children: [
									{
										path: '',
										element: <BlogsView />,
									},
									{
										path: 'edit',
										element: <BlogsUpdate />,
									},
								],
							},
						],
					},

					{
						path: 'supported-by',
						children: [
							{
								path: '',
								element: <SupportedBy />,
							},
							{
								path: 'new',
								element: <AddSuportedBy />,
							},
							{
								path: ':id',
								children: [
									
									{
										path: 'edit',
										element: <UpdateSupportedBy />,
									},
								],
							},
						],
					},

					{
						path: 'innovative',
						children: [
							{
								path: '',
								element: <Innovative />,
							},
							{
								path: 'new',
								element: <InnovativeAdd />,
							},
							{
								path: ':id',
								children: [
									
									{
										path: 'edit',
										element: <InnovativeEdit />,
									},
								],
							},
						],
					},

					{
						path: 'gallery',
						children: [
							{
								path: '',
								element: <Gallery />,
							},
							{
								path: 'new',
								element: <AddGallery />,
							},
							{
								path: ':id',
								children: [
									{
										path: 'edit',
										element: <EditGallery />,
									},
								],
							},
						],
					},

					{
						path: 'sketchshaper-pro-categories',
						children: [
							{
								path: '',
								element: <SketchShaperProCategory />,
							},
							{
								path: 'new',
								element: <AddSketchShaperProCategory />,
							},
							{
								path: ':id',
								children: [
									{
										path: 'edit',
										element: <EditSketchShaperProCategory />,
									},
								],
							},
						],
					},

					{
						path: 'sketchshaper-pro-files',
						children: [
							{
								path: '',
								element: <SketchShaperProFile />,
							},
							{
								path: 'new',
								element: <UploadSketchShaperProFile />,
							},
						],
					},

					{
						path: 'patreon',
						children: [
							{
								path: '',
								element: <PatreonDashboard />,
							},
							{
								path: 'users',
								children: [
									{
										path: '',
										element: <PatreonUsers />,
									},
									{
										path: ':id',
										element: <PatreonUserDetail />,
									},
								],
							},
						],
					},

				
			],
			},

		],
	},
]);

export default router;
