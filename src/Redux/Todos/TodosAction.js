 
import {
    TODOS_REQUEST,
    TODOS_SUCCESS,
    TODOS_FAIL
} from "./TodosConstant";

const simulatedData = [
    { id: 1, task: "Buy groceries", completed: false },
    { id: 2, task: "Read a book", completed: true },
    { id: 3, task: "Go for a walk", completed: false }
];

export const getTodoData = () => async (dispatch) => {
    try {
        dispatch({ type: TODOS_REQUEST });

        // const res = await axiosInstance.get(`/apa-config/api/v1/hashtags/all`);

        // if (res?.data?.status === 200) {
            dispatch({
                type: TODOS_SUCCESS,
                // payload: res?.data?.data,
                payload: simulatedData

            });
        // } 
    } catch (err) {
        dispatch({
            type: TODOS_FAIL,
            error: err.message
        }
        )
    }
}




