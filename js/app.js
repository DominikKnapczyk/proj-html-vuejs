const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      
      data: {
        menuItems: [
          { title: 'HOME', dropdown: true, showDropdown: false },
          { title: 'PAGES', dropdown: true, showDropdown: false },
          { title: 'TOURNAMENT', dropdown: false, showDropdown: false },
          { title: 'SHOP', dropdown: true, showDropdown: false },
          { title: 'BLOG', dropdown: true, showDropdown: false },
          { title: 'CONTACT', dropdown: false, showDropdown: false }
        ],
        subItems: [
          { title: 'About Us' },
          { title: 'Matches' },
          { title: 'Team' },
          { title: 'Squad' },
          { title: 'Squad Details' },
          { title: 'Coming Soon' },
          { title: '404' }
        ],
        
        cartCount: 0,
        showCart: false,
      }
    };
  },


  methods: {
    toggleDropdown(index) {
      this.data.menuItems[index].showDropdown = !this.data.menuItems[index].showDropdown;
    },

    toggleCart() {
      this.data.showCart = !this.data.showCart;
      console.log(this.showCart)
    },

  }
}).mount("#app");