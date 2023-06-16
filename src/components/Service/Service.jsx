import React, { useRef } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./Service.css"
import Card from './Card';
import Card_bus from './Card_bus';


export default function Service() {
  const [card, setCard] = React.useState(true)
  const SourceRef = useRef(null);
  const DestinationRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    if (SourceRef.current.value.trim() === '' || DestinationRef.current.value.trim() === '') {
      return;
    }
    setCard(false)
    console.log(SourceRef.current.value, DestinationRef.current.value)

  }

  const handleChange = () => {
    console.log("hello")
  }
  return (
    <div className='service'>
      <div className="service-top">
        <div className="illustrator-service">
          <img src="service.svg" alt="" />
        </div>


        <div className="form-service">
          <form action="">
            <label htmlFor="from">From</label>
            <br />
            <input
              type="text"
              id='from'
              ref={SourceRef}
              placeholder='Enter the Source' />
            <br />
            <label htmlFor="to">To</label>
            <br />
            <input
              type="text"
              id='to'
              ref={DestinationRef}
              placeholder='Enter the Destination' />
            <br />
            <button onClick={(e) => handleClick(e)}>Search <SearchIcon /></button>
          </form>
        </div>
      </div>

      {card === true ?
        <div className='bus-card'>
          <h1>Our Vehicles</h1>
          <Card />

        </div> :
        <div className='Card_bus-service'>

          <div>
            <Card_bus source={SourceRef.current.value} destination={DestinationRef.current.value} />

          </div>

        </div>}

       
    </div>
  )
}
