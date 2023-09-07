const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
const Pagination = {
  page: 0,
  arr: [],
  init(arr, num) {
    let count = 0;
    let smallArr = [];
    let bigArr = [];
    arr.forEach((val) => {
      if (count === num) {
        count = 0;
        bigArr = [...bigArr, smallArr];
        smallArr = [];
      }
      smallArr = [...smallArr, val];
      count++;
    });
    bigArr = [...bigArr, smallArr];

    this.arr = num ? bigArr : [];
  },
  getPageItems() {
    return this.arr.length
      ? this.arr[this.page]
      : `please give me pages number`;
  },
  nextPage() {
    if (this.page < this.arr.length - 1) {
      this.page++;
    }
    return this;
  },
  firstPage() {
    this.page = 0;
    return this;
  },
  lastPage() {
    this.page = this.arr.length - 1;
    return this;
  },
  prevPage() {
    if (this.page > 0) {
      this.page--;
    }
    return this;
  },
  goToPage(prevPage) {
    if (prevPage < this.arr.length && prevPage >= 0) {
      this.page = prevPage;
    }
    return this;
  },
};
Pagination.init(alphabetArray, 4);
Pagination.nextPage()
  .goToPage(0)
  .prevPage()
  .prevPage()
  .nextPage()
  .firstPage()
  .nextPage()
  .lastPage()
  .nextPage()
  .prevPage()
  .lastPage()
  .lastPage()
  .nextPage()
  .prevPage();

console.log(Pagination.getPageItems());
