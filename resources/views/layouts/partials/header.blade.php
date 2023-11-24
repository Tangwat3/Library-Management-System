<!DOCTYPE html>
<html>
<head>
	<!-- set the encoding of your site -->
	<meta charset="utf-8">
	<!-- set the viewport width and initial-scale on mobile devices -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- set the title of your site -->
	<title>Fekra</title>
	<!-- ========= Favicon Icons ========= -->
	<link rel="shortcut icon" href="images/favicon/favicon.ico">
	<!-- Standard iPhone Touch Icon-->
	<link rel="apple-touch-icon" sizes="57x57" href="images/favicon/apple-touch-icon-57x57.png">
	<!-- Retina iPhone Touch Icon-->
	<link rel="apple-touch-icon" sizes="114x114" href="images/favicon/apple-touch-icon-114x114.png">
	<!-- Standard iPad Touch Icon-->
	<link rel="apple-touch-icon" sizes="72x72" href="images/favicon/apple-touch-icon-72x72.png">
	<!-- Retina iPad Touch Icon-->
	<link rel="apple-touch-icon" sizes="144x144" href="images/favicon/apple-touch-icon-144x144.png">
	<!-- include Google fonts  -->
	<link href='https://fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,400italic,700,700italic,900,900italic%7CPlayfair+Display:400,400italic,700,700italic,900,900italic%7CRoboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900italic,900%7CRaleway:400,100,200,300,500,600,700,800,900%7CGreat+Vibes%7CPoppins:400,300,500,600,700' rel='stylesheet' type='text/css'>
	<!-- include the site stylesheet of bootstrap  -->
	<link rel="stylesheet" href="{{asset('assets/css/bootstrap.css')}}">
	<!-- include the font awesome stylesheet  -->
	<link rel="stylesheet" href="{{asset('assets/css/font-awesome.min.css')}}">
	<!-- include the stylesheets of headers and footer of the page  -->
	<link rel="stylesheet" type="text/css" href="{{asset('assets/css/page-assets.css')}}">
	<!-- include the helping elements stylesheets of  the page  -->
	<link rel="stylesheet" type="text/css" href="{{asset('assets/css/helper-elements.css')}}">
	<!-- include the site stylesheet  -->
	<link rel="stylesheet" type="text/css" href="{{asset('assets/css/style.css')}}">
	<!-- include the site color stylesheet  -->
	<link rel="stylesheet" type="text/css" href="{{asset('assets/css/color/color.css')}}">
    <!-- include the site animation stylesheet  -->
    <link rel="stylesheet" href="{{asset('assets/css/animate.css')}}" type="text/css"/>
</head>
<body>

            
       
	<!-- main container of all the page elements -->
	<div id="wrapper">
		<div class="w1">
<header id="header" class="style7">
				<div class="container"> 
					<div class="row">
						<div class="col-xs-12">
							<!-- page logo -->
							<div class="logo">
								<a href="#">
									<img src="{{asset('assets/images/logo.png')}}" alt="Fekra" class="img-responsive w-logo">
									<img src="{{asset('assets/images/tjm.png')}}" alt="Fekra" class="img-responsive b-logo">
								</a>
							</div>
							<!-- holder -->
							<div class="holder">
								<!-- icon list -->
								<ul class="list-unstyled icon-list">
									<li>
										<a href="#" class="search-opener opener-icons"><i class="fa fa-search"></i></a>
									</li>
								</ul>
								<!-- main navigation of the page -->
								<nav id="nav">
									<a href="#" class="nav-opener"><i class="fa fa-bars"></i></a>
									<div class="nav-holder">
										<ul class="list-inline nav-top">
                                            <li><a href="{{ route("home") }}" class="smoothanchor">HOME</a></li>
                                            <li><a href="{{ route("about") }}" class="smoothanchor">ABOUT</a></li>
                                            <li><a href="{{ route("categories") }}" class="smoothanchor">CATEGORIES</a></li>
                                            <li><a href="{{ route("books") }}"class="smoothanchor">BOOKS</a></li>
                                            <li><a href="{{ route("register") }}" class="smoothanchor">REGISTER</a></li>
                                            <li><a href="{{ route("login") }}" class="smoothanchor">LOGIN</a></li>
										</ul>
									</div>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</header>
            <!-- search popup -->
			<div class="search-popup win-height">
				<div class="holder">
					<div class="container">
						<div class="row">
							<div class="col-xs-12">
								<a href="#" class="close-btn">close</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- welcom banner -->
