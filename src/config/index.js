import Env from './env'

const ajaxUrl = Env === 'development'
  ? 'http://qx7514.free.ngrok.cc/apt'
  : Env === 'production'
    ? 'https://production.url.com'
    : 'https://debug.url.com'

let config = {
  api: ajaxUrl
}
export default config
