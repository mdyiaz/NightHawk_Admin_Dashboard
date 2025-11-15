import CustomPaginationTable from '@/components/shared/CustomTable/CustomPaginationTable';
import SkeletionTable from '@/components/skeleton/Table';
import { useGetPatreonUsersQuery } from '@/store/api/app/Patreon/patreonApiSlice';
import { useState, useMemo } from 'react';

const PatreonUsers = () => {
	const [paginationPage, setPaginationPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [order, setOrder] = useState('desc');

	const { data, isLoading, isError, error } = useGetPatreonUsersQuery({
		page: paginationPage,
		limit: limit,
		order: order,
	});

	const COLUMNS = useMemo(() => [
		{
			Header: 'Full Name',
			accessor: 'full_name',
		},
		{
			Header: 'Email',
			accessor: 'email',
		},
		{
			Header: 'Membership Tier',
			accessor: 'membership_tier',
			Cell: (row) => (
				<span
					className={`px-3 py-1 rounded-full text-xs font-medium ${
						row?.cell?.value === 'premium'
							? 'bg-purple-100 text-purple-800'
							: row?.cell?.value === 'standard'
							? 'bg-blue-100 text-blue-800'
							: 'bg-gray-100 text-gray-800'
					}`}
				>
					{row?.cell?.value?.charAt(0).toUpperCase() + row?.cell?.value?.slice(1)}
				</span>
			),
		},
		{
			Header: 'Pledge Amount',
			accessor: 'pledge_amount_cents',
			Cell: (row) => `$${(row?.cell?.value / 100).toFixed(2)}/mo`,
		},
		{
			Header: 'Active Patron',
			accessor: 'is_active_patron',
			Cell: (row) => (
				<span
					className={`px-3 py-1 rounded-full text-xs font-medium ${
						row?.cell?.value
							? 'bg-green-100 text-green-800'
							: 'bg-red-100 text-red-800'
					}`}
				>
					{row?.cell?.value ? 'Yes' : 'No'}
				</span>
			),
		},
		{
			Header: 'Last Verified',
			accessor: 'last_verified_at',
			Cell: (row) => {
				const date = new Date(row?.cell?.value);
				return date.toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'short',
					day: 'numeric',
					hour: '2-digit',
					minute: '2-digit',
				});
			},
		},
		{
			Header: 'Joined Date',
			accessor: 'created_at',
			Cell: (row) => {
				const date = new Date(row?.cell?.value);
				return date.toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'short',
					day: 'numeric',
				});
			},
		},
	], []);

	if (isLoading) return <SkeletionTable />;

	if (isError) {
		return (
			<div className="bg-red-50 border border-red-200 rounded-lg p-4">
				<p className="text-red-800">
					Error loading Patreon users: {error?.data?.message || 'Unknown error'}
				</p>
			</div>
		);
	}

	return (
		<>
			<CustomPaginationTable
				title="Patreon Users"
				COLUMNS={COLUMNS}
				data={{
					result: data?.data?.result || [],
					pagination: data?.data?.pagination,
				}}
				paginationPage={paginationPage}
				setPaginationPage={setPaginationPage}
				limit={limit}
				setLimit={setLimit}
				order={order}
				setOrder={setOrder}
				defaultStatus={false}
				defaultAction={false}
				addNew={false}
			/>
		</>
	);
};

export default PatreonUsers;
