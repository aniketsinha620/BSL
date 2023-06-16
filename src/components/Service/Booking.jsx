import React from 'react'
import EventSeatSharpIcon from '@mui/icons-material/EventSeatSharp';
import KeyboardDoubleArrowDownSharpIcon from '@mui/icons-material/KeyboardDoubleArrowDownSharp';
export default function Booking(props) {
    return (
        <div>
            <h1 className='booking_heading'>{props.busname}</h1>
            <div className="booking">
                <div className="bookingbus-detail">
                    <div className="bookingbusimg">
                        <img src="https://scontent.fpat3-2.fna.fbcdn.net/v/t39.30808-6/248777908_4819032761440607_2069930435757190140_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4cDR13s5Z34AX_Uke7G&_nc_ht=scontent.fpat3-2.fna&oh=00_AfBwIJt530jFLnNQOsbwAM0lVpXMHvWC4bB4Bz7wFrn-iw&oe=648DA24D" alt="" />
                    </div>
                    <h2>{props.busname}</h2>
                    <div className="bookingbusdetail">
                        <div className="path">
                            <img src="ic_route.svg" alt="" />
                            <div className="route">
                                <p>FROM: NAYA MORE</p>
                                <p>TO: BANDHIDIH</p>
                            </div>
                        </div>
                        <div className="busno">
                            <p>BUS NO:-<h3>JH-09-AM1981</h3></p>

                        </div>
                        <div className="status">
                            <p>STATUS:- <h3>NOT RUNNING</h3> </p>

                        </div>
                        <div className="contactno">
                            <p>CONTACT NO:- <h3>8340283015</h3></p>
                        </div>
                    </div>
                </div>

                <button>VIEW MAP <p><KeyboardDoubleArrowDownSharpIcon /></p></button>

            </div>
        </div>
    )
}
