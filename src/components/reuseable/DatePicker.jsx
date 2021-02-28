import { useState } from 'react'
import DatePicker from 'react-datepicker'

import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import { MdKeyboardArrowLeft , MdKeyboardArrowRight } from 'react-icons/md'

const DatePickerComponent = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const years = range(1990, getYear(new Date()) + 1, 1);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return (
      <DatePicker
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled
        }) => (
          <div
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "center",
              fontSize: '14px'
            }}
          >
            <button className='border-0 ' onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                <MdKeyboardArrowLeft />
            </button>
            <select
              className='border-0 '
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
  
            <select
              className='border-0 '
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
  
            <button className='border-0 ' onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              <MdKeyboardArrowRight />
            </button>
          </div>
        )}
        selected={startDate}
        onChange={date => setStartDate(date)}
        {...props }
      />
    );
  };

  export default DatePickerComponent
  