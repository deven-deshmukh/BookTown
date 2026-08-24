// Book data inlined to avoid CORS issues when opening as a local file (file:// protocol)
function books() {
  return [
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/61tqfa+xbWL._AC_UL226_SR226,226_.jpg",
      name: "Verity", price: "11.26", date: 1, deal: false, categorie: ["novel", "philosophy"], gone: false, rating: 3.5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL226_SR226,226_.jpg",
      name: "It Starts with Us: A Novel(2)", price: "12.99", date: 2, deal: false, categorie: ["novel"], gone: false, rating: 4,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/71j0FLAauxL._AC_UL226_SR226,226_.jpg",
      name: "It Ends with Us: A Novel (1)", price: "10.26", date: 3, deal: false, categorie: ["novel"], gone: false, rating: 4.5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/61QR7qoEYVL._AC_UL226_SR226,226_.jpg",
      name: "Ugly Love: A Novel", price: "10.40", date: 4, deal: false, categorie: ["novel"], gone: false, rating: 4.5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/81PMOtoT7zL._AC_UL226_SR226,226_.jpg",
      name: "Fairy Tale", price: "20.87", date: 5, deal: false, categorie: ["novel"], gone: false, rating: 4.5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL226_SR226,226_.jpg",
      name: "Reminders of Him: A Novel", price: "9.57", date: 6, deal: false, categorie: ["novel", "philosophy"], gone: false, rating: 4.5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/714l-Ja-VAL._AC_UL226_SR226,226_.jpg",
      name: "I'm Glad My Mom Died", price: "18.70", date: 7, deal: false, categorie: ["novel"], gone: false, rating: 5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL226_SR226,226_.jpg",
      name: "Where the Crawdads Sing", price: "9.98", date: 8, deal: false, categorie: ["novel"], gone: false, rating: 5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL226_SR226,226_.jpg",
      name: "Atomic Habits", price: "11.98", date: 9, deal: false, categorie: ["self-dev"], gone: false, rating: 5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/71cTtxm0p0L._AC_UL226_SR226,226_.jpg",
      name: "Solito: A Memoir", price: "21.12", date: 10, deal: false, categorie: ["novel"], gone: false, rating: 4.5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/61xkvfPVupL._AC_UL226_SR226,226_.jpg",
      name: "November 9: A Novel", price: "11.44", date: 11, deal: false, categorie: ["novel"], gone: false, rating: 4.5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/61NdJMwAThS._AC_UL226_SR226,226_.jpg",
      name: "The Body Keeps the Score", price: "11.40", date: 12, deal: false, categorie: ["novel"], gone: false, rating: 5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/91cqEsyjd-L._AC_UL226_SR226,226_.jpg",
      name: "The Very Hungry Caterpillar", price: "4.30", date: 13, deal: false, categorie: ["novel"], gone: false, rating: 5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/81spBNattuL._AC_UL226_SR226,226_.jpg",
      name: "Dinner in One", price: "24.99", date: 14, deal: false, categorie: ["novel"], gone: false, rating: 3.5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/61uiYWcEQGL._AC_UL226_SR226,226_.jpg",
      name: "The Return of the Gods", price: "18.29", date: 15, deal: false, categorie: ["novel"], gone: false, rating: 4.5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL._AC_UL226_SR226,226_.jpg",
      name: "The 48 Laws of Power", price: "11.60", date: 16, deal: false, categorie: ["self-dev", "philosophy"], gone: false, rating: 4.5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/81hHy5XrdKL._AC_UL226_SR226,226_.jpg",
      name: "The Four Agreements", price: "7.74", date: 17, deal: false, categorie: ["novel"], gone: false, rating: 4.5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/81XQ1+piiiL._AC_UL226_SR226,226_.jpg",
      name: "All Good People Here: A Novel", price: "18.51", date: 18, deal: false, categorie: ["novel"], gone: false, rating: 4.5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL226_SR226,226_.jpg",
      name: "I Love You to the Moon and Back", price: "4.31", date: 19, deal: false, categorie: ["novel"], gone: false, rating: 5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/91Iuhbh7aIL._AC_UL226_SR226,226_.jpg",
      name: "The Final Gambit", price: "14.11", date: 20, deal: false, categorie: ["novel"], gone: false, rating: 4.5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/81EVdWdmOKL._AC_UL226_SR226,226_.jpg",
      name: "Brown Bear, Brown Bear, What Do You See?", price: "4.55", date: 21, deal: false, categorie: ["novel"], gone: false, rating: 5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/81qROMFiwmL._AC_UL226_SR226,226_.jpg",
      name: "Little Blue Truck's Halloween", price: "6.32", date: 22, deal: false, categorie: ["novel"], gone: false, rating: 5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/61kPERVIR4L._AC_UL226_SR226,226_.jpg",
      name: "Confess: A Novel", price: "11.43", date: 23, deal: false, categorie: ["novel"], gone: false, rating: 4.5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/61Bdp7XZhDL._AC_UL226_SR226,226_.jpg",
      name: "The Silent Patient", price: "11.91", date: 24, deal: false, categorie: ["novel"], gone: false, rating: 4.5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/91Yy9b1PseL._AC_UL226_SR226,226_.jpg",
      name: "Danielle Walker's Healthy in a Hurry", price: "24.99", date: 25, deal: false, categorie: ["self-dev"], gone: false, rating: 5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/61clZgj1xZL._AC_UL226_SR226,226_.jpg",
      name: "The Great Reset", price: "22.75", date: 26, deal: false, categorie: ["self-dev", "philosophy"], gone: false, rating: 5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/81I2+bgGMTL._AC_UL226_SR226,226_.jpg",
      name: "Battle for the American Mind", price: "17.99", date: 27, deal: false, categorie: ["self-dev"], gone: false, rating: 5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/81xT2mdyL7L._AC_UL226_SR226,226_.jpg",
      name: "I Love You Like No Otter", price: "5.37", date: 28, deal: false, categorie: ["novel"], gone: false, rating: 5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/71lwvQIGI8L._AC_UL226_SR226,226_.jpg",
      name: "The Return", price: "17.38", date: 29, deal: false, categorie: ["self-dev"], gone: false, rating: 4.5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/81823bTjKHL._AC_UL226_SR226,226_.jpg",
      name: "The Last Thing He Told Me: A Novel", price: "13.09", date: 30, deal: false, categorie: ["novel"], gone: false, rating: 4.5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></div>`,
    },
    {
      cover: "https://m.media-amazon.com/images/I/51U0RLLU7vS._AC_UF226,226_FMjpg_.jpg",
      name: "The Art of War", price: "13.58", date: 31, deal: true, lastPrice: "$16.99", categorie: ["novel", "philosophy"], gone: false, rating: 4.5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></div>`,
    },
    {
      cover: "https://m.media-amazon.com/images/I/51lhjx1Qw3L._AC_UF226,226_FMjpg_.jpg",
      name: "Behave: The Biology of Humans", price: "15.87", date: 32, deal: true, lastPrice: "$18.09", categorie: ["self-dev", "philosophy"], gone: false, rating: 4.5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></div>`,
    },
    {
      cover: "https://m.media-amazon.com/images/I/41Byw-nqa3L._AC_UF226,226_FMjpg_.jpg",
      name: "The 21 Irrefutable Laws of Leadership", price: "21.49", date: 33, deal: true, lastPrice: "$18.49", categorie: ["self-dev"], gone: false, rating: 4.5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></div>`,
    },
    {
      cover: "https://m.media-amazon.com/images/I/51lIUQSVCsL._AC_UF226,226_FMjpg_.jpg",
      name: "X-Men Omnibus", price: "34.99", date: 34, deal: true, lastPrice: "$48.16", categorie: ["novel"], gone: false, rating: 4.5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></div>`,
    },
    {
      cover: "https://m.media-amazon.com/images/I/41S21miKn1S._AC_UF226,226_FMjpg_.jpg",
      name: "Close Your Eyes, Sleep", price: "13.59", date: 35, deal: true, lastPrice: "$34.40", categorie: ["novel"], gone: false, rating: 3.5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/51CCYukH2nL._AC_SR226,226_.jpg",
      name: "JoJo's Bizarre Adventure", price: "15.30", date: 36, deal: true, lastPrice: "$19.61", categorie: ["novel"], gone: false, rating: 5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>`,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/41ovZVriMRL._AC_SR226,226_.jpg",
      name: "Marx for Beginners", price: "14.50", date: 37, deal: true, lastPrice: "$17.00", categorie: ["self-dev", "philosophy"], gone: false, rating: 4.5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></div>`,
    },
    {
      cover: "https://m.media-amazon.com/images/I/51hIRYMlt6L._AC_UF226,226_FMjpg_.jpg",
      name: "The System", price: "11.99", date: 38, deal: true, lastPrice: "$13.01", categorie: ["novel"], gone: false, rating: 4.5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></div>`,
    },
    {
      cover: "https://m.media-amazon.com/images/I/51phGHo7TmL._AC_UF226,226_FMjpg_.jpg",
      name: "Reluctantly Home", price: "10.99", date: 39, deal: true, lastPrice: "$14.99", categorie: ["self-dev"], gone: false, rating: 4.5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></div>`,
    },
    {
      cover: "https://m.media-amazon.com/images/I/51Fd-5fMDOL._AC_UF226,226_FMjpg_.jpg",
      name: "The Recipe for Hope", price: "14.99", date: 40, deal: true, lastPrice: "$14.99", categorie: ["novel"], gone: false, rating: 4.5,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></div>`,
    },
    {
      cover: "https://m.media-amazon.com/images/I/41x3-s3mZFL._AC_UF226,226_FMjpg_.jpg",
      name: "Doctor Ice Pick", price: "5.49", date: 41, deal: true, lastPrice: "$9.49", categorie: ["novel"], gone: false, rating: 4,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i></div>`,
    },
    {
      cover: "https://m.media-amazon.com/images/I/51wssaiGMIL._AC_UF226,226_FMjpg_.jpg",
      name: "Layla", price: "8.97", date: 42, deal: true, lastPrice: "$14.99", categorie: ["novel"], gone: false, rating: 4,
      stars: `<div class="ratings"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i></div>`,
    },
  ];
}

// ── new books section ─────────────────────────────────────────────────────────

const newBooksCarouselItem1 = document.getElementById("newBooksCarouselItem1");
const newBooksCarouselItem2 = document.getElementById("newBooksCarouselItem2");
const newBooksCarouselItem3 = document.getElementById("newBooksCarouselItem3");

const newestBookFiltred1 = books().filter(book => book.date <= 4);
const newestBookFiltred2 = books().filter(book => book.date <= 8 && book.date > 4);
const newestBookFiltred3 = books().filter(book => book.date <= 12 && book.date > 8);

function cartCreator(book) {
    return `<div class="col-lg-3 col-sm-6">
    <div class="thumb-wrapper">
      <div class="img-box">
        <img src="${book.cover}" class="img-fluid" alt="book img">
      </div>
      <div class="thumb-content">
        <h4 class="book-name">${book.name}</h4>
            ${book.stars}
        <p class="item-price"><strike>${book.lastPrice || ""}</strike><b>$${book.price}</b></p>
        <button class="btn btn-outline-danger"> Add to Cart <i class="bi bi-bag"></i></button>
      </div>
    </div>`
}

newestBookFiltred1.forEach(book => {
    newBooksCarouselItem1.innerHTML += (cartCreator(book));
})

newestBookFiltred2.forEach(book => {
    newBooksCarouselItem2.innerHTML += (cartCreator(book));
})

newestBookFiltred3.forEach(book => {
    newBooksCarouselItem3.innerHTML += (cartCreator(book));
})


// ── best books section ────────────────────────────────────────────────────────

const bestBooksCarouselItem1 = document.getElementById("bestBooksCarouselItem1");
const bestBooksCarouselItem2 = document.getElementById("bestBooksCarouselItem2");
const bestBooksCarouselItem3 = document.getElementById("bestBooksCarouselItem3");

const sortedBooksPerRate = books().sort(function (a, b) {
    let rateA = a.rating,
      rateB = b.rating;
    return rateB - rateA;
  });

const slicedSortedBooksPerRate1 = sortedBooksPerRate.slice(0, 4);
const slicedSortedBooksPerRate2 = sortedBooksPerRate.slice(4, 8);
const slicedSortedBooksPerRate3 = sortedBooksPerRate.slice(8, 12);

slicedSortedBooksPerRate1.forEach(book => {
    bestBooksCarouselItem1.innerHTML += (cartCreator(book));
})

slicedSortedBooksPerRate2.forEach(book => {
    bestBooksCarouselItem2.innerHTML += (cartCreator(book));
})

slicedSortedBooksPerRate3.forEach(book => {
    bestBooksCarouselItem3.innerHTML += (cartCreator(book));
})


// ── best deals section ────────────────────────────────────────────────────────

const bestDealsCarouselItem1 = document.getElementById("bestDealsCarouselItem1");
const bestDealsCarouselItem2 = document.getElementById("bestDealsCarouselItem2");
const bestDealsCarouselItem3 = document.getElementById("bestDealsCarouselItem3");

const dealedBooks = books().filter(book => book.deal);

dealedBooks.slice(0,4).forEach(book => {
    bestDealsCarouselItem1.innerHTML += (cartCreator(book));
})

dealedBooks.slice(4,8).forEach(book => {
    bestDealsCarouselItem2.innerHTML += (cartCreator(book));
})

dealedBooks.slice(8,12).forEach(book => {
    bestDealsCarouselItem3.innerHTML += (cartCreator(book));
})


// ── best of philosophy section ────────────────────────────────────────────────

const bestOfPhilosophyCarouselItem1 = document.getElementById("bestOfPhilosophyCarouselItem1");
const bestOfPhilosophyCarouselItem2 = document.getElementById("bestOfPhilosophyCarouselItem2");

const philosophyBooks = books().filter(book => book.categorie.includes("philosophy"));

philosophyBooks.slice(0,4).forEach(book => {
    bestOfPhilosophyCarouselItem1.innerHTML += (cartCreator(book));
})

philosophyBooks.slice(4,8).forEach(book => {
    bestOfPhilosophyCarouselItem2.innerHTML += (cartCreator(book));
})


// ── best of self development section ─────────────────────────────────────────

const bestSelfDevCarouselItem1 = document.getElementById("bestSelfDevCarouselItem1");
const bestSelfDevCarouselItem2 = document.getElementById("bestSelfDevCarouselItem2");
const bestSelfDevCarouselItem3 = document.getElementById("bestSelfDevCarouselItem3");

const selfDevBooks = books().filter(book => book.categorie.includes("self-dev"));

selfDevBooks.slice(0,3).forEach(book => {
    bestSelfDevCarouselItem1.innerHTML += (cartCreator(book));
})

selfDevBooks.slice(3,6).forEach(book => {
    bestSelfDevCarouselItem2.innerHTML += (cartCreator(book));
})

selfDevBooks.slice(6,9).forEach(book => {
    bestSelfDevCarouselItem3.innerHTML += (cartCreator(book));
})

// ── best of novels section ────────────────────────────────────────────────────

const bestNovelsCarouselItem1 = document.getElementById("bestNovelsCarouselItem1");
const bestNovelsCarouselItem2 = document.getElementById("bestNovelsCarouselItem2");
const bestNovelsCarouselItem3 = document.getElementById("bestNovelsCarouselItem3");

const novels = books().filter(book => book.categorie.includes("novel"));
const sortednovelsPerRate = novels.sort(function (a, b) {
    let rateA = a.rating,
      rateB = b.rating;
    return rateB - rateA;
  });

sortednovelsPerRate.slice(0,4).forEach(book => {
    bestNovelsCarouselItem1.innerHTML += (cartCreator(book));
})

sortednovelsPerRate.slice(4,8).forEach(book => {
    bestNovelsCarouselItem2.innerHTML += (cartCreator(book));
})

sortednovelsPerRate.slice(8,12).forEach(book => {
    bestNovelsCarouselItem3.innerHTML += (cartCreator(book));
})
