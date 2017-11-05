import React from 'react';
import ReactDOM from 'react-dom';
const ReactHighcharts = require('react-highcharts');

const config = {
  chart: {
    type: 'column',
    style: {
        fontFamily: 'Yantramanav',
        fontSize: '20px'
    }
  },
  title: {
    text: "Water Tank Prototype Sensors",
    style: {
      fontSize: '25px'
    }
  },
  xAxis: {
    categories: ['Tank 1', 'Tank 2'],
    labels: {
                style: {
                    fontSize:'20px'
                }
            }
  },
  yAxis: {
    title: {
        text: 'Level',
        fontSize: '15px'
    },
    labels: {
                style: {
                    fontSize:'20px'
                }
            }
  },
  colors: [
           '#C36F09',
           '#65743A'
         ],

   plotOptions: {
       series: {
           colorByPoint: true
       }
   },
  series: [{name: '% Full',
  showInLegend: false,               
  data: [3, 5]}]
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
