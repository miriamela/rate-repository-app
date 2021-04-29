import {gql} from "@apollo/client";

const REPOSITORY_DETAILS =gql`
fragment RepositoryDetails on Repository{
    fullName 
    description 
    language 
    stargazersCount 
    forksCount 
    reviewCount 
    ratingAverage 
    ownerAvatarUrl
}
`;

export const GET_REPOSITORIES =gql`
query repositories ($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword:String) {
    repositories (orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword:$searchKeyword){
        edges{
            node{
                id
            ...RepositoryDetails
            }
        }
    }
}
${REPOSITORY_DETAILS}
`;

export const GET_AUTHORIZED_USER = gql`
query{
    authorizedUser {
        id
        username
      }
}
`;

export const GET_REPOSITORY = gql`
query repository ($id: ID!){
    repository(id:$id){
        id
        url 
        fullName 
        description 
        language 
        stargazersCount 
        forksCount 
        reviewCount 
        ratingAverage 
        ownerAvatarUrl
    }
}

`;
export const GET_REVIEWS =gql`
query repository ($id: ID!){
    repository(id:$id){
        id
        fullName
        reviews {
            edges {
                node {
                    id
                    text
                    rating
                    createdAt
                    user {
                        id
                        username
                    }
                }
            }
        }
    }
}
`;
