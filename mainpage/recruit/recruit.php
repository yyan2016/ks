<?php
//echo "1";
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
$result=$dbh->query("SELECT * from recruit WHERE name='".$cook."'");
//echo("SELECT * from department WHERE name='".$cook."'");
$result1=$result->fetchAll();
//$result = $dbh->query("INSERT INTO ligin (name,password,email,phone) values ('".$name."','".$password."','".$email."','".$phone."')");
$result2=json_encode($result1);
echo($result2);
//echo ('true');
?>
