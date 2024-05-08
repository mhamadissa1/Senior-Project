function Range() {
  return (
    <>
      <div>
        <input
          type="range"
          min={0}
          max="100"
          value="25"
          className="range w-full"
          step="25"
        />
        <div className="w-full flex justify-between text-xs px-2">
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </div>
      </div>
    </>
  );
}

export default Range;
