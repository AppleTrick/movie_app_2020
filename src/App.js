import React from 'react';
import PropTypes from 'prop-types';

function Food ({ name,picture,rating }) {
return (
  <div>
    <h1> I Like {name} </h1>
<h4> {rating} / 5.0</h4>
    <img src={picture} alt={name}/>
  </div>
)}

const FoodLike =[
  {
    id : "1",
    name : "치킨",
    image : "https://economychosun.com/query/upload/303/20190608214338_gubchoja.jpg",
    rating : 5.0
  },
  {
    id : "2",
    name : "피자",
    image : "https://lh3.googleusercontent.com/proxy/jThw0Gy2LoksRxBOyyPz-msTQuO9r09zJwuJiO1wM5MJld7CdESmWblXJw3vnCPMMe6Cfj4damgW0oIIF5yojKBQdZlOOXySr48VtDNlGl0zYOw",
    rating : 4.6
  },
  {
    id : "3",
    name : "햄버거",
    image : "https://img.hankyung.com/photo/201908/01.20330262.1.jpg",
    rating : 4.9
  },
  {
    id : "4",
    name : "닭갈비",
    image : "https://contents.lotteon.com/itemimage/LD/15/06/46/43/6_/0/LD150646436_0_2.jpg/dims/resizef/824X824",
    rating : 4.8
  },
  {
    id : "5",
    name : "컵라면",
    image : "https://m.officepia.co.kr/web/product/big/20191219/4fb737734cc6b55df8916447affd27c3.png",
    rating : 4.7
  }
]

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating :PropTypes.string.isRequired
};

function App() {
  return (
    <div>
      {
        FoodLike.map(foodname => (<Food key={foodname.id} name={foodname.name} picture={foodname.image} rating={foodname.rating}/>))
      }
    </div>
  );
}

export default App;
