import React from 'react';
import { database } from './Components/Firebase/firebase';
import Equipments from './Container/Equipments';


const App = () => {
  // const test = database.ref('Equipments');
  // test.on('value', snap => {
  //   console.log(snap.val());
  // })
  return (
    <div>
      <Equipments />
    </div>
  );
}



export default App;
