function getLocation() {
  if (!navigator.geolocation) {
    console.log('Geolocation API not supported by this browser.');
  } else {
    console.log('Checking location...');
    navigator.geolocation.getCurrentPosition(success, error);
  }
}
function success(position) {
  console.log(position);
}
function error() {
  console.log('Geolocation error!');
}
document.getElementById('get-location').addEventListener('click', getLocation);
function success(position) {
  document.getElementById('output1').innerHTML = position.coords.latitude;
  document.getElementById('output2').innerHTML = position.coords.longitude;
  document.getElementById('span1').innerHTML =
    'URI źródła elementu „script” jest niedozwolony w tym dokumencie:';
}
