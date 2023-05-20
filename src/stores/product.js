import { defineStore } from 'pinia'
import { nextTick } from 'vue'

export const useProductStore = defineStore('product', {
  state: () => {
    return {
      amountRaised: 89914,
      totalBackers: 5007,
      daysLeft: 56,
      showPledgeModal: false,
      showThanksModal: false,
      pledgeChoice: undefined,
      pledgeAmount: 0,
      bamboo_stand: { remainingProducts: 101, recommendedPledge: 0 },
      black_edition: { remainingProducts: 64, recommendedPledge: 0 },
      mahogany: { remainingProducts: 1, recommendedPledge: 0 },
      pledgeCards: new Map()
    }
  },
  actions: {
    openPledgeModal: async function (product, pledgeAmount) {
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
          this.pledgeChoice = undefined
          this.pledgeAmount = 0

          await nextTick()

          const el = this.pledgeCards.get('no_reward')
          el.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest'
          })
        }
      }

      if (this.pledgeChoice !== undefined) {
        await nextTick()

        const el = this.pledgeCards.get(this.pledgeChoice)
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest'
        })
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
    },
    setPledgeCardRef(el, slug) {
      this.pledgeCards.set(slug, el)
    }
  }
})
