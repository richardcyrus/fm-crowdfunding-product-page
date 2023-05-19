<script setup>
import productData from '@/assets/data/products.json'

import { useProductStore } from '@/stores/product'
const store = useProductStore()

import Header from '@/components/Header.vue'
import ProjectDescription from '@/components/ProjectDescription.vue'
import ProjectStats from '@/components/ProjectStats.vue'
import ProductCard from '@/components/ProductCard.vue'
import PledgeModal from '@/components/PledgeModal.vue'
import ThanksModal from '@/components/ThanksModal.vue'
</script>

<template>
  <Header />
  <main id="main" class="content">
    <ProjectDescription v-on:open-pledge-modal="store.openPledgeModal" />
    <ProjectStats />
    <section class="project__details">
      <h2 class="project__about">About this project</h2>
      <p>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your
        screen to a more comfortable viewing height. Placing your monitor at eye level has the
        potential to improve your posture and make you more comfortable while at work, helping you
        stay focused on the task at hand.
      </p>
      <p>
        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below
        your computer to allow notepads, pens, and USB sticks to be stored under the stand.
      </p>
      <template v-for="product in productData">
        <ProductCard
          v-bind:product-slug="product.productSlug"
          v-bind:product-title="product.productTitle"
          v-bind:recommended-pledge="product.recommendedPledge"
          v-bind:product-description="product.productDescription"
          v-on:open-pledge-modal="store.openPledgeModal"
        />
      </template>
    </section>
    <PledgeModal
      v-bind:products="productData"
      v-bind:show="store.showPledgeModal"
      v-on:close-pledge-modal="store.closePledgeModal"
      v-on:handle-pledge="store.handlePledge"
    />
    <ThanksModal
      v-bind:show="store.showThanksModal"
      v-on:close-thanks-modal="store.closeThanksModal"
    />
  </main>
  <footer class="attribution">
    Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded
    by <a href="https://www.richardcyrus.com">Richard Cyrus</a>.
  </footer>
</template>
