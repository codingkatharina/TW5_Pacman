/************* Creating Game Functionality *************/

/****** Map Property Definition: ******/
    // 1 => <div class='wall'></div> in index.html
    // 2 => <div class='ground'></div> in index.html
    // 3 => <div class='cookie'></div> in index.html
    // 4 => <div class='juice'></div> in index.html
    // 5 => <div class='pacman'></div> in index.html
    // 6 => <div class='ghost'></div> in index.html

let map = [ [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
            [1,3,3,1,1,1,3,1,1,1,1,1,1,3,1,1,1,3,3,1],
            [1,3,3,1,3,3,3,3,3,3,3,3,3,3,3,3,1,3,3,1],
            [2,3,3,1,3,1,1,1,1,1,1,1,1,1,1,3,1,3,3,2],
            [2,3,3,3,3,1,3,3,3,3,3,3,3,3,1,3,3,3,3,2],
            [2,3,3,1,3,1,3,1,1,1,1,1,1,3,1,3,1,3,3,2],
            [1,3,3,1,3,1,3,1,3,3,3,3,1,3,1,3,1,3,3,1],
            [1,3,1,1,3,1,3,1,1,3,3,1,1,3,1,3,1,1,3,1],
            [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
            [1,3,1,1,1,1,1,3,1,1,1,1,3,1,1,1,1,1,3,1],
            [1,3,3,3,3,3,1,3,1,3,3,1,3,1,3,3,3,3,3,1],
            [1,3,3,1,1,3,1,3,1,3,3,1,3,1,3,1,1,3,3,1],
            [1,3,3,3,1,3,1,3,1,3,3,1,3,1,3,1,3,3,3,1],
            [2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2],
            [2,3,1,3,1,1,1,1,1,3,3,1,1,1,1,1,3,1,3,2],
            [2,3,1,3,3,3,3,1,3,3,3,3,1,3,3,3,3,1,3,2],
            [1,3,1,1,1,1,3,1,3,1,1,3,1,3,1,1,1,1,3,1],
            [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]

// Pacman starting position
let pacman = {
    x: 1,
    y: 1
}

let score = {}

// Function to draw map in html by looping through map array
    // y => up through down, y-achsis 
    // x => left through right, x-achsis

function drawWorld() {
    document.getElementById('world').innerHTML = "";  // redraws field with every move
    for(let y = 0; y < map.length; y = y + 1) {         //TODO refactor later
        //console.log(map[y])
        for(let x = 0; x < map[y].length; x = x + 1) {       //TODO refactor later
            //console.log(map[y][x])
            if (map[y][x] === 1) {
                document.getElementById('world').innerHTML += "<div class='wall'></div>";
            }
            else if (map[y][x] === 2) {
                document.getElementById('world').innerHTML += "<div class='ground'></div>";
            }
            else if (map[y][x] === 3) {
                document.getElementById('world').innerHTML += "<div class='cookie'></div>";
            }
            else if (map[y][x] === 4) {
                document.getElementById('world').innerHTML += "<div class='juice'></div>";
            }
            else if (map[y][x] === 5) {
                document.getElementById('world').innerHTML += "<div class='pacman'></div>";
            }
            else if (map[y][x] === 6) {
                document.getElementById('world').innerHTML += "<div class='ghost'></div>";
            }
        }
        document.getElementById('world').innerHTML += "<br>"
    }
}

// Pacman Movement & Changed Map Appearance

document.onkeydown = function(e) {
    if (e.keyCode === 37) {
        // move pacman current position LEFT
        if (map[pacman.y][pacman.x-1] !== 1)  
        { 
            if(map[pacman.y][pacman.x-1] === 2) 
            {
                score = score + 10;
            }
        map[pacman.y][pacman.x] = 2;          // 2 => Block that pacman will leave behind
        pacman.x = pacman.x - 1;              // Pacman's x position is moved by -1
        map[pacman.y][pacman.x] = 5;          // 5 => Pacman is placed on new block
        }    
    }
    else if (e.keyCode === 38) {
        // move pacman current position UP
        // not moving into wall through if condition
        if (map[pacman.y-1][pacman.x] !== 1)  
        {                                       // (= if next position "enhanced by -1"
            map[pacman.y][pacman.x] = 2;            // is not a wall (1) then move)
            pacman.y = pacman.y - 1;
            map[pacman.y][pacman.x] = 5; 
        }
    }
    else if (e.keyCode === 39) {
        // move pacman current position RIGHT
        if(map[pacman.y][pacman.x+1] !== 1) 
        {
            map[pacman.y][pacman.x] = 2;
            pacman.x = pacman.x + 1;
            map[pacman.y][pacman.x] = 5;
        }
    }
    else if (e.keyCode === 40) {
        // move pacman current position DOWN
        if(map[pacman.y+1][pacman.x] !== 1) 
        {
            map[pacman.y][pacman.x] = 2;
            pacman.y = pacman.y + 1;
            map[pacman.y][pacman.x] = 5;
        }
    }
    drawWorld();
}


 //TODO score function
// function score () {}

drawWorld();