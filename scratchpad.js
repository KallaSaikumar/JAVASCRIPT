HTML DOM Manipulation
---------------------
  to get any HTML Element
  ------------------------
    let element = document.querySelector('Selector');

  To get the textContent of any element
  --------------------------------------
  <h2>Good Morning</h2>
           let msg = h2Element.textContent;
   to set any text content
   -----------------------
     h2Element.textContent = "Good Morning";

 to set HTML Content
 -------------------
   h2Element.innerHTML = '<h3>Hello</h3>'

 to get any form field value
 ---------------------------
   let textBox = document.querySelector('#user');
   let textEntered = textBox.value;

  to get any attribute of  tag
  ------------------------------
    Ex: <img src='abc.jpg'>
      
   let imageTag = document.querySelector('img');  
   let theSource = imageTag.getAttribute('src'); // abc.jpg

  to set any attribute of a tag
  -------------------------------
    Ex: <input type='password'>
    
      let inputTag = document.querySelector('input');
      inputTag.setAttribute('type','text');

    
    
    






   





