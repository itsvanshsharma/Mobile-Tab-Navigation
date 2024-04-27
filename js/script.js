const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');
const frame = document.querySelector('.frame');
const menuFrame = document.querySelector('.menu iframe');
const phoneContent = document.querySelector('.phone-content');

let frameVisible = true;

listItems.forEach((item, idx) => {
  item.addEventListener('click', () => {
    hideAllContents();
    hideAllItems();

    item.classList.add('active');
    contents[idx].classList.add('show');

    // Toggle the visibility of the frame
    if (idx === 0) {
      if (!frameVisible) {
        frame.style.display = 'block';
        frameVisible = true;
      }
    } else {
      frame.style.display = 'none';
      frameVisible = false;
    }

    // Show or hide the menu frame
    if (idx === 3) {
      menuFrame.style.display = 'block';
    } else {
      menuFrame.style.display = 'none';
    }

    // Scroll to the top of the content
    // phoneContent.scrollTop = 0;
  });
});

function hideAllContents() {
  contents.forEach(content => content.classList.remove('show'));
}

function hideAllItems() {
  listItems.forEach(item => item.classList.remove('active'));
}

function setActiveTab(activeTab) {
  const tabs = document.getElementById('nav-tabs').children;

  // Remove the active class from all tabs
  for (let tab of tabs) {
    tab.classList.remove('text-blue-500');
    tab.classList.add('text-gray-700');
  }

  // Add the active class to the selected tab
  activeTab.classList.remove('text-gray-700');
  activeTab.classList.add('text-blue-500');
}

