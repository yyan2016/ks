<?php
$name=$_POST['name'];
$password=$_POST['password'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$cook=$_COOKIE['zhang'];
//json.d()
//数据库类型
$dbms='mysql';
//主机名
$host='liyhe.com';
//使用的数据库名
$dbName='ks';
//phpmyadmin用户名
$user='root';
//密码
$pass='liyhe/16-014851';
$dsn="$dbms:host=$host;dbname=$dbName";

  $dbh = new PDO($dsn,$user,$pass);
$result = $dbh->query("INSERT INTO ligin (name,password,email,phone) values ('".$name."','".$password."','".$email."','".$phone."')");
//echo ('true');
?>
