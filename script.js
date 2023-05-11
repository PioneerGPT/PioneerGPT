// Let's code our chatbot's logic!
function IsEnter()
{
	var TextBox_val = document.getElementById("InputBox").value; // Get all the data from the input box.

	// If enter key is pressed then only respond.
	if (TextBox_val != "")
	{
		if (event.keyCode == 13)
			main();
	}
}

function main()
{
	// the main logic will be coded here.
	var TextBox_val = document.getElementById("InputBox").value; // Get all the data from the input box.
	var ResponseText_val = document.getElementById("ResponseText"); // Get all the data from the response text.

	var FormatInput = TextBox_val.toLowerCase().trim(); // convert our given input to lowercase.
	
	if (FormatInput.includes("hi") || FormatInput.includes("hello"))
		ResponseText_val.innerHTML = "Hello!";

	else if (FormatInput.includes("how are you"))
		ResponseText_val.innerHTML = "I'm fine! Thanks for asking!";

        else if (FormatInput.includes("where are you from"))
       ResponseText_val.innerHTML = "I am from the Milky Way Galaxy";

       else if (FormatInput.includes("what is the capital of russia"))
       {	
           ResponseText_val.innerHTML ="The capital of Russia is Moscow";
        }
        else if (FormatInput.includes("what is the capital of india"))
        {	
            ResponseText_val.innerHTML ="The capital of India is New Delhi";
         }
    
         else if (FormatInput.includes("what is the capital of usa"))
         {	
             ResponseText_val.innerHTML ="The capital of USA is Washington DC";
          }

          else if (FormatInput.includes("what is the capital of pakistan"))
          {	
              ResponseText_val.innerHTML ="The capital of Pakistan is Islamabad";
           }

           else if (FormatInput.includes("what is the capital of vietnam"))
           {	
               ResponseText_val.innerHTML ="The capital of Vietnam is Haiong";
            }

            else if (FormatInput.includes("what is the capital of canada"))
            {	
                ResponseText_val.innerHTML ="The capital of Canada is Ottawa";
             }

             else if (FormatInput.includes("what is the capital of china"))
             {	
                 ResponseText_val.innerHTML ="The capital of China is Bejing ";
              }
              else if (FormatInput.includes("what is the capital of brazil"))
              {	
                  ResponseText_val.innerHTML ="The capital of Brazil is Brasilia ";
               }
               else if (FormatInput.includes("what is the capital of venezuela"))
               {	
                   ResponseText_val.innerHTML ="The capital of Venzuela is Caracas ";
                }
                else if (FormatInput.includes("what is the capital of argentina"))
                {	
                    ResponseText_val.innerHTML ="The capital Argenttina is Buenos Aires ";
                 }
                 else if (FormatInput.includes("what is the capital of ecuador"))
                 {	
                     ResponseText_val.innerHTML ="The capital of Ecuador is Quiota ";
                  }

                  else if (FormatInput.includes("what is the capital of chile"))
                  {	
                      ResponseText_val.innerHTML ="The capital of Chile is Santiago ";
                   }
             
     
            
    
           
   
          
  

         
 


    

	// Open websites!
	else if (FormatInput.includes("search"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening Google";
		window.open("https://www.google.com", "_blank");
	}

    else if (FormatInput.includes("play a song"))
    {	
        ResponseText_val.innerHTML ="Playing Never Gonna Give You Up by Rick Astley ";
        window.open("https://youtu.be/dQw4w9WgXcQ" , "_blank")
     }



	else if (FormatInput.includes("open youtube"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening YouTube";
		window.open("https://www.youtube.com", "_blank");
	}

	else if (FormatInput.includes("open wikipedia"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening Wikipedia";
		window.open("https://wikipedia.com", "_blank");
	}

	else if (FormatInput.includes("mrbeast"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening MrBeast on YouTube";
		window.open("https://www.youtube.com/@MrBeast/videos", "_blank");
	}
 
 

	else
		ResponseText_val.innerHTML = "Sorry, I can't understand you 😔"; }