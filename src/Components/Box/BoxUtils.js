const positions = {
    pos1: { x: 400, y: 680 },
    pos2: { x: 585, y: 680 },
};
const posKeys = Object.keys(positions);

const moveBox = (currentState, setState) => {
    const audio = document.getElementById('clickWAV');
    audio.play();

    const currentIndex = posKeys.findIndex(
        (key) => positions[key].x === currentState.x && positions[key].y === currentState.y
    );
    const nextIndex = (currentIndex + 1) % posKeys.length;
    const nextPos = positions[posKeys[nextIndex]];

    setState({
        pos: {
        x: nextPos.x,
        y: nextPos.y,
        },
    });
};


export { positions, moveBox }