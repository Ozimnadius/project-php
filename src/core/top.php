<? include_once('init.php'); ?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--    <meta name="viewport" content="width=1200">-->
    <title>Страница</title>
    <meta name="keywords" content="Страница">
    <meta name="description" content="Страница">

    <!--ICON-->
    <link rel="apple-touch-icon" sizes="180x180" href="<?=$GLOBALS['templatePath'];?>/images/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?=$GLOBALS['templatePath'];?>/images/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?=$GLOBALS['templatePath'];?>/images/favicon/favicon-16x16.png">
    <link rel="manifest" href="<?=$GLOBALS['templatePath'];?>/images/favicon/site.webmanifest">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">

    <!--CSS-->
    <link rel="stylesheet" href="<?=$GLOBALS['templatePath'];?>/libs/styles.css">
    <link rel="stylesheet" href="<?=$GLOBALS['templatePath'];?>/styles.css">

    <!--JS-->
    <script defer src="<?=$GLOBALS['templatePath'];?>/libs/scripts.min.js"></script>
    <script defer src="<?=$GLOBALS['templatePath'];?>/js/scripts.js"></script>
    <!-- Для изменений после верстки-->
    <script defer src="<?=$GLOBALS['templatePath'];?>/js/custom.js"></script>
</head>
<body>

<div class="wrapper">
    <div class="wrapper__header">
        <? component('header');?>
    </div>
    <div class="wrapper__content">
