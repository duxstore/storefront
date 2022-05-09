import { parse } from 'tldts'
import { Model } from 'vue-api-query'

/**
 * Just make sure we always have a store as part of our API url
 * Get it from the domain name
 */
export default function (context) {
  let subdomain = null

  if (context.req) {
    const domain = parse(context.req.headers.host)
    subdomain = domain.subdomain
  }

  if (subdomain === null) {
    subdomain = parse(document.location.origin).subdomain
  }

  Model.$http = context.$axios
  Model.$baseURL = context.$axios.defaults.baseURL + '/store/' + subdomain

  // eslint-disable-next-line no-console
  console.log(subdomain, Model.$baseURL)
}
