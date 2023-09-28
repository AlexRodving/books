<template>
    <main class="mt20">
        <div class="search">
            <input type="search" name="name" placeholder="Книга, серия, автор, жанр, исполнитель" id="search">
            <button type="button" id="btn_search">Поиск</button>
        </div>
        <div class="max mt20">
            <NuxtLink to="news" class="label">
                <p>Новости</p>
                <p>все &raquo;</p>
            </NuxtLink>
            <div class="list">
                <NuxtLink to="new">
                        <p>Добро пожаловать на postlit.ru</p>
                        <p>17 июл 2023</p>
                </NuxtLink>
            </div>
        </div>
        <div class="preview">
            <div class="buttonLeft"><NuxtLink to="audiolist">
                <img src="img/stalkerLeft.png" alt="*">
                <span>СЛУШАТЬ</span>
            </NuxtLink></div>
            <div class="buttonRight"><NuxtLink to="booklist">
                <span>ЧИТАТЬ</span>
                <img src="img/stalkerRight.png" alt="*">
            </NuxtLink></div>
        </div>
        <div class="ads"><h2>Яндекс.Директ</h2></div>
        <a href="./newaudio.html" class="label mt30">
            <p>Новые аудиокниги за неделю</p>
            <p>все &raquo;</p>
        </a>
        <div class="mt20 max">
            <div class="g10 column">
                <NuxtLink to="books/1" class="block">
                    <div class="row g20">
                        <img src="img/miniCover.png" alt="*">
                        <div class="column g5">
                            <h3>Мечта на поражение</h3>
                            <p class="author">Алексей Калугин</p>
                            <p class="executor">DanmaxX</p>
                        </div>
                    </div>
                    <img src="img/play.svg" alt="*" class="btn">
                </NuxtLink>
                <NuxtLink to="books/1" class="block">
                    <div class="row g20">
                        <img src="img/miniCover.png" alt="*">
                        <div class="column g5">
                            <h3>Мечта на поражение</h3>
                            <p class="author">Алексей Калугин</p>
                            <p class="executor">DanmaxX</p>
                        </div>
                    </div>
                    <img src="img/play.svg" alt="*" class="btn">
                </NuxtLink>
                <NuxtLink to="books/1" class="block">
                    <div class="row g20">
                        <img src="img/miniCover.png" alt="*">
                        <div class="column g5">
                            <h3>Мечта на поражение</h3>
                            <p class="author">Алексей Калугин</p>
                            <p class="executor">DanmaxX</p>
                        </div>
                    </div>
                    <img src="img/play.svg" alt="*" class="btn">
                </NuxtLink>
                <NuxtLink to="books/1" class="block">
                    <div class="row g20">
                        <img src="img/miniCover.png" alt="*">
                        <div class="column g5">
                            <h3>Мечта на поражение</h3>
                            <p class="author">Алексей Калугин</p>
                            <p class="executor">DanmaxX</p>
                        </div>
                    </div>
                    <img src="img/play.svg" alt="*" class="btn">
                </NuxtLink>
                <NuxtLink to="books/1" class="block">
                    <div class="row g20">
                        <img src="img/miniCover.png" alt="*">
                        <div class="column g5">
                            <h3>Мечта на поражение</h3>
                            <p class="author">Алексей Калугин</p>
                            <p class="executor">DanmaxX</p>
                        </div>
                    </div>
                    <img src="img/play.svg" alt="*" class="btn">
                </NuxtLink>
            </div>
        </div>
        <a href="./newbook.html" class="label mt30">
            <p>Новые электр. книги за неделю</p>
            <p>все &raquo;</p>
        </a>
        <div class="mt20 max">
            <div class="collection">
                <NuxtLink to="books/1" class="book">
                    <img src="img/cover/01.jpeg" alt="*">
                    <p>Алексей Калугин</p>
                    <strong>Мечта на поражение</strong>
                </NuxtLink>
                <NuxtLink to="books/1" class="book">
                    <img src="img/cover/01.jpeg" alt="*">
                    <p>Алексей Калугин</p>
                    <strong>Мечта на поражение</strong>
                </NuxtLink>
                <NuxtLink to="books/1" class="book">
                    <img src="img/cover/01.jpeg" alt="*">
                    <p>Алексей Калугин</p>
                    <strong>Мечта на поражение</strong>
                </NuxtLink>
                <NuxtLink to="books/1" class="book">
                    <img src="img/cover/01.jpeg" alt="*">
                    <p>Алексей Калугин</p>
                    <strong>Мечта на поражение</strong>
                </NuxtLink>
                <NuxtLink to="books/1" class="book">
                    <img src="img/cover/01.jpeg" alt="*">
                    <p>Алексей Калугин</p>
                    <strong>Интеллигентный сталкер</strong>
                </NuxtLink>
                <NuxtLink to="books/1" class="book">
                    <img src="img/cover/01.jpeg" alt="*">
                    <p>Алексей Калугин</p>
                    <strong>Мечта на поражение</strong>
                </NuxtLink>
                <NuxtLink to="books/1" class="book">
                    <img src="img/cover/01.jpeg" alt="*">
                    <p>Алексей Калугин</p>
                    <strong>Мечта на поражение</strong>
                </NuxtLink>
                <NuxtLink to="books/1" class="book">
                    <img src="img/cover/01.jpeg" alt="*">
                    <p>Алексей Калугин</p>
                    <strong>Мечта на поражение</strong>
                </NuxtLink>
                <NuxtLink to="books/1" class="book">
                    <img src="img/cover/01.jpeg" alt="*">
                    <p>Алексей Калугин</p>
                    <strong>Мечта на поражение</strong>
                </NuxtLink>
                <NuxtLink to="books/1" class="book">
                    <img src="img/cover/01.jpeg" alt="*">
                    <p>Алексей Калугин</p>
                    <strong>Мечта на поражение</strong>
                </NuxtLink>
                <NuxtLink to="books/1" class="book">
                    <img src="img/cover/01.jpeg" alt="*">
                    <p>Алексей Калугин</p>
                    <strong>Мечта на поражение</strong>
                </NuxtLink>
                <NuxtLink to="books/1" class="book">
                    <img src="img/cover/01.jpeg" alt="*">
                    <p>Алексей Калугин</p>
                    <strong>Мечта на поражение</strong>
                </NuxtLink>
            </div>
        </div>
    </main>
</template>

<script setup>

</script>

<style scoped>

</style>