import { apiSlice } from '@/store/api/apiSlice';

export const teamMemberApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getTeamMembers: builder.query({
			query: () => 'team-member',
			providesTags: ['teamMember'],
		}),

		getTeamMembersByPagination: builder.query({
			query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
				`team-member/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
			providesTags: ['teamMember'],
		}),

		getTeamMemberById: builder.query({
			query: (id) => `team-member/${id}`,
			providesTags: ['teamMember'],
		}),

		createTeamMember: builder.mutation({
			query: (data) => ({
				url: 'team-member',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['teamMember'],
		}),

		updateTeamMember: builder.mutation({
			query: ({ id, data }) => ({
				url: `team-member/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['teamMember'],
		}),
		updateTeamMemberStatus: builder.mutation({
			query: ({ id, status }) => ({
				url: `team-member/${id}/status?status=${status}`,
				method: 'PUT',
				body: { status },
			}),
			invalidatesTags: ['teamMember'],
		}),

		deleteTeamMember: builder.mutation({
			query: (id) => ({
				url: `team-member/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['teamMember'],
		}),
	}),
});

export const {
	useGetTeamMembersQuery,
	useGetTeamMembersByPaginationQuery,
	useGetTeamMemberByIdQuery,
	useCreateTeamMemberMutation,
	useUpdateTeamMemberMutation,
	useUpdateTeamMemberStatusMutation,
	useDeleteTeamMemberMutation,
} = teamMemberApi;
