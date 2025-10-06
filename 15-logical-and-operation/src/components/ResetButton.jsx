const buttonStyle = { backgroundColor: 'lightgreen' };

function ResetButton({ count, onClick }) {
  return (
    count > 0 && (
      <div>
        <button style={buttonStyle} onClick={onClick}>
          reset
        </button>
      </div>
    )
  );
}

export default ResetButton;
