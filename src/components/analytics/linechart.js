import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DatePicker from "react-datepicker";
import "../datacollection/telementrydata/datepicker.css";

function LineChart() {

  //Selct Gateway Dropdown
  const [selectgateway, setgateway] = React.useState('');
  const gatewayhandleChange = (event) => {
    setgateway(event.target.value);
  };

  //Date Range Picker options
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  //For Line chart series options
  const series = [
    {
      name: "Temperature",
      data: [9, 12, 8.5, 12, 14, 10, 9]
    },
    {
      name: "Speed",
      data: [12, 11, 14, 12, 10, 13, 13]
    },
    {
      name: "Frequency",
      data: [8, 9, 11, 13, 15, 12, 9]
    },
    {
      name: "Humidity",
      data: [9, 12, 8, 10, 14, 13, 8]
    },
    {
      name: "Power",
      data: [10, 9, 12, 11, 15, 13, 8]
    },
    {
      name: "Pressure",
      data: [8, 10, 14, 13, 11, 9, 12]
    },
    {
      name: "Weight",
      data: [13, 9, 10, 14, 10, 15, 12]
    },
    {
      name: "Rules Executed",
      data: [9, 12, 10, 13, 11, 8, 14]
    },
    {
      name: "Analytical Model Performance",
      data: [13, 8, 11, 14, 10, 9, 12]
    }
  ];


  //For Line chart options

  const chartOptions = {
    chart: {
      height: 350,
      type: 'line',
      dropShadow: {
        enabled: false,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 1
      },
      toolbar: {
        show: false
      }
    },
    colors: ['#D61355', '#F94A29', '#0081C9', '#A31ACB', '#FF78F0', '#379237', '#0E185F', '#00D7FF', '#F55353'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
      width: 1.3
    },
    grid: {
      borderColor: '#ddd',
      row: {
        colors: ['transparent', 'transparent'],
        opacity: 0.1
      },
    },
    markers: {
      size: 0
    },
    xaxis: {
      categories: ['12:00', "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
      labels: {
        show: true,
        style: {
          fontSize: '12px',
          fontFamily: 'Raleway, sans-serif',
          fontWeight: 500,
        },
      },
      title: {
        text: 'Time(Hrs)',
        offsetY: 90,
        style: {
          color: '#3f51b5',
          fontSize: '12px',
          fontFamily: 'Raleway, sans-serif',
          fontWeight: 'bold',
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        align: 'right',
        minWidth: 0,
        maxWidth: 160,
        style: {
          fontSize: '12px',
          fontFamily: 'Raleway, sans-serif',
          fontWeight: 500,
        },
      },
      axisBorder: {
        show: true,
        color: '#ccc',
      },
      title: {
        text: 'Value',
        style: {
          color: '#3f51b5',
          fontSize: '12px',
          fontFamily: 'Raleway, sans-serif',
          fontWeight: 'bold',
        },
      },
      min: 8,
      max: 16
    },
    legend: {
      position: 'right',
      horizontalAlign: 'bottom',
      floating: false,
      offsetY: 20,
      offsetX: -30,
      fontSize: '12px',
      fontFamily: 'Raleway, sans-serif',
      fontWeight: 600,
      height: 200,
      width: 160,
    }
  };

  return (
    <React.Fragment>
      <div className="dropdownselect">
        <div className="selectdropdown">
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            isClearable={true}
            showIcon
            placeholderText="Select Start & End Date"
            closeOnScroll={true}
          />
        </div>

        <div className="selectdropdown">
          <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
            <InputLabel id="demo-select-small">Select Gateway</InputLabel>
            <Select labelId="demo-select-small" id="demo-select-small" value={selectgateway} label="Select Gateway" onChange={gatewayhandleChange}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Gateway-01</MenuItem>
              <MenuItem value={20}>Gateway-02</MenuItem>
              <MenuItem value={30}>Gateway-03</MenuItem>
              <MenuItem value={40}>Gateway-04</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div id="chart">
        <ReactApexChart options={chartOptions} series={series} type="line" height={320} />
      </div>
    </React.Fragment>
  )
}
export default LineChart;