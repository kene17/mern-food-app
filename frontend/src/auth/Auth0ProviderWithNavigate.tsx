import React from 'react'
import { AppState, Auth0Provider, User } from '@auth0/auth0-react';
type Props = {
    children: React.ReactNode;
}
//uses contextApi. so it's used in main.tsx
const Auth0ProviderWithNavigate = ({ children }: Props) => {
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

    if (!domain || !clientId || !redirectUri) {
        throw new Error("Unable to initlaize auth")
    }
    //handles redirect when the user comes back from successfully logging in
    const onRedirectCallback = (appState?: AppState, user?: User) => {
        console.log("USER", user);


    }
    return (
        <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{ redirect_uri: redirectUri }} onRedirectCallback={onRedirectCallback}>
            {children}
        </Auth0Provider>
    )
}

export default Auth0ProviderWithNavigate