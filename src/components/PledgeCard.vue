<script setup>
import { useProductStore } from '@/stores/product'

defineEmits(['handle-pledge'])

defineProps({
  productSlug: String,
  productTitle: String,
  productDescription: String
})

const store = useProductStore()
</script>

<template>
  <div
    class="form__card"
    v-bind:class="{
      selected: store.pledgeChoice === productSlug,
      'form__card--disabled': store[productSlug].remainingProducts === 0
    }"
  >
    <div class="form__control">
      <label class="radio radio-before" v-bind:for="`${productSlug}_input`">
        <span class="radio__input">
          <input
            v-model="store.pledgeChoice"
            v-bind:disabled="store[productSlug].remainingProducts === 0"
            v-bind:id="`${productSlug}_input`"
            v-bind:value="productSlug"
            v-on:click="store.pledgeAmount = store[productSlug].recommendedPledge"
            type="radio"
            class="form__radio-input"
            name="pledge"
          />
          <span class="radio__control"></span>
        </span>
        <span class="radio__label">
          <span class="text-bold text-black">{{ productTitle }}</span>
          <span class="pledge-recommendation"
            >Pledge ${{ store[productSlug].recommendedPledge }} or more</span
          >
        </span>
      </label>
    </div>
    <p class="form__text">{{ productDescription }}</p>
    <div class="quantity-remaining">
      <span v-text="store[productSlug].remainingProducts.toLocaleString()" class="highlight"></span>
      left
    </div>
    <div
      v-bind:class="{ show: store.pledgeChoice === productSlug }"
      v-bind:ref="(el) => store.setPledgeCardRef(el, productSlug)"
      class="form__control selected-pledge"
    >
      <label class="form__input-label" v-bind:for="`${productSlug}_amount`">
        Enter your pledge
      </label>
      <div class="pledge__control">
        <div class="input-group">
          <span class="input-group-text">$</span>
          <input
            v-model.number="store.pledgeAmount"
            v-bind:id="`${productSlug}_amount`"
            v-bind:disabled="store[productSlug].remainingProducts === 0"
            class="input"
            type="text"
            name="pledge-amount"
          />
        </div>
        <button v-on:click="$emit('handle-pledge')" type="button" class="button button__primary">
          Continue
        </button>
      </div>
    </div>
  </div>
</template>
