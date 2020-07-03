document.querySelector("form").addEventListener("submit", e =>{
    
    e.preventDefault();

    const cal = str => document.querySelectorAll(str);
    
    let selectors = [".F2",".A2",".RC",".FDR",".MB3",".MB4",".M",".BD",".POO","#UML","#Qt","#WEB","#SH"];
    let coefs = [5,5,3,3,8,6,4,4,4,2,6,8,2];
    let sum = 0;

    selectors.forEach(selector => {
        let X = cal(selector);
        switch(X.length){
            case 3:
                sum += (Number(X[0].value) * 0.3 + Number(X[1].value) * 0.2 + Number(X[2].value) * 0.5) * coefs[selectors.indexOf(selector)];
            break;
            case 2:
                sum += (Number(X[0].value) * 0.4 + Number(X[1].value) * 0.6 ) * coefs[selectors.indexOf(selector)];
            break;
            default:
                sum += Number(X[0].value) * coefs[selectors.indexOf(selector)];
            break;
        }     
    })

    X = cal("#res");
    let moy = sum/60;
    moy = moy.toFixed(2);
    X[0].innerHTML = "Votre moyenne = "+moy;


});