import { ERROR, LOADING, AUTH_SUCCESS, FETCH_SUCCESS, CHANGE_OWNER, CHANGE_REPO } from "./actionTypes";
import { request } from "../../utils/requestConfig";
import config from "../../config/config";
import parse from "parse-link-header";

export function auth(code) {
	return async (dispatch) => {
		dispatch(startLoading());
		try {
			const params = {
				client_id: config.CLIENT_ID,
				client_secret: config.CLIENT_SECRET,
				code,
			};
			const { data } = await request("https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token", null, "POST", params);

			dispatch(authSuccess(data.access_token));
		} catch (error) {
			dispatch(triggerError());
		}
	};
}

export function fetchIssues(owner, repo, token, page = "1") {
	return async (dispatch) => {
		dispatch(startLoading());
		try {
			const params = {
				page,
			};
			const { data, headers } = await request(`https://api.github.com/repos/${owner}/${repo}/issues`, null, "GET", params, token);

			const parsed = parse(headers.link);

			dispatch(fetchSuccess(data, +parsed.last.page - 1, page - 1));
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

export function fetchSuccess(issues, pagesCount, currentPage) {
	return {
		type: FETCH_SUCCESS,
		issues,
		pagesCount,
		currentPage,
	};
}

export function changeOwner(value) {
	return {
		type: CHANGE_OWNER,
		payload: value,
	};
}

export function changeRepo(value) {
	return {
		type: CHANGE_REPO,
		payload: value,
	};
}
