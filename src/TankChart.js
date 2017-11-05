import React from 'react';
import ReactDOM from 'react-dom';
const ReactHighcharts = require('react-highcharts');
const $ = require('jquery')

let config = {
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
  series: [{
    showInLegend: false,
    data: []
  }]
}


class Chart extends React.Component {
  constructor () {
    super()
    this.state = { chartConfig: config }
  }


  componentDidMount() {
    $.ajax({
    type: 'GET',
    url: 'https://katie-keel-capstone-backend.herokuapp.com/api/v1/tanks',
    dataType: 'text',
    success: function(response) {
      let results = JSON.parse(response);
      config.series[0].data.push(results[1].level)
      config.series[0].data.push(results[2].level)
      this.setState({chartConfig: config})
    }.bind(this)
    })
  }

  render() {
    return (
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <ReactHighcharts config = {this.state.chartConfig}></ReactHighcharts>
        </div>
        <div class="col-md-2"></div>
      </div>
    );
  }
}

ReactDOM.render(<Chart />,document.getElementById('root'))
