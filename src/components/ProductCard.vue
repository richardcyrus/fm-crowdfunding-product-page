<script setup>
import { useProductStore } from '@/stores/product'

defineEmits(['open-pledge-modal'])

const props = defineProps({
  productSlug: String,
  productTitle: String,
  recommendedPledge: Number,
  productDescription: String
})

const store = useProductStore()
store.$patch({
  [props.productSlug]: {
    recommendedPledge: props.recommendedPledge
  }
})
</script>

<template>
  <div v-bind:class="{ 'card--disabled': store[productSlug].remainingProducts === 0 }" class="card">
    <div class="card__header">
      <h3 class="card__title">{{ productTitle }}</h3>
      <p class="pledge-recommendation">Pledge ${{ recommendedPledge }} or more</p>
    </div>
    <div class="card__body">
      <p class="card__text">{{ productDescription }}</p>
    </div>
    <div class="card__footer">
      <div class="quantity-remaining">
        <span
          v-text="store[productSlug].remainingProducts.toLocaleString()"
          class="highlight"
        ></span>
        left
      </div>
      <button
        v-on:click="$emit('open-pledge-modal', productSlug, recommendedPledge)"
        v-bind:disabled="store[productSlug].remainingProducts === 0"
        v-text="store[productSlug].remainingProducts === 0 ? 'Out of stock' : 'Select Reward'"
        v-bind:class="
          store[productSlug].remainingProducts === 0 ? 'button__secondary' : 'button__primary'
        "
        type="button"
        class="button button__primary pledge-action"
      ></button>
    </div>
  </div>
</template>
