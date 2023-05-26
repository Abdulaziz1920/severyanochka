/*---------------ARRAY---------------*/
// / хлеб
const product = [
  {
    id: 1,
    name: "Butter",
    category: "Milky",
    description: "Сли́вочное ма́сло — пищевой продукт,",
    price: "8.99$",
    rating: 5,
    discount: 10,
    image: "./Assets/images/Arr_image/1.png",
  },
  {
    id: 2,
    name: "Coffee",
    category: "Tea",
    description: "Ранее кофейные деревья достигали 9 метров.",
    price: "7.99$",
    rating: 5,
    discount: 0,
    image: "./Assets/images/Arr_image/2.png",
  },
  {
    id: 3,
    name: "Sousage",
    category: "Meat",
    description: "Колбаса́ — пищевой продукт, тип колбасных изделий.",
    price: "8.99$",
    rating: 5,
    discount: 0,
    image: "./Assets/images/Arr_image/3.png",
  },
  {
    id: 4,
    name: "Broccoli",
    category: "Vegetable",
    description: "Мали́на — полукустарник; вид рода Рубус семейства Розовые.",
    price: "4.99$",
    rating: 4.5,
    discount: 0,
    image: "./Assets/images/Arr_image/5.png",
  },
  {
    id: 5,
    name: "Strawberry",
    category: "Fruits",
    description: "Клубни́ка — название видов растений семейства Розовые.",
    price: "8.99$",
    rating: 5,
    discount: 5,
    image: "./Assets/images/Arr_image/6.png",
  },
  {
    id: 6,
    name: "Cake",
    category: "Sweets",
    description: "Торт - кондитерское изделие, состоящий из нескольких.",
    price: "1.99$",
    rating: 3.5,
    discount: 0,
    image: "./Assets/images/Arr_image/7.png",
  },
  {
    id: 7,
    name: "Pepsi",
    category: "Drink",
    description: "Pepsi — газированный безалкогольный напиток.",
    price: "6.99$",
    rating: 3.5,
    discount: 0,
    image: "./Assets/images/Arr_image/8.png",
  },
  {
    id: 8,
    name: "Apricot",
    category: "Fruits",
    description: "Абрико́с — плодовое дерево, рода Слива семейства Розовые..",
    price: "6.99$",
    rating: 4.5,
    discount: 0,
    image: "./Assets/images/Arr_image/9.png",
  },
  {
    id: 9,
    name: "Cheese",
    category: "Milky",
    description: "Сыр — продукт в виде твёрдой или полутвёрдой массы.",
    price: "8.99$",
    rating: 5,
    discount: 0,
    image: "./Assets/images/Arr_image/10.png",
  },
  {
    id: 10,
    name: "Nescafe",
    category: "Tea",
    description: "Nescafé — крупнейшая в мире торговая компании Nestlé.",
    price: "7.99$",
    rating: 4.5,
    discount: 0,
    image: "./Assets/images/Arr_image/11.png",
  },
  {
    id: 11,
    name: "Kebab",
    category: "Food",
    description: "Шашлык считают блюдом кавказской кухни. ",
    price: "1.99$",
    rating: 5,
    discount: 10,
    image: "./Assets/images/Arr_image/12.png",
  },
  {
    id: 22,
    name: "Juice",
    category: "Drink",
    description: "Сок — жидкий пищевой продукт, фруктовых культур.",
    price: "8.99$",
    rating: 5,
    discount: 20,
    image: "./Assets/images/Arr_image/23.png",
  },
  {
    id: 23,
    name: "Pizza",
    category: "Fast Food",
    description: "Пицца блюдо в виде круглой открытой лепешки.",
    price: "7.99$",
    rating: 4.5,
    discount: 0,
    image: "./Assets/images/Arr_image/24.png",
  },
  {
    id: 24,
    name: "Apelsin",
    category: "Juice",
    description: "Апельсин —  вид рода Цитрус семейства Рутовые.",
    price: "10.99$",
    rating: 4.5,
    discount: 10,
    image: "./Assets/images/Arr_image/25.png",
  },
  {
    id: 25,
    name: "Peach",
    category: "",
    description: "Пе́рсик — растение из Миндаль рода Слива семейства Розовые.",
    price: "8.99$",
    rating: 5,
    discount: 0,
    image: "./Assets/images/Arr_image/26.png",
  },
  {
    id: 26,
    name: "Fish",
    category: "Food",
    description: "Рыбы — группа водных позвоночных животных.",
    price: "27.00$",
    rating: 4,
    discount: 70,
    image: "./Assets/images/Arr_image/27.png",
  },
  {
    id: 27,
    name: "Ananas",
    category: "",
    description: "Сезон ананасов длится круглый год.",
    price: "13.99$",
    rating: 4.5,
    discount: 20,
    image: "./Assets/images/Arr_image/28.png",
  },
  {
    id: 28,
    name: "Coffee",
    category: "Tea",
    description: "Кофе — не роскошь, кофе — средство передвижения.",
    price: "81.99$",
    rating: 4,
    discount: 20,
    image: "./Assets/images/Arr_image/29.png",
  },
  {
    id: 29,
    name: "Jacobs",
    category: "Tea",
    description: "Кофе и хороший кофе — два абсолютно разных напитка.",
    price: "6.99$",
    rating: 3,
    discount: 30,
    image: "./Assets/images/Arr_image/30.png",
  },
  {
    id: 30,
    name: "Dairy",
    category: "Milky",
    description: "Молоко́ — питательная жидкость.",
    price: "2.99$",
    rating: 2,
    discount: 80,
    image: "./Assets/images/Arr_image/31.png",
  },
  {
    id: 31,
    name: "Chocolate",
    category: "Sweets",
    description: "Шоколад — кондитерское изделие на основе какао.",
    price: "10.99$",
    rating: 5,
    discount: 0,
    image: "./Assets/images/Arr_image/32.png",
  },
  {
    id: 32,
    name: "Pumpkin",
    category: "Vegetable",
    description: "Тыква необходима при отеках – сердечных и почечных.",
    price: "3.99$",
    rating: 4.5,
    discount: 0,
    image: "./Assets/images/Arr_image/33.png",
  },
  {
    id: 33,
    name: "Kivi",
    category: "Fruits",
    description: "Киви — это значить что витамин C.",
    price: "8.99$",
    rating: 5,
    discount: 20,
    image: "./Assets/images/Arr_image/34.png",
  },
  {
    id: 34,
    name: "Pomegranate",
    category: "Fruits",
    description: "Гранат — вид плодовых растений из рода Гранат.",
    price: "9.99$",
    rating: 4,
    discount: 20,
    image: "./Assets/images/Arr_image/35.png",
  },
  {
    id: 35,
    name: "Melon",
    category: "Plant",
    description: "Ды́ня — растение семейства Тыквенные, бахчевая культура.",
    price: "7.99$",
    rating: 5,
    discount: 0,
    image: "./Assets/images/Arr_image/36.png",
  },
  {
    id: 36,
    name: "Watermelon",
    category: "Dairy",
    description: "Арбу́з шерстистый, или арбу́з столо́вый.",
    price: "9.50$",
    rating: 3.5,
    discount: 0,
    image: "./Assets/images/Arr_image/37.png",
  },
  {
    id: 12,
    name: "Hamburger",
    category: "Fast food",
    description: "Га́мбургер — это блюдо, обычно состоящее из котлеты/.",
    price: "6.99$",
    rating: 5,
    discount: 0,
    image: "./Assets/images/Arr_image/13.png",
  },
  {
    id: 13,
    name: "Yoghurt",
    category: "Milky",
    description: "Йо́гурт — продукт с содержанием сухих веществ.",
    price: "8.99$",
    rating: 4.5,
    discount: 10,
    image: "./Assets/images/Arr_image/14.png",
  },
  {
    id: 14,
    name: "Sour cream.",
    category: "Milky",
    description: "Смета́на — кисломолочный продукт белого цвета.",
    price: "4.99$",
    rating: 4.5,
    discount: 0,
    image: "./Assets/images/Arr_image/15.png",
  },
  {
    id: 15,
    name: "Mandarin",
    category: "Fruits",
    description: "Мандари́н — вечнозелёное дерево, вид рода Цитрус",
    price: "68.50$",
    rating: 4.5,
    discount: 0,
    image: "./Assets/images/Arr_image/16.png",
  },
  {
    id: 16,
    name: "Apples",
    category: "Fruits",
    description: "Яблоко. Я́блоко — сочный плод яблони.",
    price: "4.99$",
    rating: 3.5,
    discount: 0,
    image: "./Assets/images/Arr_image/17.png",
  },
  {
    id: 17,
    name: "Bread",
    category: "Bakery",
    description: "Хлеб — сделано самим народом. Народное изделия",
    price: "70.99$",
    rating: 4.5,
    discount: 0,
    image: "./Assets/images/Arr_image/18.png",
  },
  {
    id: 18,
    name: "Coca cola",
    category: "Drink",
    description: "Coca-Cola — газированный безалкогольный напиток.",
    price: "9.99$",
    rating: 5,
    discount: 0,
    image: "./Assets/images/Arr_image/19.png",
  },
  {
    id: 19,
    name: "Kebab",
    category: "Food",
    description: "Люля́-кеба́б — блюдо кухонь разных стран Ближнего Востока",
    price: "15.99$",
    rating: 5,
    discount: 0,
    image: "./Assets/images/Arr_image/20.png",
  },
  {
    id: 20,
    name: "Compote",
    category: "Drink",
    description: "Компо́т — десертный напиток из фруктов или ягод.",
    price: "5.99$",
    rating: 5,
    discount: 0,
    image: "./Assets/images/Arr_image/21.png",
  },
  {
    id: 21,
    name: "Banana",
    category: "Fruits",
    description: "С ботанической точки зрения банан является ягодой.",
    price: "2.99$",
    rating: 5,
    discount: 0,
    image: "./Assets/images/Arr_image/22.png",
  },
];
const specialOffers = [
  {
    id: 1,
    title: "Оформите карту «Северяночка»",
    text: "И получайте бонусы при покупке в магазинах и на сайте",
    image: "Assets/images/home/card.png",
  },
  {
    id: 2,
    title: "Покупайте акционные товары",
    text: "И получайте вдвое больше бонусов",
    image: "Assets/images/home/baskets.png",
  },
];
const article = [
  {
    date: "05.03.2023",
    article_title:
      "Режим использования масок и перчаток на территории магазинов",
    article_text:
      'Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.',
    image: "Assets/images/home/Status.png",
  },
  {
    date: "05.03.2023",
    article_title:
      "Режим использования масок и перчаток на территории магазинов",
    article_text:
      'Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.',
    image: "Assets/images/home/Status2.png",
  },
  {
    date: "05.03.2023",
    article_title:
      "Режим использования масок и перчаток на территории магазинов",
    article_text:
      'Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.',
    image: "Assets/images/home/Status3.png",
  },
];
/*---------------ARRAY---------------*/
/*---------------PROMOTION---------------*/
const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
document.getElementById("root").innerHTML = categories
  .map((item) => {
    let { image, description, price, discount } = item;
    if (item.discount !== 0) {
      return `
        <div class="promotion__cards">
          <img class="img" src="${image}" alt="" />
          <p class="discount Text_S">-${discount}%</p>
          <div class="promotion__price">
            <div class="left">
              <h4 class="Text-Bold_M">44,50 ₽</h4>
              <p class="Text_XS">С картой</p>
            </div>
            <div class="right">
              <h4 class="Text_S">${price}</h4>
              <p class="Text_XS">Обычная</p>
            </div>
          </div>
          <div class="promotion__text">
            <p class="Text_S">${description}</p>
          </div>
          <div class="promotion__star">
            ${getRating(item.rating)}
          </div>
          <button class="Text_S promotion_btn">В корзину</button>
        </div>`;
    }
  })
  .join("");
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
/*---------------PROMOTION---------------*/
/*---------------NEW---------------*/
const highsRatingCards = (product) => {
  product.sort((a, b) => b.rating - a.rating);

  return product;
};
highsRatingCards(product);

