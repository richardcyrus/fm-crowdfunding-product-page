<script setup>
import Header from '@/components/Header.vue'
import ProjectDescription from '@/components/ProjectDescription.vue'
import ProjectStats from '@/components/ProjectStats.vue'
</script>

<template>
  <Header />
  <main id="main" class="content">
    <ProjectDescription />
    <ProjectStats />
  </main>
  <footer class="attribution">
    Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded
    by <a href="https://www.richardcyrus.com">Richard Cyrus</a>.
  </footer>
</template>
