import { useDispatch, useSelector } from "react-redux";

import { BsLockFill, BsUnlock } from "react-icons/bs";

import { toggleLock } from "../features/picker/pickerSlice";

import Button from "./Button";
import toast from "react-hot-toast";

function Lock({ type }) {
  const isLocked = useSelector((state) => state.picker[type].isLocked);

  const dispatch = useDispatch();

  if (isLocked)
    return (
      <Button
        type="lock"
        onClick={() => {
          dispatch(toggleLock(type));
          toast.dismiss();
          toast.success(
            `🔓 Selection of ${type} for randomization is unlocked.`,
          );
        }}
      >
        <BsLockFill />
      </Button>
    );

  return (
    <Button
      type="unlock"
      onClick={() => {
        dispatch(toggleLock(type));
        toast.dismiss();
        toast.success(`🔒 Selection of ${type} for randomization is locked.`);
      }}
    >
      <BsUnlock />
    </Button>
  );
}

export default Lock;
