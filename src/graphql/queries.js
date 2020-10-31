import { gql } from 'apollo-boost';

export const GET_SONGS = gql`
  query getSongs {
    songs(order_by: { created_at: desc }) {
      artists
      created_at
      duration
      id
      thumbnail
      title
      url
    }
  }
`;
