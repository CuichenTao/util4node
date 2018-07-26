
function timestamp2Time(timestamp) {
    let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    D = (date.getDate()+1 < 10 ? '0'+(date.getDate()) : date.getDate()) + '';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    return Y+M+D + " " + h + m + s;
}

function timestamp2Date(timestamp) {
    let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    D = (date.getDate()+1 < 10 ? '0'+(date.getDate()) : date.getDate()) + '';
    return Y+M+D;
}


exports.timestamp2Time = timestamp2Time;
exports.timestamp2Date = timestamp2Date;