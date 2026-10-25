const d_c = document.getElementById("dwarvish-canvas");

// Define the SVG namespace
const svgNS = "http://www.w3.org/2000/svg";

// Set constants
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;
const ROWS = 10;
const COLS = 10;
const CELL_WIDTH = CANVAS_WIDTH / COLS;
const CELL_HEIGHT = CANVAS_HEIGHT / ROWS;

// Create the parent <svg> container
const svg = document.createElementNS(svgNS, "svg");
svg.setAttribute("width", CANVAS_WIDTH);
svg.setAttribute("height", CANVAS_HEIGHT);
svg.setAttribute("viewBox", `0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}`);

// Create an SVG element (in this case a line)
for (let i=0; i < ROWS * COLS; i++) {
    const line = document.createElementNS(svgNS, "line");
    line.setAttribute("x1", (i % COLS) * CELL_WIDTH + CELL_WIDTH / 2);
    line.setAttribute("y1", Math.floor(i / COLS) * CELL_HEIGHT + CELL_HEIGHT / 2);
    line.setAttribute("x2", (i % COLS) * CELL_WIDTH + 3 * CELL_WIDTH / 2);
    line.setAttribute("y2", Math.floor(i / COLS) * CELL_HEIGHT + 3 * CELL_HEIGHT / 2);
    line.setAttribute("stroke", "#FF481A");
    line.setAttribute("stroke-width", 2);
    svg.appendChild(line);
}


// 4. Inject into the DOM
d_c.appendChild(svg);
