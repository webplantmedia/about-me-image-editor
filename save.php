<?php

$imagesDir = 'userimages/';

function generateCode($code_length = 24) {
    $code_feed = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyv0123456789";
    $final_code = "";
    $feed_length = strlen($code_feed);
    for ($i = 0; $i < $code_length; $i++) {
        $feed_selector = rand(0, $feed_length - 1);
        $final_code .= substr($code_feed, $feed_selector, 1);
    }
    return $final_code;
}

if (isset($_POST['imgData'])) {
    $png = $_POST['imgData'];
    $filteredData = substr($png, strpos($png, ",") + 1);
    $unencodedData = base64_decode($filteredData);
    $file = generateCode();
    $fp = fopen($imagesDir . $file . '.png', 'wb');
    fwrite($fp, $unencodedData);
    fclose($fp);
    echo $imagesDir . $file . '.png';
} else if (isset($_GET['get'])) {
    $file = str_replace('..', '', htmlspecialchars(strip_tags($_GET['get'])));
    header('Content-Type: image/png');
    header('Content-Disposition: attachment; filename="about-me.png"');
    header("Content-Description: File Transfer");
    header("Content-Transfer-Encoding: binary");
    echo file_get_contents($file);
}
die();
?> 