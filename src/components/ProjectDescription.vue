<script setup>
import { reactive, onMounted } from 'vue'

const bookmarkState = reactive({
  bookmarked: false,
  bookmark_label: 'Bookmark'
})

function setBookmark() {
  bookmarkState.bookmarked = !bookmarkState.bookmarked
  localStorage.bookmarked = bookmarkState.bookmarked

  if (bookmarkState.bookmarked) {
    bookmarkState.bookmark_label = 'Bookmarked'
  } else {
    bookmarkState.bookmark_label = 'Bookmark'
  }
}

onMounted(() => {
  if (localStorage.bookmarked) {
    bookmarkState.bookmarked = localStorage.bookmarked === 'true'
    bookmarkState.bookmark_label = localStorage.bookmarked === 'true' ? 'Bookmarked' : 'Bookmark'
  }
})

defineEmits(['open-pledge-modal'])
</script>

<template>
  <section class="project">
    <div class="project__logo">
      <img src="@/assets/images/logo-mastercraft.svg" alt="Mastercraft logo" />
    </div>
    <h1 class="project__name text-center">Mastercraft Bamboo Monitor Riser</h1>
    <p class="project__short-description text-center">
      A beautiful & handcrafted monitor stand to reduce neck and eye strain.
    </p>
    <div class="project__actions">
      <button
        v-on:click="$emit('open-pledge-modal')"
        type="button"
        class="button button__primary project__back-this"
      >
        Back this project
      </button>
      <button
        v-on:click="setBookmark()"
        v-bind:class="{ bookmarked: bookmarkState.bookmarked }"
        class="button button__bookmark project__bookmark"
        type="button"
      >
        <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <circle class="bookmark-icon__circle-fill" cx="28" cy="28" r="28" />
            <path class="bookmark-icon__path-fill" d="M23 19v18l5-5.058L33 37V19z" />
          </g>
        </svg>
        <span v-text="bookmarkState.bookmark_label" class="bookmark-label"></span>
      </button>
    </div>
  </section>
</template>
