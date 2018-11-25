Imports System.Web.Mvc

Namespace Controllers
    Public Class ProductDetailController
        Inherits Controller

        ' GET: ProductDetail
        Function Index() As ActionResult
            Return View()
        End Function
    End Class
End Namespace