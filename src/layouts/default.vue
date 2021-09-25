<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <!-- <div class="flex-row">
      <router-link to="/">home</router-link>
      <router-link to="/about">about</router-link>
      <router-link to="/jobs">jobs</router-link>
    </div>-->
    <Navbar />
    <router-view />
    <Footer />
    <div class="mt-5 mx-auto text-center opacity-25 text-sm">[Default Layout]</div>
  </main>
</template>
