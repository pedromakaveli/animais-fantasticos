function initTabNav () {
    const tabMenu = document.querySelectorAll('.js-tab-menu li');
    const tabContent = document.querySelectorAll('.js-tab-content section');
    
    if (tabMenu && tabContent) {
        tabContent[0].classList.add('active');
    
        function activeTab (index) {
            tabContent.forEach((item) => {
                item.classList.remove('active');
            })
        
            tabContent[index].classList.add('active');
        }
        
        tabMenu.forEach((item, index) => {
            item.addEventListener('click', () => {
                activeTab(index);
            })
        })
    }
}

initTabNav();