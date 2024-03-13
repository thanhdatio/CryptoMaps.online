
var competingAssistants = [
  {source: "", target: "Assistants", img: "images/compete-assistants.png"},
  {source: "Siri", target: "Assistants", type: "competitor"},
  {source: "Assistant", target: "Assistants", type: "competitor"},
  {source: "Cortana", target: "Assistants", type: "competitor"},
  {source: "Alexa", target: "Assistants", type: "competitor"},
  {source: "M", target: "Assistants", type: "competitor"},
  ];

var competingAiResearch =[
  {source: "", target: "AI/ML Research", img: "images/compete-vr.png"},
  {source: "Google AI", target: "AI/ML Research", type: "competitor"},
  {source: "DeepMind", target: "AI/ML Research", type: "competitor"},
  {source: "Research", target: "AI/ML Research", type: "competitor"},
  {source: "Maluuba", target: "AI/ML Research", type: "competitor"},
  {source: "Facebook Research", target: "AI/ML Research", type: "competitor"},
  {source: "IBM Research", target: "AI/ML Research", type: "competitor"},
];

var competingBrowsers = [
  {source: "", target: "Web Browsers", img: "images/compete-browsers.png"},
  {source: "Chrome", target: "Web Browsers", type: "competitor"},
  {source: "Edge", target: "Web Browsers", type: "competitor"},
  {source: "Safari", target: "Web Browsers", type: "competitor"},
  ];

var competingClouds = [
  {source: "", target: "Clouds", img: "images/compete-clouds.png"},
  {source: "GCP", target: "Clouds", type: "competitor"},
  {source: "Azure", target: "Clouds", type: "competitor"},
  {source: "AWS", target: "Clouds", type: "competitor"},
  {source: "Bluemix", target: "Clouds", type: "competitor"},
];

var competingEmail = [
  {source: "", target: "Email", img: "images/compete-email.png"},
  {source: "Gmail", target: "Email", type: "competitor"},
  {source: "Outlook", target: "Email", type: "competitor"},
  {source: "Yahoo Mail", target: "Email", type: "competitor"},
  {source: "Mail", target: "Email", type: "competitor"},
];

var competingSearch =[
  {source: "", target: "Search Eng.", img: "images/compete-search.png"},
  {source: "Yahoo Search", target: "Search Eng.", type: "competitor"},
  {source: "Bing", target: "Search Eng.", type: "competitor"},
  {source: "Search", target: "Search Eng.", type: "competitor"},
];

var competingVR =[
  {source: "", target: "VR/AR", img: "images/compete-vr.png"},
  {source: "HoloLens", target: "VR/AR", type: "competitor"},
  {source: "Daydream", target: "VR/AR", type: "competitor"},
  {source: "Cardboard", target: "VR/AR", type: "competitor"},
  {source: "Oculus Rift", target: "VR/AR", type: "competitor"},
];

