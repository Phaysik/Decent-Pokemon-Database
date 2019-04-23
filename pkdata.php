<?php
// $file = fopen("pokemon.txt","r");
// $id = array();
// $name = array();
// $types = array();

// while(! feof($file))
//   {
//     $line = explode (",", fgets($file));
//     array_push($id, $line[0]);
//     array_push($name, $line[1]);
//     array_push($types, $line[2]);
//   }

// fclose($file);

$pokemon = "Bulbasaur";
$array = array();

$con = mysqli_connect('localhost','pkdata','LqMth9j8E9GuHYAL','pkdata', '8889');

if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
} else {
    // $sql = "SELECT * FROM pokemon WHERE pokemon.name = '$pokemon'";
    $sql = "SELECT * FROM pokemon";
    $result = $con->query($sql);

    if ($result->num_rows > 0) {
    // output data of each row
        while($row = $result->fetch_assoc()) {
            array_push($array, [$row["id"], $row["name"], $row["types"]]);
        }
        echo json_encode($array);
    } else {
        throw new Exception("No");
    }
}

?>