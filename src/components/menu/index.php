<?
/** @var array $arParams */
/** @var array $arResult */
?>

<nav class="<?=$arParams["class"] ?>">
    <ul>
        <? foreach ($arResult as $arItem): ?>
            <li>
                <a href="<?=$arItem['url'] ?>"><?=$arItem['name'] ?></a>
            </li>
        <? endforeach; ?>
    </ul>
</nav>
