import { toast } from "react-toastify";

export const notify = (message) => {
	toast.error(message, {
		position: "top-right",
		autoClose: 3500,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
	});
};
