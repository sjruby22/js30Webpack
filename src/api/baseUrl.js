const DEV_ENVIRONMENT = "createstuff-sjruby.c9users.io"
const DEV_API_END_POINT = 'http://createstuff-sjruby.c9users.io/'
const PROD_API_END_POINT = 'http://createstuff-sjruby.c9users.io/'

export default function getBaseUrl() {
    const inCloud9 = window.location.hostname === DEV_ENVIRONMENT
    return inCloud9 ? DEV_API_END_POINT : PROD_API_END_POINT
}
