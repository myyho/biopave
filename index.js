document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll('.fade-in');
  
    const appearOptions = {
      threshold: 0.1, 
      rootMargin: "0px 0px -50px 0px" 
    };
  
    const appearOnScroll = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        // Nếu phần tử trượt ra khỏi vùng nhìn thấy (lướt đi)
        if (!entry.isIntersecting) {
          // Xóa class 'visible' để phần tử mờ và chìm xuống lại
          entry.target.classList.remove('visible');
        } else {
          // Nếu phần tử lọt vào vùng nhìn thấy (lướt đến)
          // Thêm class 'visible' để phần tử hiện lên
          entry.target.classList.add('visible');
          
          // Đã xóa lệnh observer.unobserve(...) ở đây để hiệu ứng lặp lại liên tục
        }
      });
    }, appearOptions);
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll('.ffade-in');
  
    const appearOptions = {
      threshold: 0.1, 
      rootMargin: "0px 0px -50px 0px" 
    };
  
    const appearOnScroll = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        // Nếu phần tử trượt ra khỏi vùng nhìn thấy (lướt đi)
        if (!entry.isIntersecting) {
          // Xóa class 'visible' để phần tử mờ và chìm xuống lại
          entry.target.classList.remove('visible');
        } else {
          // Nếu phần tử lọt vào vùng nhìn thấy (lướt đến)
          // Thêm class 'visible' để phần tử hiện lên
          entry.target.classList.add('visible');
          
          // Đã xóa lệnh observer.unobserve(...) ở đây để hiệu ứng lặp lại liên tục
        }
      });
    }, appearOptions);
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });