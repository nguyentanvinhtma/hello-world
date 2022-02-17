import { useState } from "react";

import Children from "./Children";

export default function Parent(){
    const parentData = 'Data from parent';

    const [dataFromChildren, setDataFromChildren] = useState('');
    
    const callbackFunction = (childData) => {
        setDataFromChildren(childData);
    }

    return <div>
        <Children data={parentData} parentCallback={callbackFunction} />
        <hr />
        Parent: {dataFromChildren}
    </div>
}