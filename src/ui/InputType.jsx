import { RiAddLine } from "react-icons/ri";

import Button from "./Button";

function InputType({ typeInput, onChange, onClick }) {
  return (
    <div className="mb-10 flex gap-x-1">
      <input
        type="text"
        className="rounded-sm border border-color-light-brown px-1"
        placeholder="Input a type here..."
        value={typeInput}
        onChange={onChange}
      />
      <Button type="formButton" onClick={onClick}>
        <RiAddLine />
      </Button>
    </div>
  );
}

export default InputType;
