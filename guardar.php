<?php
$conexion = mysqli_connect("178.128.146.252","admin_sigmauser","pfaDKIJyPF","admin_sigmatest");
if (!$conexion) {
	echo "error al conectar a la base de datos ";
}
else{
	echo "conectado a la base de datos ";
}

$nombre = $_POST["nombre"];
$correo = $_POST["email"];
$ciudad = $_POST["ciudades"];
$departamento = $_POST["departamentos"];


$insertar = "insert into contacts(name,email,state,city) values('$nombre','$correo','$ciudad','$departamento')";
$resultado = mysqli_query($conexion,$insertar);

if (!$insertar) {
	echo "error al insertar";
}
else{
	echo "registro insertado ";
}

msqli_close(conexion);