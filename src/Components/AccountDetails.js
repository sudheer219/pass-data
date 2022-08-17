import MyContext from "./Context";

const AccountDetails = () => {
    return (
        <MyContext.Consumer>
            {(context) => (
                <div>
                   <p> Name: {context.data.name}</p>
                   <p>Phone no. {context.data.phone}</p>
                </div>
            )}
        </MyContext.Consumer>
    )
}

export default AccountDetails;

