const mustacheStrCompile = require('.');

describe('mustacheStrCompile', () => {
    it('should render string without data', () => {
        expect(mustacheStrCompile('2222')).toBe('2222')
    })

    it('should render string without data', () => {
        expect(mustacheStrCompile('1111')).toBe('1111')
    })

    it('should excape string', () => {
        expect(mustacheStrCompile('<script>xss</script>')).toBe("&lt;script&gt;xss&lt;&#x2F;script&gt;")
    })

    it('should get string when mustacheStrCompile get template string and data', () => {
        expect(mustacheStrCompile('111 {{ name }} {{ value }}', {name: 'name', value: 'value'})).toBe('111 name value')
    })

    it('should throw an error if mustacheStrCompile get a number', () => {
        expect(() => mustacheStrCompile(123)).toThrow()
    })
})