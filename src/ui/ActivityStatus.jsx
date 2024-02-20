function ActivityStatus({ status }) {
  const base = "text-white rounded-lg px-2 py-1 font-semibold ";

  const style = {
    Picked: base + "bg-color-light-blue",
    Added: base + "bg-color-light-brown",
    Deleted: base + "bg-red-500",
  };

  return <p className={style[status]}>{status}</p>;
}

export default ActivityStatus;
