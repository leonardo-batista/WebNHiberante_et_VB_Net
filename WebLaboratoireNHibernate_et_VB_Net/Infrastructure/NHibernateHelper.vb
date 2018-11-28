Imports NHibernate
Imports NHibernate.Cfg

Public Class NHibernateHelper

    Private Shared factory As ISessionFactory

    Private Shared Function SessionFactory() As ISessionFactory

        If factory Is Nothing Then
            CreateSessionFactory()
        End If

        Return factory

    End Function

    Private Shared Sub CreateSessionFactory()

        Dim cfg As Configuration = New Configuration()

        Dim configurationPath = HttpContext.Current.Server.MapPath("~\Configuration\hibernate.cfg.xml")
        cfg.Configure(configurationPath)
        factory = cfg.BuildSessionFactory()

    End Sub

    Public Shared Function OpenSession() As ISession
        Return SessionFactory().OpenSession()
    End Function

End Class
