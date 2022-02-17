import { useEffect } from "react";

export default function Children(props) {

    useEffect(() => {
        props.parentCallback("Data from children");
    }, [props])

    return <div>
        Children: {props.data}
    </div>
}