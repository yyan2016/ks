var ids;
$(function(){
  var url="./department.php";

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
      var html="<tr><td>"+item.id+"</td><td>"+item.name1+"</td><td><button id='"+item.id+"' type='button' onclick='test6(this)'>修改</button></td><td><button id='"+item.id+"' type='button' onclick='test2(this)'>删除</button></td></tr>";
      ids=item.id;
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
   var url="./department02.php";
   $.post(url,{'id':th.id},function(data){
    window.location.href="./department.html";
   });
}

function test3()
{
  window.location.href="../mainpage.html";
}

function test4(){

  var s1=document.getElementById("u").value;
  var url="./department03.php";
  $.post(url,{'s1':s1},function(data){
    var result=JSON.parse(data);
    $("tbody").html('');
   result.forEach(function(item,index,array){
     var html="<tr><td>"+item.id+"</td><td>"+item.name1+"</td><td><button id='"+item.id+"' type='button' onclick='test6(this)'>修改</button></td><td><button id='"+item.id+"' type='button' onclick='test2(this)'>删除</button></td></tr>";
     $("tbody").append(html);
   })
  })
}
function test5(){
  var i=document.form2.u2.value;
  var na1=document.form2.p2.value;

  var url="./department04.php";
     $.post(url,{
       'ids':ids,'id':i,'name1':na1
     },function(data){
      //  judge=data;
        window.location.href='./department.html';
     })

  //P(i,na1);
}

// function P(i,na1){
//   //发送数据到php文件
//    var url="./department04.php";
//    $.post(url,{
//      'id':i,'name1':na1
//    },function(data){
//     //  judge=data;
//       window.location.href='../department.html';
//    })
// }

function test6(th){
  ids=th.id;
  $('#myModal').modal('show');
}
