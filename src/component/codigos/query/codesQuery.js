import { gql } from 'react-apollo'
export default gql`
  query {
    codes {
      id
      title
      description
    }
  }
`