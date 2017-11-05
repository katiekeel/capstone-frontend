import axios from 'axios'

axios.get('https://katie-keel-capstone-backend.herokuapp.com/api/v1/tanks')
  .then((tanks) => {
    console.log(tanks)
  })
  .catch((error) => {
    console.error(error)
  })
