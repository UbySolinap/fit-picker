import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import GarmentType from "../../ui/GarmentType";

function CustomAxisTick(props) {
  return (
    <g transform={`translate(${props.x - 17},${props.y})`}>
      <image
        xlinkHref={props.payload.value}
        x={0}
        y={0}
        height="35px"
        width="35px"
      />
    </g>
  );
}

function CustomToolTip(props) {
  return (
    <div className="w-11/12 rounded-lg border-2 border-color-light-blue bg-white px-3 py-1 font-bold text-color-dark-blue">
      <p>
        Date added:
        <span className="ml-1 font-semibold italic text-color-dark-gray">
          {props.payload[0]?.payload.dateAdded.slice(0, 10)}
        </span>
      </p>
      <p>
        {props.payload[0]?.name}
        <span className="ml-1 font-semibold italic text-color-dark-gray">
          {props.payload[0]?.payload.timesWorn}x
        </span>
      </p>

      <GarmentType
        subTypes={props.payload[0]?.payload.subtype}
        type="tooltip"
      />

      <div className="mt-2 flex justify-center">
        <img
          src={props.payload[0]?.payload.image}
          alt={props.payload[0]?.payload.id}
          className="h-40 w-40 object-contain"
        />
      </div>
    </div>
  );
}

function MostUsedChart({ clothes }) {
  return (
    <ResponsiveContainer height={350} width="100%">
      <BarChart data={clothes}>
        <XAxis
          dataKey="image"
          interval={0}
          tick={<CustomAxisTick />}
          height={45}
        />
        <YAxis
          width={34}
          tick={{ fill: "#557A95", fontWeight: "bold", fontSize: "14px" }}
          unit="x"
        />
        <CartesianGrid strokeDasharray="10" />
        <Bar
          dataKey="timesWorn"
          fill="#B1A296"
          name="Times worn:"
          activeBar={
            <Rectangle fill="#557A95" stroke="#7395AE" cursor="pointer" />
          }
        />
        <Tooltip content={<CustomToolTip />} cursor={false} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default MostUsedChart;
