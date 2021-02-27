import { gql } from '@apollo/client';

const MONDAYADDWORKOUT_QUERY = gql`
  mutation AddMondayWorkout($exercise: String, $reps: Int, $sets: Int, $weight: Int){
    __typename
    createMondayWorkout(data: {
      exercise: $exercise,
      reps: $reps,
      sets: $sets,
      weight: $weight,
      }) {
        id
      }
  }
`;

export default MONDAYADDWORKOUT_QUERY;