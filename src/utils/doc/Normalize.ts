/**百分数*/
const percentage=(value, old)=>{
    if(!value){
        return "";
    }

    value = value.toString().match(/\d+\.?\d*/g);
    if(!value || value.length<=0){
        return old;
    }else{
        value = value[0]
        for(;value.length>1;){
            if(value.substr(0,1)!=='0'){
                break;
            }else if(value.substr(0,2)==='0.'){
                break;
            }else{
                value = value.substr(1);
            }
        }

        if(Number(value)>100){
            return old;
        }else{
            return value;
        }
    }
} 

/**小数*/
const decimal=(value, old)=>{
    if(!value){
        return "";
    }

    value = value.toString().match(/\d+\.?\d*/g);
    if(!value || value.length<=0){
        return old;
    }else{
        value = value[0]
        for(;value.length>1;){
            if(value.substr(0,1)!=='0'){
                break;
            }else if(value.substr(0,2)==='0.'){
                break;
            }else{
                value = value.substr(1);
            }
        }
        return value;
    }
}

/**整数*/
const integer=(value, old)=>{
    if(!value){
        return "";
    }

    value = value.toString().match(/^\+?[1-9]\d*$/g);
    if(!value || value.length<=0){
        return old;
    }else{
        return value[0];
    }
} 

/** 数字格式化 */
const toThousands=(_num)=>{
    let num = (_num || 0).toString(), result = '';
    let numnext = "";
    let numpre = "";
    if(num.indexOf('.')>=0){
        numnext = num.substring(num.indexOf('.'),num.length);//小数点后
        numpre = num.substring(0,num.indexOf('.'));//小数点前
    }else{
        numnext=".00";
        numpre = num;
    }
    while (numpre.length > 3) {
        result = ',' + numpre.slice(-3) + result;
        numpre = numpre.slice(0, numpre.length - 3);
    }
    if (numpre) { result = numpre + result; }
    if(numnext){result+=numnext }
    return result;
}

export default {
    percentage,
    integer,
    decimal, 
    toThousands
}
