import {useQuery} from "@apollo/client";
import {GET_REPOSITORIES} from "../graphql/queries";


const useRepositories =({order, searchValue, variables})=>{  
    console.log(searchValue);
    const dispatchOrder = (order)=>{
        switch (order) {
            case "LatestFirstReview":{
                return {orderBy: "CREATED_AT", orderDirection: "DESC" };
            }
            case "HightestRated" :{
                return {orderBy:"RATING_AVERAGE", orderDirection: "DESC"};
            }
            case "LowestRated":{
                return {orderBy:"RATING_AVERAGE", orderDirection: "ASC"};
            }
            default: {
                return {orderBy: "CREATED_AT", orderDirection: "DESC"};
            }
        }
    };
    const {data, error, loading, fetchMore, ...result} =useQuery(GET_REPOSITORIES, {
            fetchPolicy: 'cache-and-network',
            variables:{...dispatchOrder(order), searchKeyword: searchValue},
        });

        const handleFetchMore=()=>{
            const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
            if(!canFetchMore){
                return;
            }
            fetchMore({
                variables:{
                    after:data.repositories.pageInfo.endCursor,
                    ...variables,
                },
            });
        };
    return {
        repositories: data?.repositories, 
        error,
        fetchMore: handleFetchMore, 
        loading,
        ...result,
    };
};
export default useRepositories;