const products2 = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
document.getElementById("newsCards").innerHTML = product
  .map((item) => {
    let { image, description, price } = item;
    if (item.rating <= 4) {
      return `
      <div class="new__card">
      <img class="img" src=${image} alt="" />
      <h4 class="Text-Bold_M">${price}</h4>
      <p class="Text_S">${description}</p>
      <div class="new_star">
      ${getRating(item.rating)}
      </div>
      <button class="Text_S new_btn">В корзину</button>
    </div>`;
    }
  })
  .join("");
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
/*---------------NEW---------------*/
/*---------------BEFORE---------------*/
const lowerRatingCards = (product) => {
  product.sort((a, b) => a.rating - b.rating);

  return product;
};
lowerRatingCards(product).slice(-6);

const products3 = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
document.getElementById("before").innerHTML = product
  .map((item) => {
    let { image, description, price } = item;
    if (item.discount == 0 && item.rating <= 5) {
      return `
      <div class="new__card">
      <img class="img" src=${image} alt="" />
      <h4 class="Text-Bold_M">${price}</h4>
      <p class="Text_S">${description}</p>
      <div class="new_star">
      ${getRating(item.rating)}
      </div>
      <button class="Text_S new_btn">В корзину</button>
    </div>`;
    }
  })
  .slice(-20)
  .join("");
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
/*---------------BEFORE---------------*/
/*---------------SPECIAL---------------*/
const products4 = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
document.getElementById("special").innerHTML = specialOffers
  .map((item) => {
    let { image, title, text } = item;
    if (item.id === 1) {
      return `
      <div class="special__item lefts">
      <div class="special__offers__title">
        <h1 class="Header_S">${title}</h1>
        <p class="Text_S">
         ${text}
        </p>
      </div>
      <div class="special__offers__image">
        <img src=${image} alt="" />
      </div>
    </div>`;
    } else if (item.id === 2) {
      return `<div class="special__item rights">
        <div class="special__offers__title">
          <h1 class="Header_S">${title}</h1>
          <p class="Text_S">${text}</p>
        </div>
        <div class="special__offers__image">
          <img src=${image} alt="" />
        </div>
      </div>`;
    }
  })
  .join("");
/*---------------SPECIAL---------------*/
/*---------------ARTICLE---------------*/
const products5 = [
  ...new Set(
    article.map((item) => {
      return item;
    })
  ),
];
document.getElementById("article").innerHTML = article
  .map((item) => {
    let { date, article_text, article_title, image } = item;

    return `<div class="articles__cards">
    <img src=${image} alt="" />
    <h5 class="Text_XS">${date}</h5>
    <h2 class="Header_XS">${article_title}</h2>
    <p class="Text_S">
      ${article_text}
    </p>
    <button class="Text_S articles_btn">Подробнее</button>
  </div>
      `;
  })
  .slice(-3)
  .join("");
/*---------------ARTICLE---------------*/

let hamburger = document.querySelector(".hamburger");
let wrapper = document.querySelector(".wrapper");

hamburger.addEventListener("click", function () {
  wrapper.classList.toggle("show");
});
