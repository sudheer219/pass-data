import React, {useState} from "react";
import MyContext from "./Context";


const LoginProvider = (props) => {
    const [user, setUser] = useState({
        name: "Sudheer",
        phone: "8801113741"
    })

    return (
        <MyContext.Provider value={{ data: user}}>
            {props.children}
        </MyContext.Provider>
    )
}

export default LoginProvider;