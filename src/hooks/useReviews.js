import {useQuery} from "@apollo/client";
import {GET_REVIEWS} from "../graphql/queries";

const useReviews =({id, first, variables})=>{
    const {data, error, loading, fetchMore, ...result}=useQuery(GET_REVIEWS, {
        fetchPolicy: 'cache-and-network',
        variables: {id, first}
    });
    console.log(data);
    const handleFetchMore=()=>{
        const canFetchMore= !loading && data?.repository.reviews.pageInfo.hasNextPage;
        if(!canFetchMore){
            return;
        }
        fetchMore({
            variables:{
                after: data.repository.reviews.pageInfo.endCursor,
                ...variables,
            }
        });
       
    };
    return {
        reviews: data?.repository.reviews, 
        error,
        fetchMore: handleFetchMore, 
        loading,
        ...result,
    };
};

export default useReviews;