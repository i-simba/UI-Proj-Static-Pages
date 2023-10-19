

function loadHeader () {
    return `
        <nav class="Container">
            <div class="Wrapper">

                <div class="Left">
                    <a class="MenuLink">
                        <h1 class="Logo">TBD</h1>
                    </a>
                    <div class="Container">
                        <div class="Wrapper">
                            <div class="Left">
                                <a id="Home" class="MenuLink">
                                    <div class="Menu">Home</div>
                                </a>
                                <a id="Products" class="MenuLink">
                                    <div class="Menu">Products</div>
                                </a>
                                <a id="About" class="MenuLink">
                                    <div class="Menu">About</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="Center">
                    <div class="SearchContainer">
                        <div class="SearchImg">&#x2315;</div>
                        <input type="search" class="Search">
                    </div>
                </div>

                <div class="Right">
                    <a class="MenuLink">
                        <div id="RegLog" class="Menu Center">
                            Register/Sign In
                        </div>
                    </a>
                    </a class="MenuLink">
                        <div id="Checkout" class="Cart">
                            <svg class="CartIco">
                                <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z"></path>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </nav>
        `;
}

function loadHome () {
    return `
        <div class="SlideContainer">
            
            <div class="ImageContainer">
                <img class="Image" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/22/10/istock-683044558.jpg"></img>
            </div>
            
            <div class="InfoContainer">
                <h1 class="Title">Seasonal Fruits</h1>
                <p class="Description">Shop from our wide variety of in-season fruits</p>
                <button id="btn" class="Button" onclick="prodRef()">SHOP NOW</button>
            </div>

            <div class="BottomSlide">
                <h2 class="SubTitle">Some of our Best Sellers</h2>
            </div>
            <div class="BottomInfo">
                <div class="ProductContainer">
                    <img class="ProductImage" src="https://www.starkbros.com/images/dynamic/5695-560x560-fillv.jpg"></img>
                    <div class="ProductNameContainer Center">
                        <h2 class="ProductName">APPLES</h2>
                    </div>
                </div>
                <div class="ProductContainer">
                    <img class="ProductImage" src="https://cdn11.bigcommerce.com/s-s80x3kh8aj/images/stencil/1280w/products/1119/1863/original__13460.1693441692.png"></img>
                    <div class="ProductNameContainer Center">
                        <h2 class="ProductName">PINEAPPLES</h2>
                    </div>
                </div>
                <div class="ProductContainer">
                    <img class="ProductImage" src="https://www.allrecipes.com/thmb/y_uvjwXWAuD6T0RxaS19jFvZyFU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205638014-2000-d0fbf9170f2d43eeb046f56eec65319c.jpg"></img>
                    <div class="ProductNameContainer Center">
                        <h2 class="ProductName">ORANGES</h2>
                    </div>
                </div>
            </div>

        </div>
        `;
}

function loadProducts () {
    return `
        <div class="ProdContainer">
            <div class="FilterShelfContainer">
                <div class="FilterLabelContainer">
                    <label class="FilterLable">FILTERS</label>
                </div>
                <div class="FilterShelf">
                    <label class="FilterName">
                        <input type="checkbox"> Organic
                    </label>
                    <label class="FilterName">
                        <input type="checkbox"> Organic
                    </label>
                    <label class="FilterName">
                        <input type="checkbox"> Organic
                    </label>
                    <label class="FilterName">
                        <input type="checkbox"> Organic
                    </label>
                    <label class="FilterName">
                        <input type="checkbox"> Organic
                    </label>
                    <label class="FilterName">
                        <input type="checkbox"> Organic
                    </label>
                </div>
            </div>

            <div class="ProdShow">
            <img src="https://content.presentermedia.com/files/clipart/00002000/2285/under_construction_pc_800_wht.jpg" style="margin-left: 100px;"></img>
            </div>
        </div>
        `;
}

function prodRef () {
    body.innerHTML = loadProducts();
}

let header = document.getElementById("header");
let body = document.getElementById("body");

header.innerHTML = loadHeader();
body.innerHTML = loadHome();

document.getElementById("Home").onclick = function () {
    body.innerHTML = loadHome();
}

document.getElementById("Products").onclick = function () {
    body.innerHTML = loadProducts();
}

document.getElementById("About").onclick = function () {
    body.innerHTML = `
        <div class="Center" style="margin-top: 100px;">
            TBD 'About'<br></br>
            <img src="https://st3.depositphotos.com/6723736/12729/v/450/depositphotos_127297410-stock-illustration-complexion-is-bad-dog.jpg"></img>
        </div>
        `;
}

document.getElementById("RegLog").onclick = function () {
    body.innerHTML = `
        <div class="Center" style="margin-top: 100px;">
            TBD 'Register/Log In'<br></br>
            <img src="https://media.istockphoto.com/id/1331362780/vector/cute-baby-monkey-cartoon-confused.jpg?s=612x612&w=0&k=20&c=UKVjCus5ykDPtNJHdMQLUJCOBtZfNv7GJlqyRrIdSwo="></img>
        </div>
        `;
}

document.getElementById("Checkout").onclick = function () {
    body.innerHTML = `
        <div class="Center" style="margin-top: 100px;">
            TBD 'Cart'<br></br>
            <img src="https://png.pngtree.com/png-clipart/20220705/ourmid/pngtree-the-cat-s-confused-png-image_5683652.png"></img>
        </div>
        `;
}