var bitcoin = [
  {source: "", target: "Bitcoin", img: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32/icon/btc.png", url: "https://en.wikipedia.org/wiki/Bitcoin", hover: "Bitcoin"},
  {source: "Bitcoin", target: "Bitcoin Gold", img: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32/icon/btc.png", url: "https://en.wikipedia.org/wiki/Bitcoin", hover: "Bitcoin"},
  {source: "Bitcoin", target: "Bitcoin XT", img: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32/icon/btc.png", url: "https://en.wikipedia.org/wiki/Bitcoin", hover: "Bitcoin"},
  {source: "Bitcoin", target: "Monero", img: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32/icon/xmr.png", url: "https://en.wikipedia.org/wiki/Bitcoin", hover: "Bitcoin"},
  {source: "Bitcoin", target: "Litecoin", img: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32/icon/ltc.png", url: "https://en.wikipedia.org/wiki/Bitcoin", hover: "Bitcoin"},
  {source: "Litecoin", target: "Luckycoin", img: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32/icon/ltc.png", url: "https://en.wikipedia.org/wiki/Bitcoin", hover: "Bitcoin"},
  {source: "Luckycoin", target: "Dogecoin", img: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32/icon/doge.png", url: "https://en.wikipedia.org/wiki/Bitcoin", hover: "Bitcoin"},
  {source: "Bitcoin", target: "Ethereum Classic", img: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32/icon/etc.png", url: "https://en.wikipedia.org/wiki/Bitcoin", hover: "Bitcoin"},
  {source: "Bitcoin", target: "Bitcoin Cash", img: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32/icon/bch.png", url: "https://en.wikipedia.org/wiki/Bitcoin", hover: "Bitcoin Cash"}
];

var ethereum = [
  {source: "Ethereum Classic", target: "Ethereum", img: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32/icon/eth.png", url: "https://en.wikipedia.org/wiki/Ethereum", hover: "Ethereum"},
  {source: "Ethereum", target: "Ethereum Pow", img: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32/icon/eth.png", url: "https://en.wikipedia.org/wiki/Ethereum", hover: "Ethereum"}
];

var binance = [
  {source: "Ethereum", target: "Binance", img: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32/icon/bnb.png", url: "https://en.wikipedia.org/wiki/Binance", hover: "Facebook, Inc. is an American online social media and social networking service company based in Menlo Park, California."},
  {source: "Binance", target: "Binance Chain", img: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32/icon/bnb.png", url: "https://en.wikipedia.org/wiki/Binance", hover: "Facebook, Inc. is an American online social media and social networking service company based in Menlo Park, California."}
];

var tron = [
  {source: "Ethereum", target: "Tron", img: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32/icon/trx.png", url: "https://en.wikipedia.org/wiki/Bitcoin", hover: "Facebook, Inc. is an American online social media and social networking service company based in Menlo Park, California."},
  {source: "Tron", target: "TUSD", img: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32/icon/tusd.png", url: "https://en.wikipedia.org/wiki/Bitcoin", hover: "Facebook, Inc. is an American online social media and social networking service company based in Menlo Park, California."}
];

var solana = [
  {source: "Ethereum", target: "Solana", img: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32/icon/sol.png", url: "https://en.wikipedia.org/wiki/Ethereum", hover: "Facebook, Inc. is an American online social media and social networking service company based in Menlo Park, California."},
  {source: "Solana", target: "Stepn", img: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32/icon/gmt.png", url: "https://en.wikipedia.org/wiki/Ethereum", hover: "Facebook, Inc. is an American online social media and social networking service company based in Menlo Park, California."}
];

var arbitrum = [
  {source: "Ethereum", target: "Arbitrum", img: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32/icon/arb.png", url: "https://en.wikipedia.org/wiki/Binance", hover: "Facebook, Inc. is an American online social media and social networking service company based in Menlo Park, California."},
  {source: "Arbitrum", target: "DAI", img: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32/icon/dai.png", url: "https://en.wikipedia.org/wiki/Binance", hover: "Facebook, Inc. is an American online social media and social networking service company based in Menlo Park, California."}
];

var polygon = [
  {source: "Ethereum", target: "Polygon", img: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32/icon/matic.png", url: "https://en.wikipedia.org/wiki/Binance", hover: "Facebook, Inc. is an American online social media and social networking service company based in Menlo Park, California."},
  {source: "Polygon", target: "APE", img: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32/icon/ape.png", url: "https://en.wikipedia.org/wiki/Binance", hover: "Facebook, Inc. is an American online social media and social networking service company based in Menlo Park, California."}
];

// var zoom = d3.behavior.zoom()
//   .scaleExtent([0, 10])
//   .on("zoom", redraw); 
//   //if you are sure that your zoom function is working just replace redraw with your zoom function

// var zoom = d3.behavior.zoom()
//     .translate(projection.translate())
//     .scale(projection.scale())
//     .scaleExtent([height, 8 * height])
//     .on("zoom", zoomed);

// var g = svg.append("g")
//     .call(zoom);

// // function redraw() {
// //     return svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")");
// // }

// function zoomed() {
//   projection.translate(d3.event.translate).scale(d3.event.scale);
//   g.selectAll("path").attr("d", path);
// }


function a1() {
  // Remove the existing svg elements
  d3.selectAll("g > *").remove();

  // Return the checked checkboxes
  var checkedValues = [];
  var checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
  for (var i=0; checkedBoxes[i]; ++i) {
      if (checkedBoxes[i].checked) {
           checkedValues.push(checkedBoxes[i].value);
      }
  }
  if (checkedValues) {
    draw(checkedValues);
  }
};


function draw(checks) {
  var checkedValues = checks;
  var links = [];
  // Tried .concat(); and Array.prototype.push.apply(); 
  // but deep copies of the arrays needed after a d3js .remove() call
  
  if (checkedValues.includes('ai')) {
    var links = links.concat(JSON.parse(JSON.stringify(competingAiResearch)));
  }
  if (checkedValues.includes('assistants')) {
    var links = links.concat(JSON.parse(JSON.stringify(competingAssistants)));
  }
  if (checkedValues.includes('browsers')) {
    var links = links.concat(JSON.parse(JSON.stringify(competingBrowsers)));
  }
  if (checkedValues.includes('clouds')) {
    var links = links.concat(JSON.parse(JSON.stringify(competingClouds)));
  }
  if (checkedValues.includes('email')) {
    var links = links.concat(JSON.parse(JSON.stringify(competingEmail)));
  }
  if (checkedValues.includes('search')) {
    var links = links.concat(JSON.parse(JSON.stringify(competingSearch)));
  }
  if (checkedValues.includes('vr')) {
    var links = links.concat(JSON.parse(JSON.stringify(competingVR)));
  }
  if (checkedValues.includes('bitcoin')) {
    var links = links.concat(JSON.parse(JSON.stringify(bitcoin)));
  }
  if (checkedValues.includes('ethereum')) {
    var links = links.concat(JSON.parse(JSON.stringify(ethereum)));
  }
   if (checkedValues.includes('binance')) {
    var links = links.concat(JSON.parse(JSON.stringify(binance)));
  }
  if (checkedValues.includes('tron')) {
    var links = links.concat(JSON.parse(JSON.stringify(tron)));
  }
  if (checkedValues.includes('solana')) {
    var links = links.concat(JSON.parse(JSON.stringify(solana)));
  }
  if (checkedValues.includes('arbitrum')) {
    var links = links.concat(JSON.parse(JSON.stringify(arbitrum)));
  }
  if (checkedValues.includes('polygon')) {
    var links = links.concat(JSON.parse(JSON.stringify(polygon)));
  }
  var nodes = {};
  // Compute the distinct nodes from the links.
  // links.forEach(function(link) {
  //   link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
  //   link.target = nodes[link.target] || (nodes[link.target] = {name: link.target, img: link.img});
  // });

  // Compute the distinct nodes from the links.
  links.forEach(function(link) {
    link.source = nodes[link.source] || (nodes[link.source] = {name: link.source, 
                                                                     hover: link.hover, 
                                                                     url: link.url,
                                                                     desc: link.desc});
    link.target = nodes[link.target] || (nodes[link.target] = {name: link.target,
                                                               img: link.img, 
                                                               hover: link.hover,
                                                               url: link.url});
  });
  
  // workaround to let subclusters be unlinked
  for (var i = 0; i < links.length; i++) {
    if (links[i].source.name == "") {
      links.splice(i, 1);
    }
  }

  // delete empty node
  delete nodes[""]

  // Define graph parameters
  // var width = 1000;
  // var height = 600;
  var width = window.innerWidth
              || document.documentElement.clientWidth
              || document.body.clientWidth;
  var width = width * 0.9;

  var height = window.innerHeight
              || document.documentElement.clientHeight
              || document.body.clientHeight;
  var height = height * 0.75;


  var force = d3.layout.force()
      .nodes(d3.values(nodes))
      .links(links)
      .size([width, height])
      .linkDistance(70)
      .charge(-250)
      .on("tick", tick)
      .start();
  // Node dragging behavior
  drag = force.drag()
    .origin(function(d) { return d; })
    .on("dragstart", dragstarted)
    .on("drag", dragged)
    .on("dragend", dragended);
  // Node dragging behavior (drag and anchor but not with zoom)
  // drag = force.drag()
  //   .on('dragstart', function(d) {
  //     d3.select(this).classed('fixed', d.fixed = true);
  //     force.stop();
  // });

  var svg = d3.select("#visualization")
      .attr("width", width)
      .attr("height", height)
      // Zoom behavior
      .call(d3.behavior.zoom().on("zoom", function () {
        svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")")
        }))
      .append("g");
  // // Add a border around the visualization box
  // var borderPath = svg.append("rect")
  //         .attr("x", 0)
  //         .attr("y", 0)
  //         .attr("height", height)
  //         .attr("width", width)
  //         .style("stroke", "blue")
  //         .style("fill", "none")
  //         .style("stroke-dasharray", "10 5")
  //         .style("stroke-width", 2);
  // Per-type markers, as they don't inherit styles.
  svg.append("defs").selectAll("marker")
      .data(["transition", "acquisition"])
    .enter().append("marker")  // the arrowhead
      .attr("id", function(d) { return d; })
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 15)
      .attr("refY", -1.5)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
    .append("path")
      .attr("d", "M0,-5L10,0L0,5");

  var path = svg.append("g").selectAll("path")
      .data(force.links())
    .enter().append("path")
      .attr("class", function(d) { return "link " + d.type; })
      .attr("marker-end", function(d) { return "url(#" + d.type + ")"; });

  var circle = svg.append("g").selectAll("circle")
      .data(force.nodes())
    if (checkedValues.includes("showLogos")) {
      circle.enter().append("image")
      .attr("xlink:href", function(d) { return d.img; })
    } else {
      circle.enter().append("circle")
      .attr("r", 6)
    }

  circle.attr("x", -16)
      .attr("y", -16)
      .attr("width", 32)
      .attr("height", 32)
      // Tooltip
      .on("mouseover", function(d) { 
        if(d.hover) { return tooltip.text(d.hover).style("visibility", "visible");} })
      .on("mousemove", function(d) { 
        return tooltip.text(d.hover).style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
      .on("mouseout", function(d) { 
        return tooltip.text(d.hover).style("visibility", "hidden");})
      // Double clicking
      .on("dblclick", function(d) {
        durl = d.url.toString(); window.open(durl, "_blank");
        // Disable double-click zoom
        d3.select("svg").on("dblclick.zoom", null); })
      // Right click
      // .on("contextmenu", function(d) {
      //   //stop showing browser menu
      //   d3.event.preventDefault();
      //   return tooltip.text(d.desc).style("visibility", "visible"); })
      .call(force.drag);
  // Implemented tooltip feature
  var tooltip = d3.select("body")
    .append("div")
    .style("background-color", "skyblue")
    .style("padding", "0.5em")
    .style("font-size", "12px")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden");

  // Text labels
  var text = svg.append("g").selectAll("text")
      .data(force.nodes())
    .enter().append("text")
      .attr("x", -20)
      .attr("y", -16) //".31em")
      .text(function(d) { return d.name; })
      .call(wrap, 75);

  function wrap(text, width) {
    text.each(function() {
      var text = d3.select(this),
          words = text.text().slice(0,50).split(/\s+/).reverse(),
          word,
          line = [],
          lineNumber = 0,
          lineHeight = 1, // ems
          x = text.attr("x"),
          y = text.attr("y"),
          // dy = parseFloat(text.attr("dy")),
          dy = text.attr("dy") ? text.attr("dy") : 0; //<-- null check
          tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
        }
      }
    });
  }


  // Use elliptical arc path segments to doubly-encode directionality.
  function tick() {
    path.attr("d", linkArc);
    circle.attr("transform", transform);
    text.attr("transform", transform);  // The text labels for each node
  };
  function linkArc(d) {
    var dx = d.target.x - d.source.x,
        dy = d.target.y - d.source.y,
        // The original code for the elliptical arcs - maybe re-use one day
        // dr = Math.sqrt(dx * dx + dy * dy);
        dr = 0;
    return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
  };
  function transform(d) {
    return "translate(" + d.x + "," + d.y + ")";
  };
};

function dragstarted(d) {
  d3.event.sourceEvent.stopPropagation();
  d3.select(this).classed("dragging", true);
  // Makes moved nodes sticky
  // d3.select(this).classed('fixed', d.fixed = true);
  // d3.force.stop();
}

function dragged(d) {
  d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
}

function dragended(d) {
  d3.select(this).classed("dragging", false);
}


// At first display all clusters
draw(['ethereum', 'binance', 'bitcoin', 'tron', 'solana', 'arbitrum', 'polygon', 'showLogos']);
//draw(['alphabet', 'amazon', 'apple', 'facebook', 'microsoft', 'showLogos']);
// draw(['alphabet', 'amazon', 'apple', 'facebook', 'ibm', 'microsoft', 'yahoo', 'showLogos']);
