import {ReactElement} from "react";

interface UserCardProps {
    name?: string;
    age?: number;
}

const UserCard = ({name, age}: UserCardProps): ReactElement => {
    return (
        <div>
            <h3>user info:</h3>
            <p>{name ? name : 'Who are you?'}</p>
            <p>{age ? age : 'Don\'t be shy.'}</p>
        </div>
    );
}

export default UserCard;