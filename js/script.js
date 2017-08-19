/* jshint esversion: 6 */

(function(){
  const textContainer = document.querySelector('#textContainer');
  const goButton = document.querySelector('#goButton');
  const voiceList = responsiveVoice.getVoices();
  const voiceDropdown = document.querySelector('#dropDown');
  const dropdownList = document.querySelector('#dropdown1');

  let soundPlaying = false;
  let content = '';
  let voice;

  for(let i = 0; i < voiceList.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = voiceList[i].name;
    dropdownList.appendChild(listItem);
  }

  goButton.addEventListener('click', function(event) {
    if(voice) {
      textContainer.childNodes.forEach(node => {
      switch(node.nodeName.toLowerCase()) {
          case('span'):
            content += node.textContent;
            break;
          case('div'):
            content += node.childNodes[1].value;
            break;
          default:
            console.log('Don\'t need this value.');
            break;
        }
      });
      responsiveVoice.speak(content, voice);
      content = '';
    } else {
      alert('Hey select a voice dummie!');
    }
  });

  dropdownList.addEventListener('click', (e) => {
    voice = e.target.textContent;
  });



  function disableButton() {
    goButton.disabled = true;
  }

  function enableButton() {
    goButton.disabled = false;
  }
}());