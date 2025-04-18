function Clock({ time }) {
    const  hours = time.getHours();
    const className =(hours >= 0 && hours <= 6 ) ? "night" :"day";
    return (
      <h1 className={className}>
        {time.toLocaleTimeString()}
      </h1>
    );
  }

  export default  Clock;

