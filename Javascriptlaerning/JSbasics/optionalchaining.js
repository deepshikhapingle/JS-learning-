const restaurant = {

    name: "Classico Italiano",
      location: "Via Angelo Tavanti 23, Firenze, Italy",
      categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
      starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
      mainMenu: ["Pizza", "Pasta", "Risotto"],
  
    
    openingHours: {
        thu: {
        open: 12,
          close: 22,
        },
  
      fri: {
  
        open: 11,
          close: 23,
  
      },
  
      sat: {
          open: 0, // Open 24 hours
          close: 24,
  
      },
  
    },
  
    order(a, b) {
        return a + b;
      },
  
  };

  if (restaurant.openingHours && restaurant.openingHours.mon){
console.log(restaurant.openingHours.mon.open);

  }
  else {

    console.log ("Monday is not there in opningHour object")
  }

  console.log(restaurant.openingHours.sat?.open);
  console.log(restaurant.openingHours.mon?.open);
  console.log(restaurant.openingHours?.mon?.open);