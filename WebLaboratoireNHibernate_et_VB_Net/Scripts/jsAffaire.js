$(document).ready(function () {
    $.ajaxSetup({ cache: false });

    //ON CLICK

    //CHANGE VALUE
    $("#affichagePerPage").change(function () {
        ProductsByCategoryV2($.cookie("CategorieIdTemporaire"));
    });

    $("#sortingProduct").change(function () {
        ProductsByCategoryV2($.cookie("CategorieIdTemporaire"));
    });

    //CHARGER TITRE PAR PAGE
    TitrePageWeb();

    //PAGE HOMME
    ListDesCategories();

    //PAGE PRODUCT
    FilterBar();

    ProductsByCategoryV2($.cookie("CategorieIdTemporaire"));

    ListeDesCategoriePageProduct();

    //PAGE CHARIOT
    ChariotConsomateurPage();

});


var listProduit;

function TitrePageWeb() {

    if ($("#indexHome").length > 0) {
        document.title = 'Home';
    }

    if ($("#indexProduct").length > 0) {
        document.title = 'Product';
    }

    if ($("#indexProductDetail").length > 0) {
        document.title = 'Product Detail';
    }

    if ($("#indexProductCategory").length > 0) {
        document.title = 'Product Category';
    }

    if ($("#indexChariot").length > 0) {
        document.title = 'Cart';
    }

}

//PAGE HOME
function ListDesCategories() {

    if ($("#indexHome").length === 0) {
        return false;
    }

    alert('salut liste des categories');

    $.removeCookie("CategorieIdTemporaire");

    $.ajax({
        url: '/Product/ListeCategorieProduit',
        type: 'GET',
        dataType: 'json',
        success: function (data) {

            if (data.dataResult !== null) {
                for (var count = 0; count < 5; count++) {
                    $("#linkCategorie" + count).attr("href", "javascript:EnregistrerLoptiondeCagegorie(" + data.dataResult[count].Id + ")");
                    $('#idCategorie' + count).val(data.dataResult[count].Id);
                    $('#nomCategorie' + count).text(data.dataResult[count].NomCaregorie);
                }
            }
        },

        error: function (erro) {
            try {
                erro = JSON.parse(erro.responseText);
                sweetAlert($('#msgError').val(), erro.Message, 'error');

            }
            catch (err) {
                err = JSON.parse(err);
                sweetAlert($('#msgError').val(), erro.Message, 'error');
            }
        },

        complete: function () {
            //Quelque chose ici, si necessaire !!!
        }
    });
    return false;
}

function EnregistrerLoptiondeCagegorie(idCategorieTemp) {
    $.cookie("CategorieIdTemporaire", idCategorieTemp);
    window.location.href = "/Product";
}

//PAGE PRODUCT
function FilterBar() {

    if ($("#indexProduct").length === 0) {
        return false;
    }

    /*[ No ui ]
===========================================================*/
    var filterBar = document.getElementById('filter-bar');

    noUiSlider.create(filterBar, {
        start: [50, 200],
        connect: true,
        range: {
            'min': 50,
            'max': 200
        }
    });

    var skipValues = [
    document.getElementById('value-lower'),
    document.getElementById('value-upper')
    ];

    filterBar.noUiSlider.on('update', function (values, handle) {
        skipValues[handle].innerHTML = Math.round(values[handle]);
    });
}

function ListeDesCategoriePageProduct() {
    if ($("#indexProduct").length === 0) {
        return false;
    }

    var htmlResultCategories = '';

    Loading();

    $.ajax({
        url: '/Product/ListeCategorieProduit',
        type: 'GET',
        dataType: 'json',
        success: function (data) {

            if (data.dataResult !== null) {

                htmlResultCategories += '<li class="p-t-4">' +
                    '<a href="javascript:ProductsByCategoryV2(0);" class="s-text13 active1">' +
                        $('#texteCategoriesTous').val() +
                        '</a></li>';

                for (var count = 0; count < 5; count++) {
                    $('#idCategorie' + count).val(data.dataResult[count].Id);
                    $('#nomCategorie' + count).text(data.dataResult[count].NomCaregorie);

                    htmlResultCategories += '<li class="p-t-4">' +
                        '<a href="javascript:ProductsByCategoryV2(' + data.dataResult[count].Id + ')" class="s-text13 active1">' +
                            data.dataResult[count].NomCaregorie +
                            '</a></li>';
                }

                if (htmlResultCategories !== null) {

                    $('#menuListeCategories').append(htmlResultCategories);
                }
            }
        },

        error: function (erro) {
            try {
                erro = JSON.parse(erro.responseText);
                sweetAlert($('#msgError').val(), erro.Message, 'error');

            }
            catch (err) {
                err = JSON.parse(err);
                sweetAlert($('#msgError').val(), erro.Message, 'error');
            }

            Loaded();
        },

        complete: function () {
            //Quelque chose ici, si necessaire !!!
            Loaded();
        }
    });
    return false;
}

