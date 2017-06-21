function test()
{
  var i=document.form1.u.value;
  var na1=document.form1.p.value;
  var ph=document.form1.x.value;
  var em=document.form1.y.value;

  P(i,na1,ph,em);
}

function P(i,na1,ph,em){
  //发送数据到php文件
   var url="./add.php";
   $.post(url,{
     'id':i,'name1':na1,'phone':ph,'email':em
   },function(data){
    //  judge=data;
      window.location.href='../staff.html';
   })
}
