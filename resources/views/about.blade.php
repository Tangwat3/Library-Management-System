@extends("layouts.main")
@section("body")
<main id="main" role="main">
    <!-- page banner  -->
    <header class="page-banner">
        <div class="stretch">
            <img alt="image description" src="http://placehold.it/1920x400">
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="holder">
                        <h1 class="heading text-capitalize">About Us</h1>
                        <p>Your challenge is our progress</p>
                    </div>
                    <ul class="breadcrumbs list-inline">
                        <li><a href="#">HOME</a></li>
                        <li class="active"><a href="#">about us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <!-- about section -->
    <section class="about-section padding-top-60 padding-bottom-60 container">
        <!-- page heading -->
        <header class="page-heading">
            <h2 class="lime text-capitalize font-medium">In Few Words</h2>
        </header>
        <div class="row">
            <div class="col-xs-12 col-md-6">
                <!-- box -->
                <div class="box" data-animate="fadeInUp" data-delay="400">
                    <h3><i class="fa fa-caret-right"></i> Who are we</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
                <!-- box -->
                <div class="box" data-animate="fadeInUp" data-delay="400">
                    <h3><i class="fa fa-caret-right"></i> Mission &amp; Vision</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
                <!-- box -->
                <div class="box" data-animate="fadeInUp" data-delay="400">
                    <h3><i class="fa fa-caret-right"></i> Strategy</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</p>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6">
                <div class="beans-slider" data-animate="fadeInRight" data-delay="200">
                    <div class="beans-mask">
                        <div class="beans-slideset">
                            <!-- beans-slide -->
                            <div class="beans-slide">
                                <img src="http://placehold.it/570x362" alt="image description" class="img-responsive">
                            </div>
                            <!-- beans-slide -->
                            <div class="beans-slide">
                                <img src="http://placehold.it/570x362" alt="image description" class="img-responsive">
                            </div>
                            <!-- beans-slide -->
                            <div class="beans-slide">
                                <img src="http://placehold.it/570x362" alt="image description" class="img-responsive">
                            </div>
                            
                        </div>
                    </div>
                    <div class="beans-pagination"></div>
                </div>
            </div>
        </div>
    </section>
    <!-- container -->
    <section class="bg-grey padding-top-90 padding-bottom-60">
        <div class="container">
            <div class="row">
                <!-- coll -->
                <div class="col-xs-12 col-md-4" data-animate="fadeInUp" data-delay="400">
                    <!-- f iconbox -->
                    <div class="f-iconbox padding-bottom-30">
                        <span class="icon"><i class="fa fa-heart"></i></span>
                        <strong class="title">Trendy Design</strong>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                    </div>
                </div>
                <!-- coll -->
                <div class="col-xs-12 col-md-4" data-animate="fadeInUp" data-delay="400">
                    <!-- f iconbox -->
                    <div class="f-iconbox padding-bottom-30">
                        <span class="icon"><i class="fa fa-fire"></i></span>
                        <strong class="title">Hot Features</strong>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                    </div>
                </div>
                <div class="col-xs-12 col-md-4" data-animate="fadeInUp" data-delay="400">
                    <!-- f iconbox -->
                    <div class="f-iconbox padding-bottom-30">
                        <span class="icon"><i class="fa fa-bolt"></i></span>
                        <strong class="title">Trendy Design</strong>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- process section -->
    <section class="process-section container padding-top-90">
        <div class="row">
            <div class="col-xs-12">
                <!-- page heading -->
                <header class="page-heading">
                    <h2 class="lime text-capitalize font-medium">Our Process</h2>
                    <p>Ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam</p>
                </header>
                <!-- icon block -->
                <div class="icon-block">
                    <div class="row">
                        <div class="col-xs-12 col-sm-4 col-lg-2" data-animate="fadeInUp" data-delay="100">
                            <div class="icon">
                                <div class="icon-holder">
                                    <i class="fa fa-coffee"></i>
                                    <span class="num">1</span>
                                </div>
                            </div>
                            <span class="txt">Coffe</span>
                        </div>
                        <div class="col-xs-12 col-sm-4 col-lg-2" data-animate="fadeInUp" data-delay="200">
                            <div class="icon">
                                <div class="icon-holder">
                                    <i class="fa fa-pencil-square-o"></i>
                                    <span class="num">2</span>
                                </div>
                            </div>
                            <span class="txt">Analysis</span>
                        </div>
                        <div class="col-xs-12 col-sm-4 col-lg-2" data-animate="fadeInUp" data-delay="300">
                            <div class="icon">
                                <div class="icon-holder">
                                    <i class="fa fa-paint-brush"></i>
                                    <span class="num">3</span>
                                </div>
                            </div>
                            <span class="txt">Design</span>
                        </div>
                        <div class="col-xs-12 col-sm-4 col-lg-2" data-animate="fadeInUp" data-delay="400">
                            <div class="icon">
                                <div class="icon-holder">
                                    <i class="fa fa-code"></i>
                                    <span class="num">4</span>
                                </div>
                            </div>
                            <span class="txt">Build</span>
                        </div>
                        <div class="col-xs-12 col-sm-4 col-lg-2" data-animate="fadeInUp" data-delay="450">
                            <div class="icon">
                                <div class="icon-holder">
                                    <i class="fa fa-bug"></i>
                                    <span class="num">5</span>
                                </div>
                            </div>
                            <span class="txt">Test</span>
                        </div>
                        <div class="col-xs-12 col-sm-4 col-lg-2" data-animate="fadeInUp" data-delay="500">
                            <div class="icon">
                                <div class="icon-holder">
                                    <i class="fa fa-paper-plane"></i>
                                    <span class="num">6</span>
                                </div>
                            </div>
                            <span class="txt">Delivery</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- testimon section -->
    <div class="testimon-section">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <span class="icon"><i class="fa fa-quote-left"></i></span>
                    <div class="beans-slider" data-rotate="true">
                        <div class="beans-mask">
                            <div class="beans-slideset">
                                <!-- beans-slide -->
                                <div class="beans-slide">
                                    <blockquote>
                                        <q>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus Nam libero tempore, cum soluta nobis est eligendi optio.</q>
                                        <img src="http://placehold.it/90x90" alt="image description" class="img">
                                        <cite>
                                            <span class="name">Rosa Lecher</span>
                                            <span class="comp-name"><a href="#">COMPANY NAME - CEO</a></span>
                                        </cite>
                                    </blockquote>
                                </div>
                                <!-- beans-slide -->
                                <div class="beans-slide">
                                    <blockquote>
                                        <q>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus Nam libero tempore, cum soluta nobis est eligendi optio.</q>
                                        <img src="http://placehold.it/90x90" alt="image description" class="img">
                                        <cite>
                                            <span class="name">Fatma</span>
                                            <span class="comp-name"><a href="#">HTMLbeans - CEO</a></span>
                                        </cite>
                                    </blockquote>
                                </div>
                                <!-- beans-slide -->
                                <div class="beans-slide">
                                    <blockquote>
                                        <q>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus Nam libero tempore, cum soluta nobis est eligendi optio.</q>
                                        <img src="http://placehold.it/90x90" alt="image description" class="img">
                                        <cite>
                                            <span class="name">Hossam Eldin</span>
                                            <span class="comp-name"><a href="#">wp creative - CEO</a></span>
                                        </cite>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div class="beans-pagination">
                            <!-- pagination generated here -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="parallax-holder">
            <div class="parallax-frame"><img src="http://placehold.it/1920x1000" height="1440" width="1920" alt="image description"></div>
        </div>
    </div>
    <!-- container -->
    <section class="container padding-top-90 padding-bottom-90">
        <!-- page heading -->
        <header class="page-heading">
            <h2 class="lime text-capitalize font-medium">Meet our team</h2>
            <p>Ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam</p>
        </header>
        <div class="row">
            <div class="col-xs-12 col-sm-6" data-animate="fadeInUp" data-delay="400">
                <!-- team box -->
                <div class="team-box style2 right">
                    <div class="img-box">
                        <img src="http://placehold.it/268x263" alt="image description" class="img-responsive">
                        <span class="over black"></span>
                        <a href="#popup1" class="plus lightbox">+</a>
                    </div>
                    <div class="block">
                        <h3 class="heading">Mohammed Arafa</h3>
                        <strong class="subtitle">CEO FOUNDER</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia.</p>
                        <ul class="social-network list-inline">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6" data-animate="fadeInUp" data-delay="400">
                <!-- team box -->
                <div class="team-box style2">
                    <div class="img-box">
                        <img src="http://placehold.it/268x263" alt="image description" class="img-responsive">
                        <span class="over black"></span>
                        <a href="#popup2" class="plus lightbox">+</a>
                    </div>
                    <div class="block">
                        <h3 class="heading">Mahmoud Mohamed</h3>
                        <strong class="subtitle">PROJECT MANAGER</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia.</p>
                        <ul class="social-network list-inline">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-6" data-animate="fadeInUp" data-delay="400">
                <!-- team box -->
                <div class="team-box style2 right">
                    <div class="img-box">
                        <img src="http://placehold.it/268x263" alt="image description" class="img-responsive">
                        <span class="over black"></span>
                        <a href="#popup3" class="plus lightbox">+</a>
                    </div>
                    <div class="block">
                        <h3 class="heading">Fatma Hassan</h3>
                        <strong class="subtitle">SOFTWARE DEVELOPER</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia.</p>
                        <ul class="social-network list-inline">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6" data-animate="fadeInUp" data-delay="400">
                <!-- team box -->
                <div class="team-box style2">
                    <div class="img-box">
                        <img src="http://placehold.it/268x263" alt="image description" class="img-responsive">
                        <span class="over black"></span>
                        <a href="#popup4" class="plus lightbox">+</a>
                    </div>
                    <div class="block">
                        <h3 class="heading">Sandra Lucker</h3>
                        <strong class="subtitle">CREATIVE DESIGNER</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia.</p>
                        <ul class="social-network list-inline">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="row text-center padding-top-30">
          <a href="#" class="btn btn-dark">VIEW ALL MEMBERS</a>
        </div>
    </section>
    <!-- whatwedo section -->
    <section class="whatwedo-section bg-grey padding-top-90 padding-bottom-60">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6">
                    <!-- page heading -->
                    <header class="page-heading left-align margin-bottom-10">
                        <h2 class="lime text-capitalize font-medium">What we do</h2>
                    </header>
                    <p>Suspendisse et metus eu massa lobortis condimentum sed ut orci. Nullam viverra dapibus risus, eu tristique nisl sollicitudin at. Etiam iaculis blandit libero. licitudin at. Etiam iaculis blandit libero. licitudin at. Etiam iaculis blandit libero. Fusce id lobortis orci. Proin tristique laoreet tempus.</p>
                    <p>Fusce vel risus leo. Donec in venenatis felis.Maecenas non sem tincidunt, posuere elit in, accumsan nisl. In lorem nisi, scelerisque vitae tristique euismod, </p>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <!-- progress-holder -->
                    <ul class="progress-holder list-unstyled">
                        <li>
                            <div class="progress-bar">
                                <span class="progress-bar-outer" data-width="80">
                                </span>
                            </div>
                            <div class="counter">
                                <span data-from="0" data-to="80" data-refresh-interval="80" data-speed="1000" data-comma="true">0</span>%
                            </div>
                            <span class="text">Web Design</span>
                        </li>
                        <li>
                            <div class="progress-bar">
                                <span class="progress-bar-outer" data-width="70">
                                </span>
                            </div>
                            <div class="counter">
                                <span data-from="0" data-to="70" data-refresh-interval="80" data-speed="1000" data-comma="true">0</span>%
                            </div>
                            <span class="text">Advertising</span>
                        </li>
                        <li>
                            <div class="progress-bar">
                                <span class="progress-bar-outer" data-width="65">
                                </span>
                            </div>
                            <div class="counter">
                                <span data-from="0" data-to="65" data-refresh-interval="80" data-speed="1000" data-comma="true">0</span>%
                            </div>
                            <span class="text">Mobile Application</span>
                        </li>
                        <li>
                            <div class="progress-bar">
                                <span class="progress-bar-outer" data-width="90">
                                </span>
                            </div>
                            <div class="counter">
                                <span data-from="0" data-to="90" data-refresh-interval="80" data-speed="1000" data-comma="true">0</span>%
                            </div>
                            <span class="text">Autocad</span>
                        </li>
                        <li>
                            <div class="progress-bar">
                                <span class="progress-bar-outer" data-width="50">
                                </span>
                            </div>
                            <div class="counter">
                                <span data-from="0" data-to="50" data-refresh-interval="80" data-speed="1000" data-comma="true">0</span>%
                            </div>
                            <span class="text">Graphic Design</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!-- counter section -->
    <div class="counter-section">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-3">
                    <div class="counter">
                        <span class="num-counter num" data-from="10" data-to="56" data-refresh-interval="80" data-speed="3000" data-comma="true">15</span>
                    </div>
                    <span class="txt">Clients Worked</span>
                </div>
                <div class="col-xs-12 col-sm-3">
                    <div class="counter">
                        <span class="num-counter num" data-from="200" data-to="360" data-refresh-interval="80" data-speed="3000" data-comma="true">150</span>
                    </div>
                    <span class="txt">Hamburger Ordered</span>
                </div>
                <div class="col-xs-12 col-sm-3">
                    <div class="counter">
                        <span class="num-counter num" data-from="15" data-to="89" data-refresh-interval="80" data-speed="3000" data-comma="true">20</span>
                    </div>
                    <span class="txt">Project Finished</span>
                </div>
                <div class="col-xs-12 col-sm-3">
                    <div class="counter">
                        <span class="num-counter num" data-from="15" data-to="42" data-refresh-interval="80" data-speed="3000" data-comma="true">12</span>
                    </div>
                    <span class="txt">Employeer</span>
                </div>
            </div>
        </div>
        <div class="stretch">
            <img src="http://placehold.it/1920x600" alt="image description">
        </div>
    </div>
    <!-- const partners -->
    <section class="const-partners style3">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-3" data-animate="fadeInUp" data-delay="150">
                    <a href="#"><img src="http://placehold.it/170x170" alt="image description"></a>
                </div>
                <div class="col-xs-12 col-sm-3" data-animate="fadeInUp" data-delay="200">
                    <a href="#"><img src="http://placehold.it/170x170" alt="image description"></a>
                </div>
                <div class="col-xs-12 col-sm-3" data-animate="fadeInUp" data-delay="250">
                    <a href="#"><img src="http://placehold.it/170x170" alt="image description"></a>
                </div>
                <div class="col-xs-12 col-sm-3" data-animate="fadeInUp" data-delay="300">
                    <a href="#"><img src="http://placehold.it/170x170" alt="image description"></a>
                </div>
            </div>
        </div>
    </section>
</main>
@endsection