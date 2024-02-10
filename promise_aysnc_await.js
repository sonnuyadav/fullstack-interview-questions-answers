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
    }, ms));}


async function sellCar() {
    let carSellerPromise = getCarSeller(60);
    let carBuyerPromise = getCarBuyer(50);

    let buyer = await carBuyerPromise;
    let seller = await carSellerPromise;

    console.log(`selling car to ${buyer.name} from ${seller.name}`);
}

sellCar();
// Output:
// inside getCarSeller
// inside getCarBuyer
// got buyer
// got seller
// selling car to niv from manor
