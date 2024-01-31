/* anonymizes the username(local part) of an email ID, that is, 
replace the username part with * characters.
*/
const emails = ['mary@northeastern.edu', 'ari@khoury.northeastern.edu', 'jk_neu.edu', 'jk@neu.edu', 'jsned@', 'ai_me@mugar.northeastern.edu'];
window.onload = function hideEmail() {
    const list = document.getElementById('emails')
    list.innerHTML = '';
    for (const email of emails) {
        if (validEmail(email)) {
            let i = email.indexOf('@');
            let str = ''
            for (let n = 0; n < i; n++) {
                str += '*'
            }
            str += email.slice(i);
            // list.innerHTML += `<li>${str}</li>`
            let listItem = document.createElement('li');
            listItem.textContent = str;
            list.appendChild(listItem);
        }
    }
}

function validEmail(email) {
    return /^[a-zA-Z0-9_]+@(.+\.)*northeastern.edu$/.test(email)
}