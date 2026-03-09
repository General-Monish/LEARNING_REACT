function ErrorMessage({ gamesItems }) {
  let message = gamesItems.length === 0 ? <h3>No Games Available</h3> : null;
  return (
    <div>{message}</div>
  );
}

export default ErrorMessage;
