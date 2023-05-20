<script setup>
import { useProductStore } from '@/stores/product'

import PledgeCard from '@/components/PledgeCard.vue'

defineProps({
  show: Boolean,
  products: Array
})

defineEmits(['close-pledge-modal', 'handle-pledge'])

const store = useProductStore()
</script>

<template>
  <!-- Pledge modal start -->
  <div v-if="show" class="modal">
    <div class="modal__overlay">
      <div class="modal__container pledge-modal">
        <div class="modal__content">
          <div class="modal__heading">
            <h2>Back this project</h2>
            <button
              v-on:click="$emit('close-pledge-modal')"
              class="modal__close"
              type="button"
              aria-label="Close modal"
            >
              <svg
                class="modal__close-icon"
                width="15"
                height="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="modal__close-icon--path"
                  d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
          <div class="form__card">
            <div class="form__control">
              <label class="radio radio-before">
                <span class="radio__input">
                  <input
                    v-model="store.pledgeChoice"
                    v-on:click="store.pledgeAmount = 0"
                    value="no_reward"
                    type="radio"
                    class="form__radio-input"
                    name="pledge"
                  />
                  <span class="radio__control"></span>
                </span>
                <span class="radio__label text-bold text-black">Pledge with no reward</span>
              </label>
            </div>
            <p v-bind:ref="(el) => store.setPledgeCardRef(el, 'no_reward')" class="form__text">
              Choose to support us without a reward if you simply believe in our project. As a
              backer, you will be signed up to receive product updates via email.
            </p>
            <div
              v-bind:class="{ show: store.pledgeChoice === 'no_reward' }"
              class="form__control selected-pledge"
            >
              <div class="pledge__control">
                <button
                  v-on:click="$emit('handle-pledge')"
                  type="button"
                  class="button button__primary"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
          <template v-for="product in products">
            <!-- Need to get the remaining products from state. -->
            <PledgeCard
              v-bind:product-slug="product.productSlug"
              v-bind:product-title="product.productTitle"
              v-bind:product-description="product.productDescription"
              v-on:handle-pledge="store.handlePledge"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
  <!-- Pledge modal end -->
</template>
