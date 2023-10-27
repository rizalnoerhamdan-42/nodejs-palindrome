String.prototype.checkPalindrome = function() {
   var len = this.length-1;
   for (var i = 0; i <= len; i++) {
      if (this.charAt(i) !== this.charAt(len-i)) {
         return false;
      }
	  
      if (i === (len-i)) {
         return true;
      }
   }
   return true;
};

String.prototype.palindromeAdv = function() {
   var r = this.split("").reverse().join("");
   return (r === this.valueOf());
}

var word_list = ["kapak",
               "katak",
               "mom",
               "mahal",
               "isi",
               "marah",
			   "sinis",
			   "kodok"
			 ];

for (var i = 0; i < word_list.length; i++) {
   var phrase = word_list[i];
   if (phrase.checkPalindrome()) {
      console.log("'" + phrase + "' Bukan palindrome");
   }else{
      console.log("'" + phrase + "' Bukan palindrome");
   }
}