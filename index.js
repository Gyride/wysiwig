window.onload = function () {
    const BOLD = document.getElementById('bold');
    const ITALICS = document.getElementById('italics');
    const LINK = document.getElementById('link');
    const UNLINK = document.getElementById('unlink');

    BOLD.onclick = function() {
        document.execCommand('bold');
    };

    ITALICS.onclick = function() {
        document.execCommand('italic');
    };

    LINK.onclick = function() {
        const USER_LINK = window.prompt('Please enter your link.');
        document.execCommand('createLink', false, USER_LINK);
    };

    UNLINK.onclick = function() {
        document.execCommand('unlink');
    };
}