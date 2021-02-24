import { gql } from '@apollo/client';

const PAGINATION_QUERY = gql`
  query {
    nutritions(skip: 2) {
      id
      foodName
      protein
      carbs
      fat
      totalCalories
      nutritionLunches {
        id
        totalCalories
      }
    }
  }
`;

export default PAGINATION_QUERY;