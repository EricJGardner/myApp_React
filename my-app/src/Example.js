import React, { useEffect, useState } from 'react';

const Example = () => {

    const [count, setCount] = useState(0); //whatever is put in the () is where the count starts
           //^variable names are arbitrary, first one is a 'getter', 2nd is a 'setter'   

           //similar to componentDidMount and componentDidUpdate, useEffect is a replacement for lifecycle,
//title will update every time the function runs
useEffect(() => {
    document.title = `You clicked ${count} times`; //always use backticks in strings
})

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>
                Click Me
            </button>
        </div>

    );
}

export default Example;