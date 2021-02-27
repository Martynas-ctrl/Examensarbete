import { gql } from '@apollo/client';

const ADD_NUTRITION = gql`
  mutation AddNutrition($foodName: String!,$protein: Int!, $carbs: Int!, $fat: Int!, $totalCalories: Int, $totalProtein: Int){
    __typename
    createNutrition(data: {
      foodName: $foodName, 
      protein: $protein,
      carbs: $carbs,
      fat: $fat,
      totalCalories: $totalCalories,
      totalProtein: $totalProtein,
      }) {
        id
      }
}
`;

export default ADD_NUTRITION;