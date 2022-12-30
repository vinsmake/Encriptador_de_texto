const written = document.getElementById("text"); //text area where user write
const response = document.getElementById("response"); //text area where user gets his encrypt/decrypt text
const encrypt = document.getElementById("button--encrypt"); // encrypt button
const decrypt = document.getElementById("button--decrypt"); // decrypt button
const copy = document.getElementById("copy"); //copy button

//-----FUNCTION THAT ECRYPTS TEXT-----
function encryptText (){ 
  let writtenText = written.value.toLowerCase(); //gets the text in the text area and converts it to lower case
  writtenText = writtenText //replaces all letters with text
  .replaceAll("e", "enter")
  .replaceAll("i", "imes")
  .replaceAll("o", "ober")
  .replaceAll("a", "ai")
  .replaceAll("u", "ufat");

  if (writtenText == '') { /* To work only if there's a text in textarea, else, show duck message */
  /* It's necessary to display:none right__response and copy because if not, the grid looks ulgy after encrypt or decrypt someting and use the button without text*/
    document.getElementById("right__instructions").style.display = "block"; //changes the visivility (using CSS display: none;)
    document.getElementById("right__response").style.display = "none"; //changes the visivility (using CSS display: none;)
    document.getElementById("copy").style.display = "none"; //changes the visivility (using CSS display: none;)
  } else {
    document.getElementById("right__instructions").style.display = "none"; //changes the visivility (using CSS display: none;)
    document.getElementById("right__response").style.display = "block"; //changes the visivility (using CSS display: block;)
    document.getElementById("copy").style.display = "block"; //changes the visivility (using CSS display: block;)
  }

  response.value = writtenText; //the text in response is now an encrypted text
  document.getElementById("text").value = ''; //deletes all the text in the written text area

}


//-----FUNCTION THAT DECRYPTS TEXT-----
function decryptText (){
  let writtenText = written.value.toLowerCase(); //gets the text in the text area and converts it to lower case
  writtenText = writtenText //replaces all letters with text
  .replaceAll("enter", "e")
  .replaceAll("imes", "i")
  .replaceAll("ober", "o")
  .replaceAll("ai", "a")
  .replaceAll("ufat", "u");

  if(writtenText == '') { /* To work only if there's a text in textarea, else, show duck message */
  /* It's necessary to display:none right__response and copy because if not, the grid looks ulgy after encrypt or decrypt someting and use the button without text*/
    document.getElementById("right__instructions").style.display = "block"; //changes the visivility (using CSS display: none;)
    document.getElementById("right__response").style.display = "none"; //changes the visivility (using CSS display: none;)
    document.getElementById("copy").style.display = "none"; //changes the visivility (using CSS display: none;)
  } else {
    /* It's necessary to display:none right__response and copy because if not, the grid looks ulgy after encrypt or decrypt someting and use the button without text*/
    document.getElementById("right__instructions").style.display = "none"; //changes the visivility (using CSS display: none;)
    document.getElementById("copy").style.display = "block"; //changes the visivility (using CSS display: block;)
    document.getElementById("right__response").style.display = "block"; //changes the visivility (using CSS display: block;)
  }


  response.value = writtenText; //the text in response is now an decrypted text

  document.getElementById("text").value = ''; //deletes all the text in the written text area

}
//-----FUNCTION THAT COPIES TEXT-----
function copyText () { /* copy function */
  let encryptedText = response.value; /* converts response.value, which is on the two functions, into encryptedText variable */
  navigator.clipboard.writeText(encryptedText); /* adds the encryptedText variable to the clipboard */
}

encrypt.onclick = encryptText; /* encrypt button */
decrypt.onclick = decryptText;  /* decrypt button */
copy.onclick = copyText; /* copy button */

