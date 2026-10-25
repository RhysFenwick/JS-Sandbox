const d_c = document.getElementById("dwarvish-canvas");

// Define the SVG namespace
const svgNS = "http://www.w3.org/2000/svg";

// Set constants
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;
const ROWS = 8;
const COLS = 8;
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
    const top_left_x = (i % COLS) * CELL_WIDTH + CELL_WIDTH / 2;
    const top_left_y = Math.floor(i / COLS) * CELL_HEIGHT + CELL_HEIGHT / 2;
    const bottom_right_x = top_left_x + CELL_WIDTH;
    const bottom_right_y = top_left_y + CELL_HEIGHT;
    let x_options = [top_left_x, bottom_right_x];
    let y_options = [top_left_y, bottom_right_y];

    const x_coin = Math.floor(Math.random() * 2);
    const y_coin = Math.floor(Math.random() * 2);

    line.setAttribute("x1", x_options[x_coin]);
    line.setAttribute("y1", y_options[y_coin]);
    line.setAttribute("x2", x_options[1 - x_coin]);
    line.setAttribute("y2", y_options[1 - y_coin]);
    line.setAttribute("stroke", "#FF481A");
    line.setAttribute("stroke-width", 2);
    svg.appendChild(line);
}


// 4. Inject into the DOM
d_c.appendChild(svg);
