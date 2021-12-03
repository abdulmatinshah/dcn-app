import { gql } from '@apollo/client'
import { client } from '../lib/client'

export default GQL = ({ ucs }) => {
  return (
    <>
      <h1>GQLPage</h1>
      <pre>{JSON.stringify(ucs, null, 2)}</pre>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await client.query({
    query: gql`
      query MyQuery {
        uCs {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `,
  })
  return {
    props: { ucs: res?.data?.uCs?.edges || {} },
  }
}
