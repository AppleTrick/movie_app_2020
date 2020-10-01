import React from 'react';

function Food ({ name,picture }) {
return (
  <div>
    <h1> I Like {name} </h1>
    <img src={picture}/>
  </div>
)}

const FoodLike =[
  {
    name : "치킨",
    image : "https://economychosun.com/query/upload/303/20190608214338_gubchoja.jpg"
  },
  {
    name : "피자",
    image : "https://lh3.googleusercontent.com/proxy/bJo5OScW46wjUeJS80Jk5NiU7a1usTnJsCDMIhALrzvldKP-AOywxiAz3qa03cXx9ZEqZgu9I1Gd2T7dqoeL1aLGHY2v7soJsc7fEWefR3AqceI"
  },
  {
    name : "햄버거",
    image : "https://img.hankyung.com/photo/201908/01.20330262.1.jpg"
  },
  {
    name : "닭갈비",
    image : "https://contents.lotteon.com/itemimage/LD/15/06/46/43/6_/0/LD150646436_0_2.jpg/dims/resizef/824X824"
  }

]

function App() {
  return (
    <div>
      {
        FoodLike.map(foodname => (<Food name={foodname.name} picture={foodname.image} />))
      }
    </div>
  );
}

export default App;
