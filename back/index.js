const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors())

app.get('/pokemons', (req, res) => res.send({
  results: [{"name":"bulbasaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"},{"name":"ivysaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"},{"name":"venusaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png"},{"name":"charmander","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png"},{"name":"charmeleon","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png"},{"name":"charizard","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png"},{"name":"squirtle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png"},{"name":"wartortle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png"},{"name":"blastoise","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png"},{"name":"caterpie","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png"},{"name":"metapod","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/11.png"},{"name":"butterfree","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"},{"name":"weedle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/13.png"},{"name":"kakuna","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/14.png"},{"name":"beedrill","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/15.png"},{"name":"pidgey","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/16.png"},{"name":"pidgeotto","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/17.png"},{"name":"pidgeot","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/18.png"},{"name":"rattata","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/19.png"},{"name":"raticate","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/20.png"}]
}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
