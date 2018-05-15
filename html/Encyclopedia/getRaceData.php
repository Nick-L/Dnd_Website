<?php


	$hostname = "127.0.0.1";
	$username = "root";
	$password = "chinaboy551";
	$dbname = "encyclopedia";
	$sqlQuery = "SELECT * From encyclopedia.races";

	//connecting to database
	$conn = mysqli_connect($hostname, $username, $password, $dbname);
	if($conn->connect_error){
		die("Connection failed: " . $conn->connect_error);
	}

	$result = mysqli_query($conn, $sqlQuery);

	//store info into an array
	$data = array();
	while($row = $result->fetch_assoc()){
		$data[] = $row;
	}

	//return data in JSON format
	echo json_encode($data);

?>