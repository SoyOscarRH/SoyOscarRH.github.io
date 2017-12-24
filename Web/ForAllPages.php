<?php
    /*=====================================================================================================================================
    ============================================                SYSTEM CONSTANT           =================================================
    =======================================================================================================================================
    HERE WE HAVE A LOT OF CONSTANT FOR THE SYSTEM */
    
    // ********************************************************************
    // *******************   HEADERS FOR HTML    **************************
    // ********************************************************************
        header('Content-type: text/html; charset=UTF-8');                                           //Set HTTP header to UTF-8
        ini_set("display_errors","On");                                                             //Force to show erros
        date_default_timezone_set ('America/Mexico_City');                                          //Set the time zone
        setlocale(LC_TIME, 'es_ES.UTF-8');                                                          //Set up local system
    

    // *****************************************************************************************************
    // *********************************             VARIABLES          ************************************
    // *****************************************************************************************************
        
        // === GENERAL VARIABLES  =====
            $HTMLTitle = 'WEB Templates';                                                           //Title for the browser
            $UpdateDate = 'December 25, 2017';                                                      //Initial Date
            $HTMLDocumentRoot = "/MaterializeWebTemplate/Web/";                                     //Path to an HTML
            $PageDirection = "http://CompilandoConocimiento.com/";                                  //Path to an HTML
            $LinksForPagesDesktop = array();                                                        //Links for Desktop
            $LinksForPagesMobile  = array();                                                        //Links for Desktop
    


    // *****************************************************************************************************
    // *********************************             IMPORTANT STUFF          ******************************
    // *****************************************************************************************************
        
        // === DEFAULT LINKS ===== 
        $LinksForPagesDesktop["Home"] = "index.php";                                                //Default links
        $LinksForPagesMobile["Home"]  = "index.php";                                                //Default links



    // ****************************************************************************************************
    // ********************************    LIBRARIES              *****************************************
    // ****************************************************************************************************
    
        // === WE ARE AT MOBILE ===== 
        function WeAreAtMobile() {                                                                  // === SEE IF WE ARE IN A CELLPHONE ===
            $Data = "/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|";                 //Maybe this?
            $Data.= "hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i";     //Maybe this?
            return preg_match($Data, $_SERVER["HTTP_USER_AGENT"]);                                  //Tell me please
        }


?>
