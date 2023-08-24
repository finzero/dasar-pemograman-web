import amongUs from '../assets/among_us_run.gif';

const style = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Loading = () => {
  return (
    <div style={style}>
      <img width={300} src={amongUs} alt="" />
    </div>
  );
};

export default Loading;
