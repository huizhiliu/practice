/**
 * 字符串模版渲染
 * params 模版
 * return 编译后字符串 
 */
const ENTITYMAP = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };

class Writer {
    constructor() {
    }
    _escapeHtml(string) {
        return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
            return ENTITYMAP[s];
        });
    }
    compile(template, data) {
        // 转义
        template = this._escapeHtml(template)
        const tplStr = template.replace(/\n/g, '')
            .replace(/{{(.+?)}}/g, (match, p) => `'+(data.${p})+'`);
        if (data && Object.keys(data).length) {
            Object.keys(data).forEach(key => {
                data[key] = this._escapeHtml(data[key])
            })
        }
        try {
            return new Function('data', `var tpl='${tplStr}'; return tpl;`)(data);
        } catch (error) {
            console.warn(error)
        }
    }
}

const defaultWriter = new Writer()

function mustacheStrCompile(template, data) {
    if (typeof template !== 'string') {
        throw new TypeError('Invalid template! Template should be a "string" ' +
                        'but "' + template + '" was ' + typeof template);
    }
    return defaultWriter.compile(template, data)
}

module.exports = mustacheStrCompile
