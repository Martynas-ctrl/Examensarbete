import { gql } from '@apollo/client';

const WORKOUT_QUERY = gql`
  query {
    workouts{
      id
      exerciseName
      rep
      set
    }
  }
`;

export default WORKOUT_QUERY;