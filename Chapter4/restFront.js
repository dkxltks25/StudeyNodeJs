function getUser() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.status === 200) {
      var users = JSON.parse(xhr.responseText);
      var list = document.getElementById("list");
      list.innerHTML = "";
      Object.keys(users).map(key => {
        var userDiv = document.createElement("div");
        var span = document.createElement("span");
        span.textContent = users[key];
        var edit = document.createElement("button");
        edit.textContent = "수정";
        edit.addEventListener("click", () => {
            var name = pormpt('name change');
            if(!name){
                return alert("이름을 입력해주세여");
            }
            var xhr = new XMLHttpRequest();
            xhr.onload = function(){
                if(xhr.status === 200 ){
                    getUser();
                }else{
                    console.errir(xhr.responseText);
                }
            }
            xhr.open('PUT',`/users/${key}`);
            xhr.setRequestHeader('Content-Type','application/json') ;
            xhr.send(JSON.stringify({name}));
        });
        var remove = document.createElement("button");
        remove.textContent = "삭제";
        remove.addEventListener("click", () => {
            var xhr = new XMLHttpRequest();
            xhr.onload = function(){
                if(xhr.status === 200){
                    getUser();
                }else{
                }
            }
        });
     });
    }
  };
  xhr.open('GET','/users');
  xhr.send();
}

window.onload = getUser;
const Form = document.getElementById("form");
Form.addEventListener("submit", e => {
  e.preventDefault();
  const name = e.target.username.value;
  const xhr = new XMLHttpRequest();
  xhr.onload = () => {
    if (xhr.status === 201) {
      getUser();
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.open("POST", "users");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({ name }));
  e.target.username.value = "";
});