function ProductDetail(idProduct) {

    alert('Felicitation, Detail du Produit !!! ' + idProduct);

    return false;

    Loading();

    $.ajax({
        url: '/Product/ProductDetail',
        type: 'GET',
        data: { "idProduct": idProduct },
        dataType: 'json',
        success: function (data) {

            console.log(data);
        },

        error: function (erro) {
            try {
                erro = JSON.parse(erro.responseText);
                sweetAlert($('#msgError').val(), erro.Message, 'error');

            }
            catch (err) {
                err = JSON.parse(err);
                sweetAlert($('#msgError').val(), erro.Message, 'error');
            }

            Loaded();
        },

        complete: function () {
            //Quelque chose ici, si necessaire !!!
            Loaded();
        }
    });
    return false;
}

//OLD FUNCTION
function ProductsByCategory(idCategorie) {

    if ($("#indexProduct").length === 0) {
        return false;
    }

    if (idCategorie === 0) {
        ProductsByCategoryAll();
        return false;
    }

    var htmlResultAllProducts = '';

    Loading();

    $.ajax({
        url: '/Product/ListeDeProduitsParCategorie',
        type: 'GET',
        data: { "idCategorie": idCategorie },
        dataType: 'json',
        success: function (data) {

            if (data.dataResult !== null) {

                $("#listeDesProduits").empty();

                for (var count = 0; count < data.dataResult.length; count++) {
                    htmlResultAllProducts += '<div class="col-sm-12 col-md-6 col-lg-4 p-b-50">'
                        + '<div class="block2">'
                        + '    <div class="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">'
                        + '        <img src="/Content/images/' + (data.dataResult[count].Sku === null ? 'pas_dImage' : data.dataResult[count].Sku) + '.jpg" alt="IMG-PRODUCT">'
                        + '        <div class="block2-overlay trans-0-4">'
                        + '           <a href="#" class="block2-btn-addwishlist hov-pointer trans-0-4">'
                        + '                <i class="icon-wishlist icon_heart_alt" aria-hidden="true"></i>'
                        + '                <i class="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>'
                        + '            </a>'
                        + '            <div class="block2-btn-addcart w-size1 trans-0-4">'
                        + '               <button class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4" onclick="AjouterProduitChariot(' + data.dataResult[count].IdProduit + ')">'
                        + '                 ' + $('#texteButtonChariot').val()
                        + '                </button>'
                        + '            </div>'
                        + '        </div>'
                        + '    </div>'
                        + '    <div class="block2-txt p-t-20">'
                        + '        <a href="product-detail.html" class="block2-name dis-block s-text3 p-b-5">'
                        + '            ' + data.dataResult[count].NomProduit
                        + '        </a>'
                        + '       <span class="block2-price m-text6 p-r-5">'
                        + '           $' + data.dataResult[count].Valeur
                        + '        </span>'
                        + '    </div>'
                        + ' </div>'
                        + '</div>'
                }

                $('#listeDesProduits').append(htmlResultAllProducts);
                $('#quantiteProduits').text(data.dataResult.length);

            } else {
                $('#listeDesProduits').append(htmlResultAllProducts);
                $('#quantiteProduits').text(0);
            }
        },

        error: function (erro) {
            try {
                erro = JSON.parse(erro.responseText);
                sweetAlert($('#msgError').val(), erro.Message, 'error');

            }
            catch (erro) {
                erro = JSON.parse(erro);
                sweetAlert($('#msgError').val(), erro.Message, 'error');
            }

            Loaded();
        },

        complete: function () {
            //Quelque chose ici, si necessaire !!!
            $.removeCookie("CategorieIdTemporaire");
            Loaded();
        }
    });
    return false;
}

