import {useQuery} from "@apollo/client";
import {GET_AUTHORIZED_USER} from "../graphql/queries";

const useAuthorizedUser =()=>{
    const {data, error, loading} = useQuery(GET_AUTHORIZED_USER, {
        fetchPolicy: 'cache-and-network',
    });
    let user;
    if(!loading && data){
        user= data.authorizedUser;
    }
 return {user, error, loading};
};

export default useAuthorizedUser;