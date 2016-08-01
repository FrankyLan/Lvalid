(function($){
  $.Lvalid=function(option){
    var default_option={
      plugin:{'phone_number':'checkMobile','id_card_no':'checkCard','email':'checkEmail'},
      plugin_path:['plugin-list.js'],
      name:'Lvalid-type',
      require_name:'data-require'
    };
    var setting=$.extend({},default_option,option);
    setting.plugin_path.map(function(x){
    $.getScript(x).fail(function(){
      alert("请求的路径不存在");
      return false;
    });
    })
    $("form :input ").each(function(){
      if($(this).attr(setting.require_name)!=false){
        var $required = $("<strong style='color:red'> *</strong>"); //创建元素
        $(this).parent().append($required); //然后将它追加到文档中
      }
    });
    function validate(pat,val){
      return window[pat](val);
    // return new Function(pat+"("+val+")")();
    // return eval(pat+"("+val+")");
    }
    var func=function(){
      var flag=true;
      $("form input[data-require!=false]").each(function(){
      if($(this).val()==''){
        alert('必填项不能为空');
        $(this).focus();
        flag=false;
        return false;
      }
      if(setting.plugin.hasOwnProperty($(this).attr(setting.name))){
        if(!validate(setting.plugin[$(this).attr(setting.name)],$(this).val())){
          $(this).focus();
        flag=false;
        return false;
      }
      }
      });
      if(flag){
        $("textarea").each(function(){
          $(this).val($(this).val().replace(/\n/g,"<br />"));
        })
      $("form").submit();
    }
    }
    return func;
  }
$.fn.extend({Lvalid:function(func){
  $(this).click(func);
}})
})(jQuery);
