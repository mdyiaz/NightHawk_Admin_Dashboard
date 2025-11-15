import { useParams, useNavigate } from 'react-router-dom';
import { useGetPatreonUserByIdQuery, useRevokePatreonUserMutation } from '@/store/api/app/Patreon/patreonApiSlice';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Icon } from '@iconify/react';
import { useState } from 'react';

const PatreonUserDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [showConfirmRevoke, setShowConfirmRevoke] = useState(false);

	const { data, isLoading, isError, error } = useGetPatreonUserByIdQuery(id);
	const [revokeUser, { isLoading: isRevoking }] = useRevokePatreonUserMutation();

	const user = data?.data;

	const handleRevoke = async () => {
		try {
			await revokeUser(id).unwrap();
			// Show success message and redirect
			navigate('/admin/patreon/users');
		} catch (err) {
			console.error('Failed to revoke user:', err);
		}
	};

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-96">
				<div className="animate-spin">
					<Icon icon="eos-icons:loading" width="48" height="48" />
				</div>
			</div>
		);
	}

	if (isError) {
		return (
			<div className="bg-red-50 border border-red-200 rounded-lg p-4">
				<p className="text-red-800">
					Error loading user: {error?.data?.message || 'Unknown error'}
				</p>
				<Button
					text="Back to Users"
					onClick={() => navigate('/admin/patreon/users')}
					className="mt-4"
				/>
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-bold">Patreon User Details</h1>
				<Button
					text="Back to Users"
					icon="heroicons:arrow-left"
					onClick={() => navigate('/admin/patreon-users')}
					className="btn-dark"
				/>
			</div>

			<Card>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Personal Information */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold mb-4">Personal Information</h3>

						<div>
							<label className="text-sm text-slate-600 dark:text-slate-400">
								Full Name
							</label>
							<p className="text-base font-medium">{user?.full_name}</p>
						</div>

						<div>
							<label className="text-sm text-slate-600 dark:text-slate-400">
								Email
							</label>
							<p className="text-base font-medium">{user?.email}</p>
						</div>

						<div>
							<label className="text-sm text-slate-600 dark:text-slate-400">
								Patreon ID
							</label>
							<p className="text-base font-medium text-slate-500">{user?.patreon_id}</p>
						</div>
					</div>

					{/* Subscription Information */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold mb-4">Subscription Information</h3>

						<div>
							<label className="text-sm text-slate-600 dark:text-slate-400">
								Membership Tier
							</label>
							<div className="mt-1">
								<span
									className={`px-3 py-1 rounded-full text-sm font-medium ${
										user?.membership_tier === 'premium'
											? 'bg-purple-100 text-purple-800'
											: user?.membership_tier === 'standard'
											? 'bg-blue-100 text-blue-800'
											: 'bg-gray-100 text-gray-800'
									}`}
								>
									{user?.membership_tier?.charAt(0).toUpperCase() +
										user?.membership_tier?.slice(1)}
								</span>
							</div>
						</div>

						<div>
							<label className="text-sm text-slate-600 dark:text-slate-400">
								Pledge Amount
							</label>
							<p className="text-base font-medium">
								${(user?.pledge_amount_cents / 100).toFixed(2)}/month
							</p>
						</div>

						<div>
							<label className="text-sm text-slate-600 dark:text-slate-400">
								Active Patron
							</label>
							<div className="mt-1">
								<span
									className={`px-3 py-1 rounded-full text-sm font-medium ${
										user?.is_active_patron
											? 'bg-green-100 text-green-800'
											: 'bg-red-100 text-red-800'
									}`}
								>
									{user?.is_active_patron ? 'Yes' : 'No'}
								</span>
							</div>
						</div>
					</div>

					{/* Dates */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold mb-4">Timeline</h3>

						<div>
							<label className="text-sm text-slate-600 dark:text-slate-400">
								Joined Date
							</label>
							<p className="text-base font-medium">
								{new Date(user?.created_at).toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'long',
									day: 'numeric',
									hour: '2-digit',
									minute: '2-digit',
								})}
							</p>
						</div>

						<div>
							<label className="text-sm text-slate-600 dark:text-slate-400">
								Last Verified
							</label>
							<p className="text-base font-medium">
								{new Date(user?.last_verified_at).toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'long',
									day: 'numeric',
									hour: '2-digit',
									minute: '2-digit',
								})}
							</p>
						</div>

						<div>
							<label className="text-sm text-slate-600 dark:text-slate-400">
								Last Updated
							</label>
							<p className="text-base font-medium">
								{new Date(user?.updated_at).toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'long',
									day: 'numeric',
									hour: '2-digit',
									minute: '2-digit',
								})}
							</p>
						</div>
					</div>

					{/* Actions */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold mb-4">Actions</h3>

						{!showConfirmRevoke ? (
							<Button
								text="Revoke Access"
								icon="heroicons:trash"
								onClick={() => setShowConfirmRevoke(true)}
								className="btn-danger w-full"
							/>
						) : (
							<div className="space-y-3 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
								<p className="text-sm text-red-800 dark:text-red-200">
									Are you sure you want to revoke access for this user? This action cannot be
									undone.
								</p>
								<div className="flex gap-2">
									<Button
										text="Confirm Revoke"
										onClick={handleRevoke}
										disabled={isRevoking}
										className="btn-danger flex-1"
									/>
									<Button
										text="Cancel"
										onClick={() => setShowConfirmRevoke(false)}
										disabled={isRevoking}
										className="btn-secondary flex-1"
									/>
								</div>
							</div>
						)}
					</div>
				</div>
			</Card>
		</div>
	);
};

export default PatreonUserDetail;
