<script setup>
import { useProductStore } from '@/stores/product'
const store = useProductStore()
</script>

<template>
  <div class="project__stats">
    <div class="project__stats-funding-status">
      <span
        v-text="
          new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
          }).format(store.amountRaised)
        "
        class="highlight"
      ></span>
      of $100,000 backed
    </div>
    <div class="project__stats-backers">
      <span v-text="store.totalBackers.toLocaleString()" class="highlight"></span> total backers
    </div>
    <div class="project__stats-days-left">
      <span v-text="store.daysLeft.toLocaleString()" class="highlight"></span> days left
    </div>
    <div class="project__stats-funding-progress">
      <progress max="100000" v-bind:value="store.amountRaised"></progress>
    </div>
  </div>
</template>
