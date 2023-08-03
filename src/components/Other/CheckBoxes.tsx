export const CheckBoxes = () => {
  return (
    <>
      <div className=" flex mb-5 mt-2 justify-between">
        <label htmlFor="uppercase">
          <input type="checkbox" name="uppercase" value="yes" /> Include
          Uppercase Letters
        </label>
        <label htmlFor="lowercase">
          <input type="checkbox" name="lowercase" value="yes" /> Include
          Lowercase Letters
        </label>
      </div>
      <div className=" flex justify-between">
        <label htmlFor="numbers">
          <input type="checkbox"  name="numbers" value="yes" />{" "}
          Include Numbers
        </label>
        <label className="mr-16" htmlFor="symbols">
          <input type="checkbox"  name="symbols" value="yes" />{" "}
          Include Symbols
        </label>
      </div>
    </>
  );
}
