<?php

function template(string $path, array $params = []): string
{
    if (file_exists($GLOBALS['path']."/src/components/$name/.parameters.php")) {
        include_once ($GLOBALS['path']."/src/components/$name/.parameters.php");
    } else{
        $arComponentParameters = [];
    }
    $arResult = array_merge($arComponentParameters, $params);
    $systemTemplateRenererIntoFullPath = "views/$path.php";
//    extract($params);
    ob_start();
    include($systemTemplateRenererIntoFullPath);
    return ob_get_clean();
}

function component(string $name, array $params = []): string
{

    if (file_exists($GLOBALS['path']."/src/components/$name/.parameters.php")) {
        include_once ($GLOBALS['path']."/src/components/$name/.parameters.php");
    } else{
        $arComponentParameters = [];
    }
    $arResult = array_merge($arComponentParameters, $params);
    $fullPath = $GLOBALS['path']."/src/components/$name/index.php";
//    extract($params);
    return include($fullPath);
}

