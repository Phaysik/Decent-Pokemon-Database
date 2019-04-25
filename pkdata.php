<?php

$content = $_REQUEST["content"];

switch ($content) {
    case "national":
        pokedex("SELECT * FROM pokemon ");
        break;
    case "kanto":
        pokedex("SELECT * FROM pokemon JOIN generation1 WHERE generation1.game = 1 AND pokemon.id = generation1.id");
        break;
    case "LG":
        pokedex("SELECT * FROM pokemon JOIN generation1 WHERE pokemon.id = generation1.id");
        break;
    case "johto":
        pokedex("SELECT * FROM pokemon JOIN generation2 WHERE pokemon.id = generation2.id");
        break;
    case "hoenn":
        pokedex("SELECT * FROM pokemon JOIN generation3 WHERE pokemon.id = generation3.id");
        break;
    case "sinnoh":
        pokedex("SELECT * FROM pokemon JOIN generation4 WHERE pokemon.id = generation4.id");
        break;
    case "unova":
        pokedex("SELECT * FROM pokemon JOIN generation5 WHERE pokemon.id = generation5.id");
        break;
    case "kalos":
        pokedex("SELECT * FROM pokemon JOIN generation6 WHERE pokemon.id = generation6.id");
        break;
    case "central":
        pokedex("SELECT * FROM generation6 WHERE region = 'Central'");
        break;
    case "coastal":
        pokedex("SELECT * FROM generation6 WHERE region = 'Coastal'");
        break;
    case "mountain":
        pokedex("SELECT * FROM generation6 WHERE region = 'Mountain'");
        break;
    case "alola":
        pokedex("SELECT * FROM pokemon JOIN generation7 WHERE pokemon.id = generation7.id");
        break;
    case "melemele":
        pokedex("SELECT * FROM generation7 WHERE region LIKE '%Melemele%'");
        break;
    case "akala":
        pokedex("SELECT * FROM generation7 WHERE region LIKE '%Akala%'");
        break;
    case "ulaula":
        pokedex("SELECT * FROM generation7 WHERE region LIKE '%Ulaula%'");
        break;
    case "poni":
        pokedex("SELECT * FROM generation7 WHERE region LIKE '%Poni%'");
        break;
}

// getGenerations();
function getFile() {
    $file = fopen("Output.txt","r");
    $id = array();
    $name = array();
    $types = array();

    while(!feof($file))
    {
        // array_push($name, fgets($file));
        $line = explode (",", fgets($file));
        array_push($id, $line[0]);
        array_push($name, $line[1]);
        array_push($types, $line[2]);
    }

    $con = mysqli_connect('localhost','pkdata','LqMth9j8E9GuHYAL','pkdata', '8889');
    for ($i = 0; $i < count($name); $i++) {
            $sql = "INSERT INTO akala (id, name, types) VALUES ($id[$i], '$name[$i]', '$types[$i]')";
            if ($con->query($sql) === TRUE) {
                continue;
            } else {
                echo "Error: " . $sql . "<br>" . $con->error;
            }
        } 

    fclose($file);
}

function getGenerations() {
    $file = fopen("Output.txt","r");
    $name = array();
    $regions = array();

    while(! feof($file))
    {
        array_push($name, fgets($file));
    }

    $con = mysqli_connect('localhost','pkdata','LqMth9j8E9GuHYAL','pkdata', '8889');
    $gens = array("melemele", "akala", "ulaula", "poni");
    for ($i = 0; $i < count($name); $i++) {
        $regions = array();
        $newName = substr($name[$i], 0, strlen($name[$i]) - 1);
        for ($j = 0; $j < count($gens); $j++) {
            $sql = "SELECT * FROM $gens[$j] JOIN generation7 WHERE '$newName' = $gens[$j].name AND generation7.id = $gens[$j].id";
            $result = $con->query($sql);
            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    array_push($regions, ucwords($gens[$j]));
                }
            } 
        }

        $spaceGens = implode(" ", $regions);    // Split on space

        $sql = "UPDATE generation7 SET region = '$spaceGens' WHERE name = '$newName'"; // Update column to have appropriate generations
        if ($con->query($sql) === TRUE) {
            continue;
        } else {
            echo "Error: " . $sql . "<br>" . $con->error;
        }
    }
}

function pokedex($query) {
    $con = mysqli_connect('localhost','pkdata','LqMth9j8E9GuHYAL','pkdata', '8889');
    $array = array();

    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    } else {
             
        $sql = $query;
        
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