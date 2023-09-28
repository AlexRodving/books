<template>
    <NuxtLink :to="`/book/${ book.id }`" class="book">
        <img :src="book.mediumimg" alt="*">
        <p>{{ book.author }}</p>
        <strong>{{ book.title }}</strong>
    </NuxtLink>
</template>

<script setup>
const { book } = defineProps(['book'])
</script>

<style scoped>

</style>