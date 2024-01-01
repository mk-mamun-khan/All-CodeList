
// Bootstrap Color 
    -> primary 
    -> secondary 
    -> success
    -> info 
    -> warning 
    -> danger 
    -> dark 
    -> light 
    -> white 

// Text Bootstrap class 
    -> text-color 
    -> text-align ( left, right, center, justify )
    -> text-uppercase ( lowercase, capitalize )
    -> display-1 (2,3,4) 
    -> lead 
    -> small
    -> font-weight-bold (bolder, normal, light, lighter)
    -> font-italic 
    -> text-decoration-none 
    -> list-inline 
    -> list-inline-item  
    -> list-unstyled 

// Width and height class 
    -> w ( width )
    -> h ( height )
    -> w-100 ( 75, 50, 25 )
    -> h-100 ( 75, 50, 25 ) 

// Margin and paddign class 
    -> m ( margin )
    -> p ( padding )
    -> t (top)
    -> b (bottom)
    -> l (left)
    -> r (right) 
    -> x (left, right) 
    -> y (top, bottom) 
    -> 4px, 8px, 16px, 24px, 48px (1,2,3,4,5) 
    -> mx-auto 

// Border and border radius class 
    -> border 
    -> border-0
    -> border-top-0
    -> border-bottom-0
    -> border-left-0
    -> border-roght-0 
    -> border-color 

    -> rounded 
    -> rounded-top
    -> rounded-bottom
    -> rounded-left
    -> rounded-right 
    -> rounded-circle 
    -> rounded-0
    
// Flaot class 
    -> flaot-left
    -> flaot-right 
    -> clearfix 

// Responsive class 
    -> xl  ( >=1200 )
    -> lg ( 992 >= 1200 )
    -> md ( 768 >= 992  )
    -> sm ( 0 >= 768 )

// Flaot class 
    -> flaot-res-left
    -> flaot-res-right 
    -> clearfix 

// Shadow class 
    -> shadow 
    -> shadow-0
    -> shadow-sm
    -> shadow-lg

// Some essential class 
    -> visible 
    -> invisible 
    -> fixed-top
    -> fixed-bottom 
    -> sticky-top 
    -> bg-color 

// Display block 
    -> d-block 
    -> d-inline-block 
    -> d-table 


// Table class 
    -> table 
    -> table-bordered 
    -> table-striped 
    -> table-hover 
    -> table-color  
    -> table-borderless 
    -> thead-dark 
    -> table-responsive 


// Image class 
    -> img-fluid 
    -> rounded 
    -> rounded-circle 
    -> img-thumbnail

// Jumbotron class 
    -> jumbotron 
    -> jumbotron-fluid 

// Alert class 
    -> alert 
    -> alert-color 

// close class 
    -> close 
    -> data-dismiss="alert"
    -> '<button type="button" class="close" data-dismiss="alert"> &times; </button>' 
    -> alert-dismissible fade show 

// Buttons class 
    -> btn 
    -> btn-color 
    -> btn-outline-color 
    -> active 
    -> disable 
    -> spinner-border spinner-border-sm
    -> spinner-grow spinner-grow-sm 

// Button groups 
    -> btn-group 
    -> btn-group-lg 
    -> btn-group-vertical 

// Badge class 
    -> badge 
    -> badge-color 
    -> badge-pill 

// Progress bar class 
    -> progress 
    -> progress-bar 
    -> progress-bar-striped
    -> progress-bar-animated
        <div class="progress">
            <div class="progress-bar" style="width:70%">70%</div>
        </div>

// Spinner class 
    -> spinner-border
    -> spinner-border-sm
    -> spinner-grow 
    -> spinner-grow-sm  
    -> text-color 

// Paginate class 
    -> pagination
    -> page-item 
    -> page-link
    -> active 
    -> disable 
    -> pagination-size 

// Breadcrumbs  class 
    -> breadcrumb 
    -> breadcrumb-item 

// List groups 
    -> list-group 
    -> list-group-item 
    -> active 
    -> list-group-item-action 
    -> list-group-flush 
    -> list-group-horizontal 

// Cards class 
    -> card 
    -> card-header
    -> card-body
    -> card-footer
    -> card-title
    -> card-text
    -> card-link
    -> card-img-top 

    <div class="card">
        <div class="card-header">Header</div>
        <div class="card-body">Content</div> 
        <div class="card-footer">Footer</div>
    </div>

