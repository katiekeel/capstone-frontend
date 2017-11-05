# TankData

This project pulls real-life IoT sensor data from an MQTT broker and displays it to the user with React and HighCharts.

* Production frontend is [here](https://katie-keel-capstone-frontend.herokuapp.com/)
* Production backend is [here](https://katie-keel-capstone-backend.herokuapp.com/api/v1/tanks)
* Backend repo is [here](https://github.com/katiekeel/capstone-backend)

## Frontend Info

This frontend was built with React, through Facebook's `create-react-app`. It consumes the API of tank data provided by the backend and displays a HighCharts chart to the user with simple level data. Whenever the component holding the chart is rendered by React, the API call is made; thus, should new sensor data come through, it can be viewed with a simple refresh.

The ultimate goal is to have real-time UI updates using a websocket, as the backend is currently broadcasting the API changes over Rails' new ActionCable capability.

For more information on how this app was created, head over to [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/README.md) to view their documentation.

## Contributing

I am not a front end developer, and I would love any ideas or help on how to use React correctly, or just using Node in general. Please feel free to submit issues and PRs if you notice any improvements that could be made to this setup.

To download and work on this repo:

`$ git clone git@github.com:katiekeel/capstone-frontend.git your-directory`  
`$ cd your-directory`  
`$ npm install`  
`$ npm start`  

You may be prompted to allow Node to start your server on an alternate port; respond with `Y`.
