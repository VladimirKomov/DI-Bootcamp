import {ReactElement} from "react";

interface GreetingProps {
    name: string;
}

const Greeting = ({name}: GreetingProps): ReactElement => {
    return (
        <div>
            <h1>Hello {name}</h1>
        </div>
    )
}

export default Greeting;