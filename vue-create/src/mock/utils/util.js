export const formatMockData = (
    mockData = {},
    codeStatus = [0, 300101],
    msg = '@cword(1,10)'
) => {
    let initFormatObj = {
        'code|1': codeStatus,
        'data|1': comp(mockData),
        msg: msg
    }
    return initFormatObj
}

// 组合数据
export const comp = function(value) {
    return [null, '', value]
}
