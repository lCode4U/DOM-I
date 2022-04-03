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
  
  const docHead = document.createElement('head');
const docTitle = document.createElement('title');
const docBody = document.createElement('body');


const bCon = document.createElement('div');
const newHeader = document.createElement('header');

const docNav = document.createElement('nav');


const anchorTag1 = document.createElement('a');
const anchorTag2 = document.createElement('a');
const anchorTag3 = document.createElement('a');
const anchorTag4 = document.createElement('a');
const anchorTag5 = document.createElement('a');
const anchorTag6 = document.createElement('a');



const docHeader = document.createElement('section');
const ctaText = document.createElement('div');
const ctaHeader = document.createElement('h1');




const mainCon = document.createElement('section');
const topCon = document.createElement('div');
const textTopCon = document.createElement('div');
const headerTT1 = document.createElement('h4');
const conTT1 = document.createElement('p');

const textTopCon2 = document.createElement('div');
const headerTT2 = document.createElement('h4');
const conTT2 = document.createElement('p');




const textBCon = document.createElement('div');
const headerBT = document.createElement('h4');
const conBT = document.createElement('p');


const textBCon2 = document.createElement('div');
const headerBT2 = document.createElement('h4');
const conBT2 = document.createElement('p');


const textBCon3 = document.createElement('div');
const headerBT3 = document.createElement('h4');
const conBT3 = document.createElement('p');




const contactHead = document.createElement('section');
const contactAdd = document.createElement('p');
const contactTele = document.createElement('p');
const contactMail = document.createElement('p');


const docFooter = document.createElement('footer')




  // captured data to tranverse
  const anchors = siteContent["nav"];
  console.log(anchors);
 const ctasec = siteContent["cta"];
 const main = siteContent["main-content"];
 console.log(ctasec);
 console.log(main);
const featuresContent = siteContent
 console.log(featuresContent);
 
 
 
 
 
 
 
  // this manipulate elements
  
  
//   ctaImg.setAttribute('src', siteContent.img["header-img"]);
//   ctaImg.alt = "CTA Image";
  
//   logoImg.setAttribute('src', siteContent.img["logo-img"]);
//   logoImg.alt = "Logo Image";
  
//   midImg.setAttribute('src', siteContent.img["mid-page-img"]);
//   midImg.alt = "Middle Image";
  
  