import React from 'react';

const Section = (props) => {
  return (
    <section id={props.id} className="section">
      <div role="button" className="title">
        {props.title}
      </div>
      <div>{props.children}</div>
    </section>
  );
};

export default Section;
