import { useEffect } from "react";
import Children1 from "./Children1";

export default function Children(props) {

    useEffect(() => {
        props.parentCallback("Data from children");
    }, [props])

    return <div>
        Children: {props.data}
        <Children1 data="Data from children" />
    </div>
}