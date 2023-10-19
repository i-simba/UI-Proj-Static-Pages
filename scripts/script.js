

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
                                <a class="MenuLink">
                                    <div class="Menu">Home</div>
                                </a>
                                <a class="MenuLink">
                                    <div class="Menu">Products</div>
                                </a>
                                <a class="MenuLink">
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
                        <div class="Menu Center">
                            Register/Sign In
                        </div>
                    </a>
                    </a class="MenuLink">
                        <div class="Cart">
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

function loadBody () {
    return `
        <div class="SlideContainer">
            
            <div class="ImageContainer">
                <img class="Image" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/22/10/istock-683044558.jpg"></img>
            </div>
            
            <div class="InfoContainer">
                <h1 class="Title">Seasonal Fruits</h1>
                <p class="Description">Shop from our wide variety of in-season fruits</p>
                <button class="Button">SHOP NOW</button>
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

document.getElementById("body").innerHTML = loadBody();
document.getElementById("header").innerHTML = loadHeader();