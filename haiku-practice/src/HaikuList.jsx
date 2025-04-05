import React from "react";


function HaikuList({lines}) {
    return (
        <article>
            {lines.map((line,index) => (
                <React.Fragment key={index}>
                    <p>{line}</p>
                    {index < line.length -1 && <hr />}
                </React.Fragment>
            ))}
        </article>
    );
}

export default HaikuList;