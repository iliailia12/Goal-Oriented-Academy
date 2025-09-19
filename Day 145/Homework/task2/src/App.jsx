// 2) შექმენით Card კომპონენტი ან თქვენ რაც გინდათ,
//     ამ კომპონენტს უნდა ჰქონდეს სათაური, პარაგრაფი.
//     შექმენით რაიმე css ფაილი დააიმპორტეთ იგი თქვენს კომპონენტში და გასტილეთ


import React from 'react';
import Card from './Card';

function App() {
  return (
    <div>
      <h1>Ჩემი პირველი კომპონენტი</h1>
      <Card />
    </div>
  );
}

export default App;