//OLD FUNCTION
function ProductsByCategoryAll() {

    if ($("#indexProduct").length === 0) {
        return false;
    }

    if ($.cookie('CategorieIdTemporaire') !== null || $.cookie('CategorieIdTemporaire') !== 'undefined' || $.cookie('CategorieIdTemporaire') !== '' || $.cookie('CategorieIdTemporaire') !== 0) {
        if (!isNaN($.cookie('CategorieIdTemporaire'))) {
            ProductsByCategory($.cookie('CategorieIdTemporaire'));
            return;
        } else {
            $.removeCookie("CategorieIdTemporaire");
        }
    }

    var htmlResultAllProducts = '';

    Loading();

    $.ajax({
        url: '/Product/ListeDeProduitsParCategorieTous',
        type: 'GET',
        dataType: 'json',
        success: function (data) {

            $("#listeDesProduits").empty();

            if (data.dataResult !== null) {

                listProduit = data.dataResult;

                for (var count = 0; count < data.dataResult.length; count++) {
                    htmlResultAllProducts += '<div class="col-sm-12 col-md-6 col-lg-4 p-b-50">'
                        + '<div class="block2">'
                        + '    <div class="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">'
                        + '        <img src="/Content/images/' + (data.dataResult[count].Sku === null ? 'pas_dImage' : data.dataResult[count].Sku) + '.jpg" alt="IMG-PRODUCT">'
                        + '        <div class="block2-overlay trans-0-4">'
                        + '           <a href="#" class="block2-btn-addwishlist hov-pointer trans-0-4">'
                        + '                <i class="icon-wishlist icon_heart_alt" aria-hidden="true"></i>'
                        + '                <i class="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>'
                        + '            </a>'
                        + '            <div class="block2-btn-addcart w-size1 trans-0-4">'
                        + '               <button class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4" onclick="AjouterProduitChariot(' + data.dataResult[count].IdProduit + ')">'
                        + '                 ' + $('#texteButtonChariot').val()
                        + '                </button>'
                        + '            </div>'
                        + '        </div>'
                        + '    </div>'
                        + '    <div class="block2-txt p-t-20">'
                        + '        <a href="product-detail.html" class="block2-name dis-block s-text3 p-b-5">'
                        + '            ' + data.dataResult[count].NomProduit
                        + '        </a>'
                        + '       <span class="block2-price m-text6 p-r-5">'
                        + '           $' + currency(data.dataResult[count].Valeur)
                        + '        </span>'
                        + '    </div>'
                        + ' </div>'
                        + '</div>'
                }

                $('#listeDesProduits').append(htmlResultAllProducts);
                $('#quantiteProduits').text(data.dataResult.length);

            } else {
                $('#listeDesProduits').append(htmlResultAllProducts);
            }
        },

        error: function (erro) {
            try {
                erro = JSON.parse(erro.responseText);
                sweetAlert($('#msgError').val(), erro.Message, 'error');

            }
            catch (err) {
                err = JSON.parse(err);
                sweetAlert($('#msgError').val(), erro.Message, 'error');
            }

            Loaded();
        },

        complete: function () {
            //Quelque chose ici, si necessaire !!!
            $.removeCookie("CategorieIdTemporaire");
            Loaded();
        }
    });
    return false;
}

