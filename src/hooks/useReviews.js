import {useQuery} from "@apollo/client";
import {GET_REVIEWS} from "../graphql/queries";

const useReviews =({id})=>{
    const {data, error, loading}=useQuery(GET_REVIEWS, {
        fetchPolicy: 'cache-and-network',
        variables: {id}
    });
    console.log(data);
    let reviews;
    if(!loading && data){
        reviews=data.repository.reviews;
    }
    console.log(error);
    console.log(reviews);
    return {reviews, error, loading};
};

export default useReviews;