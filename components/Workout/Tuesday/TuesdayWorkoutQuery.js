import { gql } from '@apollo/client';

const TUESDAYWORKOUT_QUERY = gql`
  query {
    tuesdayWorkouts{
      id
      exercise
      reps
      sets
      weight
    }
  }
`;

export default TUESDAYWORKOUT_QUERY;