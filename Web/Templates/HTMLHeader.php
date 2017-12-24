<?php 

/*==========================================================================================================
====================================       HEADER OF ALL HTML               ================================
============================================================================================================
    Description: HEADER OF ALL HTML 
*/
    // ================ VARIABLES =============================
    if (!isset($ColorOfNavbar)) $ColorOfNavbar = "indigo darken-2";                         //Color of NavBar
    if (!isset($ColorOfSidebarMobile)) $ColorOfSidebarMobile = "indigo lighten-1";          //Color of NavBar on Mobile
    
    if (!isset($ColorThemeHex)) $ColorThemeHex = "#303f9f";                                 //Color of Theme

?>

<!DOCTYPE html>
<HTML>

<!--  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
<!--  +++++++++++++++++++++++++++++++++++++++       HEADINGS            ++++++++++++++++++++++++++++++++++++++ -->
<!--  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
<HEAD>

    <!--  +++++++++++++++++++++++++++++++++++++++++++++++++ -->
    <!--  +++++++++++++++   PAGE INFO   +++++++++++++++++++ -->
    <!--  +++++++++++++++++++++++++++++++++++++++++++++++++ -->

        <!-- Page Info -->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />  

        <!-- How we should see it -->
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <!-- Color in Android Header -->
        <meta name="theme-color" content="<?php echo $ColorThemeHex; ?>">

        <!-- Please UFT IS LOVE -->
        <meta charset="UTF-8">

        <title><?php echo $HTMLTitle; ?></title>

    <!--  +++++++++++++++++++++++++++++++++++++++++++++++++ -->
    <!--  +++++++++++++++   PAGE STYLE  +++++++++++++++++++ -->
    <!--  +++++++++++++++++++++++++++++++++++++++++++++++++ -->

        <!-- Icon of the Page -->
        <link rel="shortcut icon" href="<?php echo $HTMLDocumentRoot; ?>Media/favicon.ico" type="image/x-icon">
        <link rel="icon" href="<?php echo $HTMLDocumentRoot; ?>Media/favicon.ico" type="image/x-icon">

        <!-- Google Material Fonts -->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        
        <!-- Compiled Materialize CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
        
        <!-- Compiled Materialize jQuery -->
        <script
            src         = "https://code.jquery.com/jquery-3.2.1.min.js"
            integrity   = "sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
            crossorigin = "anonymous">
        </script>

        <!-- Compiled Materialize Javascript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
      
</HEAD>




<!--  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
<!--  +++++++++++++++++++++++++++++++++++++++       BODY                ++++++++++++++++++++++++++++++++++++++ -->
<!--  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
<BODY>


    <!--  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
    <!--  +++++++++++++++++    NAVITAGION BAR       +++++++++++++++++++++ -->
    <!--  ++++++++++++++++++++++++*++++++++++++++++++++++++++++++++++++++ -->
    <header>
        
        <!-- NAV BAR FOR DESKTOP -->
        <div class="navbar-fixed">

            <nav class="<?php echo $ColorOfNavbar;?>">
                <div class="nav-wrapper container">

                    <!-- NAME OF PAGE -->
                    <div class="brand-logo white-text" style="font-size: 1.35rem;">
                        
                        <!-- HOME FOR DESKTOP -->
                        <a class="hide-on-med-and-down" href="<?php echo $HTMLDocumentRoot; ?>">
                            <i class="material-icons">home</i>
                        </a>
                        
                        <!-- NAME OF THIS PAGE -->
                        <?php echo $HTMLTitle; ?>

                    </div>

                    <!-- HOME FOR MOBILE -->
                    <a href="<?php echo $HTMLDocumentRoot; ?>" class="brand-logo right hide-on-large-only">
                        <i class="material-icons white-text">home</i>
                    </a>


                    <!-- Menu for Mobile -->
                    <a href="#" data-activates="mobile-demo" class="button-collapse">
                        <i class="material-icons white-text">menu</i>
                    </a>
                     
                    <!-- Links for Normal Web -->
                    <ul class="right hide-on-med-and-down">
                        <?php foreach($LinksForPagesDesktop as $NameOfLink => $Link): ?>
                            
                            <li>
                                <a class="white-text" href="<?php echo $Link; ?>">
                                    <?php echo $NameOfLink; ?>
                                </a>
                            </li>

                        <?php endforeach;?>
                    </ul>

                </div>
            </nav>

        </div>

        <!-- SIDE BAR FOR MOBILE -->
        <ul class="side-nav <?php echo $ColorOfSidebarMobile;?>" id="mobile-demo">

            <!-- Links for Mobile Web -->
            <div id="MobileHeaderSideNav">
                <br><br>
                <h4 class="center-align white-text" style="font-weight: 300;">
                    <b>Pages</b> Menu
                </h4>
                <br><br>
            </div>

            <?php foreach($LinksForPagesMobile as $NameOfLink => $Link): ?>
                
                <li>
                    <a class="white-text" href="<?php echo $Link; ?>">
                        <span class="flow-text">
                            <?php echo $NameOfLink; ?>
                        </span>
                    </a>
                </li>
                
            <?php endforeach; ?>
            
        </ul>

        <script>
            $( document ).ready(function(){
                $(".button-collapse").sideNav();
            });
        </script>

    </header>







