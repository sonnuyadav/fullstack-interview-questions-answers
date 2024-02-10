function getCarBuyer(ms) {
    console.log('inside getCarBuyer');
    return new Promise(resolve => setTimeout(() => {
        console.log('got buyer');
        resolve({name: 'niv'})
    }, ms));
}

function getCarSeller(ms) {
    console.log('inside getCarSeller');
    return new Promise(resolve => setTimeout(() => {
        console.log('got seller');
        resolve({name: 'manor'})
    }, ms));
}


async function sellCar() {
    let carSeller = await getCarSeller(50);
    let carBuyer = await getCarBuyer(50);
    console.log(`selling car to ${carBuyer.name} from ${carSeller.name}`);
}

sellCar();
//Output: 
// inside getCarSeller
// got seller
// inside getCarBuyer
// got buyer
// selling car to niv from manor