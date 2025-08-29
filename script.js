document.addEventListener('DOMContentLoaded', (event) => {
    // Find all <pre> blocks
    const preBlocks = document.querySelectorAll('pre');

    preBlocks.forEach(pre => {
        // Create a button
        const copyButton = document.createElement('button');
        copyButton.innerText = 'Copy';
        copyButton.classList.add('copy-btn');

        // Append the button to the <pre> block
        pre.appendChild(copyButton);

        // Add click event listener
        copyButton.addEventListener('click', () => {
            // Get the text content of the <code> element inside the <pre>
            const code = pre.querySelector('code').innerText;

            // Copy text to clipboard
            navigator.clipboard.writeText(code).then(() => {
                // Optional: give feedback to the user
                copyButton.innerText = 'Copied!';
                setTimeout(() => {
                    copyButton.innerText = 'Copy';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    });
});
