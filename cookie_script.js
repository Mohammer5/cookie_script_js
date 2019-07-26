(function() {
  var cookieScriptAccepted = localStorage.getItem('cookie_script_accepted');
  if (cookieScriptAccepted === 'true') return console.log('cookieScriptAccepted is true');

  /**
   * Message
   */
  var message_en = 'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies';
  var message_de = 'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies';
  var message = [ message_en, message_de ].join(' ');
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
