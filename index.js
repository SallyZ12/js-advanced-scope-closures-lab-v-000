function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let trip = Math.abs(parseInt(startBlock,10) - parseInt(endBlock,10));
    let range = Math.abs(trip - blockRange);
    // console.log('trip',Math.abs(parseInt(startBlock,10) - parseInt(endBlock,10)));
    // console.log('range',Math.abs(trip - blockRange));
    // console.log(trip < blockRange);
    if (trip < blockRange) {
      return `within range by ${range}`}
      else {
        return `${range} blocks out of range`;
      }
  };
};


function produceTipCalculator(percent) {
    return function(fare){
      return percent * fare;
    }
};

function createDriver() {
  let DriverId = 0;
    return class {
      constructor(name) {
        this.id = ++DriverId;
        this.name = name;
          // console.log(DriverId, name);
      }
    }
};
