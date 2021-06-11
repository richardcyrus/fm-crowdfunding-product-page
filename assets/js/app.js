function bookmark() {
  return {
    bookmarked: localStorage.getItem("bookmarked") === "true",
    bookmark_label:
      localStorage.getItem("bookmarked") === "true" ? "Bookmarked" : "Bookmark",
    bookmark: {
      ["@click"]() {
        this.bookmarked = !this.bookmarked;
        localStorage.setItem('bookmarked', this.bookmarked);

        if (this.bookmarked) {
          this.bookmark_label = "Bookmarked";
        } else {
          this.bookmark_label = "Bookmark";
        }
      },
    },
  };
}

function app() {
  return {
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
    openPledgeModal(selection) {
      this.showPledgeModal = true;
      switch (selection) {
        case "select_bamboo":
          this.pledgeChoice = "bamboo-stand";
          this.pledgeAmount = 25;
          break;
        case "select_blked":
          this.pledgeChoice = "black-edition";
          this.pledgeAmount = 75;
          break;
        case "select_mahogany":
          this.pledgeChoice = "mahogany";
          this.pledgeAmount = 200;
          break;
        default:
          this.pledgeChoice = "";
          break;
      }
    },
    closePledgeModal() {
      this.showPledgeModal = false;
    },
    isPledgeModalOpen() {
      return this.showPledgeModal === true;
    },
    openThanksModal() {
      this.showThanksModal = true;
    },
    closeThanksModal() {
      this.showThanksModal = false;
    },
    isThanksModalOpen() {
      return this.showThanksModal === true;
    },
    handlePledge() {
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
      } else {
        this.totalBackers++;
        this.closePledgeModal();
      }
    },
  };
}
