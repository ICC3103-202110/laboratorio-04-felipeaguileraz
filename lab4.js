
function view(counter){
    return counter
}

function update(msg, counter){
    if (msg === "+"){
        return counter + 1
    }else if (msg === "-"){
        return counter -1
    }else{
        return counter
    }
}

function app(counter){
    while (true){
        const currentview = view(counter)
        console.clear()
        console.log(currentview)

        var prompt = require("prompt-sync")(); 
        const msg = prompt("(+) (-) " )
        counter = update(msg, counter)
        

    }
}

app(0)