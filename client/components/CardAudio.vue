<template>
    <NuxtLink :to="`/book/${ book.id }`" class="block">
        <div class="row g20">
            <img :src="book.miniimg" alt="*">
            <div class="column g5">
                <h3>{{ book.title }}</h3>
                <p class="author">{{ book.author }}</p>
                <p class="executor">{{ book.executor }}</p>
            </div>
        </div>
        <img src="img/play.svg" alt="*" class="btn">
    </NuxtLink>
</template>

<script setup>
const { book } = defineProps(['book'])
</script>

<style scoped>

</style>