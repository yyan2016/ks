var ids;
$(function(){
  var url="./recruit.php";

  $.get(url,function(data){
    //alert(data);

    //
     var result=JSON.parse(data);
    //  result.forEach(function(value, index, array){
    //     alert(array[index]);
    //     alert(value);
    //  });
    //alert(result);

    result.forEach(function(item,index,array){
      //  document.getElementById("1").innerHTML=item.id;
      // // console.log(item.id);
      //  document.getElementById("2").innerHTML=item.name1;
      var html="<tr><td>"+item.id+"</td><td>"+item.name1+"</td><td><button  id='"+item.id+"' type='button' onclick='test2(this)'>删除</button></td><td><button id='"+item.id+"' type='button' onclick='test8(this)'>录用</button></td></tr>";
      $("tbody").append(html);
    })
})

});

function test1()
{
  window.location.href="./add/add.html";
}

function test2(th){

  //console.log(th.id);
  //
   var url="./recruit02.php";
   $.post(url,{'id':th.id},function(data){
    window.location.href="./recruit.html";
   });
}

function test3()
{
  window.location.href="../mainpage.html";
}
function test7(){
  var i=document.form3.u3.value;
  var na1=document.form3.p3.value;
  var ph=document.form3.x3.value;
  var em=document.form3.y3.value;

  var url="../staff/add/add.php";
  $.post(url,{
    'id':i,'name1':na1,'phone':ph,'email':em
  },function(data){
   //  judge=data;
     var url1="./recruit02.php";
     $.post(url1,{'id':ids},function(data){
     window.location.href="./recruit.html";
   });
  })
}

function test8(th){
  ids=th.id;
  $('#myModal').modal('show');
}
