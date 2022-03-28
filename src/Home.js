import { useState } from "react";


const Home = () => {
    
        const [days, setdays] = useState([
            {title: 'Mon', id: 1},
            {title: 'Tue', id: 2},
            {title: 'Wed', id: 3},
            {title: 'Thu', id: 4},
            {title: 'Fri', id: 5},
            {title: 'Sat', id: 6},
            {title: 'Sun', id: 7},

        ]);
      
    return ( 
        <div className="home">
           {days.map((day) => (
               <div className="day-preview" key={day.id} >
                   <h2>{day.title}</h2>
                   <input type="checkbox" />
                   
                   
               </div>
           ))}
        </div>
     );
}
 
export default Home;