import { gql } from '@apollo/client';

const WEDNESDAYWORKOUT_QUERY = gql`
  query {
    wednesdayWorkouts{
      id
      exercise
      reps
      sets
      weight
    }
  }
`;

export default WEDNESDAYWORKOUT_QUERY;