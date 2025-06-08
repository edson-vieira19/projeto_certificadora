class MobileNavBar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleClick(){

      this.navList.classList.toggle(this.activeClass);

  }

  closeMenu(){
    this.navList.classList.remove(this.activeClass);
    this.mobileMenu.classList.remove(this.activeClass);
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);


    this.navLinks.forEach(link => {
      link.addEventListener("click", this.closeMenu);
    });

  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavBar = new MobileNavBar(
        ".mobile-menu",
        ".nav-list",
        ".nav-list li",
    );

mobileNavBar.init();