//PAGINATION
function PaginationProduits(pageActuel) {

    if ($("#indexProduct").length === 0) {
        return false;
    }

    if (pageActuel === null || pageActuel === undefined || pageActuel === '') {
        pageActuel = 1;
    }

    var resultProduit = [];
    var orderBy = 0;
    var orderByArray = [];

    var buttons = '';
    var quantiteProduitParPage = 0;

    quantiteProduitParPage = Number($('#affichagePerPage').val());

    var numeroTotalPage = Math.ceil(listProduit.length / quantiteProduitParPage);

    $("#buttonsPagination").empty();

    for (var i = 1; i <= numeroTotalPage; i++) {

        if (i == 1) {
            buttons = '<a href="#" class="item-pagination flex-c-m trans-0-4" id="buttonPage' + i + '" onclick="PaginationProduits(' + i + ')">1</a>';
        } else {
            buttons += '<a href="#" class="item-pagination flex-c-m trans-0-4" id="buttonPage' + i + '" onclick="PaginationProduits(' + i + ')">' + i + '</a>';
        }
    }

    $("#buttonsPagination").append(buttons);
    $('#buttonPage' + pageActuel).addClass("active-pagination");

    orderBy = Number($('#sortingProduct').val());


    for (var counter = 0; counter < listProduit.length; counter++) {
        orderByArray.push(listProduit[counter]);
    }

    //Popularité
    //if (orderBy === 1) {
    // AU FUTURE, PORQUOI PAS !!!
    //}

    //De Bas En Haut
    if (orderBy === 2) {
        orderByArray.sort(function (a, b) {
            return a.Valeur - b.Valeur
        });
    }

    //Haut En Bas
    if (orderBy === 3) {
        orderByArray.sort(function (a, b) {
            return b.Valeur - a.Valeur
        });
    }

    let totalPage = Math.ceil(listProduit.length / quantiteProduitParPage);
    let count = (pageActuel * quantiteProduitParPage) - quantiteProduitParPage;
    let delimiter = count + quantiteProduitParPage;

    if (pageActuel <= totalPage) {
        for (let i = count; i < delimiter; i++) {
            if (orderByArray[i] != null) {
                resultProduit.push(orderByArray[i]);
            }
            count++;
        }
    }

    //original et ça marche très bien !!!
    //if (pageActuel <= totalPage) {
    //    for (let i = count; i < delimiter; i++) {
    //        if (listProduit[i] != null) {
    //            resultProduit.push(listProduit[i]);
    //        }
    //        count++;
    //    }
    //}

    var htmlResultAllProducts = '';

    if (resultProduit.length > 0) {
        $("#listeDesProduits").empty();
        for (var i = 0; i < resultProduit.length; i++) {
            htmlResultAllProducts += '<div class="col-sm-12 col-md-6 col-lg-4 p-b-50">'
                + '<div class="block2">'
                + '    <div class="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">'
                + '        <img src="/Content/images/' + (resultProduit[i].Sku === null ? 'pas_dImage' : resultProduit[i].Sku) + '.jpg" alt="IMG-PRODUCT">'
                + '        <div class="block2-overlay trans-0-4">'
                + '           <a href="#" class="block2-btn-addwishlist hov-pointer trans-0-4">'
                + '                <i class="icon-wishlist icon_heart_alt" aria-hidden="true"></i>'
                + '                <i class="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>'
                + '            </a>'
                + '            <div class="block2-btn-addcart w-size1 trans-0-4">'
                + '               <button class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4" onclick="AjouterProduitChariot(' + resultProduit[i].IdProduit + ')">'
                + '                 ' + $('#texteButtonChariot').val()
                + '                </button>'
                + '            </div>'
                + '        </div>'
                + '    </div>'
                + '    <div class="block2-txt p-t-20">'
                + '        <a href="product-detail.html" class="block2-name dis-block s-text3 p-b-5">'
                + '            ' + resultProduit[i].NomProduit
                + '        </a>'
                + '       <span class="block2-price m-text6 p-r-5">'
                + '           $' + currency(resultProduit[i].Valeur)
                + '        </span>'
                + '    </div>'
                + ' </div>'
                + '</div>'
        }

        $('#listeDesProduits').append(htmlResultAllProducts);
        $('#quantiteProduits').text(listProduit.length);
    } else {
        $('#listeDesProduits').append(htmlResultAllProducts);
    }
}

function ProductsByCategoryV2(idCategorie) {

    //console.log('ProductsByCategoryV2 categorie... ' + idCategorie);

    $.cookie("CategorieIdTemporaire", idCategorie);

    if (idCategorie === undefined || idCategorie === 0 || idCategorie === '') {
        Loading();

        $.ajax({
            url: '/Product/ListeDeProduitsParCategorieTous',
            type: 'GET',
            dataType: 'json',
            success: function (data) {

                $("#listeDesProduits").empty();

                if (data.dataResult !== null) {
                    listProduit = data.dataResult;
                    $('#quantiteProduits').text(data.dataResult.length);
                    PaginationProduits('');
                }
            },

            error: function (erro) {
                try {
                    erro = JSON.parse(erro.responseText);
                    sweetAlert($('#msgError').val(), erro.Message, 'error');

                }
                catch (err) {
                    err = JSON.parse(err);
                    sweetAlert($('#msgError').val(), erro.Message, 'error');
                }

                Loaded();
            },

            complete: function () {
                //Quelque chose ici, si necessaire !!!
                Loaded();
            }
        });
    }

    if (!isNaN(idCategorie) === true && Number(idCategorie) > 0) {
        Loading();

        $.ajax({
            url: '/Product/ListeDeProduitsParCategorie',
            type: 'GET',
            data: { "idCategorie": idCategorie },
            dataType: 'json',
            success: function (data) {

                $("#listeDesProduits").empty();

                if (data.dataResult !== null) {
                    listProduit = data.dataResult;
                    $('#quantiteProduits').text(data.dataResult.length);
                    PaginationProduits('');
                }
            },

            error: function (erro) {
                try {
                    erro = JSON.parse(erro.responseText);
                    sweetAlert($('#msgError').val(), erro.Message, 'error');

                }
                catch (erro) {
                    erro = JSON.parse(erro);
                    sweetAlert($('#msgError').val(), erro.Message, 'error');
                }

                Loaded();
            },

            complete: function () {
                //Quelque chose ici, si necessaire !!!
                Loaded();
            }
        });
    }

}

