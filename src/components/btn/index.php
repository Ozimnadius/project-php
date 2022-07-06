<? $default = array(
    "href" => "#",
    "class" => "btn-default",
    "text" => "Кнопка"
);

$result = array_merge($default, $vars);
?>

<a href="<?= $result["href"]; ?>" class="btn <?= $result["class"]; ?>">
    <span><?= $result["text"]; ?></span>
</a>
