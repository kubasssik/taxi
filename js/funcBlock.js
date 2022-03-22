
function funcСonstructorBlock(
    a, b, c, d,
    e1, e2, e3, e4, e5, e6, e7, e8, e9,
    f1, f2, f3, f4, f5, f6, f7, f8, f9,
    g1, g2, g3, g4, g5, g6, g7, g8, g9,
    h, j,
    ) {
    const fragment = document.createDocumentFragment();
   
    for (let i = 0; i < b; i++) {
        const newBlock = document.createElement(c);
        
        newBlock.classList.add(d);
        newBlock.textContent = i + 1;
        newBlock.type = h;
        newBlock.name = j;

        fragment.appendChild(newBlock);

        if (i == 0) {
            newBlock.classList.add(e1);
            newBlock.textContent = f1;
            newBlock.placeholder = g1;
        }if (i == 1) {
            newBlock.classList.add(e2);
            newBlock.textContent = f2;
            newBlock.placeholder = g2;
        }if (i == 2) {
            newBlock.classList.add(e3);
            newBlock.textContent = f3;
            newBlock.placeholder = g3;
        }if (i == 3) {
            newBlock.classList.add(e4);
            newBlock.textContent = f4;
            newBlock.placeholder = g4;
        }if (i == 4) {
            newBlock.classList.add(e5);
            newBlock.textContent = f5;
            newBlock.placeholder = g5;
        }if (i == 5) {
            newBlock.classList.add(e6);
            newBlock.textContent = f6;
            newBlock.placeholder = g6;
        }if (i == 6) {
            newBlock.classList.add(e7);
            newBlock.textContent = f7;
            newBlock.placeholder = g7;
        }if (i == 7) {
            newBlock.classList.add(e8);
            newBlock.textContent = f8;
            newBlock.placeholder = g8;
        }if (i == 8) {
            newBlock.classList.add(e9);
            newBlock.textContent = f9;
            newBlock.placeholder = g9;
        }


    }
    a.appendChild(fragment);
}

export { funcСonstructorBlock }