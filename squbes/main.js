function sqube() {
    const table = document.getElementById("table-data");
    let data = ``;

    for (let i = 1; i <= 10; i++) {
        data+=`
            <tr>
                <td>${i}</td>
                <td>${Math.pow(i, 2)}</td>
                <td>${Math.pow(i, 3)}</td>
            </tr>
        `;
    }

    table.innerHTML = data;
}