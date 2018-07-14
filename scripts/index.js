$( document ).ready(function() {

  // Accordian Tabs
  $('.accordian-tabs__container').on('click', 'button', changeTab);
  $('.view-code').on('click', openCodePen);

  function changeTab(event) {
    const selectedTab = event.currentTarget.name;
    $(this)[0].classList.toggle('selected');

    const allTabs = $('.accordian-tabs__container button');
    allTabs.each(function() {
      if ($(this)[0].name !== selectedTab) {
        $(this)[0].classList.remove('selected');
      }
    })

    showTabContent(selectedTab);
  }

  function showTabContent(selectedTab) {
    const allTabSections = $('.accordian-tabs__body');

    allTabSections.each(function() {
      if ($(this)[0].id !== selectedTab) {
        $(this)[0].classList.add('hidden');
      } else {
        $(this)[0].classList.remove('hidden');
      }
    })
  }

  function openCodePen(event) {
    const buttonClicked = $(this)[0].name;
    switch (buttonClicked) {
      case 'accordian-tabs':
        window.open('https://codepen.io/danielafcarey/pen/vroMvd', '_blank')
        break;
      case 'flexible-cards':
        window.open('https://codepen.io/danielafcarey/pen/wXVboV', '_blank')
        break;
      case 'header-bar':
        window.open('https://codepen.io/danielafcarey/pen/KeOLaV', '_blank')
        break;
    }
  }


  // Flexible Cards



  // Header Bar



});
