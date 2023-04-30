let statistics = { 
    redCars: 21, 
    blueCars: 45, 
    greenCars: 12, 
    raceCars: 5, 
    blackCars: 40, 
    rareCars: 2
    
}; 


for (const firstChar in statistics) {
    const letter = firstChar[0];
    const value = statistics[firstChar];
    if (letter == 'r') {
        console.log(value);
    }else if (value % 2 != 0) {
        console.log(value);
    }
}
