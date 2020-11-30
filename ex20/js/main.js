const APP = {
  KEY: 'abcd0001-ex20',
  images: [],
  init() {
    APP.getStorage();
    //NEW - change to 2 listeners, one for getData and one for nav change
    document.body.addEventListener('click', APP.getData);
  },
  getStorage() {
    let storage = localStorage.getItem(APP.KEY);
    if (storage) {
      APP.images = JSON.parse(storage);
      if (APP.images.length > 0) {
        let last = APP.images[APP.images.length - 1];
        APP.showImage(last);
      } else {
        APP.getData();
      }
    } else {
      APP.getData();
    }
  },
  showLoading() {
    let p = document.createElement('p');
    p.className = 'loading';
    let main = document.getElementById('content');
    p.textContent = `Just wait. Geeeez. So impatient. It's your network.`;
    main.appendChild(p);
  },
  hideLoading() {
    let p = document.querySelector('.loading');
    let main = document.getElementById('content');
    main.removeChild(p);
  },
  showImage(obj) {
    let main = document.getElementById('content');
    main.innerHTML = '';
    let img = document.createElement('img');
    img.addEventListener('load', (ev) => {
      APP.hideLoading();
      main.appendChild(img);
    });
    img.addEventListener('error', (err) => {
      APP.hideLoading();
      //show error message...
    });
    img.src = obj.image;
    img.alt = obj.link;
  },
  showNav() {
    //show all the urls - use new URL() to get filename
    let nav = document.getElementById('img-list');
    //NEW
  },
  getData() {
    const URL = `https://randomfox.ca/floof/`;
    fetch(req)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          //did not get a HTTP 200 Status
          throw new Error(`ERROR: ${resp.status} ${resp.statusText}`);
        }
      })
      .then((data) => {
        APP.showImage(data);
        APP.images.push(data);
        //NEW
        APP.showNav();
        //NEW
        localStorage.setItem(APP.KEY, JSON.stringify(APP.images));
      })
      .catch((err) => {
        //handle the error
        alert(err);
      });
  },
};

document.addEventListener('DOMContentLoaded', APP.init);
