Imports System.Web.Mvc

Namespace Controllers
    Public Class FaqController
        Inherits Controller

        ' GET: Faq
        Function Index() As ActionResult
            Return View()
        End Function
    End Class
End Namespace