import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Textarea from '@/components/ui/Textarea';
import Textinput from '@/components/ui/Textinput';
import useSubmit from '@/hooks/useSubmit';
import { useCreateFrequentlyAskQuestionMutation, useUpdateFrequentlyAskQuestionMutation } from '@/store/api/app/website/frequentlyAskQuestion/frequentlyAskQuestionApiSlice';
import {
	useCreateOfficesMutation,
	useUpdateOfficesMutation,
} from '@/store/api/app/website/offices/officesApiSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const FrequentlyAskQuestionForm = ({ id, data }) => {
	const { isAuth, auth } = useSelector((state) => state.auth);
	const navigate = useNavigate();

	const {
		register,
		unregister,
		control,
		errors,
		reset,
		handleSubmit,
		onSubmit,
		watch,
		isLoading,
	} = useSubmit(id, id ? useUpdateFrequentlyAskQuestionMutation : useCreateFrequentlyAskQuestionMutation);

	const handleFormSubmit = async (data) => {
		// Manipulate the data as needed
		await onSubmit({ ...data, created_admin_id: 1, updated_admin_id: 1 });
	};

	useEffect(() => {
		reset({
			question: data?.question,
			answer: data?.answer,

		});
	}, [data]);

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)}>
			<Card title={id ? 'Edit Frequently Ask Question' : 'Create New Frequently Ask Question'}>
				<div className="grid grid-cols-1 gap-5">
					<Textinput
						register={register}
						label="Question"
						type="text"
						placeholder="Question Name"
						name="question"
						required={true}
						error={errors?.title}
					/>

					<Textarea
						name="answer"
						register={register}
						label="Answer"
						type="textarea"
						placeholder="Answer"
						row={6}
						required={true}
						error={errors?.details}
					/>
				</div>

				<div className="ltr:text-right rtl:text-left space-x-3 rtl:space-x-reverse mt-6">
					<Button
						onClick={() => navigate(-1)}
						text="Cancel"
						className="btn-light"
					/>
					<Button
						isLoading={isLoading}
						type="submit"
						text="Save"
						className="btn-dark"
					/>
				</div>
			</Card>
		</form>
	);
};

export default FrequentlyAskQuestionForm;
