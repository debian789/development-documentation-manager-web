import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// import PostUpvoter from './PostUpvoter';

// The data prop, which is provided by the wrapper below contains,
// a `loading` key while the query is in flight and posts when it is ready
function PostList({ data: { loading, codes } }) {
  if (loading) {
    return <div>Loading</div>;
  } else {
    debugger
    return (
      <ul>
        {codes.sort((x, y) => y.votes - x.votes).map(code =>
          <li key={code.id}>
            {code.title} by {' '}
          </li>
        )}
      </ul>
    );
  }
}

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList here)
export default graphql(gql`
  query {
    codes {
      id
      title
    }
  }
`)(PostList);