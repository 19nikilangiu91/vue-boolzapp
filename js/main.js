const { createApp } = Vue

  createApp({
    data() {
      return {
        title: "Hello to Everyone!",
        myClass: "red",
        myImage: "media", 
        myMedia: "https://unsplash.it/600/300?image=171",
      }
    }
}).mount("#myApp")