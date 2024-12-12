<?/* $default = array(
    "href" => "#",
    "class" => "btn-default",
    "text" => "Кнопка"
);

$result = array_merge($default, $params);
*/?>

<a href="<?= $arResult["href"]; ?>" class="btn <?= $arResult["class"]; ?>">
    <span><?= $arResult["text"]; ?></span>
</a>
