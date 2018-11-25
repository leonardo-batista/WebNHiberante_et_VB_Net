Imports System.Web.Mvc

Namespace Controllers
    Public Class AccueilController
        Inherits Controller

        <HttpGet()>
        Function Accueil() As ActionResult
            Logger.LogInfo("Accueil")
            Return View()
        End Function

        <HttpGet()>
        Function Index() As ActionResult
            Logger.LogInfo("Index")
            Return View()
        End Function

    End Class
End Namespace