Namespace Models

    Public Class Adresse

        Protected Property _codePostal As String
        Protected Property _numero As String
        Protected Property _complement As String
        Protected Property _quartier As String
        Protected Property _ville As String
        Protected Property _province As EProvince

        Public Overridable Property CodePostal As String
            Get
                Return _codePostal
            End Get
            Set(value As String)
                _codePostal = value
            End Set
        End Property

        Public Overridable Property Numero As String
            Get
                Return _numero
            End Get
            Set(value As String)
                _numero = value
            End Set
        End Property

        Public Overridable Property Complement As String
            Get
                Return _complement
            End Get
            Set(value As String)
                _complement = value
            End Set
        End Property

        Public Overridable Property Quartier As String
            Get
                Return _quartier
            End Get
            Set(value As String)
                _quartier = value
            End Set
        End Property

        Public Overridable Property Ville As String
            Get
                Return _ville
            End Get
            Set(value As String)
                _ville = value
            End Set
        End Property

        Public Overridable Property Province As EProvince
            Get
                Return _province
            End Get
            Set(value As EProvince)
                _province = value
            End Set
        End Property

    End Class

End Namespace