const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss');

/*
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP('173.180.118.155', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned coordinates:' , coordinates);
});
*/

fetchISSFlyOverTimes({ latitude: 49.2732, longitude: -123.0124 }, (error, response) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned coordinates:' , response);
});
