<?php
$name=$_POST['name'];
$password=$_POST['password'];
$judge='false';


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
  foreach ($dbh->query('SELECT * from ligin') as $row) {
    # code...
    if($password==$row['password']&&$name==$row['name']){
      $judge='true';
      setCookie('zhang',$row['name'],time()+3600);
    }

  }
  echo $judge;
?>
