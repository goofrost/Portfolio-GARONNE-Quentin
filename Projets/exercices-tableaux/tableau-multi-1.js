let tab = []
for (let x = 0; x <= 5; x = x + 1){
    let tab2 = []
    for (let y = 0; y <= 12; y = y + 1){
        tab2 += ["0"]
    }
    tab += tab2
}
AFFICHER(tab)