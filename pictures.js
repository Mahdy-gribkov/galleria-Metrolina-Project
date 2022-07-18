class Picture {
  constructor(name, artist, price, isInStock) {
    this.name = name;
    this.artist = artist;
    this.price = price;
    this.isInStock = isInStock;
  }
  getName() {
    return this.name;
  }
  getArtist() {
    return this.artist;
  }
  getPrice() {
    return this.price;
  }
  getIsInStock() {
    return this.isInStock;
  }
}

// new Array() < Picture > pictures;
// const pictures = {
//   name: "jj",
//   artist: "qq",
//   price: "tt",
//   isInStock: "yy",
// };

//yud !!! how to set the data in the arr ??
export { pictures };
