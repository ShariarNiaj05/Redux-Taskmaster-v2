import baseApi from "../api/baseApi";

const taskApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getTask: builder.query({
            query: () => '/tasks',
            providesTags: ["Tasks"]
        }),
        updateTask: builder.mutation({
            query: ({ id, data }) => ({
                url: `/tasks/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["Tasks"],
        }),
        addTask: builder.mutation({
            query: (task) => ({
                url: '/tasks',
                method: "POST",
                body: task
            }),
            invalidatesTags: ["Tasks"],
        })
    })
})

export const { useAddTaskMutation, useGetTaskQuery, useUpdateTaskMutation } = taskApi;

export default taskApi;