# Lvalid
一个简单的基于jquery的验证插件，可针对不同类型的输入进行不同的验证判断，并添加必填项及判断必填项是否填写。根据实际情况可进行插件扩展及配置
初始化：
  var L=$.Lvalid();//插件初始化返回function
  $(".button").Lvalid(L);//当button被点击时触发验证
$.Lvalid({//可传入对象进行初始化
      plugin:{'phone_number':'checkMobile','id_card_no':'checkCard','email':'checkEmail'},//传入验证模板名及对应验证函数，需要新增验证模板时按此格式添加
      plugin_path:['plugin-list.js'],//插件列表路径，需添加时再次添加
      name:'Lvalid-type',//对应在input中的验证插件的属性名
      require_name:'data-require'//对应在input中的必填项的属性名
})

简单例子：
验证手机号：<input type="text" value="" Lvalid-type='phone_number'  data-require='required'>
