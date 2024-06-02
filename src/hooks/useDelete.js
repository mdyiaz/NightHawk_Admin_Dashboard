

import { useDeleteAssetsMutation } from '@/store/api/app/Assets/assetsApiSlice';
import { useDeleteCategoryMutation } from '@/store/api/app/Category/categoryApiSlice';
import { useDeleteFooterPageMutation } from '@/store/api/app/FooterPage/footerPageApiSlice';
import { useDeleteSubCategoryMutation } from '@/store/api/app/SubCategory/subCategoryApiSlice';
import { useDeleteSliderMutation } from '@/store/api/app/website/slider/sliderApiSlice';


import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const useDelete = () => {
	const { pathname } = useLocation();
	const pathArray = pathname.split('/');

	let hook = null;

	if (pathArray.includes('slider')) {
		hook = useDeleteSliderMutation;
	}
	else if (pathArray.includes('category')) {
		hook = useDeleteCategoryMutation;
	}
	else if (pathArray.includes('sub-category')) {
		hook = useDeleteSubCategoryMutation;
	}

	else if (pathArray.includes('footer-page')) {
		hook = useDeleteFooterPageMutation;
	}

	else if (pathArray.includes('slider')) {
		hook = useDeleteSliderMutation;
	}

	else if (pathArray.includes('assets')) {
		hook = useDeleteAssetsMutation;
	}

	
	

	const [deleteRecord, { isLoading, isError, error, isSuccess }] = hook
		? hook()
		: [
			() => { },
			{
				isLoading: false,
				isError: false,
				error: null,
				isSuccess: false,
			},
		];

	const handleDelete = async (id) => {
		console.log("hello_id", id);
		withReactContent(Swal)
			.fire({
				title: 'Are you sure?',
				text: 'You will not be able to recover this record!',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Yes, delete it!',
				cancelButtonText: 'No, cancel!',
			})
			.then(async (result) => {
				if (result.isConfirmed) {
					// Delete the record
					try {
						await deleteRecord(id);

						if (isError) {
							throw new Error(error?.message || 'Something went wrong!');
						}

						Swal.fire('Deleted!', 'Your record has been deleted.', 'success');
					} catch (error) {
						console.log(error);
						Swal.fire('Failed!', 'Failed to delete the record.', 'error');
					}
				}
			});
	};

	return {
		handleDelete,
	};
};

export default useDelete;
