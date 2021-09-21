/** 
 * 字符串转IP
 * params 字符串
 * return {arr} 数组
*/
function getIPListFromStr(str) {
    const STAGE = 4;
    // IP地址由四段组成
    const result = new Array(STAGE);
    const arr = []
    // 深度优先遍历
    const dfs = (s, stageID, strStart) => {
        if (stageID === STAGE) {
            if (strStart === s.length) {
                arr.push(result.join("."))
            }
            return;
        };
        if (strStart === s.length) return;
        // 如果当前以0开头，那么该段IP为0
        if (s[strStart] === '0') {
            result[stageID] = 0
            dfs(s, stageID+1, strStart+1)
        }

        let attr = 0;
        for(let i=strStart; i < s.length; i++) {
            attr = attr * 10 + parseFloat(s[i]);
            // 如果组合的数字满足[0, 255]，那么可以继续往下遍历
            if( 0 < attr && attr <= 255) {
                result[stageID] = attr;
                dfs(s, stageID+1, i+1);
            } else {
                break;
            }
        }
    }
    dfs(str, 0, 0)
    return arr
}

module.exports = getIPListFromStr