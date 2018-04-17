export default {
    /**验证码*/
    verification:()=>(
        {type: "string", len:6, required: true, message: '请输入验证码', whitespace:true}
    ),
    
    /**字母或数字*/
    abc123:()=>(
        {type: "string", pattern: /^[A-z\d_]{6,20}$/,  required: true, message: '该项不能为空(6-20位，必须为字母或数字下划线)', whitespace: true}
    ),

    password:()=>(
        {type: "string", pattern: /.{6,20}$/,  required: true, message: '该项不能为空(6-20位)', whitespace: true}
    ),

    /**用户显示名*/
    nickname:()=>(
        {type: "string", pattern: /^[A-z\d\u4e00-\u9fa5]{1,20}$/,  required: true, message: '该项不能为空(20位之内，必须为字母、数字、汉字下划线)', whitespace: true}
    ),

    /**手机*/
    phone:()=>(
        { type: "string", pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/,  required: true, message: '请输入手机号码', whitespace:true}
    ),

    /**纳税人识别号*/
    taxid:()=>(
        { type: "string", pattern: /^[A-Z0-9]{15}$|^[A-Z0-9]{17}$|^[A-Z0-9]{18}$|^[A-Z0-9]{20}$/, required: true, message: "15或17或18或20位字母、数字组成",whitespace: true}
    ),

    /**电子邮箱*/
    email:()=>(
        { type: "string", pattern: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/, message: "请输入正确的电子邮箱",whitespace: true}
    ),
}