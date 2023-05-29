let hamburger = document.querySelector(".hamburger");
let wrapper = document.querySelector(".wrapper");

hamburger.addEventListener("click", function () {
  wrapper.classList.toggle("show");
});
const product = [
  {
    id: 1,
    name: "Butter",
    category: "Milky",
    description: "Сли́вочное ма́сло — пищевой продукт,",
    price: "8.99$",
    rating: 5,
    discount: 10,
    image: "https://i.postimg.cc/3J53ZjZq/1.png",
  },
  {
    id: 2,
    name: "Coffee",
    category: "Tea",
    description: "Ранее кофейные деревья достигали 9 метров.",
    price: "7.99$",
    rating: 5,
    discount: 0,
    image: "https://i.postimg.cc/SxVqqBp0/2.png",
  },
  {
    id: 3,
    name: "Sousage",
    category: "Meat",
    description: "Колбаса́ — пищевой продукт, тип колбасных изделий.",
    price: "8.99$",
    rating: 5,
    discount: 0,
    image: "https://i.postimg.cc/QCpGzPqy/3.png",
  },
  {
    id: 4,
    name: "Broccoli",
    category: "Vegetable",
    description: "Мали́на — полукустарник; вид рода Рубус семейства Розовые.",
    price: "4.99$",
    rating: 4.5,
    discount: 0,
    image: "https://i.postimg.cc/bJSjxdS8/5.png",
  },
  {
    id: 5,
    name: "Strawberry",
    category: "Fruits",
    description: "Клубни́ка — название видов растений семейства Розовые.",
    price: "8.99$",
    rating: 5,
    discount: 5,
    image: "https://i.postimg.cc/L4fphYM3/6.png",
  },
  {
    id: 6,
    name: "Cake",
    category: "Sweets",
    description: "Торт - кондитерское изделие, состоящий из нескольких.",
    price: "1.99$",
    rating: 3.5,
    discount: 0,
    image: "https://i.postimg.cc/YqHwFrrK/7.png",
  },
  {
    id: 7,
    name: "Pepsi",
    category: "Drink",
    description: "Pepsi — газированный безалкогольный напиток.",
    price: "6.99$",
    rating: 3.5,
    discount: 0,
    image: "https://i.postimg.cc/W4Hvq03X/8.png",
  },
  {
    id: 8,
    name: "Apricot",
    category: "Fruits",
    description: "Абрико́с — плодовое дерево, рода Слива семейства Розовые..",
    price: "6.99$",
    rating: 4.5,
    discount: 0,
    image: "https://i.postimg.cc/2ypN2mnW/9.png",
  },
  {
    id: 9,
    name: "Cheese",
    category: "Milky",
    description: "Сыр — продукт в виде твёрдой или полутвёрдой массы.",
    price: "8.99$",
    rating: 5,
    discount: 0,
    image: "https://i.postimg.cc/8Cj8GsHW/10.png",
  },
  {
    id: 10,
    name: "Nescafe",
    category: "Tea",
    description: "Nescafé — крупнейшая в мире торговая компании Nestlé.",
    price: "7.99$",
    rating: 4.5,
    discount: 0,
    image: "https://i.postimg.cc/SsMwX5Hx/11.png",
  },
  {
    id: 11,
    name: "Kebab",
    category: "Food",
    description: "Шашлык считают блюдом кавказской кухни. ",
    price: "1.99$",
    rating: 5,
    discount: 10,
    image: "https://i.postimg.cc/gjb13sPq/12.png",
  },
  {
    id: 22,
    name: "Juice",
    category: "Drink",
    description: "Сок — жидкий пищевой продукт, фруктовых культур.",
    price: "8.99$",
    rating: 5,
    discount: 20,
    image: "https://i.postimg.cc/HknvcRy1/23.png",
  },
  {
    id: 23,
    name: "Pizza",
    category: "Fast Food",
    description: "Пицца блюдо в виде круглой открытой лепешки.",
    price: "7.99$",
    rating: 4.5,
    discount: 0,
    image: "https://i.postimg.cc/m286rBhS/24.png",
  },
  {
    id: 24,
    name: "Apelsin",
    category: "Juice",
    description: "Апельсин —  вид рода Цитрус семейства Рутовые.",
    price: "10.99$",
    rating: 4.5,
    discount: 10,
    image: "https://i.postimg.cc/Qdz4pmQ9/25.png",
  },
  {
    id: 25,
    name: "Peach",
    category: "",
    description: "Пе́рсик — растение из Миндаль рода Слива семейства Розовые.",
    price: "8.99$",
    rating: 5,
    discount: 0,
    image: "https://i.postimg.cc/vm6PXnhP/26.png",
  },
  {
    id: 26,
    name: "Fish",
    category: "Food",
    description: "Рыбы — группа водных позвоночных животных.",
    price: "27.00$",
    rating: 4,
    discount: 70,
    image: "https://i.postimg.cc/NFQpgzcV/27.png",
  },
  {
    id: 27,
    name: "Ananas",
    category: "",
    description: "Сезон ананасов длится круглый год.",
    price: "13.99$",
    rating: 4.5,
    discount: 20,
    image: "https://i.postimg.cc/9MdLHjvZ/28.png",
  },
  {
    id: 28,
    name: "Coffee",
    category: "Tea",
    description: "Кофе — не роскошь, кофе — средство передвижения.",
    price: "81.99$",
    rating: 4,
    discount: 20,
    image: "https://i.postimg.cc/brLLd9Yv/29.png",
  },
  {
    id: 29,
    name: "Jacobs",
    category: "Tea",
    description: "Кофе и хороший кофе — два абсолютно разных напитка.",
    price: "6.99$",
    rating: 3,
    discount: 30,
    image: "https://i.postimg.cc/vBF0KmSG/30.png",
  },
  {
    id: 30,
    name: "Dairy",
    category: "Milky",
    description: "Молоко́ — питательная жидкость.",
    price: "2.99$",
    rating: 2,
    discount: 80,
    image: "https://i.postimg.cc/XNgs24K0/31.png",
  },
  {
    id: 31,
    name: "Chocolate",
    category: "Sweets",
    description: "Шоколад — кондитерское изделие на основе какао.",
    price: "10.99$",
    rating: 5,
    discount: 0,
    image: "https://i.postimg.cc/9FFJKK1w/32.png",
  },
  {
    id: 32,
    name: "Pumpkin",
    category: "Vegetable",
    description: "Тыква необходима при отеках – сердечных и почечных.",
    price: "3.99$",
    rating: 4.5,
    discount: 0,
    image: "https://i.postimg.cc/dtH4Y6SH/33.png",
  },
  {
    id: 33,
    name: "Kivi",
    category: "Fruits",
    description: "Киви — это значить что витамин C.",
    price: "8.99$",
    rating: 5,
    discount: 20,
    image: "https://i.postimg.cc/g2x4khCY/34.png",
  },
  {
    id: 34,
    name: "Pomegranate",
    category: "Fruits",
    description: "Гранат — вид плодовых растений из рода Гранат.",
    price: "9.99$",
    rating: 4,
    discount: 20,
    image: "https://i.postimg.cc/XYtLZJW9/35.png",
  },
  {
    id: 35,
    name: "Melon",
    category: "Plant",
    description: "Ды́ня — растение семейства Тыквенные, бахчевая культура.",
    price: "7.99$",
    rating: 5,
    discount: 0,
    image: "https://i.postimg.cc/JhJqjL7v/36.png",
  },
  {
    id: 36,
    name: "Watermelon",
    category: "Dairy",
    description: "Арбу́з шерстистый, или арбу́з столо́вый.",
    price: "9.50$",
    rating: 3.5,
    discount: 0,
    image: "https://i.postimg.cc/RFBTRDNF/37.png",
  },
  {
    id: 12,
    name: "Hamburger",
    category: "Fast food",
    description: "Га́мбургер — это блюдо, обычно состоящее из котлеты/.",
    price: "6.99$",
    rating: 5,
    discount: 0,
    image: "https://i.postimg.cc/br0WgnyX/13.png",
  },
  {
    id: 13,
    name: "Yoghurt",
    category: "Milky",
    description: "Йо́гурт — продукт с содержанием сухих веществ.",
    price: "8.99$",
    rating: 4.5,
    discount: 10,
    image: "https://i.postimg.cc/CMb3S3jv/14.png",
  },
  {
    id: 14,
    name: "Sour cream.",
    category: "Milky",
    description: "Смета́на — кисломолочный продукт белого цвета.",
    price: "4.99$",
    rating: 4.5,
    discount: 0,
    image: "https://i.postimg.cc/L6RrXxDm/15.png",
  },
  {
    id: 15,
    name: "Mandarin",
    category: "Fruits",
    description: "Мандари́н — вечнозелёное дерево, вид рода Цитрус",
    price: "68.50$",
    rating: 4.5,
    discount: 0,
    image: "https://i.postimg.cc/yYP2S0pc/16.png",
  },
  {
    id: 16,
    name: "Apples",
    category: "Fruits",
    description: "Яблоко. Я́блоко — сочный плод яблони.",
    price: "4.99$",
    rating: 3.5,
    discount: 0,
    image: "https://i.postimg.cc/Bnnk5tRy/17.png",
  },
  {
    id: 17,
    name: "Bread",
    category: "Bakery",
    description: "Хлеб — сделано самим народом. Народное изделия",
    price: "70.99$",
    rating: 4.5,
    discount: 0,
    image: "https://i.postimg.cc/wvLGxNst/18.png",
  },
  {
    id: 18,
    name: "Coca cola",
    category: "Drink",
    description: "Coca-Cola — газированный безалкогольный напиток.",
    price: "9.99$",
    rating: 5,
    discount: 0,
    image: "https://i.postimg.cc/ZnLsphH4/19.png",
  },
  {
    id: 19,
    name: "Kebab",
    category: "Food",
    description: "Люля́-кеба́б — блюдо кухонь разных стран Ближнего Востока",
    price: "15.99$",
    rating: 5,
    discount: 0,
    image: "https://i.postimg.cc/cCW5vJQF/20.png",
  },
  {
    id: 20,
    name: "Compote",
    category: "Drink",
    description: "Компо́т — десертный напиток из фруктов или ягод.",
    price: "5.99$",
    rating: 5,
    discount: 0,
    image: "https://i.postimg.cc/jq6FGzbm/21.png",
  },
  {
    id: 21,
    name: "Banana",
    category: "Fruits",
    description: "С ботанической точки зрения банан является ягодой.",
    price: "2.99$",
    rating: 5,
    discount: 0,
    image: "https://i.postimg.cc/28zKmVj6/22.png",
  },
];
const first_catalog = [
  {
    title: "Молоко сыр яйцо",
    image: "https://i.postimg.cc/65Drhpjc/img.png",
  },
  {
    title: "Хлеб",
    image: "https://i.postimg.cc/jdW6N7XC/img-1.png",
  },
  {
    title: "Фрукты и овощи",
    image: "https://i.postimg.cc/RCpQNRwj/img-2.png",
  },
];

