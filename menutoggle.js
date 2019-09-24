    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    const menuToggle = document.querySelector('.icon');
    menuToggle.addEventListener('click', () => {
      const topnavMenu = document.querySelector('.topnav-content');
      if (topnavMenu.className === 'topnav-content') {
        topnavMenu.className += ' responsive';
      } else {
        topnavMenu.className = 'topnav-content';
      }
    });