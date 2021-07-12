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