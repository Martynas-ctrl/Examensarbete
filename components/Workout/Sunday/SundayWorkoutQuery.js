import { gql } from '@apollo/client';

const SUNDAYWORKOUT_QUERY = gql`
  query {
    sundayWorkouts{
      id
      exercise
      reps
      sets
      weight
    }
  }
`;

export default SUNDAYWORKOUT_QUERY;