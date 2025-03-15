class PaginationHelper {
  constructor(collection, itemsPerPage) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    this.pages = [];
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    for (let i = 0; i < this.collection.length; i += this.itemsPerPage) {
      this.pages.push(this.collection.slice(i, i + this.itemsPerPage));
    }
  }
  itemCount() {
    // returns the number of items within the entire collection
    return this.collection.length;
  }
  pageCount() {
    // returns the number of pages
    return this.pages.length;
  }
  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    if(pageIndex<0){return -1}
    let selected = this.pages.slice(pageIndex,pageIndex+1);
    console.log(selected[0])
    // console.log(this.pages)
    return selected[0]?selected[0].length : -1;
  }
  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    if (itemIndex < this.itemCount()  && itemIndex>=0) {
      return Math.floor(itemIndex / this.itemsPerPage);
    }
    return -1;
  }
}

const p = new PaginationHelper(
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ],
  10
);
console.log(p.pageItemCount(1
))