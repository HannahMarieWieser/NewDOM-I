const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
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
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let navlinks = document.querySelectorAll(' nav a')

navlinks.forEach((element, i) => {
  element.textContent = siteContent.nav[`nav-item-${i+1}`];
});

let ctatext = document.getElementsByClassName('cta-text')[0];

ctatext.getElementsByTagName('h1')[0].innerHTML = siteContent['cta']['h1'];
ctatext.getElementsByTagName('button')[0].innerHTML = siteContent['cta']['button'];

let ctaimg = document.getElementById('cta-img');
ctaimg.setAttribute('src', siteContent['cta']['img-src']);


// let maintext = document.querySelectorAll(' top-content text-content');
// maintext.forEach((element, i) => {
//   element.textContent = siteContent.
// });

let maintext = document.querySelectorAll('.text-content');
maintext[0].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['features-h4'];
maintext[0].getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['features-content'];

maintext[1].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['about-h4'];
maintext[1].getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['about-content'];

let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

maintext[2].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['services-h4'];
maintext[2].getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['services-content'];

maintext[3].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['product-h4'];
maintext[3].getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['product-content'];

maintext[4].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['vision-h4'];
maintext[4].getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['vision-content'];