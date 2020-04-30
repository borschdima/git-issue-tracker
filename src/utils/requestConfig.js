import axios from "axios";

export const request = async (url, body = null, method = "GET", params = null, token = "") => {
	const config = {
		headers: { "Content-Type": "application/json", Accept: "application/json" },
		method,
		data: body,
		params,
	};

	if (token) config.headers.Authorization = `token ${token}`;

	try {
		const { data } = await axios(url, config);

		return data;
	} catch (error) {
		throw new Error(error.message);
	}
};
