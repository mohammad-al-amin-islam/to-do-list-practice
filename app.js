let count = 1;

document.getElementById('add-btn').addEventListener('click', function () {

    const inputValue = document.getElementById('input-value').value;
    if (inputValue == "") {
        alert('enter correct input');
    }
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th>${count++}</th>
    <td>${inputValue}</td>
    <td><button class="btn btn-danger delete-btn">Delete</button>
    <button class="btn btn-success done-btn">Done</button></td>
    `
    document.getElementById('content-container').appendChild(tr);
    document.getElementById('input-value').value = "";

    const deleteBtn = document.getElementsByClassName('delete-btn');
    const doneBtn = document.getElementsByClassName('done-btn');

    for (const btn of deleteBtn) {
        btn.addEventListener('click', function (e) {
            e.target.parentNode.parentNode.style.display = 'none';
        })
    }
    for (const btn of doneBtn) {
        btn.addEventListener('click', function (e) {
            e.target.parentNode.parentNode.style.textDecoration = "line-through";
        })
    }
})