// Dropdown class 
    -> dropdown-menu 
    -> dropdown-item 
    -> dropdown 
    -> dropup
    -> dropdown-divider 
    -> active 
    -> disable  
    -> data-toggle="dropdown" 

            <div class="dropdown">
                <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                Dropdown button
                </button>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Link 1</a>
                <a class="dropdown-item" href="#">Link 2</a>
                <a class="dropdown-item" href="#">Link 3</a>
                </div>
            </div>

// Collapse class 
    -> data-toggle="collapse" 
    -> data-target="#demo"
    -> collapse 

        <a href="#demo" data-toggle="collapse">Collapsible</a>
        <div id="demo" class="collapse">
        Lorem ipsum dolor text....
        </div>

    -> make a accordion by collapse 
    <div id="accordion">

        <div class="card">
        <div class="card-header">
            <a class="card-link" data-toggle="collapse" href="#collapseOne">
            Collapsible Group Item #1
            </a>
        </div>
        <div id="collapseOne" class="collapse show" data-parent="#accordion">
            <div class="card-body">
            Lorem ipsum..
            </div>
        </div>
        </div>
    
        <div class="card">
        <div class="card-header">
            <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
            Collapsible Group Item #2
            </a>
        </div>
        <div id="collapseTwo" class="collapse" data-parent="#accordion">
            <div class="card-body">
            Lorem ipsum..
            </div>
        </div>
        </div>
    
        <div class="card">
        <div class="card-header">
            <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
            Collapsible Group Item #3
            </a>
        </div>
        <div id="collapseThree" class="collapse" data-parent="#accordion">
            <div class="card-body">
            Lorem ipsum..
            </div>
        </div>
        </div>
    
    </div>

// Modal class 
    -> modal fade 
    -> modal-dialog
    -> modal-content 
        -> modal-header
        -> modal-body
        -> modal-footer
    -> data-toggle="modal"

// Nav class 
    -> nav 
    -> nav-item 
    -> nav-link 
    -> nav-tab 
    -> nav-pill

// Tabs 
    -> tab-content 
    -> tab-pane fade show active
    -> data-toggle="tab/pill" 

// Navbar class 
    -> navbar navbar-expand-sm bg-color 
    -> navbar-nav 
    -> nav-item 
    -> nav-link 
    -> navbar-brand 
    -> navbar-toggler 
    -> navbar-toggler-icon 


        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <!-- Brand -->
        <a class="navbar-brand" href="#">Navbar</a>

        <!-- Toggler/collapsibe Button -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar links -->
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li> 
            </ul>
        </div> 
        '</nav>'

    

// Form class 
    -> form-group 
    -> form-control 
    -> form-inline 
    
    
    -> input-group 
    -> input-group-prepend 
    -> input-group-text 
    -> input-group-append


// Carousel class 

        // for slider 
        -> carousel slide 
        -> carousel-inner 
        -> carousel-item active 
        -> data-ride="carousel"

        //for navigation 
        -> carousel-control-prev / carousel-control-next   
        -> carousel-control-prev-icon / carousel-control-next-icon
        -> data-slide="prev/next"
        -> "<a href='main slider ID'>" 


        // For bulet 
        -> carousel-indicators 
        -> data-slide-to="0,1,2"
        -> data-target="Sldier main id"
        -> active 


// Tooltip 
        -> data-toggle="tooltip"
        -> title="tooptip title here"
        -> jQuery run 

// Popover  
    -> data-toggle="popover"
    -> title="popover title here"
    -> data-content="popover content here "
    -> jQuery run 


// Tosat 
    -> toast 
    -> toast-header
    -> toast-body 
    -> jQuery run 
    -> data-autohide="false"


// Display Flex ( Flex-box )
    -> d-flex 
    -> flex-row / flex-row-reverse 
    -> flex-column / flex-column-reverse 
    -> justify-content-start (start/center/end/between/around)
    -> align-items-start (start/center/end/between/around)


// Grid System 
    -> container 
    -> row 
    -> col-screen-width  

        // Screen 
            mobile   - (0px - 575px) 
            sm - ( 576px - 767px ) - For tab 
            md - ( 768px - 991px ) - For PC 
            lg - ( 992px - 1199px) - For HD screen 
            xl - ( 1200px ++  ) 

        // Width 
            - 12 ( Full Width 100% )
            - 6 ( 50% Width )
            - 3 ( 25% Width )
            - now calculate 12 to any screen :) 


    


         
    

    


