class SpecialHead extends HTMLElement {
    connectedCallback(){
        this.innerHTML= `
        <head>
      <!-- basic -->
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!-- mobile metas -->
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="viewport" content="initial-scale=1, maximum-scale=1">
      <!-- site metas -->
      <title>Vishal Sirpa Saalai</title>
      <meta name="keywords" content="Vishal Sirpa Saalai, Coimbatore, Karamadai, 9894654914">
      <meta name="description" content="Vishal SirpaSaalai specializes in creating exquisite Kovil-related products, including Gold Plated Sirpam, Silver Plated Sirpam, Kovil Kalasam, Kovil Nilavu, Prabalayam, Kodi Maram, and Aaipon Silai. With decades of skilled craftsmanship, we deliver authentic temple artifacts across multiple locations. Contact us to preserve and enrich temple traditions with divine artistry. Coimbatore, Karamadai, 9894654914">
      <meta name="author" content="Marthandavarman">
      <!-- bootstrap css -->
      <link rel="stylesheet" href="css/bootstrap.min.css">
      <!-- style css -->
      <link rel="stylesheet" href="css/style.css">
      <!-- Responsive-->
      <link rel="stylesheet" href="css/responsive.css">
      <!-- fevicon -->
      <link rel="icon" href="images/logo.png" type="image/gif/png" />
      <!-- Scrollbar Custom CSS -->
      <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css">
      <!-- Tweaks for older IEs-->
      <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen">

   </head>

        `
    }
}

class SpecialHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML= `
        <header>
         <!-- header inner -->
         <div class="header">
            <div class="container-fluid">
               <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
                     <!-- Logo -->
                     <div class="logo">
                        <a href="index.html">
                              <img src="./images/logo.png" style="height: 120px; width:120px;" alt="Vishal Sirpa Saalai">
                        </a>
                     </div>                     
                     <!-- Company Name (Next to Logo) -->
                     <div class="ml-3">
                        <a href="index.html" class="text-dark text-decoration-none">
                              <h1 class="mb-0"><b>Vishal Sirpa Saalai</b></h1>
                        </a>
                     </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 ">
                     <nav class="navigation navbar navbar-expand-md navbar-dark ">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarsExample04">
                           <ul class="navbar-nav mr-auto">
                              <li class="nav-item active">
                                 <a class="nav-link" href="index.html">Home</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="products.html">Our Products</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="aboutus.html">About Us</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="contact.html">Contact Us</a>
                              </li>
                              <!-- <li class="nav-item d_none login_btn">
                                 <a class="nav-link" href="#">Login</a>
                              </li>
                              <li class="nav-item d_none">
                                 <a class="nav-link" href="#">Register</a>
                              </li>
                              <li class="nav-item d_none sea_icon">
                                 <a class="nav-link" href="#"><i class="fa fa-shopping-bag" aria-hidden="true"></i><i class="fa fa-search" aria-hidden="true"></i></a>
                              </li> -->
                           </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </header>
        `
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML= `      
        <footer>
         <div class="footer">
            <div class="container">
               <div class="row">
                  <div class="col-md-12">
                     <ul class="location_icon">
                        <li><a href="https://maps.app.goo.gl/gh5Zeog1XcF1K6Cu7"><i class="fa fa-map-marker" aria-hidden="true"></i></a><br> Karamadai</li>
                        <li><a href="tel:+919894654914"><i class="fa fa-phone" aria-hidden="true"></i></a><br> +91 9894654914</li>
                        <li><a href="mailto:narasimhavishal@gmail.com"><i class="fa fa-envelope" aria-hidden="true"></i></a><br> narasimhavishal@gmail.com</li>
                     </ul>
                  </div>
               </div>
            </div>
            <div class="copyright">
               <div class="container">
                  <div class="row">
                     <div class="col-md-12">
                        <p>© 2025 All Rights Reserved. Design by<a href="https://www.linkedin.com/in/marthandavarman-vivekanandan/"> Marthandavarman V</a></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
        `
    }
}


      

customElements.define('special-head',SpecialHead)
customElements.define('special-header',SpecialHeader)
customElements.define('special-footer',SpecialFooter)




