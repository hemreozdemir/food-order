import { toast } from "react-toastify";

export const toastSuccess = (message) => {
    toast.success(message, {
        position: "bottom-center",
        autoClose: 3000
    });
};

export const toastError = (message) => {
    toast.error(message, {
        position: "bottom-center",
        autoClose: 3000
    });
};
