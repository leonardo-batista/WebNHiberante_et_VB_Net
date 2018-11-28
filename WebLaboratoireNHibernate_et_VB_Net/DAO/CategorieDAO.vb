Imports WebLaboratoireNHibernate_et_VB_Net.Models

Public Class CategorieDAO

    Function ListeCategorieProduit() As List(Of Categorie)
        Try

            Dim resultListeCategories As List(Of Categorie) = New List(Of Categorie)

            Using iSession = NHibernateHelper.OpenSession

                resultListeCategories = iSession.CreateCriteria(Of Categorie).List(Of Categorie)

            End Using

            Return resultListeCategories
        Catch ex As Exception
            Throw ex
        End Try
    End Function

End Class
