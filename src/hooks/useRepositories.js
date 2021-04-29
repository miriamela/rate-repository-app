import {useQuery} from "@apollo/client";
import {GET_REPOSITORIES} from "../graphql/queries";


const useRepositories =({order, searchValue})=>{  
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
    const {data, error, loading} =useQuery(GET_REPOSITORIES, {
            fetchPolicy: 'cache-and-network',
            variables:{...dispatchOrder(order), searchKeyword: searchValue},
        });
        let repositories;
        if(!loading && data){
            console.log(data);
            repositories = data.repositories;
        }
    return {repositories, error, loading};
};
export default useRepositories;