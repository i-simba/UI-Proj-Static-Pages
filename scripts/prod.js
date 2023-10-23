function addProd() {
    return `
        <div class="card">
            <div class="ProdImg anim" onclick="location.href='fruit.html'"></div>
                <div class="ProdInfo animText">

                </div>
            </div>
        </div>
        `;
}

for (let i = 0; i < 21; i++) {
    document.getElementById("ProdBox").innerHTML += addProd();
}