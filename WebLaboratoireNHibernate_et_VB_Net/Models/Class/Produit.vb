Namespace Models

    Public Class Produit : Implements ITable

        Protected Property _id As Int32
        Protected Property _dateCreation As DateTime?
        Protected Property _actif As Boolean
        Protected Property _categorie As Categorie
        Protected Property _marque As Marque
        Protected Property _nomProduit As String
        Protected Property _description As String
        Protected Property _ficheTecnique As String
        Protected Property _valeur As Decimal
        Protected Property _sku As String

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

        Public Overridable Property Categorie As Categorie
            Get
                Return _categorie
            End Get
            Set(value As Categorie)
                _categorie = value
            End Set
        End Property

        Public Overridable Property Marque As Marque
            Get
                Return _marque
            End Get
            Set(value As Marque)
                _marque = value
            End Set
        End Property

        Public Overridable Property NomProduit As String
            Get
                Return _nomProduit
            End Get
            Set(value As String)
                _nomProduit = value
            End Set
        End Property

        Public Overridable Property Description As String
            Get
                Return _description
            End Get
            Set(value As String)
                _description = value
            End Set
        End Property

        Public Overridable Property FicheTechnique As String
            Get
                Return _description
            End Get
            Set(value As String)
                _ficheTecnique = value
            End Set
        End Property

        Public Overridable Property Valeur As Decimal
            Get
                Return _valeur
            End Get
            Set(value As Decimal)
                _valeur = value
            End Set
        End Property

        Public Overridable Property Sku As String
            Get
                Return _sku
            End Get
            Set(value As String)
                _sku = value
            End Set
        End Property

        Public Sub New()
            _marque = New Marque
        End Sub
    End Class
End Namespace