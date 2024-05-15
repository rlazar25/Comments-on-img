let oneCommentDiv = document.querySelector('#one-comment');

createComments();

function createComments(){
    let text = '';
    coments.forEach(comment =>{
        text += `<div class="col-10 offset-1 bg-light p-2 mb-2 shadow">
            <span class="badge bg-primary" >${comment.name}</span>
            <span class="badge bg-secondary" >${comment.date}</span>
            <p class="p-3">${comment.comment}</p>
        </div>
    `.trim()
})
    if(text.length === 0 ){
        text += '<h3>No coments</h3>';
    }
    
    oneCommentDiv.innerHTML = text;
    
}

