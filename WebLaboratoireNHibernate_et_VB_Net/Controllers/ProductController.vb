Imports System.Web.Mvc


Namespace Controllers
    Public Class ProductController
        Inherits Controller

        Private categorieDAO As CategorieDAO
        Private produitDAO As ProduitDAO

        Public Sub New()
            categorieDAO = New CategorieDAO
            produitDAO = New ProduitDAO
        End Sub

        Private Function ThrowJsonError(ByVal e As Exception) As JsonResult

            Response.StatusCode = System.Net.HttpStatusCode.BadRequest
            Return Json(New With {.Message = e.Message}, JsonRequestBehavior.AllowGet)

        End Function

        <HttpGet()>
        Function Index() As ActionResult

            Return View()
        End Function

        '<HttpGet()>
        '<OutputCache(Duration:=3600, VaryByParam:="none", Location:=OutputCacheLocation.Server)>
        Function ListeCategorieProduit() As JsonResult
            Try
                Return Json(New With {.dataResult = categorieDAO.ListeCategorieProduit()}, JsonRequestBehavior.AllowGet)
            Catch ex As Exception
                Return ThrowJsonError(ex)
            End Try
        End Function

        <HttpGet()>
        Function ListeDeProduitsParCategorieTous() As JsonResult
            Try
                Return Json(New With {.dataResult = produitDAO.ListeDeProduitParCategorie()}, JsonRequestBehavior.AllowGet)
            Catch ex As Exception
                Return ThrowJsonError(ex)
            End Try
        End Function

        <HttpGet()>
        Function ListeDeProduitsParCategorie(idCategorie As Int32) As JsonResult
            Try
                Return Json(New With {.dataResult = produitDAO.ListeDeProduitParCategorie(idCategorie)}, JsonRequestBehavior.AllowGet)
            Catch ex As Exception
                Return ThrowJsonError(ex)
            End Try
        End Function

    End Class
End Namespace