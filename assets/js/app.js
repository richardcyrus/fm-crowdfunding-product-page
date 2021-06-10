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
