import { LOADING, ERROR, AUTH_SUCCESS, FETCH_SUCCESS, CHANGE_OWNER, CHANGE_REPO } from "../actions/actionTypes";

const initialState = {
	issues: [],
	ownerName: "",
	repoName: "",
	pagesCount: 0,
	currentPage: 0,
	token: null,
	loading: false,
	error: false,
};

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case LOADING:
			return { ...state, loading: true };

		case ERROR:
			return { ...state, error: true, loading: false, issues: [], pagesCount: 0 };

		case AUTH_SUCCESS:
			return { ...state, token: action.payload, loading: false, error: false };

		case FETCH_SUCCESS:
			return { ...state, issues: action.issues, pagesCount: action.pagesCount, currentPage: action.currentPage, loading: false, error: false };

		case CHANGE_OWNER:
			return { ...state, ownerName: action.payload };

		case CHANGE_REPO:
			return { ...state, repoName: action.payload };

		default:
			return state;
	}
}
