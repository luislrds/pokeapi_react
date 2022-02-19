const endpoint = 'https://pokeapi.co/api/v2/';

const APIName = ()=>{
  return endpoint + 'pokemon/'
}

const APICharacteristic = ()=>{
  return endpoint + 'characteristic/'
}

const APIColor = ()=>{
  return endpoint + 'pokemon-color/'
}

const APIHabitat = ()=>{
  return endpoint + 'pokemon-habitat/'
}

export {APIName, APICharacteristic,APIColor, APIHabitat }

