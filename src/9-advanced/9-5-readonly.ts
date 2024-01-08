{
    type ToDo = {
        title: string;
        description : string;
    }

    const type : ToDo = {
        title : 'title',
        description : 'moviebox'
    } 

    // ReadOnly 타입을 활용
    function display(todo : Readonly<ToDo>){
        console.log("title >>", todo.title) 
        console.log("description >>", todo.description) 
        //todo.title = 'haha' 타입의 내용 변경 불가능
    }

    display(type);
}