import logo from '../resources/images/logo.svg';
import '../resources/stylesheets/App.css';
import Account from "./component/Account";

function Application() {
    return (
        <>
            <img alt="" src={logo} width={"128px"}/>
            <Account account_username={"user190" + (Math.random().toFixed(1) * 10).toString()}/>
            <Account account_username={"user190" + (Math.random().toFixed(1) * 10).toString()}/>
            <Account account_username={"user190" + (Math.random().toFixed(1) * 10).toString()}/>
            <Account/>
            <Account account_username={"user1900"}/>
        </>
    );
}

export default Application;
