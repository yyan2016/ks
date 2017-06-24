<?php
$ids=$_POST['ids'];
$id=$_POST['id'];
$name1=$_POST['name1'];
//  echo($ids);
// echo($id);
//  echo($name1);
// //json.d()
//数据库类型
$dbms='mysql';
//主机名
$host='localhost';
//使用的数据库名
$dbName='XX';
//phpmyadmin用户名
$user='root';
//密码
$pass='XXXXX';
$dsn="$dbms:host=$host;dbname=$dbName";
$dbh = new PDO($dsn,$user,$pass);
$result=$dbh->query("UPDATE department SET id='".$id."',name1='".$name1."' WHERE id='".$ids."'");
var_dump($result);
?>
