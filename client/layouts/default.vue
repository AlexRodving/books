<template>
    <header>
        <NuxtLink to="/" class="h1">postlit.ru</NuxtLink>
            <div id="nav">
                <NuxtLink to="/nav">
                    <img src="img/burger.svg" alt="Меню" class="minibar">
                </NuxtLink>
            </div>
    </header>
    <slot />

    <footer class="mt30">
        <p>ПостЛит © 2023</p>
        <p class="mt20">Портал постапокалиптических электронных и аудиокниг, читай и слушай онлайн бесплатно, без подписки и регистрации на <a href="http:/postlit.ru"><strong>Postlit.ru</strong></a></p>
        <div class="column g5 mt30">
            <NuxtLink to="info">О портале ПостЛит</NuxtLink>
            <NuxtLink to="contacts">Контакты</NuxtLink>
            <!-- <a href="#">Помощь</a> -->
            <NuxtLink to="polic">Политика обработки персональных данных</NuxtLink>
            <!-- <a href="#">Согласие на получение рассылки</a>
            <a href="#">Авторам и издательствам</a> -->
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>