<?php
  $id=$_POST['id'];
  $cook=$_COOKIE['zhang'];
  //json.d()
  //数据库类型
  $dbms='mysql';
  //主机名
  $host='localhost';
  //使用的数据库名
  $dbName='ks';
  //phpmyadmin用户名
  $user='root';
  //密码
  $pass='hnustlihe';
  $dsn="$dbms:host=$host;dbname=$dbName";

  $dbh = new PDO($dsn,$user,$pass);
  //echo("SELECT * from department WHERE name='".$cook."'");
  $dbh->query("DELETE FROM department WHERE id='".$id."'");
?>
