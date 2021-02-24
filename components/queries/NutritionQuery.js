import { gql } from '@apollo/client';

const NUTRITION_QUERY = gql`
  query {
    nutritions{
      id
      foodName
      protein
      carbs
      fat
      totalCalories
      totalProtein
      nutritionLunches {
        id
        totalCalories
      }
    }
  }
`;

export default NUTRITION_QUERY;