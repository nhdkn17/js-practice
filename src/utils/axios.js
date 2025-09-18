import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 20000,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.response.use(
    (res) => res,
    (err) => {
        console.error("Axios error:", err.message);
        return Promise.reject(err);
    }
);

export async function getData(endPointUrl) {
    const res = await axiosInstance.get(endPointUrl);
    return res.data;
}

export async function addData(endPointUrl, newData) {
    const res = await axiosInstance.post(endPointUrl, newData);
    return res.data;
}

export async function updateData(endPointUrl, updatedData) {
    const res = await axiosInstance.put(endPointUrl, updatedData);
    return res.data;
}

export async function patchData(endPointUrl, updatedData) {
    const res = await axiosInstance.patch(endPointUrl, updatedData);
    return res.data;
}

export async function deleteData(endPointUrl) {
    const res = await axiosInstance.delete(endPointUrl);
    return res.data;
}
