import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    isLoadingPosition: false,
    isLoadingRole: false,
    genders: [],
    roles: [],
    positions: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            let copyState = { ...state }
            copyState.isLoadingGender = true;
            console.log("fetch gender start: ", action)
            return {
                ...copyState,

            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data;
            state.isLoadingGender = false;
            console.log("fetch gender success: ", action)
            return {
                ...state,

            }
        case actionTypes.FETCH_GENDER_FAIDED:
            state.isLoadingGender = false;
            state.genders = [];
            console.log("fetch gender faided: ", action)
            return {
                ...state,

            }

        // Xử lý các hành động liên quan đến Position
        case actionTypes.FETCH_POSITION_START:
            let positionCopyState = { ...state };
            positionCopyState.isLoadingPosition = true;
            console.log("fetch position start: ", action);
            return {
                ...positionCopyState,
            };
        case actionTypes.FETCH_POSITION_SUCCESS:
            state.positions = action.data;
            state.isLoadingPosition = false;
            console.log("fetch position success: ", action);
            return {
                ...state,
            };
        case actionTypes.FETCH_POSITION_FAIDED:
            state.isLoadingPosition = false;
            state.positions = [];
            console.log("fetch position faided: ", action);
            return {
                ...state,
            };

        // Xử lý các hành động liên quan đến Role
        case actionTypes.FETCH_ROLE_START:
            let roleCopyState = { ...state };
            roleCopyState.isLoadingRole = true;
            console.log("fetch role start: ", action);
            return {
                ...roleCopyState,
            };
        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.data;
            state.isLoadingRole = false;
            console.log("fetch role success: ", action);
            return {
                ...state,
            };
        case actionTypes.FETCH_ROLE_FAIDED:
            state.isLoadingRole = false;
            state.roles = [];
            console.log("fetch role faided: ", action);
            return {
                ...state,
            };
        default:
            return state;
    }
}

export default adminReducer;