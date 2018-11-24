Imports System.Web.Mvc

Namespace Controllers
    Public Class AccueilController
        Inherits Controller

        <HttpGet()>
        Function Accueil() As ActionResult
            Return View()
        End Function
    End Class
End Namespace