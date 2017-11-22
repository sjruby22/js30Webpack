import getBaseUrl from './baseUrl'
import {expect} from 'chai'

describe('baseUrl in Development enviornment', ()=> {
    it('should use mockAPI hostname in devlopment', () => {
        global.window = { location : { hostname : 'createstuff-sjruby.c9users.io' } }
        const baseUrl = getBaseUrl()
        expect(baseUrl).to.equal("http://createstuff-sjruby.c9users.io:8081/")
    })
})

describe('baseUrl in non-development enviornment', ()=> {
    it('should use the generic API name', () => {
        global.window = { location : { hostname : 'www.test.com' } }
        const baseUrl = getBaseUrl()
        expect(baseUrl).to.equal("/")
    })
})
