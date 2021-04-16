import * as d3 from 'd3';
function bubbleChart(refNode, inputData) {
  //https://observablehq.com/@d3/zoomable-circle-packing
  //https://www.youtube.com/watch?v=R7nY78akAl0

  function pack(size) {
    return d3.pack()
    .size(size)
    .padding(3)
  }
  function makeHierarchy(data) {
    return d3.hierarchy({children: data})
    .sum(d => d.value)
  }

  const pack2 = data => d3.pack()
      .size([width, height])
      .padding(3)
    (d3.hierarchy({children: data})
      .sum(d => d.value))
      
  const data = []
  data.push({"name":"Hours Mentoring / Coaching","value":inputData['students']['hoursMentoring']})
  data.push({"name":"Grad Rate 6yr (%)","value":inputData['students']['gradRate6yr']})
  data.push({"name":"Grad Rate 4yr (%)","value":inputData['students']['gradRate4yr']})
  data.push({"name":"First Gen College (%)","value":inputData['students']['firstGenCollege']})
  data.push({"name":"Num of Students","value":inputData['students']['numOfStu']})
  console.log(data)
  let svg = d3.select(refNode.current);
  const width = 932;
  const height = 932;

  const hierarchyData = makeHierarchy(data)
  let packLayout = pack([450, 450]);
  const root = packLayout(hierarchyData)

  let focus = root;
  let view;
  console.log(root)
  
  const color = d3.scaleLinear()
      .domain([0, 5])
      .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
      .interpolate(d3.interpolateHcl)
  // change create to append
  svg.selectAll("g").remove()

  svg.attr("viewBox", `-${width / 2} -${height / 2} ${width} ${height}`)
      .style("display", "block")
      .style("margin", "10 10px")
      .style("background", "#5c0a7c")
      .style("cursor", "pointer")
      .on("click", (event) => zoom(event, root));

  const node = svg.append("g")
    .selectAll("circle")
    .data(root.descendants().slice(1))
    .join("circle")
      .attr("fill", d => d.children ? color(d.depth) : "white")
      .attr("pointer-events", d => !d.children ? "none" : null)
      .on("mouseover", function() { d3.select(this).attr("stroke", "#000"); })
      .on("mouseout", function() { d3.select(this).attr("stroke", null); })
      .on("click", (event, d) => focus !== d && (zoom(event, d), event.stopPropagation()));

  const label = svg.append("g")
      .style("font", "16px sans-serif")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
    .selectAll("text")
    .data(root.descendants())
    .join("text")
      .style("fill-opacity", d => d.parent === root ? 1 : 0)
      .style("display", d => d.parent === root ? "inline" : "none")
      .text(d => d.data.name);
  
  const title = svg.append("g")
      .style("font", "22px sans-serif")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
    .selectAll("text")
    .data(root.descendants())
    .join("text")
      .style("fill-opacity", d => d.parent === root ? 1 : 0)
      .style("display", d => d.parent === root ? "inline" : "none")
      .text(d => d.data.value);

  zoomTo([root.x, root.y, root.r * 2]);

  function zoomTo(v) {
    const k = width / v[2];

    view = v;

    label.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
    title.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]+ 10) * k})`);
    node.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
    node.attr("r", d => d.r * k);
  }

  function zoom(event, d) {
    const focus0 = focus;

    focus = d;

    const transition = svg.transition()
        .duration(event.altKey ? 7500 : 750)
        .tween("zoom", d => {
          const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
          return t => zoomTo(i(t));
        });

    label
      .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
      .transition(transition)
        .style("fill-opacity", d => d.parent === focus ? 1 : 0)
        .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
        .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
  }

  return svg.node();

}
export default bubbleChart