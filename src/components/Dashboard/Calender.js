import React, { useState } from 'react';
import DatePicker from 'react-datetime';
import moment from 'moment';


function Calender() {
    const yesterday = moment().subtract(1, 'day');
    const disablePastDt = current => {
        return current.isAfter(yesterday);
    };
    
    //const [dt, setDt] = useState(moment());
    return (
        <div>
            <p className="title">Disable past dates:</p>
            <DatePicker wrapperClassName='date_picker full-width'
                timeFormat={false}
                isValidDate={disablePastDt}
            />
           {/*} <DatePicker
                inputProps={{
                    style: { width: 250 }
                }}
                value={dt}
                dateFormat="DD-MM-YYYY"
                timeFormat="hh:mm A"
                onChange={val => setDt(val)}
            /> <br />
            <div><b>Date:</b> {dt.format('LLL')}</div>*/}
        </div>
    );
}

export default Calender;
