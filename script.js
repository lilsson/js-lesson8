let mainWraper = document.getElementById('post-block');



function ajax() {
    let requist = new XMLHttpRequest ();
    requist.open('GET', 'https://jsonplaceholder.typicode.com/posts');

    requist.addEventListener('load', function() {
       let data = JSON.parse(requist.responseText);
       
       data.forEach(element => {
           console.log(element;)
           
       });
    });

    requist.send();

}
   
   function createPost(item) {
    let divWraper = document.createElement('div');
    divWraper.classList.add('posts');

    let h1 = document.createElement('h1');
    h1.innerHTML = item.id;

    let text = document.createElement('div');
    text.classList.add('title');
    text.innerHTML = item.title; 

    divWraper.appendChild()



   
   }

   

    ajax();