//PAGE CHARIOT
function ChariotConsomateurPage() {

    var resultaChariotConsommateur = ChariotConsommateurProduits($.cookie('idConsommateurSession'));

    ChariotConsommateurPetit(resultaChariotConsommateur);

    if ($("#indexChariot").length === 0) {
        return false;
    }

    ChariotConsommateur(resultaChariotConsommateur);

    $('.btn-num-product-down').on('click', function (e) {
        var numeroAttrName = 0;
        e.preventDefault();

        numeroAttrName = $(this).attr("name").replace(/\D/g, '');

        var numProduct = Number($(this).next().val());
        if (numProduct > 1) {
            $(this).next().val(numProduct - 1);
            $("#numProductId" + String(numeroAttrName)).attr('value', numProduct - 1);

            MiseAjourProduitChariotQuantite(Number(numeroAttrName), numProduct - 1);
        }
    });

    $('.btn-num-product-up').on('click', function (e) {
        var numeroAttrName = 0;
        e.preventDefault();

        numeroAttrName = $(this).attr("name").replace(/\D/g, '');

        var numProduct = Number($(this).prev().val());
        $(this).prev().val(numProduct + 1);
        $("#numProductId" + String(numeroAttrName)).attr('value', numProduct + 1);
        MiseAjourProduitChariotQuantite(Number(numeroAttrName), numProduct + 1);
    });
}

