let planetData, userInput;

const $name = $('#name');
const $climate = $('#climate');
const $terrain = $('#terrain');
const $input = $('input[type="text"]');

$('form').on('submit', handleGetData);

function handleGetData(event) {
  event.preventDefault();
  // calling preventDefault() on a 'submit' event will prevent a page refresh  
  userInput = $input.val();
  // getting the user input
  $.ajax({
    url: 'https://swapi.dev/api/planets/?search=' + userInput
  }).then(
    (data) => {
      planetData = data;
      render();
    },
    (error) => {
      console.log('bad request', error);
    }
  );
}

function render() {
  $name.text(planetData.results[0].name);
  $climate.text(planetData.results[0].climate);
  $terrain.text(planetData.results[0].terrain);
}