<script setup>
defineProps({
  show: Boolean
})

defineEmits(['close-thanks-modal'])
</script>

<template>
  <!-- Thank you modal start -->
  <div v-if="show" class="modal">
    <div class="modal__overlay">
      <div class="modal__container thankyou-modal">
        <div class="modal__content">
          <div class="complete-image"></div>
          <h2>Thanks for your support!</h2>
          <p class="text-center">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser
            worldwide. You will get an email once our campaign is completed.
          </p>
          <button
            ref="thankyou_modal"
            v-on:click="$emit('close-thanks-modal')"
            type="button"
            class="button button__primary flex-center"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Thank you modal end -->
</template>
