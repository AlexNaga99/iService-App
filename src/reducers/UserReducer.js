export const initialState = {
    id: '',
}

export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'id':
            return { ...state, id: action.payload.id }
        default:
            return state;
    }
}