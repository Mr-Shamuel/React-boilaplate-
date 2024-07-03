import { TODOS_SUCCESS } from "./TodosConstant";



export const todosReducer = (state = { totosData: [] }, action) => {

    switch (action.type) {
        case TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                totosData: action.payload,
            }
        default:
            return state;
    }

}



