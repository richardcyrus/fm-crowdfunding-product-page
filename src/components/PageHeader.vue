<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <header>
    <nav id="navigation" class="navbar">
      <div v-bind:class="{ overlay: isOpen }">
        <div class="container">
          <a href="#" class="navbar__brand">
            <img src="@/assets/images/logo.svg" alt="crowdfund logo" />
          </a>
          <button
            class="navbar__toggler"
            type="button"
            aria-controls="navbarContent"
            aria-label="Toggle navigation"
            v-bind:aria-expanded="isOpen.toString()"
            v-on:click.prevent="isOpen = !isOpen"
          >
            <span class="navbar__toggler-icon"></span>
          </button>
        </div>
        <div id="navbarContent" class="menu" v-bind:class="{ hidden: !isOpen }">
          <a class="menu__item" href="#">About</a>
          <a class="menu__item" href="#">Discover</a>
          <a class="menu__item" href="#">Get Started</a>
        </div>
      </div>
    </nav>
  </header>
</template>
