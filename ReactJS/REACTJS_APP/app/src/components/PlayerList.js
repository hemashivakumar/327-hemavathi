import NavBar from "./NavBar";
import { Link } from "react-router-dom";
const Playerlist = () => {
    const playerData = [
        { name: "MSD", age: 25, role: "Batsman", country: "India", totRuns: 20000 },
        { name: "Virat", age: 26, role: "Bowler", country: "India", totRuns: 500 },
        { name: "Shreyas", age: 27, role: "Batsman", country: "India", totRuns: 21000 },
        { name: "FAF", age: 28, role: "Batsman", country: "India", totRuns: 22000 },
        { name: "Raina", age: 29, role: "Batsman", country: "India", totRuns: 23000 }
    ];

   

    return (
        <div>
        <NavBar />
        <ul>
            {playerData.map((item, key) => <li key={key}>Click here to get the details of  <Link to={`/player/${item.name}`}>{item.name}</Link></li>)}

        </ul>
        </div>

    )
}

export default Playerlist;