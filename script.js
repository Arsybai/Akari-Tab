
document.addEventListener('DOMContentLoaded', () => {
    const dateElement = document.getElementById('date');
    
    // Dapatkan tanggal saat ini
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'long' }); // Nama bulan
    const year = now.getFullYear();
    
    // Fungsi untuk menentukan akhiran hari (st, nd, rd, th)
    const getDaySuffix = (day) => {
        if (day > 3 && day < 21) return 'th'; // 4th - 20th
        switch (day % 10) {
            case 1: return 'st'; // 1st
            case 2: return 'nd'; // 2nd
            case 3: return 'rd'; // 3rd
            default: return 'th'; // 4th, 5th, ...
        }
    };
    
    // Tetapkan HTML ke elemen #date
    dateElement.innerHTML = `
    <div style="font-size: 26px;">${month}</div>
    <div style="font-size: 34px;">${day}<sub>${getDaySuffix(day)}</sub></div>
    <div style="font-size: 24px;">${year}</div>
    `;

    document.addEventListener('mousemove', (e) => {
        const layers = document.querySelectorAll('.layer');
        const speed = [0.005, 0.01, 0.025];
    
        layers.forEach((layer, index) => {
            const x = (window.innerWidth - e.pageX) * speed[index];
            const y = (window.innerHeight - e.pageY) * speed[index];
            layer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        });
    });

    const greetingElement = document.getElementById('greetings');
    
    // Dapatkan waktu saat ini
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const time = `${hours}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;

    // Tentukan salam berdasarkan waktu
    const getGreeting = (hours) => {
        if (hours < 12) return 'Good Morning';
        if (hours < 18) return 'Good Afternoon';
        return 'Good Evening';
    };

    // Pilih kutipan acak
    const quotes = [
        'Keep pushing forward!',
        'Make today amazing!',
        'Every day is a second chance.',
        'You’re capable of more than you know.',
        'Dream big, work hard!'
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Tetapkan HTML ke elemen #greeting
    greetingElement.innerHTML = `
        <div class="top-bar">
            <div class="greeting">
                <h1>${getGreeting(hours)}</h1> <!-- Salam berdasarkan waktu -->
                <p>${time}</p> <!-- Waktu saat ini -->
            </div>
            <div class="quote">${randomQuote}</div>
        </div>
        <div class="main-info">
            <h2>Abe.dev</h2>
        </div>
    `;
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
});

"use strict";function __weatherwidget_init(){var a=document.getElementsByClassName("weatherwidget-io"),i=[];if(0!==a.length){for(var t=function(t){var e=a[t],o={};o.id="weatherwidget-io-"+t,o.href=e.href,o.label_1=e.getAttribute("data-label_1"),o.label_2=e.getAttribute("data-label_2"),o.font=e.getAttribute("data-font"),o.icons=e.getAttribute("data-icons"),o.mode=e.getAttribute("data-mode"),o.days=e.getAttribute("data-days"),o.theme=e.getAttribute("data-theme"),o.basecolor=e.getAttribute("data-basecolor"),o.accent=e.getAttribute("data-accent"),o.textcolor=e.getAttribute("data-textcolor"),o.textAccent=e.getAttribute("data-textAccent"),o.highcolor=e.getAttribute("data-highcolor"),o.lowcolor=e.getAttribute("data-lowcolor"),o.suncolor=e.getAttribute("data-suncolor"),o.mooncolor=e.getAttribute("data-mooncolor"),o.cloudcolor=e.getAttribute("data-cloudcolor"),o.cloudfill=e.getAttribute("data-cloudfill"),o.raincolor=e.getAttribute("data-raincolor"),o.snowcolor=e.getAttribute("data-snowcolor"),o.windcolor=e.getAttribute("data-windcolor"),o.fogcolor=e.getAttribute("data-fogcolor"),o.thundercolor=e.getAttribute("data-thundercolor"),o.hailcolor=e.getAttribute("data-hailcolor"),o.dayscolor=e.getAttribute("data-dayscolor"),o.tempcolor=e.getAttribute("data-tempcolor"),o.desccolor=e.getAttribute("data-desccolor"),o.label1color=e.getAttribute("data-label1color"),o.label2color=e.getAttribute("data-label2color"),o.shadow=e.getAttribute("data-shadow"),o.scale=e.getAttribute("data-scale"),(r=document.getElementById(o.id))&&e.removeChild(r),i[o.id]=document.createElement("iframe"),i[o.id].setAttribute("id",o.id),i[o.id].setAttribute("class","weatherwidget-io-frame"),i[o.id].setAttribute("title","Weather Widget"),i[o.id].setAttribute("scrolling","no"),i[o.id].setAttribute("frameBorder","0"),i[o.id].setAttribute("width","100%"),i[o.id].setAttribute("src","https://weatherwidget.io/w/"),i[o.id].style.display="block",i[o.id].style.position="absolute",i[o.id].style.top="0",i[o.id].onload=function(){i[o.id].contentWindow.postMessage(o,"https://weatherwidget.io")},e.style.display="block",e.style.position="relative",e.style.height="150px",e.style.padding="0",e.style.overflow="hidden",e.style.textAlign="left",e.style.textIndent="-299rem",e.appendChild(i[o.id])},e=0,o=Math.min(a.length,10);e<o;e++){var r;t(e)}window.addEventListener("message",function(t){"https://weatherwidget.io"===t.origin&&i[t.data.wwId]&&i[t.data.wwId].parentNode&&(i[t.data.wwId].style.height=t.data.wwHeight+"px",i[t.data.wwId].parentNode.style.height=t.data.wwHeight+"px")})}else setTimeout(__weatherwidget_init,1500)}setTimeout(__weatherwidget_init,100);