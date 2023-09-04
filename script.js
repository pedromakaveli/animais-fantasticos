const tabMenu = document.querySelectorAll('.js-tab-menu li');
const tabContent = document.querySelectorAll('.js-tab-content section');

function activeTab (index) {
    // Remove all class like "ativo"
    tabContent.forEach((section) => {
        section.classList.remove('active');
    })

    // Add the "active" class to the respective clicked index
    tabContent[index].classList.add('active');
}

tabMenu.forEach((itemMenu, index) => {
    // We create an arrow function with callback in the event and pass the index stored in forEach
    itemMenu.addEventListener('click', () => {
        activeTab(index);
    });
})