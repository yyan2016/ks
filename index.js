function test()
{
  var checkok="0123456789";
  var checkstr=document.form1.t.value;
  var allvalid=true;
  if(checkstr.length!=11)
    allvalid=false;
  else {
    for (var i = 0; i < 11; i++) {
      ch=checkstr.charAt(i);
      if(checkok.indexOf(ch)==-1)
      {
        allvalid=false;
        break;
      }
    }
    }
    if (!allvalid) {
      document.all.form1.t.style.color="red";
      alert("您的联系方式有误!");
      return false;
    }
    else {
      document.all.form1.t.style.color="black";
    }
}
