import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from './CustomSelect.module.css'
import { useDispatch,useSelector } from 'react-redux';
import {addDay,addMonth,addYear} from './../../Redux/dataslice'
export const datesArray = [];



export default function CustomSelect() {

  const dispatch = useDispatch()
  const values = useSelector(state=>state.localData)
  const {day,month,year}= values
    const years = ['','1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023']

    const months = ["", "January","February","March","April","May","June","July","August","September","October","November", "December"]

    const days=["", 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

    // const [month, setMonths] = useState('');
    // const [day, setDay] = useState('');
    // const [year, setYear] = useState('');
    // console.log(day, month, year, 'custom select')
    
    // if(day!=="" && month!=="" && year!==""){
    //   datesArray.push(day,month,year)
    //   //  dispatch(addObjectData([day,month,year]))
      
    // }
  
    
    
    
  return (
    <div className={styles.selectContainer}>
    <Box>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Month</InputLabel>
        <Select
        sx={{ width:"13.5rem" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={month}
          label="Month"
          onChange={(e)=>{dispatch(addMonth(e.target.value))}}
          month={month}
        >
          {months.map(e=>(<MenuItem key={e} value={e}>{e}</MenuItem>))}

        </Select>
      </FormControl>
    </Box>

    <Box>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Day</InputLabel>
        <Select
        sx={{ width:"8rem" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={day}
          label="Days"
          onChange={(e)=>{dispatch(addDay(e.target.value))}}
          day={day}
        >
          {days.map(e=>(<MenuItem key={e} value={e}>{e}</MenuItem>))}

        </Select>
      </FormControl>
    </Box>

    <Box>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Year</InputLabel>
        <Select
        sx={{ width:"6rem" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          label="Years"
          onChange={(e)=>{dispatch(addYear(e.target.value))}}
          year={year}
        >
          {years.map(e=>(<MenuItem key={e} value={e}>{e}</MenuItem>))}

        </Select>
      </FormControl>
    </Box>
    
    </div>
  );

  
}