const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features contentNodeListum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About contentNodeListum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services contentNodeListum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product contentNodeListum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision contentNodeListum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
  img: {
    "header-img": "https:tk-assets.lambdaschool.com/d312ae1d-879c-4c0b-8e0a-d03661aed7d8_header-img.png",
    "mid-page-img": "https:tk-assets.lambdaschool.com/933e5c8a-f143-4a89-b81b-4a609c325f1a_mid-page-accent.jpg",
    "logo-img": "https:tk-assets.lambdaschool.com/d7b66b1d-1f0f-489e-b408-f8e25140c82c_logo.png",
  },
};

//Example: Update the img src for the logo
// this is to create elements
const parentHead = document.createElement("head");

const ctaImg = document.createElement("img");
ctaImg.classList.add("cta-img");

const logoNew = document.createElement("img");
logoNew.classList.add("logo");

const midImg = document.createElement("img");
midImg.classList.add("middle-img");

const parentCon = document.createElement("div");
parentCon.classList.add("container");


const navCon = document.createElement("nav");
const navAnchors = document.createElement("a")

const ctaCon = document.createElement("section");
ctaCon.classList.add("cta");
const ctaH1 = document.createElement("h1");
const ctaBut = document.createElement('button');


const mainCon = document.createElement("section");
mainCon.classList.add("main-content");

const topCon = document.createElement("div");
topCon.classList.add("top-content");

const toptextCon = document.createElement("div");
toptextCon.classList.add("text-content");
const topH4 = document.createElement("h4");
const topP = document.createElement("p");


const secTextCon = document.createElement("div");
secTextCon.classList.add("text-content")
const secH4 = document.createElement("h4");
const secP = document.createElement("p");


const boCon = document.createElement("div");
boCon.classList.add("bottom-content");

const bTextCon = document.createElement("div");
bTextCon.classList.add("text-content");
bH4 = document.createElement("h4");
bP = document.createElement("p");


const bTextCon2 = document.createElement("div");
bTextCon2.classList.add("text-content2");
b2H4 = document.createElement("h4");
b2P = document.createElement("p");

const bTextCon3 = document.createElement("div");
bTextCon3.classList.add("text-content3");
b3H4 = document.createElement("h4");
b3P = document.createElement("p");

const contactCon = document.createElement("section");
contactCon.classList.add("contact");
const cH4 = document.createElement("h4");
const cParaCon = document.createElement("p");
const cParaCon2 = document.createElement("p");
const cParaCon3 = document.createElement("p");


const footerCon = document.createElement("footer");
const footPara = document.createElement("p");









// this is to select content
const originalCon = siteContent.querySelectorAll('a');







// this is to push elements to dom












// this is to log data

// console.log(parentHead);
// console.log(logoNew);
// console.log(parentCon);
// console.log(navCon);
// console.log(navAnchors);
// console.log(ctaCon);
// console.log(ctaH1);
// console.log(ctaBut);
// console.log(mainCon);
// console.log(topCon);
// console.log(toptextCon);
// console.log(topH4);
// console.log(topP);
// console.log(secTextCon);
// console.log(secH4);
// console.log(secP);
// console.log(boCon);
// console.log(bTextCon);
// console.log(bH4);
// console.log(bP);
// console.log(midImg);
// console.log(bTextCon2);
// console.log(b2H4);
// console.log(b2P);
// console.log(bTextCon3);
// console.log(b3H4);
// console.log(b3P);
// console.log(contactCon);
// console.log(cH4);
// console.log(cParaCon);
// console.log(cParaCon2);
// console.log(cParaCon3);
// console.log(footPara);
// console.log(footerCon);
console.log(originalCon);

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();





