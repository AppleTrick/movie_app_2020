import React from 'react';

function Food ({ fav }) {
return <h3> I Like {fav} </h3>;
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <Food fav="kimchi" />
      <Food fav="라면" />
      <Food fav="피자" />
      <Food fav="치킨" />

    </div>
  );
}

export default App;
