<template>
    <canvas ref="canvas" @keydown="movePlayer" tabindex="0"></canvas>
    <div>
        Position du point bleu: X {{ playerX }}, Y {{ playerY }}
        Reserve: {{ reservePoints }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            canvas: null,
            context: null,
            playerX: null,
            playerY: null,
            redPoints: [],
            reservePoints: 5 // Add reservePoints data property
        };
    },
    mounted() {
        this.canvas = this.$refs.canvas;
        this.context = this.canvas.getContext('2d');
        this.playerX = this.canvas.width / 2;
        this.playerY = this.canvas.height / 2;

        window.addEventListener('keydown', this.movePlayer);

        this.draw();
        setInterval(this.updatePointsTimer, 1000); // Add setInterval to call updatePointsTimer every second
    },
    methods: {
        draw() {
            this.context.fillStyle = 'white';
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

            this.context.fillStyle = 'blue';
            this.context.fillRect(this.playerX, this.playerY, 10, 10);

            this.context.fillStyle = 'red';
            for (const point of this.redPoints) {
                if (point.timer <= 0) {
                    this.context.fillStyle = 'green';
                } else {
                    this.context.fillStyle = 'red'; // Reset color to red if timer is not zero
                }
                this.context.fillRect(point.x, point.y, 5, 5);
            }

            this.context.strokeStyle = 'black';
            this.context.lineWidth = 2;
            this.context.strokeRect(0, 0, this.canvas.width, this.canvas.height);
        },
        movePlayer(event) {
            const index = this.redPoints.findIndex(point => point.x === this.playerX && point.y === this.playerY);

            switch (event.key) {
                case 'z':
                    if (this.playerY > 0) {
                        this.playerY -= 10;
                    } else {
                        this.playerY = 0;
                    }
                    break;
                case 'q':
                    if (this.playerX > 0) {
                        this.playerX -= 10;
                    } else {
                        this.playerX = 0;
                    }
                    break;
                case 's':
                    if (this.playerY < this.canvas.height - 10) {
                        this.playerY += 10;
                    } else {
                        this.playerY = this.canvas.height - 10;
                    }
                    break;
                case 'd':
                    if (this.playerX < this.canvas.width - 10) {
                        this.playerX += 10;
                    } else {
                        this.playerX = this.canvas.width - 10;
                    }
                    break;
                case ' ':
                    if (index !== -1 && this.context.fillStyle !== 'green') { // Check if the point exists and is not green
                        this.redPoints.splice(index, 1); // Remove the red point
                        const randomPoints = Math.floor(Math.random() * 3) + 1; // Generate a random number between 1 and 3
                        this.reservePoints += randomPoints; // Add the random points to the reserve
                    } else if (this.reservePoints > 0 && this.context.fillStyle !== 'green') { // Check if there are reserve points available and the point is not green
                        this.redPoints.push({ x: this.playerX, y: this.playerY, timer: 5 }); // Set timer to 5 seconds
                        this.reservePoints -= 1; // Decrease the reserve points count
                    }
                    break;
            }

            this.draw();
        },
        updatePointsTimer() {
            for (const point of this.redPoints) {
                if (point.timer > 0) {
                    point.timer -= 1;
                }
            }
            this.draw(); // Call draw method after updating the timer to reflect the changes
        }
    },
};
</script>