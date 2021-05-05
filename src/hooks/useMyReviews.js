import {useQuery} from "@apollo/client";
import {GET_AUTHORIZED_USER} from "../graphql/queries";

const useMyReviews =()=>{
    const {data, error, loading, refetch } =useQuery(GET_AUTHORIZED_USER,{
        fetchPolicy: 'cache-and-network',
    });

  return{
      reviews: data?.authorizedUser.reviews,
      error,
      loading,
      refetch
};
};

export default useMyReviews;