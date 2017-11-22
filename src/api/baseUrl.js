export default function getBaseUrl() {
    const inCloud9 = window.location.hostname === "createstuff-sjruby.c9users.io"
    return inCloud9 ? 'http://createstuff-sjruby.c9users.io:8081/' : '/'
}
