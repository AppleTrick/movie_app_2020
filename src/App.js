import React from 'react';

function Food ({ name,picture }) {
return (
  <div>
    <h1> I Like {name} </h1>
    <img src={picture} alt={name}/>
  </div>
)}

const FoodLike =[
  {
    id : "1",
    name : "치킨",
    image : "https://economychosun.com/query/upload/303/20190608214338_gubchoja.jpg"
  },
  {
    id : "2",
    name : "피자",
    image : "https://lh3.googleusercontent.com/proxy/bJo5OScW46wjUeJS80Jk5NiU7a1usTnJsCDMIhALrzvldKP-AOywxiAz3qa03cXx9ZEqZgu9I1Gd2T7dqoeL1aLGHY2v7soJsc7fEWefR3AqceI"
  },
  {
    id : "3",
    name : "햄버거",
    image : "https://img.hankyung.com/photo/201908/01.20330262.1.jpg"
  },
  {
    id : "4",
    name : "닭갈비",
    image : "https://contents.lotteon.com/itemimage/LD/15/06/46/43/6_/0/LD150646436_0_2.jpg/dims/resizef/824X824"
  },
  {
    id : "5",
    name : "컵라면",
    image : "https://m.officepia.co.kr/web/product/big/20191219/4fb737734cc6b55df8916447affd27c3.png"
  }
]

function App() {
  return (
    <div>
      {
        FoodLike.map(foodname => (<Food key={foodname.id} name={foodname.name} picture={foodname.image} />))
      }
    </div>
  );
}

export default App;
