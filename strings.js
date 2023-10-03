function strings()
{
  var str1 = document.getElementById("initString").value;

  str1 = str1.toLowerCase(); //making the string lower case

  var splitString = str1.split("");
  //used to get each character of a string idividually
  var reverseString = splitString.reverse();
  //reverse the individual characters of the string
  var joinString = reverseString.join("");
  //bring the reversed characters of the string back together into a new string
  if (str1 == joinString) //logic check if the original string is the same as the reversed string
  {
    document.getElementById("updated string").innerHTML = "This is a palindrome"
   // Message if a string is a palindrome
  }
  else
  {
    document.getElementById("updated string").innerHTML = "This is not a palindrome"
    //Message returned if a string is not a palindrome
  }
}