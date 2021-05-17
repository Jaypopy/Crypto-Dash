let dashboardContent = document.querySelector(".dashboard-content");




/*
async function getCrypto()
    {
        
        await fetch("https://api.coindesk.com/v1/bpi/currentprice.json", {
            }  )
            .then(response => response.json())
            .then(data => {
                console.log(data)
                updateList(data);
            }
            )
    
        await fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR", {
        }
        )
        .then(response => response.json())
        .then(data => console.log(data))
        .then(data => {
            console.log(data)
            updateList(data);
        
        }
        )
        await fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD,EUR", {
        }
        )
        .then(response => response.json())
        .then(data => console.log(data))
        .then(data => {
            console.log(data)
            updateList(data);
        
        }
        )
        await fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DOGE&tsyms=USD,EUR", {
        }
        )
        .then(response => response.json())
        .then(data => console.log(data))
        .then(data => {
            console.log(data)
            updateList(data);
        
        }
        )
        await fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=LTC&tsyms=USD,EUR", {
        }
        )
        .then(response => response.json())
        .then(data => console.log(data))
        .then(data => {
            console.log(data)
            updateList(data);
        
        }
        )
        await fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=zec&tsyms=USD,EUR", {
        }
        )
        .then(response => response.json())
        .then(data => console.log(data))
        .then(data => {
            console.log(data)
            updateList(data);
        
        }
        )
    
    

    function updateList(data)
    {
        dashboardContent.innerHTML = "";
        let cryptoName = document.createElement("h2");
        let cryptoPrice = document.createElement("h2");
        cryptoName.innerText = data.chartName;
        cryptoPrice.innerText = data.bpi.USD.rate;
        cryptoName.classList.add("crypto-name");
        cryptoPrice.classList.add("crypto-price");
        dashboardContent.append(cryptoName);
        dashboardContent.append(cryptoPrice);

    }
    
}
*/