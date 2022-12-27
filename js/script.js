const written = document.getElementById("text"); //text area where user write
const response = document.getElementById("response"); //text area where user gets his encrypt/decrypt text
const encrypt = document.getElementById("button--encrypt"); // encrypt button
const decrypt = document.getElementById("button--decrypt"); // decrypt button
const copy = document.getElementById("copy"); //copy button

//-----FUNCTION THAT ECRYPTS TEXT-----
function encryptText (){ 
  let writtenText = written.value.toLowerCase(); //gets the text in the text area and converts it to lower case
  let encryptedText = writtenText //converts the writtenText to a variable encrypted
  .replaceAll("e", "enter") //replaces all letters with text
  .replaceAll("i", "imes")
  .replaceAll("o", "ober")
  .replaceAll("a", "ai")
  .replaceAll("u", "ufat");

  document.getElementById("nonResolved").style.visibility = "hidden"; //changes the visivility (using CSS visibility: hidden;)
  document.getElementById("copy").style.visibility = "visible"; //changes the visivility (using CSS visibility: visible;)

  response.value = encryptedText; //the text in response is now an encrypted text
  console.log(encryptedText);
  document.getElementById("text").value = ''; //deletes all the text in the written text area

}
//-----FUNCTION THAT DECRYPTS TEXT-----
function decryptText (){
  let encryptedText = written.value.toLowerCase(); //gets the text in the text area and converts it to lower case
  let writtenText = encryptedText //converts the writtenText to a variable decrypted
  .replaceAll("enter", "e") //replaces all letters with text
  .replaceAll("imes", "i")
  .replaceAll("ober", "o")
  .replaceAll("ai", "a")
  .replaceAll("ufat", "u");
// note: it's possible to use display: none;
  document.getElementById("nonResolved").style.visibility = "hidden"; //changes the visivility (using CSS visibility: hidden;)
  document.getElementById("copy").style.visibility = "visible"; //changes the visivility (using CSS visibility: visible;)

  response.value = writtenText; //the text in response is now an decrypted text

  document.getElementById("text").value = ''; //deletes all the text in the written text area

}
//-----FUNCTION THAT COPIES TEXT-----
function copyText () {
  let encryptedText = response.value;
  navigator.clipboard.writeText(encryptedText);
}

encrypt.onclick = encryptText;
decrypt.onclick = decryptText;

copy.onclick = copyText;

