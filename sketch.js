const KEYBOARD_LAYOUT = [10, 9, 7]
const HEIGHT = screen.height
const WIDTH = screen.width
const KEYBOARD_ROW_POSITIONS = [5 * HEIGHT / 16, 7 * HEIGHT / 16, 9 * HEIGHT / 16]
const SPACE_BETWEEN_KEYS = 120
let MARGIN = 0
const DIAMETER = 60
const LETTERS = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
// console.log(HEIGHT)
let scale = 0

function setup() {
	createCanvas(windowWidth, windowHeight)
	scale = windowHeight / HEIGHT
	// createLampboard()
}

const createLayout = () => {
	stroke(255)
	line(0, height/4, width, height/4)
	line(0, 5 * height/8, width, 5 * height/8)
}

const createLampboard = () => {
	let letter_count = 0
	// stroke(125)
	// line(0, 3 * height/8, width, 3 * height/8)
	// line(0, 4 * height/8, width, 4 * height/8)
	stroke(60)
	// line(0, 5 * height * scale / 16, width, 5 * height * scale / 16)
	// line(0, 7 * height / 16, width, 7 * height / 16)
	// line(0, 9 * height / 16, width, 9 * height / 16)
	for (let i = 0; i < KEYBOARD_LAYOUT.length; i++) {
		MARGIN = (WIDTH - (KEYBOARD_LAYOUT[i] * (DIAMETER) + (KEYBOARD_LAYOUT[i] - 1 ) * (SPACE_BETWEEN_KEYS - DIAMETER) )) / 2
		// line(0, KEYBOARD_ROW_POSITIONS[i] * scale, width, KEYBOARD_ROW_POSITIONS[i] * scale)
		// letter_offset += KEYBOARD_LAYOUT[i-1]
		// console.log(WIDTH)
		for(let j = 0 ; j < KEYBOARD_LAYOUT[i] ; j ++) {
			// fill(0)
			let key  = LETTERS[letter_count]
			// console.log(key)
			stroke(255)
			circle(j*(SPACE_BETWEEN_KEYS) + (MARGIN + DIAMETER), KEYBOARD_ROW_POSITIONS[i] * scale, DIAMETER)
			// stroke(8)
			text(key, j*(SPACE_BETWEEN_KEYS) + (MARGIN + DIAMETER), KEYBOARD_ROW_POSITIONS[i] * scale)
			letter_count ++
		}
	}


}

function draw() {
	// console.log("height -> ", height)
	// console.log("HEIGHT -> ", HEIGHT)
	background(0)
	createLayout()
	textSize(24)
	// // strokeWeight(8)
	textAlign(CENTER, CENTER)
	createLampboard()
}