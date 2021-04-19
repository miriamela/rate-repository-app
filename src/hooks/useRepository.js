import {useQuery} from "@apollo/client";
import {GET_REPOSITORY} from "../graphql/queries";

const useRepository =({id})=>{
        const {data, error, loading} =useQuery(GET_REPOSITORY, {
            fetchPolicy: 'cache-and-network',
            variables: {id}
        });
    let repository;
    // console.log(error);
    if(!loading && data){
        repository = data.repository;
    }
    return {repository, error, loading};
};

export default useRepository;