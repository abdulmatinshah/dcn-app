// import { gql } from '@apollo/client'
// import { client } from '../lib/client'

// export default ({ ucs }) => {
//   return (
//     <>
//       <h1>GQLPage</h1>
//       <pre>{JSON.stringify(ucs, null, 2)}</pre>
//     </>
//   )
// }

// export const getStaticProps = async () => {
//   const { data } = await client.query({
//     query: gql`
//       query MyQuery {
//         uCs {
//           edges {
//             node {
//               id
//               title
//             }
//           }
//         }
//       }
//     `,
//   })
//   return {
//     props: { ucs: data.uCs.edges },
//   }
// }
