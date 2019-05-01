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
    case "items":
        items("SELECT * FROM items");
        break;
    case "1":
        moves("SELECT * FROM moves WHERE gens LIKE '%gen1%' ORDER BY name ASC");
        break;
    case "2":
        moves("SELECT * FROM moves WHERE gens LIKE '%gen2%' ORDER BY name ASC");
        break;
    case "3":
        moves("SELECT * FROM moves WHERE gens LIKE '%gen3%' ORDER BY name ASC");
        break;
    case "4":
        moves("SELECT * FROM moves WHERE gens LIKE '%gen4%' ORDER BY name ASC");
        break;
    case "5":
        moves("SELECT * FROM moves WHERE gens LIKE '%gen5%' ORDER BY name ASC");
        break;
    case "6":
        moves("SELECT * FROM moves WHERE gens LIKE '%gen6%' ORDER BY name ASC");
        break;
    case "7":
        moves("SELECT * FROM moves WHERE gen = 7");
        break;
}

// getFile();
function getFile() {
    $file = fopen("Output.txt","r");
    $tmName = array();
    $name = array();
    $type = array();

    while(!feof($file))
    {
        // array_push($name, fgets($file));
        $line = explode ("|", fgets($file));
        array_push($tmName, $line[0]);
        array_push($name, $line[1]);
        array_push($type, $line[2]);
    }

    $con = mysqli_connect('localhost','pkdata','LqMth9j8E9GuHYAL','pkdata', '8889');
    for ($i = 0; $i < count($name); $i++) {
        $sql = "INSERT INTO moves (tmName, name, type, gen) VALUES ('$tmName[$i]', '$name[$i]', '$type[$i]', 7)";
        if ($con->query($sql) === TRUE) {
            continue;
        } else {
            echo "Error: " . $sql . "<br>" . $con->error;
        }
    } 

    fclose($file);
}

function getGenerations() {
    $con = mysqli_connect('localhost','pkdata','LqMth9j8E9GuHYAL','pkdata', '8889');
    $names = array();
    $newNames = array();
    $regions = array();
    $sql = "SELECT * FROM moves";
    $result = $con->query($sql);
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            array_push($names, $row["tmName"]);
        }
    }

    $gens = array("movegen1", "movegen2", "movegen3", "movegen4", "movegen5", "movegen6", "movegen7");
    for ($i = 0; $i < count($names); $i++) {
        $regions = array();
        $newName = "$names[$i]\n";
        for ($j = 0; $j < count($gens); $j++) {
            $newNames = array();
            $sql = "SELECT * FROM $gens[$j]";
            $result = $con->query($sql);
            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    array_push($newNames, $row["name"]);
                }
            }

            for ($l = 0; $l < count($newNames); $l++) {
                if ($newName == $newNames[$l] || $names[$i] == $newNames[$l]) {
                    array_push($regions, substr($gens[$j], 4, strlen($gens[$j])));
                }
            }
        }

        $spaceGens = implode(" ", $regions);    // Split on space

        $sql = "UPDATE moves SET gens = '$spaceGens' WHERE tmName = '$names[$i]'"; // Update column to have appropriate generations
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

function items($query) {
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
                array_push($array, [$row["name"], $row["gen"], $row["category"], $row["description"]]);
            }
            echo json_encode($array);
        } else {
            throw new Exception("No");
        }
    }
}

function moves($query) {
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
                array_push($array, [$row["tmName"], $row["name"], $row["type"]]);
            }
            echo json_encode($array);
        } else {
            throw new Exception("No");
        }
    }
}
?> 