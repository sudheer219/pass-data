import MyContext from "./Context";
import { useContext } from "react";


const Home = () => {

    const user = useContext(MyContext)

    return (
        <div>
            <p>Using useContext</p>
            { `Hello ${user.data.name}`}
        </div>
    )

}

export default Home;