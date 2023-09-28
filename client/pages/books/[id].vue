<template>
    <main>
        <div>
            <img src="~/public/img/cover/01.jpeg" alt="Обложка" class="cover">
        </div>
        <div class="option mt20">
            <a href="./audio.html">Слушать</a> | <a href="#">Читать</a>
        </div>
        <div class="pointer mt30">
            <div class="point seriesPointer">
                <h3><a href="#">S.T.A.L.K.E.R.</a></h3>
            </div>
            <div class="point cyclePointer">
                <h3>Одиночная книга</h3>
            </div>
            <div class="point authorPointer">
                <h3>Алексей Калугин</h3>
            </div>
            <div class="point designerPointer">
                <h3>Не важно</h3>
            </div>
            <div class="point agePointer">
                <h3>2009</h3>
            </div>
            <div class="point descriptionPointer">
                <h3>Только нелепая случайность, да еще ствол чужого автомата заставили сталкера-одиночку Гупи стать проводником странной группы, нацелившейся на самый центр Чернобыльской Зоны. В сердце Зоны находился загадочный Монолит, который, по слухам, мог выполнить самое сокровенное желание того, кто до него доберется. Но для того, чтобы его достигнуть, нужна была самая малость — пройти через Ад.</h3>
            </div>
        </div>
    </main>
</template>

<script setup>
    const { id } = useRoute().params
</script>

<style scoped>

</style>