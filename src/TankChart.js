import React from 'react';
import ReactDOM from 'react-dom';
const ReactHighcharts = require('react-highcharts'); // Expects that Highcharts was loaded in the code.

const config = {
  chart: {
    type: 'column'
  },
  title: {
    text: "Tanks!"
  },
  xAxis: {
    categories: ['Tank 1', 'Tank 2']
  },
  yAxis: {
    title: {
        text: 'Level'
    }
  },
  colors: [
           '#283044',
           '#216869',
           '#70798C',
           '#7FEFBD',
           '#000000',
           '#C2BBF0',
           '#3590F3',
           '#8FB8ED',
           '#B8336A',
           '#E0BAD7',
           '#5F634F',
           '#DF2935'
         ],

   plotOptions: {
       series: {
           colorByPoint: true
       }
   },
  series: [{name: 'Level', data: [3, 5]}]
};

class Chart extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <ReactHighcharts config = {config}></ReactHighcharts>
        </div>
        <div class="col-md-2"></div>
      </div>
    );
  }
}

ReactDOM.render(<Chart />,document.getElementById('root'))
