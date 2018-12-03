Namespace Models

    Public Class Ordre : Implements ITable

        Protected Property _id As Int32
        Protected Property _dateCreation As DateTime?
        Protected Property _actif As Boolean
        Protected Property _commande As UInt64
        Protected Property _client As Client
        Protected Property _paiement As Paiement
        Protected Property _idConsommateur As Guid
        Protected Property _valeurTotalProduit As Decimal
        Protected Property _valeurLivraison As Decimal
        Protected Property _tauxFed As Decimal
        Protected Property _tauxProv As Decimal
        Protected Property _totalGeneral As Decimal
        Protected Property _note As String
        Protected Property _adresse As Adresse
        Protected Property _ordreDetail As List(Of OrdreDetail)

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

        Public Overridable Property Commande As UInt64
            Get
                Return _commande
            End Get
            Set(value As UInt64)
                _commande = value
            End Set
        End Property

        Public Overridable Property Client As Client
            Get
                Return _client
            End Get
            Set(value As Client)
                _client = value
            End Set
        End Property

        Public Overridable Property Paiement As Paiement
            Get
                Return _paiement
            End Get
            Set(value As Paiement)
                _paiement = value
            End Set
        End Property

        Public Overridable Property IdConsommateur As Guid
            Get
                Return _idConsommateur
            End Get
            Set(value As Guid)
                _idConsommateur = value
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

        Public Overridable Property ValeurLivraison As Decimal
            Get
                Return _valeurLivraison
            End Get
            Set(value As Decimal)
                _valeurLivraison = value
            End Set
        End Property

        Public Overridable Property TauxFed As Decimal
            Get
                Return _tauxFed
            End Get
            Set(value As Decimal)
                _tauxFed = value
            End Set
        End Property

        Public Overridable Property TauxProv As Decimal
            Get
                Return _tauxProv
            End Get
            Set(value As Decimal)
                _tauxProv = value
            End Set
        End Property

        Public Overridable Property TotalGeneral As Decimal
            Get
                Return _totalGeneral
            End Get
            Set(value As Decimal)
                _totalGeneral = value
            End Set
        End Property

        Public Overridable Property Note As String
            Get
                Return _note
            End Get
            Set(value As String)
                _note = value
            End Set
        End Property

        Public Overridable Property Adresse As Adresse
            Get
                Return _adresse
            End Get
            Set(value As Adresse)
                _adresse = value
            End Set
        End Property

        Public Overridable Property OrdreDetail As List(Of OrdreDetail)
            Get
                Return _ordreDetail
            End Get
            Set(value As List(Of OrdreDetail))
                _ordreDetail = value
            End Set
        End Property

        Public Sub New()
            _client = New Client
            _paiement = New Paiement
            _idConsommateur = New Guid
            _adresse = New Adresse
            _ordreDetail = New List(Of OrdreDetail)
        End Sub

    End Class

End Namespace