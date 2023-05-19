import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => {
    return {
      amountRaised: 89914,
      totalBackers: 5007,
      daysLeft: 56,
      showPledgeModal: false,
      pledgeChoice: '',
      pledgeAmount: 0,
      bamboo_stand: { remainingProducts: 0, recommendedPledge: 0 },
      black_edition: { remainingProducts: 0, recommendedPledge: 0 },
      mahogany: { remainingProducts: 0, recommendedPledge: 0 }
    }
  },
  actions: {
    openPledgeModal: function (product, pledgeAmount) {
      this.showPledgeModal = true

      switch (product) {
        case 'bamboo_stand': {
          this.pledgeChoice = 'bamboo_stand'
          this.pledgeAmount = pledgeAmount
          break
        }
        case 'black_edition': {
          this.pledgeChoice = 'black_edition'
          this.pledgeAmount = pledgeAmount
          break
        }
        case 'mahogany': {
          this.pledgeChoice = 'mahogany'
          this.pledgeAmount = pledgeAmount
          break
        }
        default: {
          this.pledgeChoice = ''
          this.pledgeAmount = 0
        }
      }
    },
    closePledgeModal: function () {
      this.showPledgeModal = false
    }
  }
})
