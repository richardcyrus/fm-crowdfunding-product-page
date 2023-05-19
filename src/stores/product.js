import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => {
    return {
      amountRaised: 89914,
      totalBackers: 5007,
      daysLeft: 56,
      showPledgeModal: false,
      showThanksModal: false,
      pledgeChoice: '',
      pledgeAmount: 0,
      bamboo_stand: { remainingProducts: 101, recommendedPledge: 0 },
      black_edition: { remainingProducts: 64, recommendedPledge: 0 },
      mahogany: { remainingProducts: 1, recommendedPledge: 0 }
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
    handlePledge: function () {
      if (this.pledgeChoice !== 'no_reward' && this.pledgeAmount > 0) {
        switch (this.pledgeChoice) {
          case 'mahogany': {
            this.mahogany.remainingProducts--
            break
          }
          case 'black_edition': {
            this.black_edition.remainingProducts--
            break
          }
          case 'bamboo_stand': {
            this.bamboo_stand.remainingProducts--
            break
          }
        }

        let amountPledged = this.pledgeAmount
        this.amountRaised += amountPledged
        this.totalBackers++
        this.pledgeAmount = 0
        this.closePledgeModal()
        this.openThanksModal()
      } else {
        this.totalBackers++
        this.closePledgeModal()
      }

      this.pledgeChoice = undefined
    },
    closePledgeModal: function () {
      this.showPledgeModal = false
    },
    openThanksModal: function () {
      this.showThanksModal = true
    },
    closeThanksModal: function () {
      this.showThanksModal = false
    }
  }
})
