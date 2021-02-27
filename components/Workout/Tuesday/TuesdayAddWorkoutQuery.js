import { gql } from '@apollo/client';

const TUESDAYADDWORKOUT_QUERY = gql`
  mutation AddTuesdayWorkout($exercise: String, $reps: Int, $sets: Int, $weight: Int){
    __typename
    createTuesdayWorkout(data: {
      exercise: $exercise,
      reps: $reps,
      sets: $sets,
      weight: $weight,
      }) {
        id
      }
}
`;

export default TUESDAYADDWORKOUT_QUERY;