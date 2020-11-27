const APP = {
  currentPage: 'home',
  init() {
    //when the app loads...
    APP.addListeners();
    // history.replaceState({}, null, '/');
  },
  nav(ev) {
    //called when a.navlink is click
    console.log('click event');
    // let hash = new URL(ev.target.href).hash;
    // console.log({ hash });
    // let state = { timmy: Date.now() };
    // let title = null;
    // history.pushState(state, title, hash);
    // APP.switchPage(hash);
  },
  switchPage(hash) {
    // document.querySelector('.active').classList.remove('active');
    // APP.currentPage = hash.replace('#', '');
    // if (!document.getElementById(APP.currentPage)) {
    //   APP.currentPage = 'home';
    //   history.replaceState({}, null, '#home');
    // }
    // document.getElementById(APP.currentPage).classList.add('active');
  },
  addListeners() {
    window.addEventListener('popstate', APP.popped);
    window.addEventListener('hashchange', APP.hashed);
    document.body.addEventListener('click', (ev) => {
      if (ev.target.classList.contains('navlink')) {
        // ev.preventDefault();
        APP.nav(ev);
      }
    });
  },
  popped(ev) {
    //popstate event called - not on initial loads
    console.log('popstate event');
    //capture the new hash and call the nav
  },
  hashed(ev) {
    //hashchange event called
    console.log('hashchange event');
    //capture the new hash and call the nav
    // let hash = location.hash.replace('#', '');
    // APP.switchPage(hash);
  },
};

document.addEventListener('DOMContentLoaded', APP.init);

/*
REFERENCE 

history.pushState(state, title, url) - change value in location bar without navigating
history.replaceState(state, title, url) - change value in location bar without navigating

history.go(-1) - actually navigate through the history array
history.back() - actually navigate through the history array

location.href - full url
location.hash - #fragment-identifier
location.search - querystring
location.pathname - folder(s) and file name
location.protocol - http: or https:
location.origin - https://www.example.org:80
location.port - 80
location.hostname - www.example.com
location.host - hostname plus port, if specified

window.addEventListener('popstate', (ev)=>{
  //when a history.go or history.back is called
  //or when user clicks an anchor or form submit button to trigger location change
  //basically, when the user navigates through the history array
});

window.addEventListener('hashchange', (ev)=>{
  //fired when the fragment identifier has changed
})

navElement.addEventListener('click', (ev)=>{
  ev.preventDefault();
  //stop the link and handle the navigation internally
})
*/
