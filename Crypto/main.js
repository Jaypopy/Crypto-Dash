async function getCrypto()
    {
        await fetch("https://api.coindesk.com/v1/bpi/currentprice.json", {

        }  )
        .then(response => response.json())
        .then(data => console.log(data))
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');
        myH2.textContent = bpi[0];
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
    
    }