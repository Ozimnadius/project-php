<?php

function template(string $path, array $vars = []): string
{
    $systemTemplateRenererIntoFullPath = "views/$path.php";
    extract($vars);
    ob_start();
    include($systemTemplateRenererIntoFullPath);
    return ob_get_clean();
}

function component(string $name, array $vars = []): string
{
    $fullPath = $GLOBALS['path']."/src/components/$name/index.php";
    extract($vars);
    return include($fullPath);
}

