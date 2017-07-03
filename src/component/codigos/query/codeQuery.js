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
/*

mutation createCode($title: String!, $description: String, $code: String!){
  addCode(title:$title, description:$description,code: $code) {
    id
    title
    code
    description
  }
}*/
