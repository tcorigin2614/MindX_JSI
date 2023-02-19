const fetchData = async () => {
    const result = await axios({
    url: "https://6370dea50399d1995d85a457.mockapi.io/product",
    method: "GET"
    })

    return result;
}


const addToCart = (id) => {
    console.log(id)
    const products = JSON.parse(localStorage.getItem("hung_products"))
    const productPicked = products.find(item => item.id === id)
    const myCart = JSON.parse(localStorage.getItem("hung_cart"))
    let newMyCart = []
    if(myCart && myCart.length > 0){
        newMyCart = [...myCart]
        newMyCart.push(productPicked)
    }
    else {
        newMyCart.push(productPicked)
    }
    document.getElementById('cart-amount').innerHTML = newMyCart.length
    localStorage.setItem('hung_cart', JSON.stringify((newMyCart)))
}

const renderProduct = (products, id) => {
    // let htmlString = ''
    const htmlString = products.reduce((acc, item)=> acc + `
        <div class="productpc">
            <a>
                <div class="cart-wrapper">
                    <img class="pcblackimg"
                        src=${item.img}
                        alt=${item.name} />
                    <div class="cart">
                        <div class="cartlink">Click để xem chi tiết</div>
                        <button class="cartbtn" onclick="addToCart(${item.id})">Add to cart</button>
                    </div>
                </div>
            </a>
            <div class="productcard">
                <h2 class="productname">${item.name}</h2>
                <div class="number">
                    <p class="realprice">${item.originprice}</p>
                    <p class="saleprice">${item.saleprice}</p>
                </div>
            </div>
        </div>
    `, '')
    document.getElementById(id).innerHTML = htmlString
    $(document).ready(function(){
        $('.multiple-items').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
        });
      });
}

const renderLaptop = (products, id) => {
    // let htmlString = ''
    const htmlString = products.reduce((acc, item)=> acc + `
        <div class="productpc">
            <a>
                <div class="cart-wrapper">
                    <img class="pcblackimg"
                        src=${item.img}
                        alt=${item.name} />
                    <div class="cart">
                        <div class="cartlink">Click để xem chi tiết</div>
                        <button class="cartbtn" onclick="addToCart(${item.id})">Add to Cart</button>
                    </div>
                </div>
            </a>
            <div class="productcard">
                <h2 class="productname">${item.name}</h2>
                <div class="number">
                    <p class="realprice">${item.originprice}</p>
                    <p class="saleprice">${item.saleprice}</p>
                </div>
            </div>
        </div>
    `, '')
    document.getElementById(id).innerHTML = htmlString
    $(document).ready(function(){
        $('.multiple-items-1').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
        });
      });
}
// ko co slide
const renderScreen = (products, id) => {
    const htmlString = products.reduce((acc, item)=> acc + `
    <div class="productpc">
        <a>
            <div class="screen-img">
                <img class="pcblackimg"
                    src=${item.img}
                    alt=${item.name}>
                <div class="cart">
                    <div class="cartlink">Click để xem chi tiết</div>
                    <button class="cartbtn" onclick="addToCart(${item.id})">Add to cart</button>
                </div>
            </div>
        </a>
        <div class="productcard">
            <h2 class="productname2">${item.name}</h2>
            <div>
                <p class="realprice">${item.originprice}</p>
                <p class="saleprice">${item.saleprice}
                </p>
            </div>
        </div>
        </div>
`, '')
 document.getElementById(id).innerHTML = htmlString
}
// chac chan api goi xong thi moi render ra giao dien
fetchData().then((result)=> {
    const data = result.data
    localStorage.setItem("hung_products", JSON.stringify(data))
    const productPc = data.filter((item) => item.type === 1)
    const productLaptop = data.filter((item) => item.type === 2)
    const productScreen = data.filter((item) => item.type === 3)
    console.log(productPc)
    const myCart = JSON.parse(localStorage.getItem("hung_cart"))
    if(myCart){
        document.getElementById('cart-amount').innerHTML = myCart.length
    }
   
    renderProduct(productPc, 'product-pc')
    renderLaptop(productLaptop, 'product-latop')
    renderScreen(productScreen, 'product-screen')
    
})


/**
 * 
 * 
 *  <div class="productpc">
                <a>
                    <div class="cart-wrapper">
                        <img class="pcblackimg"
                            src="https://product.hstatic.net/1000026716/product/01_5ee5d2f5004e48909ca69fa377005e4f_large.jpg"
                            alt="phantom plus i4080">
                        <div class="cart">
                            <div class="cartlink">Click để xem chi tiết</div>
                            <button class="cartbtn">Đặt hàng</button>
                        </div>
                    </div>
                </a>
                <div class="productcard">
                    <h2 class="productname">GVN Phantom Plus i4080</h2>
                    <div class="number">
                        <p class="realprice">13,780,000₫</p>
                        <p class="saleprice">12,990,000₫ </p>
                    </div>
                </div>
            </div>
 */


