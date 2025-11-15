import Card from '@/components/ui/Card';
import { useGetPatreonUsersQuery } from '@/store/api/app/Patreon/patreonApiSlice';
import { Icon } from '@iconify/react';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const PatreonDashboard = () => {
	const navigate = useNavigate();
	const { data, isLoading, isError, error } = useGetPatreonUsersQuery({ page: 1, limit: 1000 });

	const stats = useMemo(() => {
		const users = data?.data?.result || [];
		const activePatrons = users.filter((u) => u.is_active_patron).length;
		const totalRevenue = users.reduce((sum, u) => sum + (u.pledge_amount_cents || 0), 0);

		const tierBreakdown = {
			basic: users.filter((u) => u.membership_tier === 'basic').length,
			standard: users.filter((u) => u.membership_tier === 'standard').length,
			premium: users.filter((u) => u.membership_tier === 'premium').length,
		};

		return {
			totalUsers: users.length,
			activePatrons,
			inactivePatrons: users.length - activePatrons,
			totalRevenue,
			averagePledge: users.length > 0 ? totalRevenue / users.length : 0,
			tierBreakdown,
		};
	}, [data]);

	if (isError) {
		return (
			<div className="bg-red-50 border border-red-200 rounded-lg p-6">
				<p className="text-red-800 font-semibold mb-2">Error Loading Dashboard</p>
				<p className="text-red-700 text-sm">
					{error?.data?.message || error?.message || 'Failed to load Patreon data'}
				</p>
			</div>
		);
	}

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-96">
				<div className="flex flex-col items-center gap-4">
					<div className="animate-spin">
						<Icon icon="eos-icons:loading" width="48" height="48" />
					</div>
					<p className="text-slate-600 dark:text-slate-400">Loading Patreon data...</p>
				</div>
			</div>
		);
	}

	const StatCard = ({ title, value, icon, color = 'blue' }) => {
		const colorClasses = {
			blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
			green: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
			purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
			orange: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400',
			red: 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400',
		};

		return (
			<Card className={colorClasses[color]}>
				<div className="flex items-center justify-between">
					<div>
						<p className="text-sm font-medium opacity-75">{title}</p>
						<p className="text-2xl font-bold mt-2">{value}</p>
					</div>
					<Icon icon={icon} width="48" height="48" className="opacity-20" />
				</div>
			</Card>
		);
	};

	return (
		<div className="space-y-6">
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-bold">Patreon Dashboard</h1>
				<button
					onClick={() => navigate('/admin/patreon/users')}
					className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
				>
					View All Users
				</button>
			</div>

			{/* Key Metrics */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				<StatCard
					title="Total Users"
					value={stats?.totalUsers || 0}
					icon="heroicons:users"
					color="blue"
				/>
				<StatCard
					title="Active Patrons"
					value={stats?.activePatrons || 0}
					icon="heroicons:check-circle"
					color="green"
				/>
				<StatCard
					title="Inactive Patrons"
					value={stats?.inactivePatrons || 0}
					icon="heroicons:x-circle"
					color="red"
				/>
				<StatCard
					title="Total Monthly Revenue"
					value={`$${((stats?.totalRevenue || 0) / 100).toFixed(2)}`}
					icon="heroicons:currency-dollar"
					color="purple"
				/>
			</div>

			{/* Average Pledge */}
			<Card>
				<h3 className="text-lg font-semibold mb-4">Average Pledge</h3>
				<p className="text-3xl font-bold text-blue-600">
					${((stats?.averagePledge || 0) / 100).toFixed(2)}/month
				</p>
			</Card>

			{/* Tier Breakdown */}
			<Card>
				<h3 className="text-lg font-semibold mb-6">Membership Tier Breakdown</h3>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
						<p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Basic Tier</p>
						<p className="text-2xl font-bold text-gray-700 dark:text-gray-300">
							{stats?.tierBreakdown?.basic || 0}
						</p>
						<p className="text-xs text-slate-500 mt-2">
							{stats?.totalUsers > 0
								? ((stats.tierBreakdown.basic / stats.totalUsers) * 100).toFixed(1)
								: 0}
							%
						</p>
					</div>

					<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
						<p className="text-sm text-blue-600 dark:text-blue-400 mb-2">Standard Tier</p>
						<p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
							{stats?.tierBreakdown?.standard || 0}
						</p>
						<p className="text-xs text-blue-500 mt-2">
							{stats?.totalUsers > 0
								? ((stats.tierBreakdown.standard / stats.totalUsers) * 100).toFixed(1)
								: 0}
							%
						</p>
					</div>

					<div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
						<p className="text-sm text-purple-600 dark:text-purple-400 mb-2">Premium Tier</p>
						<p className="text-2xl font-bold text-purple-700 dark:text-purple-300">
							{stats?.tierBreakdown?.premium || 0}
						</p>
						<p className="text-xs text-purple-500 mt-2">
							{stats?.totalUsers > 0
								? ((stats.tierBreakdown.premium / stats.totalUsers) * 100).toFixed(1)
								: 0}
							%
						</p>
					</div>
				</div>
			</Card>

			{/* Recent Activity */}
			<Card>
				<h3 className="text-lg font-semibold mb-4">Quick Info</h3>
				<div className="space-y-3 text-sm">
					<div className="flex justify-between items-center py-2 border-b dark:border-slate-700">
						<span className="text-slate-600 dark:text-slate-400">Conversion Rate</span>
						<span className="font-semibold">
							{stats?.totalUsers > 0
								? ((stats.activePatrons / stats.totalUsers) * 100).toFixed(1)
								: 0}
							%
						</span>
					</div>
					<div className="flex justify-between items-center py-2 border-b dark:border-slate-700">
						<span className="text-slate-600 dark:text-slate-400">Average Revenue per User</span>
						<span className="font-semibold">
							${((stats?.averagePledge || 0) / 100).toFixed(2)}/month
						</span>
					</div>
					<div className="flex justify-between items-center py-2">
						<span className="text-slate-600 dark:text-slate-400">Total Users</span>
						<span className="font-semibold">{stats?.totalUsers || 0}</span>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default PatreonDashboard;
