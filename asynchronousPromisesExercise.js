
if (document.readyState === "complete") {
    triggerApp();
} else {
    window.addEventListener("load", triggerApp);
}

async function triggerApp (){    
    console.log("All resources loaded successfully");

    let dragonPet = prompt("Please Name Your Dragon");
    if (dragonPet != null){
        document.getElementById("dragonPet").innerHTML = 
        "Dragon: " + dragonPet; 
    }

    let meatFoodItems = ["Whole Chicken", "Pork Sausage", "Sardine", "Ham", "Beef Patty", "Leg of lamb", "Turkey Leg", "Tuna", "Trout"];
    let fruitFoodItems = ["Strawberry", "Apple", "Banana", "Peach", "Pear", "Grape", "Avocado"];
    let vegFoodItems = ["Broccoli", "Kale", "Soy Bean", "Potatoe", "Carrot", "Onion", "Tomatoe", "Bell Pepper"];

    //spread operator to merge the 3 arrays
    var foodOptions = [...meatFoodItems, ...fruitFoodItems, ...vegFoodItems];

    // Function to shuffle the strings in the array to randomise it:
    function shuffleFoodArr(array) {
        let currentIndex = array.length;
    
        // While there remains elements to shuffle...
        while (currentIndex != 0) {

            // Choose a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
        
            // ..and swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        //for each string in the array, create an input element in the html 
        array.forEach((element) => {
            // Create a checkbox input element
            let item = document.createElement("INPUT");
            item.setAttribute("type", "checkbox");
            item.setAttribute("id", "foodItem");
            item.setAttribute("value", element);            
        
            // Create a label for the checkbox
            let label = document.createElement("LABEL");
            label.innerText = element;
        
            // Append the checkbox and label to the foodList element
            let container = document.getElementById("foodList");
            container.appendChild(item);
            container.appendChild(label);
            container.appendChild(document.createElement("BR"));
        });        
    }

    function getRandomFoodReqs(arr) {

        //Using a setInterval to generate new food requests every 10s.
        setInterval(() => {

            // Uncheck all checkboxes
            const checkboxes = document.querySelectorAll("#foodList input[type='checkbox']");

            checkboxes.forEach((checkbox) => {
                checkbox.checked = false;
            });    

            //Generating a random number from 1 to foodOptions length (arr.length)
            const randomCount = Math.floor(Math.random() * arr.length) + 1;
        
            // Shuffling the array and picking the first 'randomCount' elements
            const shuffled = arr.sort(() => 0.5 - Math.random());
            const selectedItems = shuffled.slice(0, randomCount);
        
            // Displaying selected items in the "dragon" HTML container element
            const petContainer = document.getElementById("dragonReq");
            
            // Clearing the previous food Req content
            petContainer.innerHTML = ""; 
        
            
            selectedItems.forEach((item) => {
                // Create a paragraph element for each selected food item
                let foodItem = document.createElement("P");
                foodItem.textContent = item;
                petContainer.appendChild(foodItem);
            });

        }, 10000);
              
    }

    let arr = foodOptions;
    shuffleFoodArr(arr);
    getRandomFoodReqs(arr);
    

};



