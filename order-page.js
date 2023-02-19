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


const renderproductPicked = (products, id) => {
    if( products && products.length > 0 ){
        const htmlString = products.reduce((acc, item)=> acc + `
        <li class="flex flex-col py-6 sm:flex-row sm:justify-between product-cart">
            <div class="flex w-full space-x-2 sm:space-x-4 border-product">
                <img class="flex-shrink-0 object-cover w-21 h-21 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" 
                src= ${item.img}
                <div class="flex flex-col justify-between w-full pb-4">
                    <div class="flex justify-between w-full pb-2 space-x-2 infor">
                        <div class="space-y-1">
                            <h3 class="text-lg font-semibold leading-snug sm:pr-8 your-cartvsg">${item.name}</h3>
                            <div class="price-space">
                            <p class="text-sm line-through your-cartss">Sale price: ${item.saleprice}</p>
                            <p class="text-lg font-semibold your-cartsss">List price: ${item.originprice}</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex text-sm divide-x">
                        <button type="button" class="flex items-center px-2 py-1 pl-0 space-x-1 remove-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill">
                                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                <rect width="32" height="200" x="168" y="216"></rect>
                                <rect width="32" height="200" x="240" y="216"></rect>
                                <rect width="32" height="200" x="312" y="216"></rect>
                                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                            </svg>
                            <span class="your-cart" style="color: white";>Remove</span>
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
 


 