function ChariotConsommateur(resultaChariotConsommateur) {

    if ($("#indexChariot").length === 0) {
        return false;
    }

    var htmlResultChariotConsommateur = '';
    var valeurSubTotalChariot = 0;

    $("#chariotConsommateur").empty();

    if (resultaChariotConsommateur.responseJSON.dataResult.length > 0) {

        htmlResultChariotConsommateur = '<div class="container-table-cart pos-relative">'
                                            + '<div class="wrap-table-shopping-cart bgwhite">'
                                            + '  <table class="table-shopping-cart">'
                                            + '        <tr class="table-head">'
                                            + '            <th class="column-1"></th>'
                                            + '            <th class="column-2">' + $('#labelProduit').val() + '</th>'
                                            + '            <th class="column-3">' + $('#labelPrix').val() + '</th>'
                                            + '            <th class="column-4 p-l-70">' + $('#labelQuantite').val() + '</th>'
                                            + '            <th class="column-5">Total</th>'
                                            + '        </tr>';

        for (var count = 0; count < resultaChariotConsommateur.responseJSON.dataResult.length; count++) {

            htmlResultChariotConsommateur += '<tr class="table-row">'
                                                + '   <td class="column-1">'
                                                + '       <div class="cart-img-product b-rad-4 o-f-hidden" title="Cliquez sur l&#39;image pour supprimer !!!" onclick="SupprimerProduitChariot(' + resultaChariotConsommateur.responseJSON.dataResult[count].Produit.IdProduit + ');">'
                                                + '           <img src="/Content/images/' + (resultaChariotConsommateur.responseJSON.dataResult[count].Produit.Sku === null ? 'pas_dImage' : resultaChariotConsommateur.responseJSON.dataResult[count].Produit.Sku) + '.jpg" alt="IMG-PRODUCT">'
                                                + '       </div>'
                                                + '   </td>'
                                                + '   <td class="column-2">' + resultaChariotConsommateur.responseJSON.dataResult[count].Produit.NomProduit + '</td>'
                                                + '   <td class="column-3">$' + currency(resultaChariotConsommateur.responseJSON.dataResult[count].ValeurUnitaire) + '</td>'
                                                + '   <td class="column-4">'
                                                + '       <div class="flex-w bo5 of-hidden w-size17">'
                                                + '           <button class="btn-num-product-down color1 flex-c-m size7 bg8 eff2" name="buttonDownProduct' + resultaChariotConsommateur.responseJSON.dataResult[count].Produit.IdProduit + '">'
                                                + '               <i class="fs-12 fa fa-minus" aria-hidden="true"></i>'
                                                + '           </button>'
                                                + '           <input class="size8 m-text18 t-center num-product" type="number" id="numProductId' + resultaChariotConsommateur.responseJSON.dataResult[count].Produit.IdProduit + '" name="numProductId' + resultaChariotConsommateur.responseJSON.dataResult[count].Produit.IdProduit + '" value="' + resultaChariotConsommateur.responseJSON.dataResult[count].Quantite + '">'
                                                + '           <button class="btn-num-product-up color1 flex-c-m size7 bg8 eff2" name="buttonUpProduct' + resultaChariotConsommateur.responseJSON.dataResult[count].Produit.IdProduit + '">'
                                                + '               <i class="fs-12 fa fa-plus" aria-hidden="true"></i>'
                                                + '           </button>'
                                                + '       </div>'
                                                + '   </td>'
                                                + '   <td class="column-5">$' + currency(resultaChariotConsommateur.responseJSON.dataResult[count].ValeurTotalArticle) + '</td>'
                                                + '</tr>';

            valeurSubTotalChariot = valeurSubTotalChariot + resultaChariotConsommateur.responseJSON.dataResult[count].ValeurTotalArticle;
        }

        htmlResultChariotConsommateur += '</table>'
                                            + '   </div>'
                                            + ' </div>';

        htmlResultChariotConsommateur += '<div class="flex-w flex-sb-m p-t-25 p-b-25 bo8 p-l-35 p-r-60 p-lr-15-sm" id="chariotLivrasion">'
                                            + '   <div class="flex-w flex-m w-full-sm">'
                                            + '       <div class="size11 bo4 m-r-10">'
                                            + '           <input class="sizefull s-text7 p-l-22 p-r-22" type="text" name="coupon-code" placeholder="' + $('#labelCodePromo').val() + '">'
                                            + '       </div>'
                                            + '       <div class="size12 trans-0-4 m-t-10 m-b-10 m-r-10">'
                                            + '           <!-- Button -->'
                                            + '           <button class="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">'
                                            + '           ' + $('#labelAppliquerCoupon').val()
                                            + '           </button>'
                                            + '       </div>'
                                            + '   </div>'
                                            + '   <div class="size10 trans-0-4 m-t-10 m-b-10">'
                                            + '       <!-- Button -->'
                                            + '       <button class="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">'
                                            + '        ' + $('#labelMiseJourPanier').val()
                                            + '       </button>'
                                            + '   </div>'
                                            + ' </div>'
                                            + ' <!-- Total -->'
                                            + ' <div class="bo9 w-size18 p-l-40 p-r-40 p-t-30 p-b-38 m-t-30 m-r-0 m-l-auto p-lr-15-sm">'
                                            + '    <h5 class="m-text20 p-b-24">'
                                            + '        Cart Totals'
                                            + '    </h5>'
                                            + '    <div class="flex-w flex-sb-m p-b-12">'
                                            + '        <span class="s-text18 w-size19 w-full-sm">'
                                            + '            Subtotal:'
                                            + '        </span>'
                                            + '       <span class="m-text21 w-size20 w-full-sm">'
                                            + '            $' + currency(valeurSubTotalChariot)
                                            + '        </span>'
                                            + '    </div>'
                                            + '    <!--  -->'
                                            + '    <div class="flex-w flex-sb bo10 p-t-15 p-b-20">'
                                            + '        <span class="s-text18 w-size19 w-full-sm">'
                                            + '            Shipping:'
                                            + '        </span>'
                                            + '        <div class="w-size20 w-full-sm">'
                                            + '            <p class="s-text8 p-b-23">'
                                            + '                There are no shipping methods available. Please double check your address, or contact us if you need any help.'
                                            + '           </p>'
                                            + '            <span class="s-text19">'
                                            + '                Calculate Shipping'
                                            + '            </span>'
                                            + '            <div class="rs2-select2 rs3-select2 rs4-select2 bo4 of-hidden w-size21 m-t-8 m-b-12">'
                                            + '                <select class="selection-2" name="country">'
                                            + '                    <option>Select a country...</option>'
                                            + '                    <option>CA</option>'
                                            + '                    <option>US</option>'
                                            + '               </select>'
                                            + '            </div>'
                                            + '            <div class="size13 bo4 m-b-12">'
                                            + '                <input class="sizefull s-text7 p-l-15 p-r-15" type="text" name="state" placeholder="State /  country">'
                                            + '            </div>'
                                            + '            <div class="size13 bo4 m-b-22">'
                                            + '                <input class="sizefull s-text7 p-l-15 p-r-15" type="text" name="postcode" placeholder="Postcode / Zip">'
                                            + '            </div>'
                                            + '            <div class="size14 trans-0-4 m-b-10">'
                                            + '                <!-- Button -->'
                                            + '                <button class="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">'
                                            + '                    Update Totals'
                                            + '                </button>'
                                            + '            </div>'
                                            + '        </div>'
                                            + '    </div>'
                                            + '    <!--  -->'
                                            + '    <div class="flex-w flex-sb-m p-t-26 p-b-30">'
                                            + '        <span class="m-text22 w-size19 w-full-sm">'
                                            + '            Total:'
                                            + '        </span>'
                                            + '        <span class="m-text21 w-size20 w-full-sm">'
                                            + '            $39.00'
                                            + '        </span>'
                                            + '    </div>'
                                            + '    <div class="size15 trans-0-4">'
                                            + '        <!-- Button -->'
                                            + '        <button class="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">'
                                            + '            Proceed to Checkout'
                                            + '        </button>'
                                            + '    </div>'
                                            + ' </div>';

        $('#chariotConsommateur').append(htmlResultChariotConsommateur);

    } else {
        $("#chariotConsommateur").empty();
        htmlResultChariotConsommateur = '<div align="center"><a href="/Product" id="Product"><h4>' + $('#labelProfitezVous').val() + '</h4></a></div>';
        $('#chariotConsommateur').append(htmlResultChariotConsommateur);
    }
    return false;
}

