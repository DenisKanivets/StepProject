// thirdSection, change image and text when button click

let imgs = {
    1: "images/service1.png",
    3: "images/service2.png",
    5: "images/service3.png",
    7: "images/service4.png",
    9: "images/service5.png",
    11: "images/service6.png"
};

let txts = {
    1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex' +
        ' ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ' +
        'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt' +
        ' mollit anim id est laborum.',

    3: 'Graphic symbols are often functionalist and anonymous, as these pictographs from the US National Park' +
        'Service illustrate. Graphic design is the process of visual communication and problem-solving through' +
        'the use of typography, photography and illustration. The field is considered a subset of visual ' +
        'communication and communication design, but sometimes the term "graphic design" is used synonymously. ' +
        'Graphic designers create and combine symbols, images and text to form visual representations of ideas and' +
        ' messages.',

    5: 'Customer support is a range of customer services to assist customers in making cost effective and correct ' +
        'use of a product. It includes assistance in planning, installation, training, troubleshooting, maintenance, ' +
        'upgrading, and disposal of a product. Regarding technology products such as mobile phones, televisions, ' +
        'computers, software products or other electronic or mechanical goods, it is termed technical support.',

    7: 'If you want your app to be successful, you have to consider UX to be not just a minor aspect of design, but ' +
        'an essential component of product strategy.There are many things to consider when designing for mobile. ' +
        'In this article, I’ve summarized a lot of practical recommendations that you can apply to your design.',

    9: 'Marketing is the study and management of exchange relationships.[1][2] Marketing is used to create, keep and ' +
        'satisfy the customer. With the customer as the focus of its activities, it can be concluded that Marketing ' +
        'is one of the premier components of Business Management - the other being innovation.',

    11: 'Search engine optimization (SEO) is the process of affecting the online visibility of a website or a web ' +
        'page in a web search engines unpaid results—often referred to as "natural", "organic", or "earned" results. ' +
        'In general, the earlier (or higher ranked on the search results page), and more frequently a website ' +
        'appears in the search results list, the more visitors it will receive from the search engines users.'
};

for (let i = 1; i < document.getElementById('services').childNodes.length; i = i + 2) {
    document.getElementById('services').childNodes[i].addEventListener('click', function () {
        let elems = document.getElementById('services').childNodes;
        for (let j = 1; j < elems.length; j = j + 2) {
            elems[j].classList.remove('activeButt')
        }
        document.getElementById('services').childNodes[i].classList.add('activeButt');
        document.getElementById('infoImgTxt').firstChild.nextSibling.src = imgs[i];
        document.getElementById('infoImgTxt').lastElementChild.innerHTML = txts[i];
    });
}

//fifthSection, add new images when button click

let newImages1 = [
    "images/graphic-design/graphic-design2.jpg",
    "images/web-design/web-design3.jpg",
    "images/landing-page/landing-page7.jpg",
    "images/graphic-design/graphic-design4.jpg",
    "images/wordpress/wordpress4.jpg",
    "images/landing-page/landing-page5.jpg",
    "images/graphic-design/graphic-design12.jpg",
    "images/web-design/web-design6.jpg",
    "images/graphic-design/graphic-design3.jpg",
    "images/wordpress/wordpress8.jpg",
    "images/graphic-design/graphic-design8.jpg",
    "images/web-design/web-design7.jpg"
];

let newImages1Class = [
    "graphicDesign",
    "webDesign",
    "landingPage",
    "graphicDesign",
    "wordPress",
    "landingPage",
    "graphicDesign",
    "webDesign",
    "graphicDesign",
    "wordPress",
    "graphicDesign",
    "webDesign"
];

let newImages2 = [
    "images/graphic-design/graphic-design5.jpg",
    "images/wordpress/wordpress2.jpg",
    "images/web-design/web-design2.jpg",
    "images/wordpress/wordpress6.jpg",
    "images/landing-page/landing-page1.jpg",
    "images/graphic-design/graphic-design6.jpg",
    "images/wordpress/wordpress7.jpg",
    "images/landing-page/landing-page4.jpg",
    "images/wordpress/wordpress9.jpg",
    "images/wordpress/wordpress3.jpg",
    "images/graphic-design/graphic-design9.jpg",
    "images/web-design/web-design4.jpg"
];

