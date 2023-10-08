import React from "react";
import Markdown from "marked-react";
import remarkGfm from 'remark-gfm';

const Previewer = (props) => {
    return (
        <div id="preview" className="preview">
            <Markdown remarkPluigins={[remarkGfm]}>{props.text}</Markdown>
        </div>
    );
}

export default Previewer;