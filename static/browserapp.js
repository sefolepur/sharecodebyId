const postBtn = document.getElementById('postbtn')
const getBtn =document.getElementById('getbtn')
create_random_string()
function create_random_string(){
    let random_string =""
    let character ="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz"
    for(let i=0;i<4;i++){
        random_string+=character.charAt(Math.floor(Math.random()*character.length))
    }
    return random_string
}

const post=()=>{
    const task=document.getElementById('task').value
    const token =create_random_string()
    // console.log(data,token);
    if(task != ""){
        axios.post('/api/v1/tasks',{
        code:task,
        Token:token
    }).then(responce=>{
        // console.log(responce.data);
    }).catch(err=>{
        console.log(err,err.responce.data);
    })
    const tokenInput =document.getElementById("token")
    tokenInput.value=token
    return
    }
    else{
        alert('the code is empty')
        return
    }
}

const get=()=>{
    const tokenInput =document.getElementById('token').value
    const url ="/api/v1/tasks/"+tokenInput
    axios.get(url).then(responce=>{
        // console.log('harsh');
        const {task :{code}} = responce.data
        const task=document.getElementById('task')
        task.value=code
    }).catch(err=>{
        alert('the Token is not found!!!!')
    })
}











getBtn.addEventListener('click',get)
postBtn.addEventListener('click',post)