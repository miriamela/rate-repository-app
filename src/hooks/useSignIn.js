import {useMutation} from "@apollo/client";
import {LOGIN} from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";
import {useApolloClient} from "@apollo/client";

const useSignIn =()=>{
    const authStorage=useAuthStorage();
    const apolloClient =useApolloClient();
    const [authorize, result]=useMutation(LOGIN);

    const signIn = async({username, password})=>{
        const response = await authorize({variables: {username, password}});
        await authStorage.setAccessToken(response.data.authorize.accessToken);
        apolloClient.resetStore();
        return response;
    };
    return [signIn, result];
};

export default useSignIn;