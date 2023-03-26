let checkout = document.getElementById("checkout");
let checdiv = document.getElementById("chec-div");
let flag3 = false;
const checkoutHandler = () => {
    if (!flag3) {
        checkout.classList.add("translate-x-full");
        checkout.classList.remove("translate-x-0");
        setTimeout(function () {
            checdiv.classList.add("hidden");
        }, 1000);
        flag3 = true;
    } else {
        setTimeout(function () {
            checkout.classList.remove("translate-x-full");
            checkout.classList.add("translate-x-0");
        }, 1000);
        checdiv.classList.remove("hidden");
        flag3 = false;
    }
};

const calcTotalPrice = (arrItemPicked) => {
    return arrItemPicked.reduce((acc, item) => {
        var priceNumber = parseInt((item.originprice.split(',')[0].toString() +  item.originprice.split(',')[1].toString() + '000'))
        return acc + priceNumber
    }, 0)
}
const removeProduct = (idx) => {
    const myCart = JSON.parse(localStorage.getItem("hung_cart")) || []
    myCart.splice(idx,1)
    localStorage.setItem('hung_cart', JSON.stringify((myCart)))
    renderproductPicked(myCart, "product-form")
    const totalPrice = calcTotalPrice(myCart)
    document.getElementById('total-price').innerHTML = totalPrice.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}
const renderproductPicked = (products, id) => {
    if( products && products.length > 0 ){
        const htmlString = products.reduce((acc, item, idx)=> acc + `
        <li class="flex flex-col py-6 sm:flex-row sm:justify-between product-cart border-none">
            <div class="flex w-full space-x-2 sm:space-x-4 border-product items-start">
                <img class="flex-shrink-0 object-cover w-21 h-21 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" 
                src= ${item.img}
                <div class="flex flex-col justify-between w-full pb-4">
                    <div class="flex justify-between w-full pb-2 space-x-2 infor">
                        <div class="space-y-1">
                            <h3 class="text-lg font-semibold leading-snug sm:pr-8 your-cartvsg">${item.name}</h3>
                            <div class="price-space">
                            <p class="text-sm line-through your-cartss">Original price: ${item.saleprice}</p>
                            <p class="text-lg font-semibold your-cartsss">Sale price: ${item.originprice}</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex text-sm divide-x">
                        <button type="button" class="flex px-5 py-4  space-x-1 bg-red-600 rounded-lg" onclick="removeProduct(${idx})">
                            <span class=" your-cart" style="color: white";>Remove</span>
                        </button>
                    </div>
                </div>
            </div>
        </li> 
        
    `, '')
     document.getElementById(id).innerHTML = htmlString
    }
   else {
    const htmlString = `<p class="text-black text-center">Chưa có sản phẩm trong giỏ hàng của bạn</p>`
    document.getElementById(id).innerHTML = htmlString
   }
}

const myCart = JSON.parse(localStorage.getItem("hung_cart"))
  renderproductPicked(myCart, "product-form")

var totalPrice = calcTotalPrice(myCart || [])
document.getElementById('total-price').innerHTML = totalPrice.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});

const renderEmptyCart = () => {

}
var purchase = () => {
    if (localStorage.getItem("hung_cart")?.length > 0) {
        Swal.fire({
            title: 'Thanh toán thành công!',
            icon: 'success',
        })
        localStorage.clear()
        renderproductPicked([], 'product-form')
        document.getElementById('total-price').innerHTML = `
         0 đ
         `
    }
    else {
        Swal.fire({
            title: 'Không thanh toán được!',
            icon: 'error',
        })
    }
};