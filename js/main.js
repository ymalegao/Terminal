var github = "https://github.com/ymalegao/";
var games = {"Twisted Wizard": "http://yashie.me/Twisted-Wizard/", 'Shloka':"https://github.com/siddu1998/Shloka"}
function handleInput(event) {
    if (event.key === "Enter") {
        const inputElement = document.getElementById("commandInput");
        const command = inputElement.value;
      
        commander(command);
        inputElement.value = "";

    }
}

async function commander(command) {
    const outputContainer = document.getElementById("outputContainer");
    const inputElement = document.getElementById("commandInput");

    // Set the prompt and command
    const promptAndCommand = '<div>visitor@yashportfolio:~$ ' + command + '</div>';

    // Clear the input field for the next command
    inputElement.value = "";

    switch (command.toLowerCase()) {
        case 'ls':
            console.log("calling here");
            // Simulate an asynchronous operation (replace this with your actual logic)
            await new Promise(resolve => setTimeout(resolve, 100));
            // Add your 'ls' logic here
            outputContainer.innerHTML += promptAndCommand + '<div>about\nprojects\nresume\nresearch\ngames</div>';
            break;
        case 'about':
            // Print little about section
            break;
        case 'projects':
            // Quick little project summary
            break;
        case 'resume':
            // Resume link
            break;
        case 'research':
            // Talk about research and papers
            break;
        case 'games':
            await new Promise(resolve => setTimeout(resolve, 100));
            outputContainer.innerHTML+= promptAndCommand;
            for (var key in games){
                outputContainer.innerHTML+= key + ' <a id="gamelink" href="' + games[key] + '" target="_blank"> ' + games[key] + "</a> " + '<br>';
            }


            
            
            
            break;
        case 'clear':
            location.reload()
        case 'github':
            await new Promise(resolve => setTimeout(resolve, 100));
            outputContainer.innerHTML+= promptAndCommand;
            outputContainer.innerHTML+='github <a href="' + github + '" target="_blank">    github/ymalegao' + "</a>";
            break;
        default:
            outputContainer.innerHTML += promptAndCommand + '<div>Command not recognized. Type "help" for available commands.</div>';
            break;
    }
}




function resetPrompt() {
    const promptElement = document.getElementById("prompt");

    // Reset the prompt
    promptElement.innerHTML = '<div>visitor@yashportfolio:~$</div>';
    promptElement.style.display = 'block';

    // Clear the input field for the next command
    document.getElementById("commandInput").value = "";
}

