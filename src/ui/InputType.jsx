import Button from "./Button";

function InputType({ typeInput, onChange, onClick }) {
  return (
    <div className="mb-2 flex gap-x-1">
      <input
        type="text"
        className="w-1/2 rounded-sm border border-color-light-brown px-1"
        placeholder="Input a type here..."
        value={typeInput}
        onChange={onChange}
      />
      <Button type="formButton" onClick={onClick}>
        Add
      </Button>
    </div>
  );
}

export default InputType;
