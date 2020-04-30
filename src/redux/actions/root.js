import { ERROR, LOADING, AUTH_SUCCESS, FETCH_SUCCESS } from "./actionTypes";
import { request } from "../../utils/requestConfig";
import config from "../../config/config";

export function auth(code) {
	return async (dispatch) => {
		dispatch(startLoading());
		try {
			const params = {
				client_id: config.CLIENT_ID,
				client_secret: config.CLIENT_SECRET,
				code,
			};
			const { access_token } = await request(
				"https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token",
				null,
				"POST",
				params
			);

			dispatch(authSuccess(access_token));
		} catch (error) {
			dispatch(triggerError());
		}
	};
}

export function fetchIssues(owner, repo, token) {
	return async (dispatch) => {
		dispatch(startLoading());
		try {
			const issues = await request(`https://api.github.com/repos/${owner}/${repo}/issues`, null, "GET", null, token);

			dispatch(fetchSuccess(issues));
		} catch (error) {
			dispatch(triggerError());
		}
	};
}

export function triggerError() {
	return {
		type: ERROR,
	};
}

export function startLoading() {
	return {
		type: LOADING,
	};
}

export function authSuccess(token) {
	return {
		type: AUTH_SUCCESS,
		payload: token,
	};
}

export function fetchSuccess(issues) {
	return {
		type: FETCH_SUCCESS,
		payload: issues,
	};
}
