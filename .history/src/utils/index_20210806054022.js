export const toTitleCase = (text) => {
    const textArr = text.split(" ");
    var name;
    if(textArr.length > 1){
        name = textArr[0].charAt(0).toUpperCase() + textArr[0].slice(1) + " " + textArr[1].charAt(0).toUpperCase() + textArr[1].slice(1)
    }else{
        name = textArr[0].charAt(0).toUpperCase() + textArr[0].slice(1) 
    }
    return name;
}
export const manageDate = (date) => {
    var d = new Date(date),
    yyyy = d.getFullYear(),
    mm = ('0' + (d.getMonth() + 1)).slice(-2),
    dd = ('0' + d.getDate()).slice(-2),
    hh = d.getHours(),
    h = hh,
    min = ('0' + d.getMinutes()).slice(-2),
    ampm = 'AM',
    time;
        
    if (hh > 12) {
        h = hh - 12;
        ampm = 'PM';
    } else if (hh === 12) {
        h = 12;
        ampm = 'PM';
    } else if (hh == 0) {
        h = 12;
    }
    time = dd + '-' + mm + '-' + yyyy + ', ' + h + ':' + min + ' ' + ampm;
    return time;
}