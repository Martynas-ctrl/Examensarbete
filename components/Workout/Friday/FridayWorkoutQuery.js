import { gql } from '@apollo/client';

const FRIDAYWORKOUT_QUERY = gql`
  query {
    fridayWorkouts{
      id
      exercise
      reps
      sets
      weight
    }
  }
`;

export default FRIDAYWORKOUT_QUERY;