import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
    const navigate = useNavigate();
    const { user } = useAuth0();
    const { createUser } = useCreateMyUser();
    //stores the state value and doesn't cause the component to re-render
    const hasCreateUser = useRef(false);

    useEffect(() => {
        if (user?.sub && user?.email && !hasCreateUser.current) {
            createUser({
                auth0Id: user.sub,
                email: user.email
            })
            //if anything triggers this component to re-render such as user.sub the hasCreateUser is persisted
            hasCreateUser.current = true;
        } 
        navigate("/")
    }, [createUser, navigate, user])

    return <>Loading...</>
}

export default AuthCallbackPage