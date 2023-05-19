import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => {
    return {
      amountRaised: 89914,
      totalBackers: 5007,
      daysLeft: 56,
    }
  }
})
