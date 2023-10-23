
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
                                <a id="Home" class="MenuLink" href="index.html">
                                    <div class="Menu">Home</div>
                                </a>
                                <a id="Products" class="MenuLink" href="products.html">
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

/* Load header and footer for all pages */
let header = document.getElementById("header");
let footer = document.getElementById("footer");
header.innerHTML = loadHeader();
footer.innerHTML = loadFooter();

/* Temp color change on header */
var mC = document.getElementById("mainColor");
var sC = document.getElementById("subColor");

mC.onchange = function () {
    document.body.style.setProperty('--main-color', mC.value);
}

sC.onchange = function () {
    document.body.style.setProperty('--sub-color', sC.value);
}