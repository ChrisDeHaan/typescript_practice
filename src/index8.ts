type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable; // this is an intersection!
let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}