const second_catalog = [
  {
    title: "Замороженные продукты",
    image: "https://i.postimg.cc/VN9WvPFR/img-3.png",
  },
  {
    title: "Напитки",
    image: "https://i.postimg.cc/8CgbTzLc/img-4.png",
  },
  {
    title: "Кондитерские изделия",
    image: "https://i.postimg.cc/QtXkWY4r/img-5.png",
  },
  {
    title: "Чай, кофе",
    image: "https://i.postimg.cc/kgbcrb6L/img-6.png",
  },
];

const third_catalog = [
  {
    title: "Бакалея",
    image: "https://i.postimg.cc/xT5LmPrv/img-12.png",
  },
  {
    title: "Здоровое питание",
    image: "https://i.postimg.cc/C1mCCCXn/img-7.png",
  },
  {
    title: "Зоотовары",
    image: "https://i.postimg.cc/TYS9H9wr/img-8.png",
  },
];

const fourth_catalog = [
  {
    title: "Детское питание",
    image: "https://i.postimg.cc/pXyCZ72W/img-9.png",
  },
  {
    title: "Мясо, птица, колбаса",
    image: "https://i.postimg.cc/Rhh7g6xs/img-10.png",
  },
  {
    title: "Непродовольственные товары",
    image: "https://i.postimg.cc/mZmV7RWp/img-11.png",
  },
];

