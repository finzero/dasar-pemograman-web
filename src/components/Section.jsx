import PropTypes from 'prop-types';

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

Section.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.children,
};

export default Section;
