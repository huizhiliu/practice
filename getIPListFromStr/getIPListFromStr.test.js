const getIPListFromStr = require('./index')

describe('getIPListFromStr', () => {
    it("should get params 25525511135 to equal  ['255.255.11.135'， '255.255.111.35']", () => {
        expect(getIPListFromStr('25525511135')).toStrictEqual(['255.255.11.135', '255.255.111.35'])
    })

    it("should get params 010010 to equal  ['0.10.0.10'，'0.100.1.0']", () => {
        expect(getIPListFromStr('010010')).toStrictEqual(['0.10.0.10', '0.100.1.0'])
    })
})