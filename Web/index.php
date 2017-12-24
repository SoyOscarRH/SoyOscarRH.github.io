<?php
    /*=====================================================================================================================================
    ============================================         INDEX FOR THE COMPLETE SYSTEM         ============================================
    =======================================================================================================================================
    This works like the index for the complete system */
    include("ForAllPages.php");                                                             //Give me this Pages
    
    // ================ VARIABLES =============================
        $HTMLTitle = 'Web Template';                                                        //Title for the browser
        $UpdateDate = 'December 25, 2017';                                                  //Initial Date



    // *****************************************************************
    // *******************     HTML HEADER     *************************    
    // *****************************************************************    
    include("Templates/HTMLHeader.php");                                                    //Give me the header
?>


    <!--  ++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
    <!--  ++++++++++++++   INFORMATION   +++++++++++++++++++++ -->
    <!--  ++++++++++++++++++++++++*+++++++++++++++++++++++++++ -->
    <div class="section indigo lighten-4">
    
        <div class="row center-align">
            <div class="col s6 offset-s3 m4 offset-m4 l2 offset-l5 center-align">
                <img class="responsive-img" src="<?php echo $HTMLDocumentRoot;?>Media/CompilandoConocimiento.png">
            </div>
        </div>

        <div class="row container">
            <a class="col s8 offset-s2 l4 offset-l4 waves-effect waves-light blue btn-large">
                <i class="material-icons left">get_app</i>
                Download
            </a>
        </div>

        <div class="row container">
            <a class="col s8 offset-s2 l4 offset-l4 waves-effect waves-light indigo btn-large">
                <i class="material-icons left">cloud</i>
                See Online
            </a>
        </div>

    </div>


    <!--  ++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
    <!--  ++++++++++++++   INFORMATION   +++++++++++++++++++++ -->
    <!--  ++++++++++++++++++++++++*+++++++++++++++++++++++++++ -->
    <div class="container section">
    
        <div class="row center-align ">
            <h3 class="indigo-text text-darken-1" style="font-weight: 400;">
                Features
            </h3>
        </div>

        <div class="row">
               
            <!--  ============================ -->
            <!--  =========  COLUMN   ======== -->
            <!--  ============================ -->
            <div class="col s12 m4">
                <div class="icon-block">

                    <!--  =========  Icon   ======== -->
                    <h2 class="center indigo-text text-darken-3">
                        <i class="medium material-icons">music_note</i>
                    </h2>

                    <!--  =========  Title   ======== -->
                    <h5 class="center">Stupid Text</h5>

                    <!--  =========  Text   ======== -->
                    <p class="light container" align="justify">
                        We did most of the heavy lifting for you to provide a default
                        stylings that incorporate our custom components. Additionally,
                        we refined animations and transitions to provide a smoother
                        experience for developers.
                    </p>

                </div>
            </div>

            <!--  ============================ -->
            <!--  =========  COLUMN   ======== -->
            <!--  ============================ -->
            <div class="col s12 m4">
                <div class="icon-block">

                    <!--  =========  Icon   ======== -->
                    <h2 class="center indigo-text text-darken-3">
                        <i class="medium material-icons">slideshow</i>
                    </h2>

                    <!--  =========  Title   ======== -->
                    <h5 class="center">Stupid Text</h5>

                    <!--  =========  Text   ======== -->
                    <p class="light container" align="justify">
                        We did most of the heavy lifting for you to provide a default
                        stylings that incorporate our custom components. Additionally,
                        we refined animations and transitions to provide a smoother
                        experience for developers.
                    </p>

                </div>
            </div>

            <!--  ============================ -->
            <!--  =========  COLUMN   ======== -->
            <!--  ============================ -->
            <div class="col s12 m4">
                <div class="icon-block">

                    <!--  =========  Icon   ======== -->
                    <h2 class="center indigo-text text-darken-3">
                        <i class="medium material-icons">info_outline</i>
                    </h2>

                    <!--  =========  Title   ======== -->
                    <h5 class="center">Stupid Text</h5>

                    <!--  =========  Text   ======== -->
                    <p class="light container" align="justify">
                        We did most of the heavy lifting for you to provide a default
                        stylings that incorporate our custom components. Additionally,
                        we refined animations and transitions to provide a smoother
                        experience for developers.
                    </p>

                </div>
            </div>

        </div>
    </div>




    <!-- ================================================================= -->    
    <!-- ===============         FAB FOR THE PAGE       ================== -->    
    <!-- ================================================================= -->
    <div class="fixed-action-btn <?php if (WeAreAtMobile()) echo "click-to-toggle"; ?>">
        
        <a class="btn-floating btn-large cyan darken-3">
            <i class="unselectable large material-icons">view_list</i>
        </a>
        
        <ul>

            <!-- =======  TO EDIT EMPLOYEES INFO  ========== -->    
            <li>
                <a href    = "#CardChangeEmployeeInfo"
                   onclick = "$('.fixed-action-btn').closeFAB();" 
                   class   = "btn-floating indigo">
                    <i class="unselectable material-icons">edit</i>
                </a>
            </li>

            <!-- =======  TO ADD EMPLOYEES INFO  ========== -->    
            <li>
                <a href    = "#CardAddEmployee"
                   onclick = "$('.fixed-action-btn').closeFAB();" 
                   class   = "btn-floating green">
                    <i class="unselectable material-icons">add</i>
                </a>
            </li>

            <!-- =======  TO DETELE EMPLOYEES INFO  ========== -->    
            <li>
                <a href    = "#CardDeleteEmployee"
                   onclick = "$('.fixed-action-btn').closeFAB();" 
                   class   = "btn-floating red">
                    <i class="unselectable material-icons">delete</i>
                </a>
            </li>

        </ul>
    </div>



<?php 
    // *****************************************************************
    // *******************     HTML FOOTER     *************************    
    // *****************************************************************    
    include("Templates/HTMLFooter.php");                                                    //Give me the footers
?>
