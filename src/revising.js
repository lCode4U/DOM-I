let siteContent = {
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
  
  

  // captured data to tranverse
let ctaImg = document.getElementById('cta-img');
let logoImg = document.getElementById('logo-img');
let midImg = document.getElementById('middle-img');
let newButt = document.getElementsByName('button');

  let main = siteContent["main-content"];

 console.log(main); 
  
  
  let anchors = [];
  const newanchors = siteContent["nav"];
  console.log(anchors);

 let ctasec = siteContent["cta"];
 console.log(ctasec);

let featuresContent = main["features-content"];
 console.log(featuresContent);
 
 
 
 
 
 
 
  // this manipulate elements
  function arrayAnch (array){
    anchors.forEach(anchor => {
      return array.push(anchor);
    });
  }
    arrayAnch();
  
  ctaImg.setAttribute('src', siteContent.img["header-img"]);
  ctaImg.alt = "CTA Image";
  
  logoImg.setAttribute('src', siteContent.img["logo-img"]);
  logoImg.alt = "Logo Image";
  
  midImg.setAttribute('src', siteContent.img["mid-page-img"]);
  midImg.alt = "Middle Image";
  
  