import { gql } from 'react-apollo'
export default gql`
query code($id: String) {
   code(id:$id) {
    id
    title
    description
    code
  }
}
`