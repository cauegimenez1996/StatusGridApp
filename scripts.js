// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('#status-grid tbody td');

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (cell.classList.contains('status-ok')) {
                cell.classList.remove('status-ok');
                cell.classList.add('status-maybe');
                cell.textContent = 'Maybe';
            } else if (cell.classList.contains('status-maybe')) {
                cell.classList.remove('status-maybe');
                cell.classList.add('status-no');
                cell.textContent = 'No';
            } else if (cell.classList.contains('status-no')) {
                cell.classList.remove('status-no');
                cell.textContent = '';
            } else {
                cell.classList.add('status-ok');
                cell.textContent = 'Ok';
            }
        });
    });
});