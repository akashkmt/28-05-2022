var id = (localStorage.getItem('taskId'));
getData();
function updateData (){
        var input = document.getElementById('taskDetails').value;
        var checkedValue = document.getElementById('taskStatus').checked;
        // console.log(input, checkedValue);
        var object = {
            task: input,
            status: checkedValue
        }
        // console.log(object);
        if(input == ''){
            alert('Please enter a task');
        }
        else{
            updateDataBase(object);
        }
    }
    
    async function updateDataBase(data){
        try {
            let upadate = await fetch(`http://localhost:3000/allTasks/${id}`, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" }
            });
            window.location.href = 'index.html';
        } catch (error) {
            console.log(error);
        }
    }

    async function getData(){
        try {
            let get = await fetch(`http://localhost:3000/allTasks/${id}`);
            let data = await get.json();
            // console.log(data);
            document.getElementById('taskDetails').value = data.task;
            document.getElementById('taskStatus').checked = data.status;
        } catch (error) {
            console.log(error);
        }
    }