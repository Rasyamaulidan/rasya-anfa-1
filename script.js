let li1 = document.getElementById('liproject1')
let li2 = document.getElementById('liproject2')
let li3 = document.getElementById('liproject3')
let li4 = document.getElementById('liproject4')
let boxweb = document.getElementById('boxweb')
let boxlogo = document.getElementById('boxlogo')
let boxgraphic = document.getElementById('boxgraphic')
let boxux = document.getElementById('boxux')


function clickTwitter() {
    alert('aku ga ada akun twitter kak');
}

// boxweb
function onClick1() {
  if('tombol klik ditekan') {
    boxweb.style.display = "block"
    boxlogo.style.display = "none"
    boxgraphic.style.display = "none"
    boxux.style.display = "none"
    li2.style.backgroundColor = "white"
    li2.style.color = "black"
    li3.style.backgroundColor = "white"
    li3.style.color = "black"
    li4.style.backgroundColor = "white"
    li4.style.color = "black"
    li1.style.backgroundColor = "red"
    li1.style.color = "white"
  }
}
// boxweb end

// boxlogo
function onClick2() {
  if('tombol klik ditekan') {
    boxlogo.style.display = "block"
    boxweb.style.display = "none"
    boxux.style.display = "none"
    boxgraphic.style.display = "none"
    li1.style.backgroundColor = "white"
    li1.style.color = "black"
    li3.style.backgroundColor = "white"
    li3.style.color = "black"
    li4.style.backgroundColor = "white"
    li4.style.color = "black"
    li2.style.backgroundColor = "red"
    li2.style.color = "white"
  }
}
// box logo end

// box graphic
function onClick3() {
  if('tombol klik ditekan') {
    boxgraphic.style.display = "block"
    boxweb.style.display = "none"
    boxlogo.style.display = "none"
    boxux.style.display = "none"
    li1.style.backgroundColor = "white"
    li1.style.color = "black"
    li2.style.backgroundColor = "white"
    li2.style.color = "black"
    li4.style.backgroundColor = "white"
    li4.style.color = "black"
    li3.style.backgroundColor = "red"
    li3.style.color = "white"
  }
}
// boxgraphic end

// boxux
function onClick4() {
  if('tombol klik ditekan') {
    boxux.style.display = "block"
    boxweb.style.display = "none"
    boxgraphic.style.display = "none"
    boxlogo.style.display = "none"
    li1.style.backgroundColor = "white"
    li1.style.color = "black"
    li3.style.backgroundColor = "white"
    li3.style.color = "black"
    li2.style.backgroundColor = "white"
    li2.style.color = "black"
    li4.style.backgroundColor = "red"
    li4.style.color = "white"
  }
}

// boxux end


// nav mobile

let home2 = document.getElementById('homenav2')
let about2 = document.getElementById('aboutnav2')
let project2 = document.getElementById('projectnav2')
let skill2 = document.getElementById('skillnav2')
let service2 = document.getElementById('servicenav2')
let contact2 = document.getElementById('contactnav2')
let upm1 = document.getElementById('upproject2')
let upm2 = document.getElementById('uphome2')
let upm3 = document.getElementById('upabout2')
let upm4 = document.getElementById('upskill2')
let upm5 = document.getElementById('upservice2')
let upm6 = document.getElementById('upcontact2')
let ul2 = document.getElementById('ulnav2')
let close = document.getElementById('close')
let bar = document.getElementById('bar')


