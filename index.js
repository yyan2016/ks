function test()
{
  var na=document.form1.u.value;
  var pass=document.form1.p.value;
  var judge=false;

  P(na,pass,judge);
}

function P(na,pass,judge){
  //发送数据到php文件
   var url="./index.php";
   $.post(url,{
     'name':na,'password':pass
   },function(data){
    //  judge=data;
    if(data=='true'){
      window.location.href='./mainpage/mainpage.html';
    }else{
      alert('您输入的账户或者密码有误！')
    }
  });
}
