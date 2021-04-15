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

//this is to select content
const parentHead = document.querySelector("header");

const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["img"]["logo-img"])
console.log(logo);
console.log(parentHead);

const parentCon = document.querySelector("div.container");
console.log(parentCon);

const navCon = document.querySelectorAll("nav a");
console.log(navCon);

navCon.forEach((document, i => {
  document.textContent = siteContent["nav"]; {
    return 'nav-item-${i +1'
  }
}));

function navAnchors(navCon, anchorCallback) {
  return anchorCallback(navCon);
}


const ctaCon = document.querySelector("section.cta");

const ctaH4 = document.createElement("h4");
const ctaP = document.createElement("p");
console.log(ctaCon);


// this is to push newNodeLists to dom
const parentBody = document.createElement("div");
console.log(parentBody);

const mainCon = document.querySelector("section.main-content");
console.log(mainCon);

const topCon = document.querySelector("div.top-content");
const topH4 = document.createElement("h4");
const topP = document.createElement("p");
console.log(topCon);

const bottCon = document.querySelector("div.bottom-content");
const bottH4 = document.createElement("h4");
const bottP = document.createElement("p");
console.log(bottCon);

const contactCon = document.querySelector("section.contact");
console.log(contactCon);

const footCon = document.querySelector("footer");
console.log(footCon);

const headImg = document.getElementById("cta-img")
headImg.setAttribute('src', siteContent.img['header-img'])
console.log(headImg);

const newTitle = document.querySelector("title");
console.log(newTitle);

const ctaBut = document.querySelector('button');
ctaBut.innerHTML = siteContent.cta.button;
console.log(ctaBut);

const midImg = document.querySelector(`.middle-img`)
midImg.setAttribute('src', siteContent.img['mid-page-img'])
console.log(midImg);


// const navCon = mainCon.querySelectorAll("body header nav");
// const navCon = document.
//   (siteContent.nav[length]);
// console.log(navCon);