<header class="header">
    <div class="header__logo">
        <a href="/">
            <img src="/upload/images/logo.webp"
                 width="118"
                 height="61"
                 alt=""
                 loading="lazy"
            >
        </a>
    </div>
    <div class="header__menu">
        <? component('menu', [],'src/data/menu.json'); ?>
    </div>
    <div class="header__socials">
        <? component('socials', [],'src/data/socials.json'); ?>
    </div>
    <div class="header__phone">
        <a href="tel:+7(495)123-45-67">
            + 7 (495) 123-45-67
        </a>
    </div>
</header>
