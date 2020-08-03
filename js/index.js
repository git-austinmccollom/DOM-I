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
    "h1": "DOM \n Is \n Awesome",
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
    "address" : "123 Way 456 Street \nSomewhere, USA",
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

let nav = document.querySelector('nav');
let navNodes = nav.querySelectorAll('a');

for ( let i = 0; i < Array.from(navNodes).length; i++ ) {
  navNodes[i].textContent = siteContent.nav['nav-item-' + [i+1]];
}

let cta = document.querySelector('.cta')
let hOne = cta.querySelector('h1');
hOne.innerText = siteContent.cta.h1;

cta.querySelector('button').textContent = siteContent.cta.button;

let ctaImg = cta.querySelector('img');
ctaImg.src = siteContent.cta["img-src"];

const topContent = document.querySelector('.top-content');
const features = topContent.querySelector('.text-content:nth-child(1)')
features.querySelector('h4').textContent = siteContent["main-content"]["features-h4"];
features.querySelector('p').textContent = siteContent["main-content"]["features-content"];

const about = topContent.querySelector('.text-content:nth-child(2)');
about.querySelector('h4').textContent = siteContent["main-content"]["about-h4"];
about.querySelector('p').textContent = siteContent["main-content"]["about-content"];


document.querySelector('.middle-img').src = siteContent["main-content"]["middle-img-src"];

document.querySelector('.bottom-content .text-content:nth-child(1) h4').textContent = siteContent["main-content"]["services-h4"];
document.querySelector('.bottom-content .text-content:nth-child(1) p').textContent = siteContent["main-content"]["services-content"];
document.querySelector('.bottom-content .text-content:nth-child(2) h4').textContent = siteContent["main-content"]["product-h4"];
document.querySelector('.bottom-content .text-content:nth-child(2) p').textContent = siteContent["main-content"]["product-content"];
document.querySelector('.bottom-content .text-content:nth-child(3) h4').textContent = siteContent["main-content"]["vision-h4"];
document.querySelector('.bottom-content .text-content:nth-child(3) p').textContent = siteContent["main-content"]["vision-content"];

const contact = document.querySelector('.contact');

contact.querySelector('h4').textContent = siteContent.contact["contact-h4"];
contact.querySelector('p:nth-child(2)').innerText = siteContent.contact.address;
contact.querySelector('p:nth-child(3)').textContent = siteContent.contact.phone;
contact.querySelector('p:nth-child(4)').textContent = siteContent.contact.email;

document.querySelector('footer p').textContent = siteContent.footer.copyright;