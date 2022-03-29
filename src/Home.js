import React from "react";
import { useState } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


function valuetext(value) {
    return `${value}°C`;
  }
  

 

const Home = () => {

    const [value, setValue] = React.useState([10, 18]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        
      };
      const marks = [
        {
          value: 6,
          label: '6',
        },
        {
          value: 12,
          label: '12',
        },
        {
          value: 18,
          label: '18',
        },
        {
          value: 24,
          label: '24',
        },
      ];
    
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
                    <Box sx={{width: 600}}>
            <Slider 
            getAriaLabel={() => 'Temperature range'}
             value={value}
             onChange={handleChange}
             valueLabelDisplay="auto"
             getAriaValueText={valuetext}
             marks={marks}
             min={6}
             max={24}
             
            />
        </Box>
                   
                   
                   
                 
                   
                   
                   
               </div>
           ))}
        </div>
     );
}
 
export default Home;