/* ---------------------first_catalog--------------------- */
const catalogs1 = [
  ...new Set(
    first_catalog.map((item) => {
      return item;
    })
  ),
];
document.getElementById("row1").innerHTML = catalogs1
  .map((item) => {
    let { image, title } = item;
    return `              <div class="catalog__items">
    <div class="item">
      <img src="${image}" alt="" />
      <h1 class="Text-Bold_M">${title}</h1>
  </div>`;
  })
  .join("");
/* ---------------------first_catalog--------------------- */
/* ---------------------second_catalog--------------------- */
const catalogs2 = [
  ...new Set(
    second_catalog.map((item) => {
      return item;
    })
  ),
];
document.getElementById("row2").innerHTML = catalogs2
  .map((item) => {
    let { image, title } = item;
    return `              <div class="catalog__items">
      <div class="item">
        <img src="${image}" alt="" />
        <h1 class="Text-Bold_M">${title}</h1>
    </div>`;
  })
  .join("");
/* ---------------------second_catalog--------------------- */
/* ---------------------third_catalog--------------------- */
const catalogs3 = [
  ...new Set(
    third_catalog.map((item) => {
      return item;
    })
  ),
];
document.getElementById("row3").innerHTML = catalogs3
  .map((item) => {
    let { image, title } = item;
    return `              <div class="catalog__items">
        <div class="item">
          <img src="${image}" alt="" />
          <h1 class="Text-Bold_M">${title}</h1>
      </div>`;
  })
  .join("");
