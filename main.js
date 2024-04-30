const menuEmail = document.querySelector('.navbar-email')
const menuHamburger = document.querySelector('.menu')
const menuCartIcon = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')
const cardContainer = document.querySelector('.cards-container') 
const productDetail = document.querySelector('.product-detail-secondary')



menuEmail.addEventListener('click', toggleDesktopMenu) 
menuHamburger.addEventListener('click', toggleMobileMenu)
menuCartIcon.addEventListener('click', toggleAside) 

    function toggleDesktopMenu() {
        desktopMenu.classList.toggle('inactive')
    }

//Abrir y cerrar el carrito 
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('inactive')
        aside.classList.add('inactive')
    }  

//Abrir y cerrar el aside 
    function toggleAside() {
         aside.classList.toggle('inactive')
         mobileMenu.classList.add('inactive')
        }


const productList = []

productList.push( {
    image: 'https://img.freepik.com/premium-photo/3d-render-concept-single-push-scooter-children-3d-art-design-illustration_460848-5606.jpg?w=740',
    name: 'Scooter',
    price: 180,
    icon: './icons/bt_add_to_cart.svg',
})
productList.push( {
    image: 'https://img.freepik.com/free-photo/view-electronic-product-balancing-podium_23-2150141323.jpg?t=st=1714431289~exp=1714434889~hmac=05aec79b8d12b26eb8643d2d28b3de02c65a67bfe86aedf530061ea52bfa1159&w=740',
    name: 'Camara',
    price: 150,
    icon: './icons/bt_add_to_cart.svg',
})
productList.push( {
    image: 'https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817602.jpg?t=st=1714431207~exp=1714434807~hmac=4767bf962cb433e3c6e083101fbada9c77d163fabe692be5fce65d4acbca69f4&w=740',
    name: 'Audifonos',
    price: 20,
    icon: './icons/bt_add_to_cart.svg',
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace'
})
productList.push( {
    image: 'https://img.freepik.com/free-vector/realistic-virtual-reality-headset_52683-52870.jpg?t=st=1714431719~exp=1714435319~hmac=c309a73684d1960beeab08c0184388e69d4d034682125a9ddadf687724e14f2d&w=826',
    name: 'Lentes VR',
    price: 300,
    icon: './icons/bt_add_to_cart.svg',
})



for (product of productList) {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')
    

    const productImg = document.createElement('img')
    productImg.setAttribute('src', product.image)
    productImg.classList.add('.product-img')

    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')

    const productInfoDiv = document.createElement('div')

    const productPrice = document.createElement('p')
    productPrice.classList.add('product-Price')
    productPrice.innerText = '$' + product.price

    const productName = document.createElement('p')
    productName.classList.add('product-Name')
    productName.innerText = product.name

    productInfoDiv.appendChild(productName)
    productInfoDiv.appendChild(productPrice)

    const productInfoFigure = document.createElement('figure')

    const productImgCart= document.createElement('img')
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')


    productInfoFigure.appendChild(productImgCart)

    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)

    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)
   
    cardContainer.appendChild(productCard)

    productImg.addEventListener('click', toggleImg)
    function toggleImg() {
        productDetail.classList.toggle('inactive')  
    }
 function showDetails(product) {




   const productAsideName = document.createElement('p')
   productAsideName.textContent = `${product.name}`
   

   productDetail.appendChild(productAsideName)
}
/*
<aside class="product-detail product-detail-secondary inactive">
    <div class="product-detail-close">
      <img src="./icons/icon_close.png" alt="close">
    </div>
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
    <div class="product-info">
      <p>$35,00</p>
      <p>Bike</p>
      <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
      <button class="primary-button add-to-cart-button">
        <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
        Add to cart
      </button>
    </div>
  </aside>
*/

}