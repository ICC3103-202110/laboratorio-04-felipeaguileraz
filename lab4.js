
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
        console.log("Count: ", currentview)
        console.log()

        var prompt = require("prompt-sync")(); 
        console.log("(+) (-) ")
        console.log()
        console.log("(q) to quit ")
        console.log()
        const msg = prompt("What do you want to do: " )
        if (msg === "q"){
            break;
        }
        counter = update(msg, counter)
        

    }
}

app(0)