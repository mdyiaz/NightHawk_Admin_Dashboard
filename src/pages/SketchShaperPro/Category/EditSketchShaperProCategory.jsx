import SketchShaperProCategoryForm from '@/components/SketchShaperPro/Category/SketchShaperProCategoryForm';
import Loading from '@/components/Loading';
import { useGetSketchShaperProCategoryByIdQuery } from '@/store/api/app/SketchShaperPro/sketchShaperProCategoryApiSlice';
import React from 'react';
import { useParams } from 'react-router-dom';

const EditSketchShaperProCategory = () => {
	const { id } = useParams();

	const { data, isLoading } = useGetSketchShaperProCategoryByIdQuery(id);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div>
			<SketchShaperProCategoryForm id={id} data={data?.data} />
		</div>
	);
};

export default EditSketchShaperProCategory;
