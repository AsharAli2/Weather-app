import React from 'react'
  
import {Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel} from "react-accessible-accordion"
const week_days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
export default function Forecast({data}) {
    const day_in_week=new Date().getDay();
    const forecastday= week_days.slice(day_in_week,week_days.length).concat(week_days.slice(0,day_in_week))
    console.log(forecastday);
  return (
    <>
    
    <Accordion allowZeroExpanded>
        <div className='d-flex' style={{marginLeft:"300px",marginRight:"300px"}}>
        <h5 style={{width:"50%",zIndex:"1"}}>7 Days Forecast</h5>
        <h5 style={{width:"50%",display:"flex",justifyContent:"flex-end",zIndex:"1"}}>More Details</h5>
        </div>
{data.list.splice(0,5).map((item,index)=>
(
    <AccordionItem key={index}>
        <AccordionItemHeading>
<AccordionItemButton>
    <div className='daily-items d-flex' style={{marginLeft:"272px",marginRight:"300px",zIndex:"1"}}>
        <div style={{width:"50%",zIndex:"1"}}>
<img src={`${item.weather[0].icon}.png`} alt="" width="50px" style={{zIndex:"1"}}/> 
<label style={{fontSize:"15px",fontFamily:"cursive",zIndex:"1",color:"white"}}>{forecastday[index]}</label>{" "}
<label style={{fontFamily:"monospace",zIndex:"1",color:"white"}}>{item.weather[0].description}</label>

        </div>
        <div style={{width:"50%",display:"flex",justifyContent:"flex-end",alignItems:"center"}} >

<label className="min_max" style={{fontFamily:"cursive",zIndex:"1",color:"white"}}>
    {Math.round(item.main.temp_max)}°{"/"}
    {Math.round(item.main.temp_min)}°

</label>
    </div>
        </div>
</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>

        </AccordionItemPanel>
    </AccordionItem>
)
)}
    </Accordion>
    </>
    
  )
}
