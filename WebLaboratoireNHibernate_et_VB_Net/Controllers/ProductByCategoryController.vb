Imports System.Web.Mvc

Namespace Controllers
    Public Class ProductByCategoryController
        Inherits Controller

        ' GET: ProductByCategory
        Function Index() As ActionResult
            Return View()
        End Function
    End Class
End Namespace