import React from "react";
import { Group } from "@vx/group";
import { scaleTime, scaleLinear } from "@vx/scale";
import { AreaClosed } from "@vx/shape";
import { AxisLeft, AxisBottom } from "@vx/axis";
import { LinearGradient } from "@vx/gradient";
import { extent, max } from "d3-array";

const WeatherGraph = ({ daysData }) => {
  const data = daysData;

  const width = 750;
  const height = 400;

  const x = (d) => d.dt * 1000;
  const y = (d) => Math.round(d.main.temp - 273.15);

  // Bounds
  const margin = {
    top: 60,
    bottom: 60,
    left: 80,
    right: 80,
  };

  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const xScale = scaleTime({
    range: [0, xMax],
    domain: extent(data, x),
  });
  const yScale = scaleLinear({
    range: [yMax, 0],
    domain: [0, max(data, y)],
  });

  return (
    <div>
      <svg width={width} height={height}>
        <LinearGradient from="#fbc2eb" to="#a6c1ee" id="gradient" />

        <Group top={margin.top} left={margin.left}>
          <AreaClosed
            data={data}
            x={(d) => xScale(x(d))}
            y={(d) => yScale(y(d))}
            yScale={yScale}
            strokeWidth={1}
            stroke={"url(#gradient"}
            fill={"url(#gradient)"}
          />

          <AxisLeft
            scale={yScale}
            top={0}
            left={0}
            label={"Temp ºC"}
            stroke={"#1b1a1e"}
            tickTextFill={"#1b1a1e"}
          />

          <AxisBottom
            scale={xScale}
            top={yMax}
            label={"Days"}
            stroke={"#1b1a1e"}
            tickTextFill={"#1b1a1e"}
          />
        </Group>
      </svg>
    </div>
  );
};

export default WeatherGraph;