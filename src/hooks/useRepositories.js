// import {useState, useEffect} from "react";
import {useQuery} from "@apollo/client";
import {GET_REPOSITORIES} from "../graphql/queries";

const useRepositories =()=>{
    // const [repositories, setRepositories]= useState();
    // const [loading, setLoading]=useState(false);

    // const fetchRepositories=async()=>{
    //     setLoading(true);
    //     const response =await fetch("http://192.168.1.88:5000/api/repositories");
    //     const json = await response.json();
    //     setLoading(false);
    //     setRepositories(json);
    // };
    
    const {data, error, loading} =useQuery(GET_REPOSITORIES, {
            fetchPolicy: 'cache-and-network',
        });
        let repositories;
        if(!loading && data){
            console.log(data);
            repositories = data.repositories;
        }
   
    // useEffect(() => {
    //     if(!loading && data){
    //         console.log(data);
    //         setRepositories(data.repositories);
    //     }
    // }, [data]);
    console.log(repositories);
    return {repositories, error, loading};
};
export default useRepositories;