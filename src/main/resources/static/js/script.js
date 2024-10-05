document.addEventListener('DOMContentLoaded', function ()
{
    loadEmployees();

    document.getElementById('employeeForm').addEventListener('submit', function (event)
    {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const employee = { name: name, email: email };

        fetch('/api/employees',
            {
            method: 'POST',
            headers:
                {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(employee),
        })
            .then(() => {
                loadEmployees();
                document.getElementById('employeeForm').reset();
            });
    });
});

function loadEmployees()
{
    fetch('/api/employees')
        .then(response => response.json())
        .then(employees => {
            const employeeList = document.getElementById('employeeList');
            employeeList.innerHTML = '';
            employees.forEach(employee => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${employee.id}</td>
                    <td>${employee.name}</td>
                    <td>${employee.email}</td>
                    <td>
                        <button onclick="deleteEmployee('${employee.id}')">Delete</button>
                    </td>
                `;
                employeeList.appendChild(row);
            });
        });
}

function deleteEmployee(id)
{
    fetch(`/api/employees/${id}`,
        {
        method: 'DELETE',
    })
        .then(() => loadEmployees());
}
