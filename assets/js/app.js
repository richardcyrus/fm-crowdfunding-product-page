const navbar = new Vue({
  el: "#navigation",
  data: {
    isOpen: false,
  },
});

const app = new Vue({
  el: "#main",
  data: {
    showPledgeModal: false,
    showThanksModal: false,
    pledgeChoice: "",
    pledgeAmount: 0,
    amountRaised: 89914,
    totalBackers: 5007,
    daysLeft: 56,
    remainingBambooStands: 101,
    remainingBlackEdition: 64,
    remainingMahogany: 1,
    bookmarked: localStorage.getItem("bookmarked") === "true",
    bookmark_label:
      localStorage.getItem("bookmarked") === "true" ? "Bookmarked" : "Bookmark",
  },
  methods: {
    setBookmark: function () {
      this.bookmarked = !this.bookmarked;
      localStorage.setItem("bookmarked", this.bookmarked);

      if (this.bookmarked) {
        this.bookmark_label = "Bookmarked";
      } else {
        this.bookmark_label = "Bookmark";
      }
    },
    openPledgeModal: function (selection) {
      this.showPledgeModal = true;
      switch (selection) {
        case "bamboo-stand":
          this.pledgeChoice = "bamboo-stand";
          this.pledgeAmount = 25;
          break;
        case "black-edition":
          this.pledgeChoice = "black-edition";
          this.pledgeAmount = 75;
          break;
        case "mahogany":
          this.pledgeChoice = "mahogany";
          this.pledgeAmount = 200;
          break;
        default:
          this.pledgeChoice = "";
          break;
      }
    },
    closePledgeModal: function () {
      this.showPledgeModal = false;
    },
    isPledgeModalOpen: function () {
      return this.showPledgeModal === true;
    },
    openThanksModal: function () {
      this.showThanksModal = true;
    },
    closeThanksModal: function () {
      this.showThanksModal = false;
    },
    isThanksModalOpen: function () {
      return this.showThanksModal === true;
    },
    handlePledge: function () {
      if (this.pledgeChoice !== "no-reward" && this.pledgeAmount > 0) {
        const amountPledged = this.pledgeAmount;
        this.amountRaised += amountPledged;
        this.totalBackers++;
        this.pledgeAmount = 0;

        switch (this.pledgeChoice) {
          case "mahogany":
            this.remainingMahogany--;
            break;
          case "black-edition":
            this.remainingBlackEdition--;
            break;
          case "bamboo-stand":
            this.remainingBambooStands--;
            break;
        }

        this.closePledgeModal();
        this.openThanksModal();
        this.pledgeChoice = "";
      } else {
        this.totalBackers++;
        this.closePledgeModal();
        this.pledgeChoice = "";
      }
    },
  },
});
