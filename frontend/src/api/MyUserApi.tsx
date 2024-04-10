const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

import { User } from '@/types';
import { useAuth0 } from '@auth0/auth0-react';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'sonner';

type CreateUserRequest = {
    auth0Id: string;
    email: string;
};

export const useGetMyUser = () => {
    const { getAccessTokenSilently } = useAuth0();
    const getMyUserRequest = async (): Promise<User> => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                "content-Type": "application/json"
            }
        });
        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`Failed to create user: ${response.status} ${errorBody}`);
        }
        return response.json();
    }
    //data is renamed to currentUser. It has the response from the api request
    const { data: currentUser, isLoading, error } = useQuery("fetchCurrentUser", getMyUserRequest);
    if (error) {
        toast.error(error.toString());
    }
    return {
        currentUser,
        isLoading
    }
}

export const useCreateMyUser = () => {
    const { getAccessTokenSilently } = useAuth0();
    const createMyUserRequest = async (user: CreateUserRequest) => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`Failed to create user: ${response.status} ${errorBody}`);
        }
    }

    const { mutateAsync: createUser, isLoading, isError, isSuccess } = useMutation(createMyUserRequest);

    return {
        createUser,
        isLoading,
        isError,
        isSuccess
    }
}

type updateMyUserRequest = {
    name: string
    addressLine1: string;
    city: string;
    country: string;
}

export const useUpdateMyUser = () => {
    const { getAccessTokenSilently } = useAuth0();
    const updateMyUserRequest = async (formData: updateMyUserRequest) => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`Failed to update user: ${response.status} ${errorBody}`);
        }
        return response.json();

    }
    const { mutateAsync: updateUser, isLoading, isSuccess, error, reset } = useMutation(updateMyUserRequest);
    //when the component makes changes the ui doesnt have to worry about handling errors because it's handled in the hook
    if (isSuccess) {
        toast.success('User profile updated');
    }
    if (error) {
        toast.error(error.toString());
        reset();//clears error state from this request
    }

    return {
        updateUser,
        isLoading,
    }
}