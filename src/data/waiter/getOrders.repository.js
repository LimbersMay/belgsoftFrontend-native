import {API_URL} from "../api-url.js";

export const getUserOrders = async (token) => {
    const response = await fetch(`${API_URL}/api/orders/user`, {
        method: 'GET',
        headers: {
            'x-token': token,
        }
    });

    return await response.json();
}