// Imediately Invoked Function Expressions


(function dataBase (){
    console.log("DataBase is Connected");
})(); // IIFE

(() => {
    console.log("DB Two is Connected");
})(); // Now it is working because we use semocolon in upper IIFE to tell it that It is ending in this line

((name) => {
    console.log(`${name} welcome to website`);
})("Moeez")

//(We use IIFE beacuse sometime global scope variable cause pollution and we want that function to be execute immediate so we use IIFE)