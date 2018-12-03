Namespace Models

    Public Class Client : Implements ITable

        Protected Property _id As Int32
        Protected Property _dateCreation As DateTime?
        Protected Property _actif As Boolean
        Protected Property _nom As String
        Protected Property _preNom As String
        Protected Property _telephone As String
        Protected Property _email As String
        Protected Property _dateNaissance As DateTime?
        Protected Property _nas As String
        Protected Property _genre As EGenre

        Public Overridable Property Id As Integer Implements ITable.Id
            Get
                Return _id
            End Get
            Set(value As Integer)
                _id = value
            End Set
        End Property

        Public Overridable Property DateCreation As Date? Implements ITable.DateCreation
            Get
                Return _dateCreation
            End Get
            Set(value As Date?)
                _dateCreation = value
            End Set
        End Property

        Public Overridable Property Actif As Boolean Implements ITable.Actif
            Get
                Return _actif
            End Get
            Set(value As Boolean)
                _actif = value
            End Set
        End Property

        Public Overridable Property Nom As String
            Get
                Return _nom
            End Get
            Set(value As String)
                _nom = value
            End Set
        End Property

        Public Overridable Property PreNom As String
            Get
                Return _preNom
            End Get
            Set(value As String)
                _preNom = value
            End Set
        End Property

        Public Overridable Property Telephone As String
            Get
                Return _telephone
            End Get
            Set(value As String)
                _telephone = value
            End Set
        End Property

        Public Overridable Property Email As String
            Get
                Return _email
            End Get
            Set(value As String)
                _email = value
            End Set
        End Property

        Public Overridable Property DateNaissance As DateTime?
            Get
                Return _dateNaissance
            End Get
            Set(value As DateTime?)
                _dateNaissance = value
            End Set
        End Property

        Public Overridable Property Nas As String
            Get
                Return _nas
            End Get
            Set(value As String)
                _nas = value
            End Set
        End Property

        Public Overridable Property Genre As EGenre
            Get
                Return _genre
            End Get
            Set(value As EGenre)
                _genre = value
            End Set
        End Property

        Public Sub New()

        End Sub

    End Class

End Namespace