/* ---------------------third_catalog--------------------- */
/* ---------------------fourth_catalog--------------------- */
const catalogs4 = [
  ...new Set(
    fourth_catalog.map((item) => {
      return item;
    })
  ),
];
document.getElementById("row4").innerHTML = catalogs4
  .map((item) => {
    let { image, title } = item;
    return `              <div class="catalog__items">
          <div class="item">
            <img src="${image}" alt="" />
            <h1 class="Text-Bold_M">${title}</h1>
        </div>`;
  })
  .join("");
/* ---------------------fourth_catalog--------------------- */
/* ---------------------All Products--------------------- */
const All = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
document.getElementById("allproducts").innerHTML = All.map((item) => {
  let { image, price, description } = item;
  return `
  <div class="all__cards">
  <img src="${image}" alt="" />
  <h3 class="Text-Bold_M">${price}$</h3>
  <p class="Text_S">${description}</p>
  <div class="star">
  ${getRating(item.rating)}
  </div>
  <button class="Text_S new_btn">В корзину</button>
</div>`;
}).join("");
function getRating(rating) {
  let res = "";
  let star_count = 0;
  let full_star = parseInt(rating);
  let rest_star = rating - full_star;
  star_count = full_star;
  res = Array(full_star)
    .fill("<img src='Assets/icons/rating/full.svg'>")
    .join("");
  if (0.25 <= rest_star && rest_star <= 0.5) {
    star_count++;
    res += "<img src='Assets/icons/rating/half.svg'>";
  }
  if (0.5 < rest_star) {
    star_count++;
    res += "<img src='Assets/icons/rating/full.svg'>";
  }
  free_star = 5 - star_count;
  res += Array(free_star)
    .fill("<img src='Assets/icons/rating/empty.svg'>")
    .join("");
  return res;
}
/* ---------------------All Products--------------------- */
