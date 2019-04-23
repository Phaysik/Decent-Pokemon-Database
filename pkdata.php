<?php


// $content = $_REQUEST["content"];

// switch ($content) {
//     case "national":
//         getFile();
//         break;
// }

getFile();
function getFile() {
    $file = fopen("Output.txt","r");
    $id = array();
    $name = array();
    $types = array();

    while(! feof($file))
    {
        array_push($name, fgets($file));
        // $line = explode (",", fgets($file));
        // array_push($id, $line[0]);
        // array_push($name, $line[1]);
        // array_push($types, $line[2]);
    }

    $con = mysqli_connect('localhost','pkdata','LqMth9j8E9GuHYAL','pkdata', '8889');
    for ($i = 0; $i < count($name); $i++) {
            $sql = "INSERT INTO generation7 (name) VALUES ('$name[$i]')";
            if ($con->query($sql) === TRUE) {
                continue;
            } else {
                echo "Error: " . $sql . "<br>" . $con->error;
            }
        } 

    fclose($file);
}

function national() {
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    } else {
       
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
}

// $pokemon = "Bulbasaur";
// $array = array();
 // $sql = "SELECT * FROM pokemon WHERE pokemon.name = '$pokemon'";
?>