const product = [
  {
    id: 1,
    name: "Butter",
    category: "Milky",
    description:
      "Масло — собирательное название целого ряда химических веществ или смесей веществ, не растворяющихся в воде. ",
    price: "8.99$",
    rating: 5,
    discount: 10,
    image: "https://i.postimg.cc/3J53ZjZq/1.png",
  },
  {
    id: 2,
    name: "Coffee",
    category: "Tea",
    description:
      "Ко́фе — напиток из жареных и перемолотых зёрен кофейного дерева или кофейного куста.",
    price: "7.99$",
    rating: 5,
    discount: 0,
    image: "https://i.postimg.cc/SxVqqBp0/2.png",
  },
  {
    id: 3,
    name: "Sausage",
    category: "Meat",
    description:
      "Колбаса́ — пищевой продукт; классообразующий тип колбасных изделий, представляющий собой мясной фарш в продолговатой оболочке.",
    price: "8.99$",
    rating: 5,
    discount: 0,
    image: "https://i.postimg.cc/QCpGzPqy/3.png",
  },
  {
    id: 4,
    name: "raspberries",
    category: "Fruits",
    description:
      "Мали́на обыкнове́нная — полукустарник; вид рода Рубус семейства Розовые. Растёт по вырубкам, лесам, кустарникам, берегам рек.",
    price: "4.99$",
    rating: 4.5,
    discount: 0,
    image: "https://i.postimg.cc/bJSjxdS8/5.png",
  },
  {
    id: 5,
    name: "Strawberry",
    category: "Fruits",
    description:
      "Клубни́ка — название крупноплодных видов растений рода Земляника семейства Розовые, а также их плодов. Название относится к землянике зелёной, землянике мускусной, землянике ананасной.",
    price: "8.99$",
    rating: 5,
    discount: 5,
    image: "https://i.postimg.cc/L4fphYM3/6.png",
  },
  {
    id: 6,
    name: "Cake",
    category: "Sweets",
    description:
      "Торт - кондитерское изделие, состоящий из нескольких коржей, пропитанных кремом или джемом. Сверху торт обычно украшают кремом, глазурью или фруктами.",
    price: "1.99$",
    rating: 3.5,
    discount: 0,
    image: "https://i.postimg.cc/YqHwFrrK/7.png",
  },
  {
    id: 7,
    name: "Pepsi",
    category: "Drink",
    description:
      "Pepsi — газированный безалкогольный напиток, производимый компанией PepsiCo. Создан в 1893 году Калебом Брэдхемом под названием «Напиток Брэда». В 1898 году переименован в Pepsi-Cola, а затем сокращён до Pepsi в 1961 году. ",
    price: "6.99$",
    rating: 3.5,
    discount: 0,
    image: "https://i.postimg.cc/W4Hvq03X/8.png",
  },
  {
    id: 8,
    name: "Apricot",
    category: "Fruits",
    description:
      "Абрико́с обыкнове́нный — плодовое дерево, вид из секции Абрикос рода Слива семейства Розовые. Абрикосом также называют плоды абрикоса обыкновенного и других видов абрикоса, из которых производят несколько видов сухофруктов, прежде всего — кайсу, курагу, а также урюк.",
    price: "6.99$",
    rating: 4.5,
    discount: 0,
    image: "https://i.postimg.cc/2ypN2mnW/9.png",
  },
  {
    id: 9,
    name: "Cheese",
    category: "Milky",
    description:
      "Сыр — пищевой продукт в виде твёрдой или полутвёрдой массы, получаемый в процессе сыроделия из заквашиваемого особым способом молока.",
    price: "8.99$",
    rating: 5,
    discount: 0,
    image: "https://i.postimg.cc/8Cj8GsHW/10.png",
  },
  {
    id: 10,
    name: "Nescafe",
    category: "Tea",
    description:
      "Откройте для себя кофе NESCAFÉ® Gold. Секрет его богатого вкуса и аромата – в зернах арабики, помолотых в 10 раз тоньше.",
    price: "7.99$",
    rating: 4.5,
    discount: 0,
    image: "https://i.postimg.cc/SsMwX5Hx/11.png",
  },
  {
    id: 11,
    name: "Kebab",
    category: "Food",
    description:
      "Шашлы́к — изначально блюдо стран Западной и Центральной Азии, а также Восточной Европы, из баранины мелкой нарезки, нанизанное на шампур и запечённое на древесном угле в мангале; при этом возможно применение маринада, от простейших специй до сложных многокомпонентных составов, требующих особого приготовления. ",
    price: "1.99$",
    rating: 5,
    discount: 10,
    image: "https://i.postimg.cc/gjb13sPq/12.png",
  },
  {
    id: 12,
    name: "Juice",
    category: "Drink",
    description:
      "Сок — жидкий пищевой продукт, полученный в результате отжима съедобных спелых плодов овощных или фруктовых культур. Сок популярен практически во всех странах мира.",
    price: "8.99$",
    rating: 5,
    discount: 20,
    image: "https://i.postimg.cc/HknvcRy1/23.png",
  },
  {
    id: 13,
    name: "Pizza",
    category: "Fast Food",
    description:
      "Пи́цца — традиционное итальянское блюдо изначально в виде круглой дрожжевой лепёшки, выпекаемой с уложенной сверху начинкой из томатного соуса, сыра и зачастую других ингредиентов, таких как мясо, овощи, грибы и других продуктов. Небольшую пиццу иногда называют пиццеттой.",
    price: "7.99$",
    rating: 4.5,
    discount: 0,
    image: "https://i.postimg.cc/m286rBhS/24.png",
  },
  {
    id: 24,
    name: "Apelsin",
    category: "Fruits",
    description:
      "Апельси́н — плодовое дерево; вид рода Цитрус семейства Рутовые, а также плод этого дерева. Апельсин — самая распространённая цитрусовая культура во всех тропических и субтропических областях мира. ",
    price: "10.99$",
    rating: 4.5,
    discount: 10,
    image: "https://i.postimg.cc/Qdz4pmQ9/25.png",
  },
  {
    id: 15,
    name: "Peach",
    category: "Fruits",
    description:
      "Пе́рсик обыкновенный, или Персик — растение из подрода Миндаль рода Слива семейства Розовые.",
    price: "8.99$",
    rating: 5,
    discount: 0,
    image: "https://i.postimg.cc/vm6PXnhP/26.png",
  },
  {
    id: 16,
    name: "Fish",
    category: "Food",
    description:
      "Рыбы — обширная группа водных челюстноротых позвоночных животных, ранее считавшаяся надклассом. Рыбы характеризуются жаберным дыханием на всех этапах постэмбрионального развития организма. ",
    price: "27.00$",
    rating: 4,
    discount: 70,
    image: "https://i.postimg.cc/NFQpgzcV/27.png",
  },
  {
    id: 17,
    name: "Ananas",
    category: "Fruits",
    description:
      "Анана́с хохла́тый, или Анана́с настоя́щий, или Анана́с крупнохохолко́вый — многолетнее травянистое растение, вид рода Ананас семейства Бромелиевые. ",
    price: "13.99$",
    rating: 4.5,
    discount: 20,
    image: "https://i.postimg.cc/9MdLHjvZ/28.png",
  },
  {
    id: 18,
    name: "Coffee",
    category: "Tea",
    description:
      "Кофе и хороший кофе — два абсолютно разных напитка. Я никогда не смеюсь, пока не получу свой кофе. ",
    price: "81.99$",
    rating: 4,
    discount: 20,
    image: "https://i.postimg.cc/brLLd9Yv/29.png",
  },
  {
    id: 19,
    name: "Jacobs",
    category: "Tea",
    description:
      "Хочешь ощутить вдохновляющую силу Аромагии? Налей себе чашечку кофе Jacobs, вдохни волшебный аромат кофе и почувствуй себя ближе к мечте. С достаточным количеством кофе Jacobs всё становится возможным",
    price: "6.99$",
    rating: 3,
    discount: 30,
    image: "https://i.postimg.cc/vBF0KmSG/30.png",
  },
  {
    id: 20,
    name: "Milk",
    category: "Milky",
    description:
      "Молоко́ — питательная жидкость, вырабатываемая молочными железами самок млекопитающих во время лактации. ",
    price: "2.99$",
    rating: 2,
    discount: 80,
    image: "https://i.postimg.cc/XNgs24K0/31.png",
  },
  {
    id: 21,
    name: "Chocolate",
    category: "Sweets",
    description:
      "Шокола́д — кондитерское изделие на основе масла какао, являющегося продуктом переработки какао-бобов — семян шоколадного дерева, богатых теобромином и кофеином.",
    price: "10.99$",
    rating: 5,
    discount: 0,
    image: "https://i.postimg.cc/9FFJKK1w/32.png",
  },
  {
    id: 22,
    name: "Pumpkin",
    category: "Vegetable",
    description:
      "Ты́ква — род травянистых растений семейства Тыквенные. Под словом «тыква» в России обычно понимаются виды Тыква обыкновенная и Тыква гигантская, широко распространённые и культивируемые как пищевое и кормовое растение.",
    price: "3.99$",
    rating: 4.5,
    discount: 0,
    image: "https://i.postimg.cc/dtH4Y6SH/33.png",
  },
  {
    id: 23,
    name: "Kivi",
    category: "Fruits",
    description:
      "Ки́ви — название плодов культурных сортов растений рода Актини́дия, принадлежащих к видам Актини́дия кита́йская или Актинидия деликатесная.",
    price: "8.99$",
    rating: 5,
    discount: 20,
    image: "https://i.postimg.cc/g2x4khCY/34.png",
  },
  {
    id: 24,
    name: "Pomegranate",
    category: "Fruits",
    description:
      "Грана́т обыкнове́нный — вид плодовых растений из рода Гранат семейства Дербенниковые. Плоды граната употребляются в пищу в сыром виде, в приготовленных блюдах, напитках, для получения гранатового сока. ",
    price: "9.99$",
    rating: 4,
    discount: 20,
    image: "https://i.postimg.cc/XYtLZJW9/35.png",
  },
  {
    id: 25,
    name: "Melon",
    category: "Plant",
    description:
      "Ды́ня — растение семейства Тыквенные, вид рода Огурец, бахчевая культура. Родиной дыни считается Средняя Азия и Малая Азия. Дыня — тепло- и светолюбивое растение, устойчивое к засолению почвы и засухе, плохо переносит повышенную влажность воздуха.",
    price: "7.99$",
    rating: 5,
    discount: 0,
    image: "https://i.postimg.cc/JhJqjL7v/36.png",
  },
  {
    id: 26,
    name: "Watermelon",
    category: "Dairy",
    description:
      "Арбу́з обыкнове́нный, или арбу́з шерсти́стый, или арбу́з столо́вый — однолетнее травянистое растение, вид рода Арбуз семейства Тыквенные. В зависимости от сорта может быть столового или кормового назначения.",
    price: "9.50$",
    rating: 3.5,
    discount: 0,
    image: "https://i.postimg.cc/RFBTRDNF/37.png",
  },
  {
    id: 27,
    name: "Hamburger",
    category: "Fast food",
    description:
      "Га́мбургер — это горячее блюдо, обычно состоящее из котлеты из измельченного мяса, как правило, говядины, помещенной внутрь нарезанной булочки.",
    price: "6.99$",
    rating: 5,
    discount: 0,
    image: "https://i.postimg.cc/br0WgnyX/13.png",
  },
  {
    id: 28,
    name: "Yoghurt",
    category: "Milky",
    description:
      "Йо́гурт — кисломолочный продукт с повышенным содержанием сухих веществ, изготовляемый путём сквашивания протосимбиотической смесью чистых культур Streptococcus thermophilus, содержание которых в готовом продукте на конец срока годности составляет не менее 10⁷ КОЕ в 1 г продукта. ",
    price: "8.99$",
    rating: 4.5,
    discount: 10,
    image: "https://i.postimg.cc/CMb3S3jv/14.png",
  },
  {
    id: 29,
    name: "Sour cream.",
    category: "Milky",
    description:
      "Смета́на — жидкий кисломолочный продукт белого цвета густой консистенции, получаемый из сливок и закваски. По степени жирности варьируется от 10 до обычно 30 %.",
    price: "4.99$",
    rating: 4.5,
    discount: 0,
    image: "https://i.postimg.cc/L6RrXxDm/15.png",
  },
  {
    id: 30,
    name: "Mandarin",
    category: "Fruits",
    description:
      "Мандари́н — небольшое вечнозелёное дерево, вид рода Цитрус семейства Рутовые; это же слово обозначает плод этого растения.",
    price: "68.50$",
    rating: 4.5,
    discount: 0,
    image: "https://i.postimg.cc/yYP2S0pc/16.png",
  },
  {
    id: 31,
    name: "Apples",
    category: "Fruits",
    description:
      "Я́блоня дома́шняя — вид деревьев из рода Яблоня семейства Розовые. Широко распространённое плодовое дерево, выращиваемое ради его плодов — яблок.",
    price: "4.99$",
    rating: 3.5,
    discount: 0,
    image: "https://i.postimg.cc/Bnnk5tRy/17.png",
  },
  {
    id: 32,
    name: "Bread",
    category: "Bakery",
    description:
      "Хлеб — хлебобулочное изделие, получаемое путём выпекания теста, разрыхлённого дрожжами или закваской.",
    price: "70.99$",
    rating: 4.5,
    discount: 0,
    image: "https://i.postimg.cc/wvLGxNst/18.png",
  },
  {
    id: 33,
    name: "Coca cola",
    category: "Drink",
    description:
      "Напиток, которому суждено было стать самым известным в мире, был придуман жарким майским днем фармацевтом Джоном Ститом Пембертоном в 1886 году. 8 мая он продает первую порцию Coca‑Cola. ",
    price: "9.99$",
    rating: 5,
    discount: 0,
    image: "https://i.postimg.cc/ZnLsphH4/19.png",
  },
  {
    id: 34,
    name: "Kebab",
    category: "Food",
    description:
      "Люля́-кеба́б — блюдо кухонь разных стран Ближнего Востока в виде мясного фарша, нанизанного на шампур и зажаренного на углях. Под разными названиями это блюдо известно многим народам от Балкан до Ирана.",
    price: "15.99$",
    rating: 5,
    discount: 0,
    image: "https://i.postimg.cc/cCW5vJQF/20.png",
  },
  {
    id: 35,
    name: "Compote",
    category: "Drink",
    description:
      "Компо́т — десертный напиток из фруктов или ягод, либо отвар фруктов в сиропе, а также смесь сухофруктов или сушёных ягод и фруктов, либо фруктовые или ягодные консервы.",
    price: "5.99$",
    rating: 5,
    discount: 0,
    image: "https://i.postimg.cc/jq6FGzbm/21.png",
  },
  {
    id: 36,
    name: "Banana",
    category: "Fruits",
    description:
      "Человек впадает в депрессию чаще обезьяны, потому что предпочитает покупные бананы.",
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
    return `
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
    return `              
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
    return `              
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
    return `              
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
