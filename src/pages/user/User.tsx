import Single from "../../component/single/Single";
import { singleUser } from "../../data";
import "./user.scss";

const User = () => {
    //fetch data and send to single

    return (
        <div className="user">
            <Single { ...singleUser} />
        </div>
    );
};

export default User;