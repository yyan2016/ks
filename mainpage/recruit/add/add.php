<?php
$id=$_POST['id'];
$name1=$_POST['name1'];
$cook=$_COOKIE['zhang'];
echo($id+'\n');
echo($name1+'\n');
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
var_dump($dbh);
$result=$dbh->query("INSERT INTO recruit (name,id,name1) values ('".$cook."','".$id."','".$name1."')");
//echo("INSERT INTO department (name,id,name1) values ('".$cook."','".$id."','".$name1."')");
var_dump($result);
?>
