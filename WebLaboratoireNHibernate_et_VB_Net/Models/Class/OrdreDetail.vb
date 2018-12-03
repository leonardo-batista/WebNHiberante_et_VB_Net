Namespace Models

    Public Class OrdreDetail : Implements ITable

        Protected Property _id As Int32
        Protected Property _dateCreation As DateTime?
        Protected Property _actif As Boolean
        Protected Property _idClient As Int32
        Protected Property _produit As Produit
        Protected Property _quantite As Int32
        Protected Property _valeurUnitaire As Decimal
        Protected Property _valeurTotalProduit As Decimal

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

        Public Overridable Property IdClient As Int32
            Get
                Return _idClient
            End Get
            Set(value As Int32)
                _idClient = value
            End Set
        End Property

        Public Overridable Property Produit As Produit
            Get
                Return _produit
            End Get
            Set(value As Produit)
                _produit = value
            End Set
        End Property

        Public Overridable Property Quantite As Int32
            Get
                Return _quantite
            End Get
            Set(value As Int32)
                _quantite = value
            End Set
        End Property

        Public Overridable Property ValeurUnitaire As Decimal
            Get
                Return _valeurUnitaire
            End Get
            Set(value As Decimal)
                _valeurUnitaire = value
            End Set
        End Property

        Public Overridable Property ValeurTotalProduit As Decimal
            Get
                Return _valeurTotalProduit
            End Get
            Set(value As Decimal)
                _valeurTotalProduit = value
            End Set
        End Property

        Public Sub New()
            _produit = New Produit
        End Sub

    End Class
End Namespace