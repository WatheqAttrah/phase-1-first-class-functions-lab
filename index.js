// Code your solution in this file!


const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo' ];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}
returnFirstTwoDrivers(drivers);

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}
returnLastTwoDrivers(drivers);

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier() {
    return function fareMultiplier(fareRide) {
        return fareRide * fareRide;
    }
}
createFareMultiplier(4);



const fareDoubler = function fareDoubler(createFareMultiplier) {
        return createFareMultiplier * 2;
}
fareDoubler(10);

const fareTripler = function fareTripler(createFareMultiplier){
    return createFareMultiplier * 3;
}
fareTripler(36);

//const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => returnFirstTwoDrivers(drivers);
//const selectDifferentDrivers2 = (drivers, returnLastTwoDrivers) => returnLastTwoDrivers(drivers);


function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}
selectDifferentDrivers(drivers,returnFirstTwoDrivers);