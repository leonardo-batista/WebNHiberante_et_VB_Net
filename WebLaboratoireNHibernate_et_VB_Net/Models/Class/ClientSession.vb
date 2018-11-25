Public Class ClientSession

    Protected Property _idConsommateur As Guid
    Protected Property _dateCreation As DateTime?

    Public Property IdConsommateur As Guid
        Get
            Return _idConsommateur
        End Get
        Set(value As Guid)
            _idConsommateur = value
        End Set
    End Property

    Public Property DateCreation As DateTime?
        Get
            Return _dateCreation
        End Get
        Set(value As DateTime?)
            _dateCreation = value
        End Set
    End Property

    Public Sub New()
        _idConsommateur = New Guid
    End Sub

End Class
