import { gql } from '@apollo/client';

const USERS_QUERY = gql`
  query {
    userInfos {
      id
      fullName
      gender
      age
      height
      weight
      total
      createdAt
    }
  }
`;

export default USERS_QUERY;