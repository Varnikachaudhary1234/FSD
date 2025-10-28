const printMessage = (msg)=>{
    console.log(msg);
}
const bookTicket = ()=>{
    printMessage("Welcome!");
    setTimeout(()=>{
        printMessage("login succesfully");
        setTimeout(()=>{
            printMessage("seat has been selected successfully.");
            setTimeout(()=>{
                printMessage("your seat had been confirmed .proceed for payment.");
                setTimeout(()=>{
                    printMessage("payment has been done");
                    setTimeout(()=>{
                        printMessage("ticket has been issued");
                        printMessage("Thanku for visiting our site.");
                    },3000)
                },4000)

            },3000)
        },2000)

    },3000)
}