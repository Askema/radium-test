const title = document.querySelector('.main__title');

const onTitleClick = (evt) => {
  evt.preventDefault();
  title.classList.add('main__title--click');
}

const onTitleSpaceKeydown = (evt) => {
  evt.preventDefault();
  if ( evt.keyCode == 32 ) {
    console.log( 'space pressed' );
    title.parentNode.removeChild(title);
}
  document.removeEventListener('keydown', onTitleSpaceKeydown);
};

title.addEventListener('click', onTitleClick);
document.addEventListener('keydown', onTitleSpaceKeydown);

$(document).keydown(function(e) {
  if (e.keyCode == 27) {
      window.close();
  }
});
