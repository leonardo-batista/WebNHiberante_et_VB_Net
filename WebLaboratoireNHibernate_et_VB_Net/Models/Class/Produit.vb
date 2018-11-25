Imports WebLaboratoireNHibernate_et_VB_Net

Public Class Produit : Implements ITable

    Protected Property _id As Int32
    Protected Property _dateCreation As DateTime?
    Protected Property _actif As Boolean
    Protected Property _idCategorie As Int32
    Protected Property _idMarque As Int32
    Protected Property _nomProduit As String
    Protected Property _description As String
    Protected Property _ficheTecnique As String
    Protected Property _valeur As Decimal
    Protected Property _sku As String

    Public Property IdCategorie As Int32
        Get
            Return _idCategorie
        End Get
        Set(value As Int32)
            _idCategorie = value
        End Set
    End Property

    Public Property IdMarque As Int32
        Get
            Return _idMarque
        End Get
        Set(value As Int32)
            _idMarque = value
        End Set
    End Property

    Public Property NomProduit As String
        Get
            Return _nomProduit
        End Get
        Set(value As String)
            _nomProduit = value
        End Set
    End Property

    Public Property Description As String
        Get
            Return _description
        End Get
        Set(value As String)
            _description = value
        End Set
    End Property

    Public Property FicheTechnique As String
        Get
            Return _description
        End Get
        Set(value As String)
            _ficheTecnique = value
        End Set
    End Property

    Public Property Valeur As Decimal
        Get
            Return _valeur
        End Get
        Set(value As Decimal)
            _valeur = value
        End Set
    End Property

    Public Property Sku As String
        Get
            Return _sku
        End Get
        Set(value As String)
            _sku = value
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

    End Sub
End Class
