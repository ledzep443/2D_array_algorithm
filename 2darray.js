let target_weight;
let brownie_trays;
function filterWeight(target_weight, brownie_trays) {
    if(target_weight > 0) {
        var good_brownies = [];
        brownie_trays.forEach(brownie_tray => {
            //console.log(brownie_tray);
            let good_tray = [];
            for(let i = 0; i < brownie_tray.length; i++) {
                
                if(brownie_tray[i] >= target_weight) {
                    good_tray.push(brownie_tray[i]);
                    
                    
                }
            }
            //console.log(good_tray);
            good_brownies.push(good_tray);
        });
        return good_brownies;
    } else {
        return "Please enter a positive number for the target weight";
    }
}

console.log(filterWeight(2, [[3, 5, 1], [3, 6, 8], [1, 2, 5]]));