function clickBar() {
  if('jika tombol di tekan'){
    bar.style.display = "none"
    close.style.display = "block"
    ul2.style.transition = "0.7s"
    ul2.style.marginLeft = "-30px"
  }
}
  function clickClose() {
    if('jika tombol di tekan') {
      close.style.display = "none"
      bar.style.display = "block"
      ul2.style.marginLeft = "-600px"
      ul2.style.transition = "1.5s"
    }
  }
  
  function navHome2() {
    if('tombol klik di tekan') {
      about2.style.color = "black"
      project2.style.color = "black"
      skill2.style.color = "black"
      service2.style.color = "black"
      contact2.style.color = "black"
      upm2.style.display = "block"
      close.style.display = "none"
      bar.style.display = "block"
      ul2.style.marginLeft = "-600px"
      ul2.style.transition = "1.5s"
    }
  }
  
  function navAbout2() {
    if('jika tombol di tekan') {
      about2.style.color = "red"
      home2.style.color = "black"
      project2.style.color = "black"
      skill2.style.color = "black"
      service2.style.color = "black"
      contact2.style.color = "black"
      upm3.style.display = "block"
      ul2.style.marginLeft = "-600px"
      ul2.style.transition = "1.5s"
      close.style.display = "none"
      bar.style.display = "block"
    }
  }
  
  function navProject2() {
    if('jika tombol di tekan') {
      project2.style.color = "red"
      home2.style.color = "black"
      about2.style.color = "black"
      skill2.style.color = "black"
      service2.style.color = "black"
      contact2.style.color = "black"
      upm1.style.display = "block"
      ul2.style.marginLeft = "-600px"
      ul2.style.transition = "1.5s"
      close.style.display = "none"
      bar.style.display = "block"
    }
  }
  
  function navSkill2() {
    if('jika tombol di tekan') {
      skill2.style.color = "red"
      home2.style.color = "black"
      project2.style.color = "black"
      about2.style.color = "black"
      service2.style.color = "black"
      contact2.style.color = "black"
      upm4.style.display = "block"
      ul2.style.marginLeft = "-600px"
      ul2.style.transition = "1.5s"
      close.style.display = "none"
      bar.style.display = "block"
    }
  }
  
  function navService2() {
    if('jika tombol di tekan') {
      service2.style.color = "red"
      home2.style.color = "black"
      project2.style.color = "black"
      skill2.style.color = "black"
      about2.style.color = "black"
      contact2.style.color = "black"
      upm5.style.display = "block"
      ul2.style.marginLeft = "-600px"
      ul2.style.transition = "1.5s"
      close.style.display = "none"
      bar.style.display = "block"
    }
  }
  
  function navContact2() {
    if('jika tombol di tekan') {
      contact2.style.color = "red"
      home2.style.color = "black"
      project2.style.color = "black"
      skill2.style.color = "black"
      service2.style.color = "black"
      about2.style.color = "black"
      upm6.style.display = "block"
      ul2.style.marginLeft = "-600px"
      ul2.style.transition = "1.5s"
      close.style.display = "none"
      bar.style.display = "block"
    }
  } 
  
  
  function upHome2() {
    if('jika tombol di tekan') {
      home2.style.color = "black"
      upm2.style.display = "none"
      ul2.style.display = "block"
      close.style.display = "block"
      bar.style.display = "none"
      ul2.style.transition = "0.7s"
      ul2.style.marginLeft = "-30px"
    }
  }
  
  function upAbout2() {
    if('jika tombol di tekan') {
      about2.style.color = "black"
      upm3.style.display = "none"
      ul2.style.transition = "0.7s"
      ul2.style.marginLeft = "-30px"
      close.style.display = "block"
      bar.style.display = "none"
    }
  }
  
  function upProject2() {
    if('jika tombol di tekan') {
      project2.style.color = "black"
      upm1.style.display = "none"
      ul2.style.transition = "0.7s"
      ul2.style.marginLeft = "-30px"
      close.style.display = "block"
      bar.style.display = "none"
    }
  }
  
  function upSkill2() {
    if('jika tombol di tekan') {
      skill2.style.color = "black"
      upm4.style.display = "none"
      ul2.style.transition = "0.7s"
      ul2.style.marginLeft = "-30px"
      close.style.display = "block"
      bar.style.display = "none"
    }
  }
  
  function upService2() {
    if('jika tombol di tekan') {
      service2.style.color = "black"
      upm5.style.display = "none"
      ul2.style.transition = "0.7s"
      ul2.style.marginLeft = "-30px"
      close.style.display = "block"
      bar.style.display = "none"
    }
  }
  
  function upContact2() {
    if('jika tombol di tekan') {
      contact2.style.color = "black"
      upm6.style.display = "none"
      ul2.style.transition = "0.7s"
      ul2.style.marginLeft = "-30px"
      close.style.display = "block"
      bar.style.display = "none"
    }
  }
