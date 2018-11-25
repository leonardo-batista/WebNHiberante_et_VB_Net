Imports log4net

Public Class Logger
    Private Shared logger As ILog = LogManager.GetLogger("ExampleAppender")

    Public Shared Sub LogInfo(ByVal str As String)
        logger.Info(str)
    End Sub

    Public Shared Sub LogError(ByVal str As String)
        logger.Error(str)
    End Sub

    Public Shared Sub LogError(ByVal str As String, ByVal ex As Exception)
        logger.Error(str)
    End Sub

    Public Shared Sub LogFatal(ByVal str As String)
        logger.Fatal(str)
    End Sub

    Public Shared Sub LogFatal(ByVal str As String, ByVal ex As Exception)
        logger.Fatal(str)
    End Sub

End Class
