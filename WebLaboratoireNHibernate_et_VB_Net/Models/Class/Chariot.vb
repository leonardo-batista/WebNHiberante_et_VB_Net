Namespace Models

    Public Class Chariot : Implements ITable

        Protected Property _id As Int32
        Protected Property _dateCreation As DateTime?
        Protected Property _actif As Boolean
        Protected Property _idConsommateur As Guid
        Protected Property _quantite As Int32
        Protected Property _valeurUnitaire As Decimal
        Protected Property _valeurTotalArticle As Decimal
        Protected Property _produit As Produit

        Public Property IdConsommateur As Guid
            Get
                Return _idConsommateur
            End Get
            Set(value As Guid)
                _idConsommateur = value
            End Set
        End Property

        Public Property Quantite As Int32
            Get
                Return _quantite
            End Get
            Set(value As Int32)
                _quantite = value
            End Set
        End Property

        Public Property ValeurUnitaire As Decimal
            Get
                Return _valeurUnitaire
            End Get
            Set(value As Decimal)
                _valeurUnitaire = value
            End Set
        End Property

        Public Property ValeurTotalArticle As Decimal
            Get
                Return _valeurTotalArticle
            End Get
            Set(value As Decimal)
                _valeurTotalArticle = value
            End Set
        End Property

        Public Property Produit As Produit
            Get
                Return _produit
            End Get
            Set(value As Produit)
                _produit = value
            End Set
        End Property

        Public Property Actif As Boolean Implements ITable.Actif
            Get
                Return _actif
            End Get
            Set(value As Boolean)
                _actif = value
            End Set
        End Property

        Public Property DateCreation As Date? Implements ITable.DateCreation
            Get
                Return _dateCreation
            End Get
            Set(value As Date?)
                _dateCreation = value
            End Set
        End Property

        Public Property Id As Integer Implements ITable.Id
            Get
                Return _id
            End Get
            Set(value As Integer)
                _id = value
            End Set
        End Property

        Public Sub New()
            _idConsommateur = New Guid
            _produit = New Produit
        End Sub
    End Class
End Namespace