import React from 'react';

const MarkdownPreview =  (props) => {
  return (
    <textarea onChange={props.onChange}value={props.value} className="">
    </textarea>
  );
}

export default MarkdownPreview;
