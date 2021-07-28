import React,  {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';


function App() {
    // constructor() {
    //     super();
    //     this.state = {
    //         robots: [],
    //         searchfield: ''
    //     }
    // }
    // STATES
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    
    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response =>  response.json()) // conversting fetched data to JSON
    //         .then(users => this.setState({robots:users})); // setting the robots array to the users
    // }
    // comparable to componentDidMount()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>  response.json()) // conversting fetched data to JSON
            .then(users => {setRobots(users)}); // setting the robots array to the users
    },[])
    
    const onSeacrhChange = (event) => {
        setSearchfield(event.target.value);
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    // if-else
    return !robots.length ?
            <h1>Loading</h1> :
    (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={onSeacrhChange} />
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
                    
            </Scroll>
        </div>
    );


}

export default App;