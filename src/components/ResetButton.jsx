function ResetButton() {
  function handleClick() {
    localStorage.removeItem("scores");
    window.location.reload();
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-pink text-value text-white font-semibold uppercase px-4 pt-3 pb-4 rounded-full w-full text-center my-auto leading-[95%]"
    >
      Reset Scores
    </button>
  );
}

export default ResetButton;
