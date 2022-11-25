// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (drivers) =>
{
    const newArray = drivers.slice(0,2)
    return (newArray)
}
const returnLastTwoDrivers = (drivers) =>{
    const otherArray = drivers.slice(-2)
    return (otherArray)
}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]
const createFareMultiplier= fare =>
{return () => fare*5

}
const  fareDoubler= double=>
{
    return double*2
}
const fareTripler= tripler=>
{
    return  tripler*3

}
const selectDifferentDrivers=(drivers, returnFirstTwoDrivers)=>
{
    return returnFirstTwoDrivers(drivers)
}

