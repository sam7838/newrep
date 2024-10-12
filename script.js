// Calculate days and hours lived
const birthDate = new Date('2005-02-24');
const today = new Date();
const timeDiff = today - birthDate;
const daysLived = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
const hoursLived = Math.floor(timeDiff / (1000 * 60 * 60));

document.getElementById('days-lived').innerText = daysLived + ' days';
document.getElementById('hours-lived').innerText = hoursLived + ' hours';

const canvas = document.getElementById('treeCanvas');
const ctx = canvas.getContext('2d');
let currentLeaves = 0; // Number of leaves currently drawn
const leafGrowthRate = Math.ceil(daysLived / 100); // Growth rate for leaves (adjust for speed)

function drawTree() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#8B4513'; // Brown for the trunk
    ctx.fillRect(370, 300, 60, 300); // Tree trunk

    // Draw branches
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(400, 250, 8, 80); // Main branch
    ctx.fillRect(360, 200, 8, 60); // Left branch
    ctx.fillRect(440, 200, 8, 60); // Right branch

    // Draw leaves
    for (let i = 0; i < currentLeaves; i++) {
        const x = Math.random() * 120 + 360; // Random x position
        const y = Math.random() * 150 + 150; // Random y position
        ctx.fillStyle = getRandomColor(); // Random color for leaves
        ctx.beginPath();
        ctx.arc(x, y, Math.random() * 10 + 5, 0, Math.PI * 2); // Random size leaves
        ctx.fill();
    }

    // Check if we need to grow more leaves
    if (currentLeaves < daysLived) {
        currentLeaves += leafGrowthRate; // Increase the leaf count
        if (currentLeaves > daysLived) currentLeaves = daysLived; // Cap at days lived
        requestAnimationFrame(drawTree); // Continue the animation
    }
}

function getRandomColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD', '#E74C3C', '#3498DB', '#FFC300', '#DAF7A6'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Start the growth animation
drawTree();
