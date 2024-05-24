import { useDeleteAreaMutation } from '@/store/api/app/ApplicationSetting/Area/areaApiSlice';
import { useDeleteDistrictMutation } from '@/store/api/app/ApplicationSetting/District/districtApiSlice';
import { useDeleteServiceAreaWeightPackageMutation } from '@/store/api/app/ApplicationSetting/ServiceAreaWeightPackage/serviceAreaWeightPackageApiSlice';
import { useDeleteServiceTypeMutation } from '@/store/api/app/ApplicationSetting/ServiceTypeApiSlice';
import { useDeleteItemTypeMutation } from '@/store/api/app/ApplicationSetting/itemTypeApiSlice';
import { useDeleteServiceAreaMutation } from '@/store/api/app/ApplicationSetting/serviceAreaApiSlice';
import { useDeleteWeightTypeMutation } from '@/store/api/app/ApplicationSetting/weightPackagesApiSlice';
import { useDeleteParcelMutation } from '@/store/api/app/Parcel/allParcelListApiSlice';
import { useDeleteBranchUserMutation } from '@/store/api/app/Team/BranchUser/branchUserApiSlice';
import { useDeleteMerchantMutation } from '@/store/api/app/Team/Merchant/merchantApiSLice';
import { useDeleteRiderMutation } from '@/store/api/app/Team/Rider/riderApiSlice';
import { useDeleteBranchMutation } from '@/store/api/app/Team/branch/branchApiSlice';
import { useDeleteExpensesMutation } from '@/store/api/app/accountsPanel/Income&expense/expense/expenseApiSlice';
import { useDeleteExpenseHeadsMutation } from '@/store/api/app/accountsPanel/Income&expense/expenseHead/expenseHeadApiSlice';
import { useDeleteStaffMutation } from '@/store/api/app/accountsPanel/staff/staffApiSlice';
import { useDeleteStaffPaymentMutation } from '@/store/api/app/accountsPanel/staffPayment/staffPaymentApiSlice';
import { useDeleteAboutPointMutation } from '@/store/api/app/website/aboutPoint/aboutPointApiSlice';
import { useDeleteBlogMutation } from '@/store/api/app/website/blog/blogApiSlice';
import { useDeleteCustomerFeedbackMutation } from '@/store/api/app/website/customerFeedback/customerFeedbackApiSlice';
import { useDeleteDeliveryServiceMutation } from '@/store/api/app/website/deliveryService/deliveryServiceApiSlice';
import { useDeleteDesignationMutation } from '@/store/api/app/website/designation/designationApiSlice';
import { useDeleteFeatureMutation } from '@/store/api/app/website/feature/featureApiSlice';
import { useDeleteFrequentlyAskQuestionMutation } from '@/store/api/app/website/frequentlyAskQuestion/frequentlyAskQuestionApiSlice';
import { useDeleteObjectiveMutation } from '@/store/api/app/website/objective/objectiveApiSlice';
import { useDeleteOfficesMutation } from '@/store/api/app/website/offices/officesApiSlice';
import { useDeletePageContentMutation } from '@/store/api/app/website/pageContent/pageContentApiSlice';
import { useDeleteParcelStepMutation } from '@/store/api/app/website/parcelStep/parcelStepApiSlice';
import { useDeletePartnerMutation } from '@/store/api/app/website/partner/partnerApiSlice';
import { useDeleteServiceMutation } from '@/store/api/app/website/service/serviceApiSlice';
import { useDeleteSliderMutation } from '@/store/api/app/website/slider/sliderApiSlice';
import { useDeleteSocialLinkMutation } from '@/store/api/app/website/socialLink/socialLinkApiSlice';
import { useDeleteTeamMemberMutation } from '@/store/api/app/website/teamMember/teamMemberApiSlice';
import { useDeleteVisitorMessagessMutation } from '@/store/api/app/website/visitorMessages/visitorMessagesApiSlice';
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
	else if (pathArray.includes('designation')) {
		hook = useDeleteDesignationMutation;
	}
	else if (pathArray.includes('teamMember')) {
		hook = useDeleteTeamMemberMutation;
	}
	else if (pathArray.includes('partner')) {
		hook = useDeletePartnerMutation;
	}
	else if (pathArray.includes('customerFeedback')) {
		hook = useDeleteCustomerFeedbackMutation;
	}
	else if (pathArray.includes('frequentlyAskQuestion')) {
		hook = useDeleteFrequentlyAskQuestionMutation;
	}
	else if (pathArray.includes('objective')) {
		hook = useDeleteObjectiveMutation;
	}
	else if (pathArray.includes('service')) {
		hook = useDeleteServiceMutation;
	}
	else if (pathArray.includes('deliveryService')) {
		hook = useDeleteDeliveryServiceMutation;
	}
	else if (pathArray.includes('feature')) {
		hook = useDeleteFeatureMutation;
	}
	else if (pathArray.includes('blog')) {
		hook = useDeleteBlogMutation;
	}
	else if (pathArray.includes('socialLink')) {
		hook = useDeleteSocialLinkMutation;
	}


	else if (pathArray.includes('parcelStep')) {
		hook = useDeleteParcelStepMutation;
	}
	else if (pathArray.includes('aboutPoint')) {
		hook = useDeleteAboutPointMutation;
	}
	else if (pathArray.includes('pageContent')) {
		hook = useDeletePageContentMutation;
	}
	else if (pathArray.includes('visitor-messages')) {
		hook = useDeleteVisitorMessagessMutation;
	}
	else if (pathArray.includes('offices')) {
		hook = useDeleteOfficesMutation;
	}

	else if (pathArray.includes('branch')) {
		hook = useDeleteBranchMutation;
	} else if (pathArray.includes('branch-users')) {
		hook = useDeleteBranchUserMutation;
	} else if (pathArray.includes('merchant')) {
		hook = useDeleteMerchantMutation;
	}
	else if (pathArray.includes('rider')) {
		hook = useDeleteRiderMutation;
	}
	else if (pathArray.includes('service-area')) {
		hook = useDeleteServiceAreaMutation;
	}
	else if (pathArray.includes('weight-package')) {
		hook = useDeleteWeightTypeMutation;
	}
	else if (pathArray.includes('service-type')) {
		hook = useDeleteServiceTypeMutation;
	}
	else if (pathArray.includes('item-type')) {
		hook = useDeleteItemTypeMutation;
	}
	else if (pathArray.includes('district')) {
		hook = useDeleteDistrictMutation;
	}
	else if (pathArray.includes('area')) {
		hook = useDeleteAreaMutation;
	} else if (pathArray.includes('all-parcel-list')) {
		hook = useDeleteParcelMutation;
	} else if (pathArray.includes('weight-custom-charge')) {
		hook = useDeleteServiceAreaWeightPackageMutation;
	}
	else if (pathArray.includes('staff')) {
		hook = useDeleteStaffMutation;
	}
	else if (pathArray.includes('staff-payment')) {
		hook = useDeleteStaffPaymentMutation;
	}
	else if (pathArray.includes('expence')) {
		hook = useDeleteExpensesMutation;
	}
	else if (pathArray.includes('expenceHead')) {
		hook = useDeleteExpenseHeadsMutation;
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
