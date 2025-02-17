import axios from 'axios';
import { API_URL } from '../config/constants';

export const getProfile = async (token: string) => {
    try {
        const response = await axios.get(`${API_URL}/profile`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Fetching profile failed:', error);
        throw error;
    }
};

export const getMenstruationDays = async (token: string) => {
    try {
        const response = await axios.get(`${API_URL}/menstruation-days`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Fetching menstruation days failed:', error);
        throw error;
    }
};

export const getInsights = async (token: string) => {
    try {
        const response = await axios.get(`${API_URL}/insights`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Fetching insights failed:', error);
        throw error;
    }
};
