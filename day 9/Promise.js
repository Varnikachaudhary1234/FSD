// const printMessage =(msg)=>{
//     console.log(msg);
// }
// const wait=(msg,sec)=>{
//     setTimeOut(()=>{
//         printMessage(msg);
//         3,sec);
//     }
//     const bookTicket=()=>{
//         printMessage("Welcome!");
//         wait("Login successfully",3000);
//         .then(()=> wait("seat has been selected succesfully",2000));
//         .then(()=> wait("seat confirmed",1000));
//         .then(()=>wait("Payment has been done",2000));
//         .then(()=>wait("Tickeet issued  successfully",2000));
//         .then(()=>printMessage("Thankyou for visiting our site"));
//     }
//     const printMessage = (msg) => {
//     console.log(msg);
// };

const wait = (msg, sec) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            printMessage(msg);
            resolve();
        }, sec);
    });
};

const bookTicket = async () => {
    printMessage("Welcome!");
    await wait("Login successfully!", 3000);
    await wait("Seat has been selected successfully.", 2000);
    await wait("Your seat has been confirmed. Proceed for payment.", 3000);
    await wait("Payment has been done.", 4000);
    await wait("Ticket has been issued.", 3000);
    printMessage("Thank you for visiting our site.");
};