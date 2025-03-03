import {API_URL} from '../config/constants.ts';
import axios from 'axios';

export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(
            `${API_URL}/sign-in-request`,
            {
                email: email,
                password: password,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};
