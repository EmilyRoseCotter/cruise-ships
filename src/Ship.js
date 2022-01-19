class Ship {
  constructor(itinerary){
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    this.currentPort.addShip(this);
  };
  
  setSail() {
    if (this.itinerary.ports.indexOf(this.currentPort) === (this.itinerary.ports.length -1)){
      throw new Error('End of itinterary reached');
    };

    this.previousPort = this.currentPort;
    this.currentPort.removeShip(this);
    this.currentPort = null;
  };

  dock() {
    const previousPortIndex = this.itinerary.ports.indexOf(this.previousPort);
    
    this.currentPort = this.itinerary.ports[previousPortIndex + 1];
    this.currentPort.addShip(this);
  };
};

module.exports = Ship;
