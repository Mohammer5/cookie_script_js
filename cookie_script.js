(function() {
  var cookieScriptAccepted = localStorage.getItem('cookie_script_accepted');
  if (cookieScriptAccepted === 'true') return console.log('cookieScriptAccepted is true');

  /**
   * Message
   */
  var message = 'Diese Website verwendet Cookies – nähere Informationen dazu und zu Ihren Rechten als Benutzer finden Sie in unserer Datenschutzerklärung am Ende der Seite. Klicken Sie auf „Ich stimme zu“, um Cookies zu akzeptieren und direkt unsere Website besuchen zu können.';
  var buttonText = 'Ok'

  /**
   * HTML elements
   */
  var container = document.createElement('div');
  var textContainer = document.createElement('div');
  var buttonContainer = document.createElement('div');
  var button = document.createElement('button');
  buttonContainer.appendChild(button);
  container.appendChild(textContainer);
  container.appendChild(buttonContainer);

  /**
   * insert message
   */
  textContainer.innerHTML = message;
  button.innerHTML = buttonText;

  /**
   * Style elements
   */
  Object.assign(
    container.style,
    {
      left: '0',
      width: '100%',
      bottom: '0',
      position: 'fixed',
      display: 'flex',
      padding: '16px',
      background: 'grey',
      boxSizing: 'border-box',
    }
  );

  Object.assign(
    textContainer.style,
    {
      paddingRight: '16px',
      boxSizing: 'border-box',
    }
  );

  /**
   * Event listenener
   */
  button.addEventListener('click', function() {
    localStorage.setItem('cookie_script_accepted', 'true')
    container.style.display = 'none';
  })

  /**
   * Inject cookie script into page
   */
  document.body.appendChild(container)
})()
