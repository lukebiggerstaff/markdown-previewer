import React from 'react';
import marked from 'marked';

const createMarkup = (props) => {
  return {
    __html: marked(props.value)
  }
}


const MarkdownRendered = (props) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={createMarkup(props)} />
    </div>
  );
}

export default MarkdownRendered;
