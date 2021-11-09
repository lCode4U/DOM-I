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


const logoImg = document.querySelector('#logo-img');

const docHeader = document.createElement('section');
const ctaText = document.createElement('div');
const ctaHeader = document.createElement('h1');
const ctaBut = document.querySelector('button');
const ctaImg = document.querySelector('#cta-img');



const mainCon = document.createElement('section');
const topCon = document.createElement('div');
const textTopCon = document.createElement('div');
const headerTT1 = document.createElement('h4');
const conTT1 = document.createElement('p');

const textTopCon2 = document.createElement('div');
const headerTT2 = document.createElement('h4');
const conTT2 = document.createElement('p');

const midImg = document.querySelector('#middle-img');


const textBCon = document.createElement('div');
const headerBT = document.createElement('h4');
const conBT = document.createElement('p');


const textBCon2 = document.createElement('div');
const headerBT2 = document.createElement('h4');
const conBT2 = document.createElement('p');


const textBCon3 = document.createElement('div');
const headerBT3 = document.createElement('h4');
const conBT3 = document.createElement('p');



const contactCon = document.querySelector('.contact');

const contactHead = document.createElement('section');
const contactAdd = document.createElement('p');
const contactTele = document.createElement('p');
const contactMail = document.createElement('p');


const docFooter = document.createElement('footer')


// captured data to tranverse

//const anchors = siteContent['nav'];
const ctaH1 = ctaHeader;

const butP = ctaBut;

//const docContainer = document.querySelector('body > div');
const featuresHeader = siteContent["main-content"]["features-h4"];
const featuresCon = siteContent["main-content"]["features-content"];

const aboutHeader = siteContent["main-content"]["about-h4"];
const aboutCon = siteContent["main-content"]["about-content"];

const servicesHeader = siteContent["main-content"]["services-h4"];
const servicesContent = siteContent["main-content"]["services-content"];

const productHeader = siteContent["main-content"]["product-h4"];
const productContent = siteContent["main-content"]["product-content"];

const visionHeader = siteContent["main-content"]["vision-h4"];
const visionContent = siteContent["main-content"]["vision-content"];


const contactHeader = siteContent['contact']["contact-h4"];
const contactAddress = siteContent['contact']["address"];
const contactPhone = siteContent['contact']['phone'];
const contactEmail = siteContent['contact']["email"];
const footerCopyright = siteContent['footer']['copyright'];



// this manipulate elements


ctaImg.setAttribute('src', siteContent.img["header-img"]);
ctaImg.alt = "CTA Image";

logoImg.setAttribute('src', siteContent.img["logo-img"]);
logoImg.alt = "Logo Image";

midImg.setAttribute('src', siteContent.img["mid-page-img"]);
midImg.alt = "Middle Image";

ctaHeader.innerHTML = siteContent['cta']['h1'];
ctaBut.textContent = siteContent['cta']['button'];

// const anchorCb = function(){
// anchorTags.forEach(anchors(item => {
//  console.log(anchors[item].textContent);
 
// }))};
// headerTT1.textContent = featuresHeader;
// conTT1.textContent = featuresCon;
// headerTT2.textContent = aboutHeader;
// conTT2.textContent = aboutCon;

// headerBT.textContent = servicesHeader;
// headerBT2.textContent = productHeader;
// headerBT3.textContent = visionHeader;

// conBT.textContent = servicesContent;
// conBT2.textContent = productContent;
// conBT3.textContent = visionContent;

// contactHead.textContent = contactHeader;
// contactAdd.textContent = contactAddress;
// contactTele.textContent = contactPhone;
// contactMail.textContent = contactEmail;
// docFooter.children[0].textContent = footerCopyright;



// console.log(docHead,docBody,docTitle,docFooter);
// console.log(textBCon,textBCon2, textBCon3);
// console.log(headerBT,headerBT2,headerBT3,headerTT1,headerTT2);
// console.log(conBT,conBT2,conBT3,conTT1,conTT2);
// console.log(mainCon,newHeader,ctaHeader,ctaBut,ctaText);
// console.log(anchors,anchorTags,bottomConn);
//  console.log(textTopCon,textTopCon2,topCon);
// console.log(contactHead,contactAdd,contactTele,contactMail)
// console.log(contactHead,contactCon)