function ChariotConsommateurPetit(resultaChariotConsommateur) {

    var htmlResultChariotConsommateur = '';
    var valeurSubTotalChariot = 0;
    var quantiteProduits = 0;

    if (resultaChariotConsommateur === null) {
        return false;
    }

    if (resultaChariotConsommateur.responseJSON.dataResult.length <= 0) {
        $("#petitChariotConsommateur").empty();
        $('#petitChariotConsommateurQte').text(0);
        $(".header-icons-noti").css('background-color', '#111111');
        $(".header-icons-noti").css('width', '16px');
        $(".header-icons-noti").css('height', '16px');

        htmlResultChariotConsommateur = '<a href="/Product" id="Product"><h6>' + $('#labelProfitezVous').val() + '</h6></a>';
        $('#petitChariotConsommateur').append(htmlResultChariotConsommateur);
        return false;
    } else {
        $('#petitChariotConsommateurQte').text(0);
        $("#petitChariotConsommateur").empty();
        for (var count = 0; count < resultaChariotConsommateur.responseJSON.dataResult.length; count++) {

            htmlResultChariotConsommateur += '<ul class="header-cart-wrapitem">'
                                            + '   <li class="header-cart-item">'
                                            + '        <div class="header-cart-item-img title="Cliquez sur l&#39;image pour supprimer !!!" onclick="ProductDetail(' + resultaChariotConsommateur.responseJSON.dataResult[count].Produit.IdProduit + ');"">'
                                            + '            <img src="/Content/images/' + (resultaChariotConsommateur.responseJSON.dataResult[count].Produit.Sku === null ? 'pas_dImage' : resultaChariotConsommateur.responseJSON.dataResult[count].Produit.Sku) + '.jpg" alt="IMG">'
                                            + '        </div>'
                                            + '        <div class="header-cart-item-txt">'
                                            + '            <a href="#" class="header-cart-item-name">'
                                            + '            ' + resultaChariotConsommateur.responseJSON.dataResult[count].Produit.NomProduit
                                            + '            </a>'
                                            + '            <span class="header-cart-item-info">'
                                            + '                ' + resultaChariotConsommateur.responseJSON.dataResult[count].Quantite + ' x $' + currency(resultaChariotConsommateur.responseJSON.dataResult[count].ValeurTotalArticle)
                                            + '            </span>'
                                            + '        </div>'
                                            + '    </li>'
                                            + '</ul>';

            valeurSubTotalChariot = valeurSubTotalChariot + resultaChariotConsommateur.responseJSON.dataResult[count].ValeurTotalArticle;
            quantiteProduits = quantiteProduits + resultaChariotConsommateur.responseJSON.dataResult[count].Quantite
        }

        htmlResultChariotConsommateur += '<div class="header-cart-total">'
                                            + '   Total: $' + currency(valeurSubTotalChariot)
                                            + '</div>';

        htmlResultChariotConsommateur += '<div class="header-cart-buttons">'
                                            + '   <div class="header-cart-wrapbtn">'
                                            + '       <!-- Button -->'
                                            + '       <a href="/Chariot" class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">'
                                            + '           View Cart'
                                            + '       </a>'
                                            + '   </div>'
                                            + '   <div class="header-cart-wrapbtn">'
                                            + '       <!-- Button -->'
                                            + '       <a href="#" class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">'
                                            + '           Check Out'
                                            + '       </a>'
                                            + '   </div>'
                                            + '</div>';

        $('#petitChariotConsommateur').append(htmlResultChariotConsommateur);
        $('#petitChariotConsommateurQte').text(quantiteProduits);

        $(".header-icons-noti").css('background-color', '#e65540');
        $(".header-icons-noti").css('width', '21px');
        $(".header-icons-noti").css('height', '21px');
        return false;
    }
}

