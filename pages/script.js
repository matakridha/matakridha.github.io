const image = document.getElementById('zoom-image');
const container = document.querySelector('.image-container');

container.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = container.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    const scale = 2; // Adjust the scale factor as needed

    image.style.transformOrigin = `${x * 100}% ${y * 100}%`;
    image.style.transform = `scale(${scale})`;
});

container.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)';
});
