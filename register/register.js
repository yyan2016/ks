function test()
{
  var na=document.form1.n.value;
  var pass=document.form1.p.value;
  var ema=document.form1.e.value;
  var ph=document.form1.t.value;

  var url="./register.php";
  // $.ajax({
  //   url:url,
  //   type:'post',
  //   data: {//JSON.stringify()
  //     'name':na,
  //     'password':pass,
  //     'email':ema,
  //     'phone':ph
  //    },
  //    success: function(data) {
  //      console.log(data)
  //    },
  //    error: function(err) {
  //      console.log(err)
  //    }
  // });

  $.post(url,{
    'name':na,
    'password':pass,
    'email':ema,
    'phone':ph
  },function(data){
    //code...
     window.location.href='../index.html';
  })


}
