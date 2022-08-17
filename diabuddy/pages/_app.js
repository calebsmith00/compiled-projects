import { Auth0Provider } from "@auth0/auth0-react"

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="dev-9d5zzna8.us.auth0.com"
      clientId="VAuOIvk09Jd22wNwCi5L2xyIvAmmrjIU"
      redirectUri={'/'}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  )
}

export default MyApp
