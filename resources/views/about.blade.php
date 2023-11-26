@extends("layouts.main")
@section("body")
<main id="main" role="main">
    <!-- page banner  -->
    <header class="page-banner">
        <div class="stretch">
            <img alt="image description" src="{{asset('assets/http://placehold.it/1920x400')}}">
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
                    <p>The College Library has collections in various fields such as Education, Agriculture Education, Chemistry Education, Biological Education, Business Education, Administration and Planning, Computer Science Education, Music, Fine and Applied Art, Technical Education, Physics Education, English Language, French, Social Studies. Library services to the staff, students and the community include photocopying, Information Literacy, Literature Search, Indexing, Bindery Service. Detailed instruction and teaching in Library use is provided to undergraduates as part of the General Studies programme. It can also be adapted for Indexing of documents. Retrospective conversion of manual Library records is presently going on, and will be completed soon. The Library is on its way to having a virtual/e-Library compliment which will link the Library with the world via Internet..</p>
                </div>
                <!-- box -->
                <div class="box" data-animate="fadeInUp" data-delay="400">
                    <h3><i class="fa fa-caret-right"></i> Our Mission &amp; Vision</h3>
                    <p>To Produce Higher Quality NCE and Graduate Teachers of International Standard and to be a Centre of Excellence in Research in Education...</p>
                </div>
                
            </div>
            <div class="col-xs-12 col-sm-6">
                <div class="beans-slider" data-animate="fadeInRight" data-delay="200">
                    <div class="beans-mask">
                        <div class="beans-slideset">
                            <!-- beans-slide -->
                            <div class="beans-slide">
                                <img src="{{asset('assets/images/fcep1.jpg')}}" alt="image description" class="img-responsive">
                            </div>
                            <!-- beans-slide -->
                            <div class="beans-slide">
                                <img src="{{asset('assets/images/side1.png')}}" alt="image description" class="img-responsive">
                            </div>
                            <!-- beans-slide -->
                            <div class="beans-slide">
                                <img src="{{asset('assets/images/fcep2.jpg')}}" alt="image description" class="img-responsive">
                            </div>
                            
                        </div>
                    </div>
                    <div class="beans-pagination"></div>
                </div>
            </div>
        </div>
    </section>
    
        <div class="parallax-holder">
            <div class="parallax-frame"><img src="{{asset('assets/http://placehold.it/1920x1000')}}" height="1440" width="1920" alt="image description"></div>
        </div>
    </div>
    
        </div>
    </section>
</main>
@endsection