let newImages2Class = [
    "graphicDesign",
    "wordPress",
    "webDesign",
    "wordPress",
    "landingPage",
    "graphicDesign",
    "wordPress",
    "landingPage",
    "wordPress",
    "wordPress",
    "graphicDesign",
    "webDesign"
];

document.getElementById('loadMoreWorks').addEventListener('click', function addNewImages1() {
    document.getElementById('loading').style.opacity = '1';
    document.getElementById('loadMoreWorks').style.opacity = '0';
    setTimeout(function () {
        for (let i = 0; i < newImages1.length; i++) {
            let img1 = document.createElement('img');
            img1.src = newImages1[i];
            img1.className = newImages1Class[i];
            document.getElementById('works').appendChild(img1);
        }
        document.getElementById('loadMoreWorks').removeEventListener('click', addNewImages1);
        document.getElementById('loading').style.opacity = '0';
        document.getElementById('loadMoreWorks').style.opacity = '1';
    }, 2000);
    document.getElementById('loadMoreWorks').addEventListener('click', function addNewImages2() {
        document.getElementById('loading').style.opacity = '1';
        document.getElementById('loadMoreWorks').style.opacity = '0';
        setTimeout(function () {
            for (let j = 0; j < newImages1.length; j++) {
                let img2 = document.createElement('img');
                img2.src = newImages2[j];
                img2.className = newImages2Class[j];
                document.getElementById('works').appendChild(img2);
            }
            document.getElementById('loadMoreWorks').removeEventListener('click', addNewImages2);
            document.getElementById('loading').style.opacity = '0';
        }, 2000)
    });
});


//fifthSection, filter images when button click

let graphicDesign = document.getElementsByClassName('graphicDesign');
let webDesign = document.getElementsByClassName('webDesign');
let landingPages = document.getElementsByClassName('landingPage');
let wordPress = document.getElementsByClassName('wordPress');

document.getElementById('graphicDesign').addEventListener('click', function () {
    for (let i = 0; i < graphicDesign.length; i++) {
        graphicDesign[i].style.display = '';
    }
    for (let i = 0; i < webDesign.length; i++) {
        webDesign[i].style.display = 'none';
    }
    for (let i = 0; i < landingPages.length; i++) {
        landingPages[i].style.display = 'none';
    }
    for (let i = 0; i < wordPress.length; i++) {
        wordPress[i].style.display = 'none';
    }
});

document.getElementById('webDesign').addEventListener('click', function () {
    for (let i = 0; i < graphicDesign.length; i++) {
        graphicDesign[i].style.display = 'none';
    }
    for (let i = 0; i < webDesign.length; i++) {
        webDesign[i].style.display = '';
    }
    for (let i = 0; i < landingPages.length; i++) {
        landingPages[i].style.display = 'none';
    }
    for (let i = 0; i < wordPress.length; i++) {
        wordPress[i].style.display = 'none';
    }
});

document.getElementById('landingPages').addEventListener('click', function () {
    for (let i = 0; i < graphicDesign.length; i++) {
        graphicDesign[i].style.display = 'none';
    }
    for (let i = 0; i < webDesign.length; i++) {
        webDesign[i].style.display = 'none';
    }
    for (let i = 0; i < landingPages.length; i++) {
        landingPages[i].style.display = '';
    }
    for (let i = 0; i < wordPress.length; i++) {
        wordPress[i].style.display = 'none';
    }
});

document.getElementById('wordPress').addEventListener('click', function () {
    for (let i = 0; i < graphicDesign.length; i++) {
        graphicDesign[i].style.display = 'none';
    }
    for (let i = 0; i < webDesign.length; i++) {
        webDesign[i].style.display = 'none';
    }
    for (let i = 0; i < landingPages.length; i++) {
        landingPages[i].style.display = 'none';
    }
    for (let i = 0; i < wordPress.length; i++) {
        wordPress[i].style.display = '';
    }
});

document.getElementById('all').addEventListener('click', function () {
    for (let i = 0; i < graphicDesign.length; i++) {
        graphicDesign[i].style.display = '';
    }
    for (let i = 0; i < webDesign.length; i++) {
        webDesign[i].style.display = '';
    }
    for (let i = 0; i < landingPages.length; i++) {
        landingPages[i].style.display = '';
    }
    for (let i = 0; i < wordPress.length; i++) {
        wordPress[i].style.display = '';
    }
});

//seventhSection, add jQuery plugin slick

$(document).ready(function () {

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        arrows: true,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
    });

});
