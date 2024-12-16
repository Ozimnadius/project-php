<?php

function template(string $path, array $params = []): string
{
    if (file_exists($GLOBALS['path'] . "/src/components/$name/.parameters.php")) {
        include_once($GLOBALS['path'] . "/src/components/$name/.parameters.php");
    } else {
        $arComponentParameters = [];
    }
    $arResult = array_merge($arComponentParameters, $params);
    $systemTemplateRenererIntoFullPath = "views/$path.php";
//    extract($params);
    ob_start();
    include($systemTemplateRenererIntoFullPath);
    return ob_get_clean();
}

function component(string $name, array $params = [], string $dataUrl = ''): string
{
    if (file_exists($GLOBALS['path'] . "/src/components/$name/.parameters.php")) {
        include_once($GLOBALS['path'] . "/src/components/$name/.parameters.php");
    } else {
        $arComponentParameters = [];
    }

    if (!empty($dataUrl)) {
        $arResult = file_get_contents($GLOBALS['path']."/".$dataUrl);
        $arResult = json_decode($arResult, true);
    }

    $arParams = array_merge($arComponentParameters, $params);
    $fullPath = $GLOBALS['path'] . "/src/components/$name/index.php";
    unset($name,$params,$dataUrl,$arComponentParameters);
    return include($fullPath);
}

