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

export default {
    percentage,
    integer,
    decimal, 
}
