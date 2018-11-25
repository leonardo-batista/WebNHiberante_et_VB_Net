﻿<!DOCTYPE html>
<head>
    <title></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--===============================================================================================-->
    <link rel="icon" type="image/png" href="~/Content/images/icons/favicon.png" />
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="~/Content/css/resetCss.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="~/Content/vendor/bootstrap/css/bootstrap.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="~/Content/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="~/Content/fonts/themify/themify-icons.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="~/Content/fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="~/Content/fonts/elegant-font/html-css/style.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="~/Content/vendor/animate/animate.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="~/Content/vendor/css-hamburgers/hamburgers.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="~/Content/vendor/animsition/css/animsition.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="~/Content/vendor/select2/select2.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="~/Content/vendor/slick/slick.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="~/Content/vendor/noui/nouislider.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="~/Content/css/util.css">
    <link rel="stylesheet" type="text/css" href="~/Content/css/main.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="~/Content/css/cssPersonalise.css">
    <!--===============================================================================================-->
</head>
<html>
<body class="animsition">
    @Html.Partial("_Header")

    @RenderBody()

    @Html.Partial("_Footer")

    <!-- Back to top -->
    <div class="btn-back-to-top bg0-hov" id="myBtn">
        <span class="symbol-btn-back-to-top">
            <i class="fa fa-angle-double-up" aria-hidden="true"></i>
        </span>
    </div>

    <!-- Container Selection -->
    <div id="dropDownSelect1"></div>
    <div id="dropDownSelect2"></div>

    <!--===============================================================================================-->
    <script type="text/javascript" src="~/Content/vendor/jquery/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="~/Content/vendor/jquery/jquery.cookie.min.js"></script>
    <!--===============================================================================================-->
    <script type="text/javascript" src="~/Content/vendor/animsition/js/animsition.min.js"></script>
    <!--===============================================================================================-->
    <script type="text/javascript" src="~/Content/vendor/bootstrap/js/popper.js"></script>
    <script type="text/javascript" src="~/Content/vendor/bootstrap/js/bootstrap.min.js"></script>
    <!--===============================================================================================-->
    <script type="text/javascript" src="~/Content/vendor/select2/select2.min.js"></script>
    <script type="text/javascript">
		$(".selection-1").select2({
			minimumResultsForSearch: 20,
			dropdownParent: $('#dropDownSelect1')
		});

		$(".selection-2").select2({
			minimumResultsForSearch: 20,
			dropdownParent: $('#dropDownSelect2')
		});
    </script>
    <!--===============================================================================================-->
    <script type="text/javascript" src="~/Content/vendor/daterangepicker/moment.min.js"></script>
    <script type="text/javascript" src="~/Content/vendor/daterangepicker/daterangepicker.js"></script>
    <!--===============================================================================================-->
    <script type="text/javascript" src="~/Content/vendor/slick/slick.min.js"></script>
    <script type="text/javascript" src="~/Content/js/slick-custom.js"></script>
    <!--===============================================================================================-->
    <script type="text/javascript" src="~/Content/vendor/sweetalert/sweetalert.min.js"></script>
    <script type="text/javascript">
		$('.block2-btn-addcart').each(function(){
			var nameProduct = $(this).parent().parent().parent().find('.block2-name').html();
			$(this).on('click', function(){
				swal(nameProduct, "is added to cart !", "success");
			});
		});

		$('.block2-btn-addwishlist').each(function(){
			var nameProduct = $(this).parent().parent().parent().find('.block2-name').html();
			$(this).on('click', function(){
				swal(nameProduct, "is added to wishlist !", "success");
			});
		});
    </script>
    <!--===============================================================================================-->
    <script src="~/Scripts/jsAffaire.js"></script>
    <!--===============================================================================================-->
    <script type="text/javascript" src="~/Content/js/main.js"></script>
    <!--===============================================================================================-->
    <script type="text/javascript" src="~/Content/vendor/noui/nouislider.js"></script>
    <!--===============================================================================================-->
    <script type="text/javascript" src="~/Content/js/currency.min.js"></script>

</body>
</html>