function ChariotConsommateurProduits(idConsommateur) {

    var returnResultat;

    if (idConsommateur === null || idConsommateur === undefined || idConsommateur === '') {
        return null;
    }

    Loading();

    return $.ajax({
        url: '/Chariot/ChariotConsommateur',
        type: 'GET',
        data: { "idConsommateur": idConsommateur },
        async: false,
        dataType: 'json'
    }).done(function (data) {
        if (data.dataResult === null || data.dataResult === undefined) {
            Loaded();
            return null;
        } else {
            Loaded();
            return data;
        }
    });
}

function AjouterProduitChariot(idProduit) {

    if ($.cookie('idConsommateurSession') === null || $.cookie('idConsommateurSession') === undefined || $.cookie('idConsommateurSession') === '') {
        return false;
    }

    Loading();

    $.ajax({
        url: '/Chariot/ChariotConsommateurAjouterProduit',
        type: 'POST',
        data: { "idConsommateur": $.cookie('idConsommateurSession'), "idProduit": idProduit },
        dataType: 'json',
        success: function (data) {

            if (data.dataResult === true) {
                var resultaChariotConsommateur = ChariotConsommateurProduits($.cookie('idConsommateurSession'));
                ChariotConsommateurPetit(resultaChariotConsommateur);
            }
        },

        error: function (erro) {
            try {
                erro = JSON.parse(erro.responseText);
                sweetAlert($('#msgError').val(), erro.Message, 'error');

            }
            catch (err) {
                err = JSON.parse(err);
                sweetAlert($('#msgError').val(), erro.Message, 'error');
            }

            Loaded();
        },

        complete: function () {
            //Quelque chose ici, si necessaire !!!
            Loaded();
        }
    });
    return false;

}

function MiseAjourProduitChariotQuantite(idProduit, quantite) {

    if ($("#indexChariot").length === 0) {
        return false;
    }

    if ($.cookie('idConsommateurSession') === null || $.cookie('idConsommateurSession') === undefined || $.cookie('idConsommateurSession') === '') {
        return false;
    }

    Loading();

    $.ajax({
        url: '/Chariot/ChariotConsommateurMiseAJourQuantite',
        type: 'POST',
        data: { "idConsommateur": $.cookie('idConsommateurSession'), "idProduit": idProduit, "quantite": quantite },
        dataType: 'json',
        success: function (data) {

            if (data.dataResult === true) {
                ChariotConsomateurPage();
            }
        },

        error: function (erro) {
            try {
                erro = JSON.parse(erro.responseText);
                sweetAlert($('#msgError').val(), erro.Message, 'error');

            }
            catch (err) {
                err = JSON.parse(err);
                sweetAlert($('#msgError').val(), erro.Message, 'error');
            }

            Loaded();
        },

        complete: function () {
            //Quelque chose ici, si necessaire !!!
            Loaded();
        }
    });
    return false;

}

function SupprimerProduitChariot(idProduit) {

    if ($.cookie('idConsommateurSession') === null || $.cookie('idConsommateurSession') === undefined || $.cookie('idConsommateurSession') === '') {
        return false;
    }

    Loading();

    $.ajax({
        url: '/Chariot/ChariotConsommateurSupprimerProduit',
        type: 'DELETE',
        data: { "idConsommateur": $.cookie('idConsommateurSession'), "idProduit": idProduit },
        dataType: 'json',
        success: function (data) {

            if (data.dataResult === true) {
                ChariotConsomateurPage();
            }
        },

        error: function (erro) {
            try {
                erro = JSON.parse(erro.responseText);
                sweetAlert($('#msgError').val(), erro.Message, 'error');

            }
            catch (err) {
                err = JSON.parse(err);
                sweetAlert($('#msgError').val(), erro.Message, 'error');
            }

            Loaded();
        },

        complete: function () {
            //Quelque chose ici, si necessaire !!!
            Loaded();
        }
    });
    return false;
}

/* LOADING */
function Loading() {
    $('body').append('<div id="loading"><div></div></div>');
}

function Loaded() {
    $('#loading').remove();
}
