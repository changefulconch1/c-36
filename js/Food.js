class Food {
    constructor(){
        this.foodStock = 0;
        this.image = loadImage("images/Milk.png")
        this.lastFed;
    }
    getFoodStock() {
     return this.foodStock
    }

    updateFoodStock(foodStock) {
        this.foodStock= foodStock;
    }

    getFedTime() {
       this.lastFed = fedTime;
        }
    deductFood(){
        if(this.foodStock>0){
            this.foodStock=this.foodStock-1
        }
    }

    async start(){
        var foodRef = await database.ref('food').once("value");
        if(foodRef.exists()) {
            foodStock = foodRef.val();
        }

        var lastFed = await database.ref('lastFed').once("value");
        if(lastFed.exists()) {
            fedTime = lastFed.val();
        }

      }
    display(){
        textSize(15);
        fill("white");
        stroke(5);
        if(fedTime >= 12) {
            text("Last Feed: " + fedTime % 12 + " PM", 150, 60);
        } else if(fedTime === 0){
            text("Last Feed: 12 AM", 150, 60);
        } else {
            text("Last Feed: " + fedTime + " AM", 150, 60);
        }

        var x = 80, y = 100;
        imageMode(CENTER);
        if(foodStock != 0) {
            for(var i = 0; i < foodStock; i++) {
                if(i % 10 === 0) {
                    x = 80;
                    y = y + 50;
                }
                image(milkImg, x, y, 50, 50);
                x = x + 30;
            }
        }
    }
}