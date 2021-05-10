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
const docHead = document.querySelector('head');
const docTitle = document.querySelector('title');
const docBody = document.querySelector('body');


const mainCon = document.querySelector('.container');
const newHeader = document.querySelector('header');

const docNav = document.querySelector('nav');


const anchorTags = document.querySelectorAll('nav > a ');

const logoImg = document.querySelector('#logo-img');

const docHeader = document.querySelector('.cta');
const ctaText = document.querySelector('.cta-text');
const ctaHeader = siteContent.cta.h1;
const ctaBut = siteContent.cta.button;
const ctaImg = document.querySelector('#cta-img');


const topCon = document.querySelector('.top-content');
const textTopCon = document.querySelector('.text-content');
const textTopCon2 = document.querySelectorAll('.text-content')[1];

const midImg = document.querySelector('.middle-img');

const bottomCon = document.querySelector('.bottom-content')
const textBCon = document.querySelector('.bottom-content > .text-content');
const textBCon2 = bottomCon.children[1];
const textBCon3 = bottomCon.children[2];


const contactHead = document.querySelector('.contact');
const contactAdd = contactHead.children[1];
const contactTele = contactHead.children[2];
const contactMail = contactHead.children[3];


const docFooter = document.querySelector('footer')


// captured data to tranverse


const anchors = siteContent.nav;

const docContainer = document.querySelector('.main-content');
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

const contactHeader = siteContent.contact["contact-h4"];
const contactAddress = siteContent.contact["contact-address"];
const contactPhone = siteContent.contact["contact-phone"];
const contactEmail = siteContent.contact["contact-email"];

const footerCopyright = siteContent.footer.copyright;
console.log(footerCopyright);


// this manipulate elements


ctaImg.setAttribute('src', siteContent.img["header-img"]);
ctaImg.alt = "CTA Image";

logoImg.setAttribute('src', siteContent.img["logo-img"]);
logoImg.alt = "Logo Image";

midImg.setAttribute('src', siteContent.img["mid-page-img"]);
midImg.alt = "Middle Image";














console.log(docHead,docBody,docTitle,docFooter);
console.log(textBCon,textBCon2, textBCon3,bottomCon, footerCopyright);
console.log(mainCon,newHeader,ctaHeader);
console.log(anchors,anchorTags,ctaBut);
console.log(textTopCon,textTopCon2,topCon);
console.log(contactHead,contactAdd,contactTele,contactMail);
