const ball = new Ball({
    color: 'green',
    speed: 20,
    controls:{
        up:'ArrowUp',
        down:'ArrowDown',
        left:'ArrowLeft',
        right:'ArrowRight',
    }
});
const ball2=new Ball({
    color:'blue',
    speed: 30,
    controls:{
        left:'keyA',
        right:'keyD',
        up:'keyW',
        down:'keyS',

    }
});

console.log(ball);