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
query repositories ($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword:String, $first: Int, $after: String) {
    repositories (orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword:$searchKeyword, first: $first, after: $after){
        pageInfo{
            hasNextPage
            endCursor
            startCursor
        }
        edges{
            node{
                id
            ...RepositoryDetails
            }
            cursor
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
        reviews{
            totalCount
            edges{
                node{
                    id
                    repositoryId
                    repository{
                        id
                        fullName
                    }
                    rating
                    createdAt
                    text
                }
            }
        }
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
query repository ($id: ID!, $first: Int, $after: String){
    repository (id:$id){
        id
        fullName
        reviews (first: $first, after: $after){
                totalCount
                edges{
                    node{
                        id
                        text
                        rating
                        createdAt
                        repositoryId
                        user{
                            id
                            username
                        }
                    }
                    cursor
                }
                pageInfo{
                    endCursor
                    startCursor
                    hasNextPage
                }
        }
    
    }
}

`;
