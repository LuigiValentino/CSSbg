document.addEventListener('DOMContentLoaded', function () {
    const backgrounds = document.querySelectorAll('.background-item');

    backgrounds.forEach(background => {
        background.addEventListener('click', function () {
            const cssCode = getComputedStyle(background).background;
            copyToClipboard(cssCode);

            const copyMessage = document.createElement('div');
            copyMessage.textContent = 'Fondo copiado 👍';
            copyMessage.classList.add('copy-message');

            document.body.appendChild(copyMessage);
            setTimeout(() => {
                copyMessage.classList.add('show');
            }, 0); 

            setTimeout(() => {
                document.body.removeChild(copyMessage);
            }, 1500);
        });

        background.addEventListener('mouseenter', function () {
            background.classList.add('animated-bg');
        });

        background.addEventListener('mouseleave', function () {
            background.classList.remove('animated-bg');
        });
    });

    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
});
