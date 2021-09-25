<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'SeoulStartLife',
  meta: [
    { name: 'description', content: 'Helping You Start Life in Seoul' },
  ],
})
</script>

<template>
  <router-view />
</template>

<style>
body,
html {
  height: 100%;
  margin: 0;
}
</style>
