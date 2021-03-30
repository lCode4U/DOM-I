const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018",
  },
  "img": {
    "header-img": "https://tk-assets.lambdaschool.com/d312ae1d-879c-4c0b-8e0a-d03661aed7d8_header-img.png",
    "mid-page-img": "https://tk-assets.lambdaschool.com/933e5c8a-f143-4a89-b81b-4a609c325f1a_mid-page-accent.jpg",
    "logo-img": "https://tk-assets.lambdaschool.com/d7b66b1d-1f0f-489e-b408-f8e25140c82c_logo.png",
  }
};

// Example: Update the img src for the logo
const parentBody = document.createElement("div");
console.log(parentBody);

const parentCon = document.querySelectorAll(".siteContent")
console.log(parentCon);

const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["img"]["logo-img"])

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


const ctaCon = document.querySelector(".cta-text");
ctaCon.innerHTML = siteContent.cta.h1;
console.log(ctaCon);


const mainCon = document.querySelector(".main-content");
console.log(mainCon);

const topCon = document.querySelector(".top-content");
const bottCon = document.querySelector(".bottom-content");
console.log(topCon);
console.log(bottCon);


// parentNode.prepend(...nodeorDomStrinfs); add before first child to parent element//
//       var parent = document.createElement("div");//
//       var p = document.createElement("p");//
//       var span = document.createElement("span");//
//       parent.append(p);//
//       parent.prepend(span);//

// console.log(parent.childNodes);  NodeList [ <span>, <p> ]//

//console.log(siteContent.nav);


  //const navAnchors = parentCon[]

 console.log(parentCon.entries);
//function anchorCallback(Object)  {
  //return 
    
  //};

  //anchorCallback(siteContent.nav);





//  const navAnchors = document.querySelectorAll("a"); 
//  function anchorCallback(Object, entries) {
//    return navAnchors.forEach(entry => {
     
//    });
//  } 
  // anchorCallback();
 // const anchorCallback = navAnchors['nav', 'values'];
 // navAnchors.forEach(anchorCallback(navAnchors => {
 //   navAnchors.setAttribute('nav-item', ["a"]);
 // }));
  // console.log(navAnchors);