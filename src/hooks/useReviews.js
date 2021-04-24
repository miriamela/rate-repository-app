import {useQuery} from "@apollo/client";
import {GET_REVIEWS} from "../graphql/queries";

const useReviews =({id})=>{
    const {data, error, loading}=useQuery(GET_REVIEWS, {
        fetchPolicy: 'cache-and-network',
        variables: {id}
    });
    let reviews;
    if(!loading && data){
        reviews=data.repository.reviews;
    }
    return {reviews, error, loading};
};

export default useReviews;