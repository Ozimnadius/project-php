<? include_once($_SERVER["DOCUMENT_ROOT"].'/src/core/init.php'); ?>

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
    <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png">
    <link rel="manifest" href="/images/favicon/site.webmanifest">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">

    <!--CSS-->
    <link rel="stylesheet" href="/css/libs.css">
    <link rel="stylesheet" href="/css/style.css">
    <!-- Для изменений после верстки-->
    <link rel="stylesheet" href="/css/custom.css">

    <!--JS-->
    <script defer src="/js/libs.js"></script>
    <script defer src="/js/script.js"></script>
    <!-- Для изменений после верстки-->
    <script defer src="/js/custom.js"></script>
</head>
<body>

<div class="wrapper">
    <div class="wrapper__header">
        <? component('header');?>
    </div>
    <div class="wrapper__content">
