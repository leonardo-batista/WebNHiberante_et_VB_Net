﻿Namespace Models

    Public Class Categorie : Implements ITable

        Protected Property _id As Int32
        Protected Property _dateCreation As DateTime?
        Protected Property _actif As Boolean
        Protected Property _nomCategorie As String

        Public Overridable Property Actif As Boolean Implements ITable.Actif
            Get
                Return _actif
            End Get
            Set(value As Boolean)
                _actif = value
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

        Public Overridable Property Id As Integer Implements ITable.Id
            Get
                Return _id
            End Get
            Set(value As Integer)
                _id = value
            End Set
        End Property

        Public Overridable Property NomCategorie As String
            Get
                Return _nomCategorie
            End Get
            Set(value As String)
                _nomCategorie = value
            End Set
        End Property

        Public Sub New()

        End Sub
    End Class

End Namespace