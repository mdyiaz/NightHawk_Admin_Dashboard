import { useGetPatreonUsersQuery, useRevokePatreonUserMutation } from '@/store/api/app/Patreon/patreonApiSlice';
import { useState, useCallback, useMemo } from 'react';

/**
 * Custom hook for Patreon admin operations
 * Provides easy access to Patreon data and mutations
 */
export const usePatreon = () => {
	const [paginationPage, setPaginationPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [order, setOrder] = useState('desc');
	const [search, setSearch] = useState('');

	// Fetch users
	const { data, isLoading, isError, error, isFetching } = useGetPatreonUsersQuery({
		page: paginationPage,
		limit,
		order,
		search,
	});

	// Revoke user mutation
	const [revokeUser, { isLoading: isRevoking }] = useRevokePatreonUserMutation();

	// Calculate statistics
	const stats = useMemo(() => {
		if (!data?.data?.result) return null;

		const users = data.data.result;
		const activePatrons = users.filter((u) => u.is_active_patron).length;
		const totalRevenue = users.reduce((sum, u) => sum + (u.pledge_amount_cents || 0), 0);

		return {
			totalUsers: users.length,
			activePatrons,
			inactivePatrons: users.length - activePatrons,
			totalRevenue,
			averagePledge: users.length > 0 ? totalRevenue / users.length : 0,
			conversionRate: users.length > 0 ? (activePatrons / users.length) * 100 : 0,
			tierBreakdown: {
				basic: users.filter((u) => u.membership_tier === 'basic').length,
				standard: users.filter((u) => u.membership_tier === 'standard').length,
				premium: users.filter((u) => u.membership_tier === 'premium').length,
			},
		};
	}, [data]);

	// Handle revoke with callback
	const handleRevoke = useCallback(
		async (userId, onSuccess, onError) => {
			try {
				await revokeUser(userId).unwrap();
				onSuccess?.();
			} catch (err) {
				onError?.(err);
			}
		},
		[revokeUser]
	);

	// Filter users by tier
	const filterByTier = useCallback((tier) => {
		return data?.data?.result?.filter((u) => u.membership_tier === tier) || [];
	}, [data]);

	// Filter users by status
	const filterByStatus = useCallback((isActive) => {
		return data?.data?.result?.filter((u) => u.is_active_patron === isActive) || [];
	}, [data]);

	// Search users
	const searchUsers = useCallback((query) => {
		setSearch(query);
		setPaginationPage(1);
	}, []);

	// Reset filters
	const resetFilters = useCallback(() => {
		setSearch('');
		setPaginationPage(1);
		setLimit(10);
		setOrder('desc');
	}, []);

	return {
		// Data
		users: data?.data?.result || [],
		pagination: data?.data?.pagination,
		stats,

		// Loading states
		isLoading,
		isError,
		error,
		isFetching,
		isRevoking,

		// Pagination
		paginationPage,
		setPaginationPage,
		limit,
		setLimit,
		order,
		setOrder,
		search,
		setSearch,

		// Methods
		handleRevoke,
		filterByTier,
		filterByStatus,
		searchUsers,
		resetFilters,
	};
};

/**
 * Usage Example:
 * 
 * function MyComponent() {
 *   const {
 *     users,
 *     stats,
 *     isLoading,
 *     paginationPage,
 *     setPaginationPage,
 *     handleRevoke,
 *     searchUsers,
 *   } = usePatreon();
 * 
 *   return (
 *     <div>
 *       <p>Total Users: {stats?.totalUsers}</p>
 *       <input 
 *         onChange={(e) => searchUsers(e.target.value)}
 *         placeholder="Search users..."
 *       />
 *       {users.map(user => (
 *         <div key={user.id}>
 *           {user.full_name}
 *           <button onClick={() => handleRevoke(user.id)}>
 *             Revoke
 *           </button>
 *         </div>
 *       ))}
 *     </div>
 *   );
 * }
 */
