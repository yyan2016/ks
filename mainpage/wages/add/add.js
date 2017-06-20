function test()
{
  var i=document.form1.u.value;
  var na1=document.form1.p.value;

  P(i,na1);
}

function P(i,na1){
  //发送数据到php文件
   var url="./add.php";
   $.post(url,{
     'id':i,'name1':na1
   },function(data){
    //  judge=data;
      window.location.href='../wages.html';
   })
}
