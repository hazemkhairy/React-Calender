export const dateToString = (date) => {
    let year = date.getFullYear().toString();
    let month = date.getMonth().toString();
    month = month.length < 2 ? '0' + month : month;
    let day = date.getDate().toString();
    day = day.length < 2 ? '0' + day : day;
    let ret = year + month.toString() + day.toString()
    return ret;
}
export const stringToDate = (s) => {
    let year = s.slice(0, 4);
    let month = s.slice(4, 6);
    let day = s.slice(6, 8)
    let ret = new Date(Number(year), Number(month), Number(day))
    console.log('r', ret)
    return ret;
}
export const getFormatedISO = (date) => {
    let tzoffset = (new Date()).getTimezoneOffset()*60000;
    let ret = (new Date(date - tzoffset)).toISOString().slice(0, 16);
    return ret
}