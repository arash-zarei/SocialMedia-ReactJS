import axios from 'axios'

const getData = () =>{
    const response = axios.get('./feeds.json');
    console.log(response);
}

export { getData }