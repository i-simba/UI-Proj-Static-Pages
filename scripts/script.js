

function loadHeader () {
    return `
        <nav class="Container">
            <div class="Wrapper">

                <div class="Left">
                    <a class="MenuLink">
                        <div style="display: flex;">
                            <input class="color" type="color" id="mainColor" value="#0C2340"/>
                            <input class="color" type="color" id="subColor" value="#F15A22"/>
                        </div>
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

function loadFooter () {
    return `
        <div class="row">
            <div class="col1">
                <h3>Fruits R Us!</h3>
                <a class="gitLink" href="https://github.com/Brandon-Price/UI-Project" target="_blank" rel="noopener noreferrer">
                    <svg aria-hidden="true" viewBox="0 0 16 16">
                        <path d="M 8 0 c 4.42 0 8 3.58 8 8 a 8.013 8.013 0 0 1 -5.45 7.59 c -0.4 0.08 -0.55 -0.17 -0.55 -0.38 c 0 -0.27 0.01 -1.13 0.01 -2.2 c 0 -0.75 -0.25 -1.23 -0.54 -1.48 c 1.78 
                        -0.2 3.65 -0.88 3.65 -3.95 c 0 -0.88 -0.31 -1.59 -0.82 -2.15 c 0.08 -0.2 0.36 -1.02 -0.08 -2.12 c 0 0 -0.67 -0.22 -2.2 0.82 c -0.64 -0.18 -1.32 -0.27 -2 -0.27 c -0.68 0 -1.36 
                        0.09 -2 0.27 c -1.53 -1.03 -2.2 -0.82 -2.2 -0.82 c -0.44 1.1 -0.16 1.92 -0.08 2.12 c -0.51 0.56 -0.82 1.28 -0.82 2.15 c 0 3.06 1.86 3.75 3.64 3.95 c -0.23 0.2 -0.44 0.55 -0.51 
                        1.07 c -0.46 0.21 -1.61 0.55 -2.33 -0.66 c -0.15 -0.24 -0.6 -0.83 -1.23 -0.82 c -0.67 0.01 -0.27 0.38 0.01 0.53 c 0.34 0.19 0.73 0.9 0.82 1.13 c 0.16 0.45 0.68 1.31 2.69 0.94 
                        c 0 0.67 0.01 1.3 0.01 1.49 c 0 0.21 -0.15 0.45 -0.55 0.38 A 7.995 7.995 0 0 1 0 8 c 0 -4.42 3.58 -8 8 -8 Z"></path>
                    </svg>
                </a>
                <span>|</span>
                <span>GitHub</span>
            </div>
            <div class="col2 story">
                <h3>About Us</h3>
                <p>
                    &emsp; Our story is a tale of passion, health, and community, rooted in the vibrant world of fresh,
                    juicy fruits. It all began when a group of like-minded individuals came together with a shared
                    dream - to bring the bounty of nature's goodness to doorsteps worldwide. And so, our online fruit store was born.
                </p>
            </div>
            <div class="col2">
                <h3>Our Founders</h3>
                <a class="tname" href="https://github.com/i-simba" target="_blank" rel="noopener noreferrer">
                    Ivan Simbulan</a><br>
                <a class="tname" href="https://github.com/Brandon-Price" target="_blank" rel="noopener noreferrer">
                    Brandon Price</a><br>
                <a class="tname"href="https://github.com/mDean1" target="_blank" rel="noopener noreferrer">
                    Morgan Dean</a><br>
                <a class="tname"href="https://github.com/ThanhlanTrinh" target="_blank" rel="noopener noreferrer">
                    Thanhlan Trinh</a><br>
                <a class="tname"href="https://github.com/CyberLykan" target="_blank" rel="noopener noreferrer">
                    Julian Legere</a><br>
            </div>
        </div>
        `;
}

function loadHome () {
    return `
        <div class="SlideContainer">
            
            <div class="ImageContainer">
                <div class="InfoContainer">
                    <h1 class="Title">Seasonal Fruits</h1>
                    <p class="Description">Shop from our wide variety of in-season fruits</p>
                    <button id="btn" class="Button" onclick="prodRef()">SHOP NOW</button>
                </div>
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
        <div class="SortContainer">
            <select name="sort" id="sort" class="SortBox">
                <option value="" disabled selected>Sort By</option>
                <option value="">Price: High to Low</option>
                <option value="">Price: Low to High</option>
                <option value="">Alphabetical: A - Z</option>
                <option value="">Alphabetical: Z - A</option>
            </select>
        </div>

        <div class="ProdContainer">
            <div class="FilterShelfContainer">
                <div class="FilterLabelContainer">
                    <label class="FilterLable">FILTERS</label>
                </div>
                <div class="FilterShelf">
                    <label class="FilterType">Farming Practices</label>
                    <label class="FilterName">
                        <input type="checkbox"> Organic
                    </label>
                    <label class="FilterName">
                        <input type="checkbox"> Non-Organic
                    </label></br>
                    <label class="FilterType">Fruit Type</label>
                    <label class="FilterName">
                        <input type="checkbox"> Beries
                    </label>
                    <label class="FilterName">
                        <input type="checkbox"> Pits
                    </label>
                    <label class="FilterName">
                        <input type="checkbox"> Cores
                    </label>
                    <label class="FilterName">
                        <input type="checkbox"> Citrus
                    </label>
                    <label class="FilterName">
                        <input type="checkbox"> Melons
                    </label>
                    <label class="FilterName">
                        <input type="checkbox"> Tropical
                    </label></br>
                    <label class="FilterType">Weight</label>
                    <label class="FilterName">
                        <input type="checkbox"> Small
                    </label>
                    <label class="FilterName">
                        <input type="checkbox"> Medium
                    </label>
                    <label class="FilterName">
                        <input type="checkbox"> Large
                    </label></br>
                    <label class="FilterType">Price</label>
                    <label class="FilterName">
                        $ <input class="PriceInput" type="number" min="0.01" step="0.01" placeholder="MIN">
                    </label>
                    <label class="FilterName">
                        $ <input class="PriceInput" type="number" min="0.01" step="0.01" placeholder="MAX">
                    </label></br>
                    <label class="FilterType">MISC</label>
                    <label class="FilterName">
                        <input type="checkbox"> Store Picks
                    </label>
                    <label class="FilterName">
                        <input type="checkbox"> Best Sellers
                    </label>
                    <label class="FilterName">
                        <input type="checkbox"> In-Season
                    </label>
                    <label class="FilterName">
                        <input type="checkbox"> On Sale
                    </label>
                </div>
            </div>

            <div id="ProdBox" class="Products">
                
            </div>
        </div>
        `;
}

function addProd() {
    return `
        <div class="card">
            <div class="ProdImg anim"></div>
                <div class="ProdInfo animText">

                </div>
            </div>
        </div>
        `;
}

function prodRef () {
    body.innerHTML = loadProducts();
    for (let i = 0; i < 21; i ++) {
        document.getElementById("ProdBox").innerHTML += addProd();
    }
}


let header = document.getElementById("header");
let body = document.getElementById("body");
let footer = document.getElementById("footer");
header.innerHTML = loadHeader();
body.innerHTML = loadHome();
footer.innerHTML = loadFooter();


document.getElementById("Home").onclick = function () {
    body.innerHTML = loadHome();
}

document.getElementById("Products").onclick = function () {
    body.innerHTML = loadProducts();
    for (let i = 0; i < 21; i ++) {
        document.getElementById("ProdBox").innerHTML += addProd();
    }
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



var mC = document.getElementById("mainColor");
var sC = document.getElementById("subColor");

mC.onchange = function () {
    document.body.style.setProperty('--main-color', mC.value);
}

sC.onchange = function () {
    document.body.style.setProperty('--sub-color', sC.value);
}


/*
<select id="colorPick">
                            <option disabled selected>UI Color</option>
                            <option value="Pink">Pink</option>
                            <option value="Orange">Orange</option>
                            <option value="Gray">Cool Gray</option>
                            <option value="Blue">Blue</option>
                            <option value="UTSA">UTSA LOL</option>
                        </select>

document.getElementById("colorPick").onchange = function () {
    var color = document.getElementById("colorPick").value;

    if (color == "Pink") {
        document.body.style.setProperty('--main-color', '#FF7276');
        document.body.style.setProperty('--sub-color', '#CC4448');
    } else if (color == "Orange") {
        document.body.style.setProperty('--main-color', '#F38630');
        document.body.style.setProperty('--sub-color', '#FA6900');
    } else if (color == "Gray") {
        document.body.style.setProperty('--main-color', '#506266');
        document.body.style.setProperty('--sub-color', '#7B8F8A');
        document.body.style.setProperty('--text-color', '#FFFFFF');
    } else if (color == "Blue") {
        document.body.style.setProperty('--main-color', '#B2D9F7');
        document.body.style.setProperty('--sub-color', '#487AA1');
    } else if (color == "UTSA") {
        document.body.style.setProperty('--main-color', '#0C2340');
        document.body.style.setProperty('--sub-color', '#F15A22');
        document.body.style.setProperty('--text-color', '#FFFFFF');
    }
}

return `
        <div id="prodHover" class="Product">
            <div class="loading"></div>
            <div class="ProdInfo">
                <label class="ProdName">Fruit Name</label>
                <label class="ProdPrice">Price: $00.00</label>
            </div>
        </div>
        `;
*/