<?php
//echo "1";
$s1=$_POST['s1'];
$cook=$_COOKIE['zhang'];
//json.d()
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
//echo("SELECT * from department WHERE name='".$cook."'");
$result=$dbh->query("SELECT * from department WHERE name='".$cook."' AND id='".$s1."' OR name='".$cook."' AND name1='".$s1."'");
//echo("SELECT * from department WHERE name='".$cook."' AND id='".$s1."' OR name='".$cook."' AND name1='".$s1."'");
$result1=$result->fetchAll();
//$result = $dbh->query("INSERT INTO ligin (name,password,email,phone) values ('".$name."','".$password."','".$email."','".$phone."')");
$result2=json_encode($result1);
//var_dump($result2);
echo($result2);
//echo ('true');
?>
