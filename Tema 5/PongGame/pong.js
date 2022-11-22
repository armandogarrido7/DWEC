function showPoints() {
    p1_points = document.getElementById('p1_points');
    p1_points.innerHTML = player1_points;
    p2_points = document.getElementById('p2_points');
    p2_points.innerHTML = player2_points;
}
function resetGame() {
    p1_points = p2_points = 0;
    directionX = getRandomNum();
    directionY = getRandomNum();
    posX = stage_width / 2;
    posY = stage_height / 2;
    showPoints();
}
function collisionDetect() {
    // returns true or false
    player.top = player.y;
    player.right = player.x + player.width;
    player.bottom = player.y + player.height;
    player.left = player.x;

    ball.top = ball.y - ball.radius;
    ball.right = ball.x + ball.radius;
    ball.bottom = ball.y + ball.radius;
    ball.left = ball.x - ball.radius;

    return ball.left < player.right && ball.top < player.bottom && ball.right > player.left && ball.bottom > player.top;
}

function drawStage() {
    if (posX <= ball_radius) {
        player2_points++;
        directionX = getRandomNum();
        directionY = getRandomNum();
        posX = stage_width / 2;
        posY = stage_height / 2;
        showPoints();
    }
    else if (posX >= (stage_width - ball_radius)) {
        player1_points++;
        directionX = getRandomNum();
        directionY = getRandomNum();
        posX = stage_width / 2;
        posY = stage_height / 2;
        showPoints();
    }
    if (posY > (stage_height - ball_radius) || posY < (0 + ball_radius)) {
        directionY *= -1;
    }
    // Colisiones con jugadores
    // P1
    left = [posX - ball_radius, posY]
    right = [posX + ball_radius, posY]
    p1_top = [posX, posY + ball_radius]
    bottom = [posX, posY - ball_radius]
    top_left = [posX - ball_radius * Math.cos(Math.PI / 4), posY - ball_radius * Math.sin(Math.PI / 4)]
    top_right = [posX + ball_radius * Math.cos(Math.PI / 4), posY - ball_radius * Math.sin(Math.PI / 4)]
    bottom_left = [posX - ball_radius * Math.cos(Math.PI / 4), posY + ball_radius * Math.sin(Math.PI / 4)]
    bottom_right = [posX + ball_radius * Math.cos(Math.PI / 4), posY + ball_radius * Math.sin(Math.PI / 4)]
    pointsToCheckCollision = [left, right, top, bottom, top_left, top_right, bottom_left, bottom_right]
    // }else if ((posX < player1_posX + ball_radius + player1_width) && (player1_posY< posY && posY< player1_posY+player1_height)){
    //     directionY = directionY + player1_direction;
    //     directionX *= -1;
    //     //P2
    // } else if ((posX > player2_posX - ball_radius) && (player2_posY< posY  && posY < player2_posY+player2_height)){
    //     directionY = directionY + player2_direction;
    //     directionX *= -1;
    // }
    player_points = [];
    for (point of pointsToCheckCollision) {
        if ((point[0] <= player1_posX + player1_width) && (player1_posY <= point[1] && point[1] <= player1_posY + player1_height)) {
            directionY = (directionY + player1_direction) / 2;
            console.log("Left: ", left);
            console.log("Right: ", right);
            console.log("Top: ", p1_top);
            console.log("Bottom ", bottom);
            console.log("Top-Left ", top_left);
            console.log("Top-Right ", top_right);
            console.log("Bottom-Left ", bottom_left);
            console.log("Bottom-Right ", bottom_right);
            directionX *= -1;
            break;
        }
    }
    for (point of pointsToCheckCollision) {
        if ((point[0] >= player2_posX) && (player2_posY <= point[1] && point[1] <= player2_posY + player2_height)) {
            directionY = (directionY + player2_direction) / 2;
            directionX *= -1;
            break;
        }
    }

    posX += directionX * speedX;
    ball.setAttribute('cx', posX);

    posY += directionY * speedY;
    ball.setAttribute('cy', posY);
}
function movePlayer(e) {
    switch (e.key) {
        case 'w':
            if (player1_direction == 0) {
                player1_direction = -1;
                setInterval(() => {
                    if (player1_posY <= 0 || player1_posY >= stage_height - player1_height) {
                        player1_direction *= -1;
                    }
                    player1_posY += player1_direction * player_speed;
                    player1.setAttribute('y', player1_posY)
                }, 1);
            }
            else if (player1_direction == 1) {
                player1_direction *= -1;
            }
            break;
        case 's':
            if (player1_direction == 0) {
                player1_direction = 1;
                setInterval(() => {
                    if (player1_posY <= 0 || player1_posY >= stage_height - player1_height) {
                        player1_direction *= -1;
                    }
                    player1_posY += player1_direction * player_speed;
                    player1.setAttribute('y', player1_posY)
                }, 1);
            }
            else if (player1_direction == -1) {
                player1_direction *= -1;
            }
            break;
        case 'ArrowUp':
            if (player2_direction == 0) {
                player2_direction = -1;
                setInterval(() => {
                    if (player2_posY <= 0 || player2_posY >= stage_height - player2_height) {
                        player2_direction *= -1;
                    }
                    player2_posY += player2_direction * player_speed;
                    player2.setAttribute('y', player2_posY)
                }, 1);
            }
            else if (player2_direction == 1) {
                player2_direction *= -1;
            }
            break;
        case 'ArrowDown':
            if (player2_direction == 0) {
                player2_direction = 1;
                setInterval(() => {
                    if (player2_posY <= 0 || player2_posY >= stage_height - player2_height) {
                        player2_direction *= -1;
                    }
                    player2_posY += player2_direction * player_speed;
                    player2.setAttribute('y', player2_posY)
                }, 1);
            }
            else if (player2_direction == -1) {
                player2_direction *= -1;
            }
            break;
    }

}

function getRandomNum() {
    num = Math.random() - 0.5;
    if (num > 0)
        num = -1;
    else num = 1;
    return num
}

window.onload = () => {
    player_speed = 1.5;
    player1_points = 0;
    player2_points = 0;
    player1 = document.getElementById('player1');
    player2 = document.getElementById('player2');
    player1_posX = parseInt(player1.getAttribute('x'));
    player2_posX = parseInt(player2.getAttribute('x'));
    player1_posY = parseInt(player1.getAttribute('y'));
    player2_posY = parseInt(player2.getAttribute('y'));
    player1_direction = 0;
    player2_direction = 0;
    player1_width = parseInt(player1.getAttribute('width'));
    player1_height = parseInt(player1.getAttribute('height'));
    player2_height = parseInt(player2.getAttribute('height'));
    ball = document.getElementById('ball');
    stage = document.getElementById('stage')
    stage_width = parseInt(stage.getAttribute('width'));
    stage_height = parseInt(stage.getAttribute('height'));
    ball_radius = parseInt(ball.getAttribute('r'));
    directionX = getRandomNum();
    directionY = getRandomNum();
    speedX = 1.5;
    speedY = 1.5;
    ball.setAttribute('cx', stage_width / 2);
    ball.setAttribute('cy', stage_height / 2);
    posX = parseInt(ball.getAttribute('cx'));
    posY = parseInt(ball.getAttribute('cy'));
    setInterval(drawStage, 1);
    document.onkeydown = movePlayer;
}