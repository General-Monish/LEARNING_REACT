function Clock_TimeAndDate() {
  return (
    <div className="clock">
      <h3 id="time">
        {new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })}
      </h3>
      <h3 id="date">
        {new Date().toLocaleDateString('en-US', { timeZone: 'Asia/Kolkata' })}
      </h3>
    </div>
  );
}

export default Clock_TimeAndDate;