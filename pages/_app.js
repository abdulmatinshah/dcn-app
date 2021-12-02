import { ApolloProvider } from '@apollo/client'
import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout/Layout'
import { client } from '../lib/client'
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
