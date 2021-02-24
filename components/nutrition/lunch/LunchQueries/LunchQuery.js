import { gql } from '@apollo/client';

const NUTRITION_QUERY = gql`
  query {
    nutritionLunches{
      id
      foodName
      protein
      carbs
      fat
      totalCalories
      nutritions {
        id
        totalCalories
      }
    }
  }
`;

export default NUTRITION_QUERY;