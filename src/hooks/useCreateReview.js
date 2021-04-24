import {CREATE_REVIEW} from "../graphql/mutations";
import {useMutation} from "@apollo/client";


const useCreateReview =()=>{
    const [mutate, result] = useMutation(CREATE_REVIEW);
    const createReview =async({ownerName, repositoryName, rating, text})=>{
        // console.log(rating, typeof rating);
        const response = await mutate({variables:{ownerName, repositoryName, rating, text}});
        return response.data.createReview;
    };
    return [createReview, result];
};

export default useCreateReview;