// nav mobile end

let home = document.getElementById('homenav')
let about = document.getElementById('aboutnav')
let project = document.getElementById('projectnav')
let skill = document.getElementById('skillnav')
let service = document.getElementById('servicenav')
let contact = document.getElementById('contactnav')
let up1 = document.getElementById('upproject')
let up2 = document.getElementById('uphome')
let up3 = document.getElementById('upabout')
let up4 = document.getElementById('upskill')
let up5 = document.getElementById('upservice')
let up6 = document.getElementById('upcontact')
let ul = document.getElementById('ulnav')


  // nav desktop
    function navHome() {
      if('tombol klik di tekan') {
        about.style.color = "black"
        project.style.color = "black"
        skill.style.color = "black"
        service.style.color = "black"
        contact.style.color = "black"
        up2.style.display = "block"
      }
    }
    
    function navAbout() {
      if('jika tombol di tekan') {
        about.style.color = "red"
        home.style.color = "black"
        project.style.color = "black"
        skill.style.color = "black"
        service.style.color = "black"
        contact.style.color = "black"
        up3.style.display = "block"
      }
    }
    
    function navProject() {
      if('jika tombol di tekan') {
        project.style.color = "red"
        home.style.color = "black"
        about.style.color = "black"
        skill.style.color = "black"
        service.style.color = "black"
        contact.style.color = "black"
        up1.style.display = "block"
      }
    }
    
    function navSkill() {
      if('jika tombol di tekan') {
        skill.style.color = "red"
        home.style.color = "black"
        project.style.color = "black"
        about.style.color = "black"
        service.style.color = "black"
        contact.style.color = "black"
        up4.style.display = "block"
      }
    }
    
    function navService() {
      if('jika tombol di tekan') {
        service.style.color = "red"
        home.style.color = "black"
        project.style.color = "black"
        skill.style.color = "black"
        about.style.color = "black"
        contact.style.color = "black"
        up5.style.display = "block"
      }
    }
    
    function navContact() {
      if('jika tombol di tekan') {
        contact.style.color = "red"
        home.style.color = "black"
        project.style.color = "black"
        skill.style.color = "black"
        service.style.color = "black"
        about.style.color = "black"
        up6.style.display = "block"
      }
    } 
    
    
    function upHome() {
      if('jika tombol di tekan') {
        home.style.color = "black"
        up2.style.display = "none"
      }
    }
    
    function upAbout() {
      if('jika tombol di tekan') {
        about.style.color = "black"
        up3.style.display = "none"
      }
    }
    
    function upProject() {
      if('jika tombol di tekan') {
        project.style.color = "black"
        up1.style.display = "none"
      }
    }
    
    function upSkill() {
      if('jika tombol di tekan') {
        skill.style.color = "black"
        up4.style.display = "none"
      }
    }
    
    function upService() {
      if('jika tombol di tekan'){
        service.style.color = "black"
        up5.style.display = "none"
      }
    }
    
    function upContact() {
      if('jika tombol di tekan') {
        contact.style.color = "black"
        up6.style.display = "none"
      }
    }
  // nav desktop end




// kirim email
emailjs.init('hW5JjVlsJ1LlWKn0h')
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_no76yf6';
   const templateID = 'template_kfisxw9';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('mantap, email berhasil dikirim cuy!');
    }, (err) => {
      btn.value = 'Send Email';
      alert('waduh, emailnya tidak bisa terikirim. kayaknya kuotanya abis tuh kak');
    });
});

// alert(JSON.stringify(err))

// var nodemailer = require('nodemailer');
// var transporter = nodemailer.createTransport({
//   service : 'gmail',
//   auth:{
//     user:'hasnailal07@gmail.com',
//     pass:'rasya29aja'
//   }
// });

// var mailOptions = {
//   from: name,
//   subject: email,
//   text: message
// };

// // eksekusi variabel
// transporter.sendMail(mailOptions,function(error,info){
//   if(error){
//     alert('error bang, isi dulu dong!')
//   }else{
//     alert('mantap, email berhasil dikirim :'+info.response);
//   }
// })