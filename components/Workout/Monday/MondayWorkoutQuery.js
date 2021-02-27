import { gql } from '@apollo/client';

const MONDAYWORKOUT_QUERY = gql`
  query {
    mondayWorkouts{
      id
      exercise
      reps
      sets
      weight
    }
  }
`;

export default MONDAYWORKOUT_QUERY;