const productData = [
    {
        id: 1,
        name: "Yellow Tracksuit",
        image: "img1.jpg",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consectetur alias, corrupti numquam ducimus facilis ratione earum, veniam labore minus unde perferendis possimus? Culpa inventore possimus veritatis voluptatem rem qui.",
    },
    {
        id: 2,
        name: "Designer Outfit",
        image: "img2.jpg",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consectetur alias, corrupti numquam ducimus facilis ratione earum, veniam labore minus unde perferendis possimus? Culpa inventore possimus veritatis voluptatem rem qui.",
    },
    {
        id: 3,
        name: "Chilling Mood",
        image: "img3.jpg",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consectetur alias, corrupti numquam ducimus facilis ratione earum, veniam labore minus unde perferendis possimus? Culpa inventore possimus veritatis voluptatem rem qui.",
    }
];

const nxtBtn = document.querySelector('.nxt-btn');

const smImg = document.querySelector('.sm-product-img');
const productIndex = document.querySelector('.product-index');
const smProductDes = document.querySelector('.sm-product-des');

const productImg = document.querySelector('.product-img');
const backdropImg = document.querySelector('.backdrop-img');
const productName = document.querySelector('.product-name');
const productDes = document.querySelector('.product-des');

const smImgContainer = document.querySelector('.sm-product-img-container');
const productImgContainer = document.querySelector('.product-img-container');
const backdropImgContainer = document.querySelector('.right-side'); // contenedor de fondo

let currentProduct = 0;

nxtBtn.addEventListener('click', () => {
    if (currentProduct >= productData.length - 1) {
        currentProduct = 0;
    } else {
        currentProduct++;
    }

    productIndex.innerHTML = `0${productData[currentProduct].id}`;

    // Animación
    smImgContainer.classList.add('slide');
    productImgContainer.classList.add('slide');
    backdropImgContainer.classList.add('fade');
    productDes.classList.add('fade');

    setTimeout(() => {
        const newProduct = productData[currentProduct];
        productName.innerHTML = newProduct.name;
        productDes.innerHTML = newProduct.des;
        smProductDes.innerHTML = newProduct.des;

        smImg.src = `./img/${newProduct.image}`;
        productImg.src = `./img/${newProduct.image}`;
        backdropImg.src = `./img/${newProduct.image}`;
    }, 500);

    setTimeout(() => {
        smImgContainer.classList.remove('slide');
        productImgContainer.classList.remove('slide');
        backdropImgContainer.classList.remove('fade');
        productDes.classList.remove('fade');
    }, 2000);
});
