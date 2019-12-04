# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'IPFC_Deck_menu1.ui'
#
# Created by: PyQt5 UI code generator 5.13.0
#
# WARNING! All changes made in this file will be lost!


from PyQt5 import QtCore, QtGui, QtWidgets


class Ui_DeckMenu(object):
    def setupUi(self, DeckMenu):
        DeckMenu.setObjectName("DeckMenu")
        DeckMenu.resize(380, 480)
        DeckMenu.setStyleSheet("#DeckMenu { border-image: url(split_grey_background.jpg) 0 0 0 0 stretch stretch;}")
        self.verticalLayout_2 = QtWidgets.QVBoxLayout(DeckMenu)
        self.verticalLayout_2.setObjectName("verticalLayout_2")
        self.verticalLayout = QtWidgets.QVBoxLayout()
        self.verticalLayout.setSizeConstraint(QtWidgets.QLayout.SetDefaultConstraint)
        self.verticalLayout.setContentsMargins(30, 30, 30, 30)
        self.verticalLayout.setSpacing(30)
        self.verticalLayout.setObjectName("verticalLayout")
        self.pushButtonQuizzes = QtWidgets.QPushButton(DeckMenu)
        sizePolicy = QtWidgets.QSizePolicy(QtWidgets.QSizePolicy.Expanding, QtWidgets.QSizePolicy.Expanding)
        sizePolicy.setHorizontalStretch(0)
        sizePolicy.setVerticalStretch(0)
        sizePolicy.setHeightForWidth(self.pushButtonQuizzes.sizePolicy().hasHeightForWidth())
        self.pushButtonQuizzes.setSizePolicy(sizePolicy)
        self.pushButtonQuizzes.setMinimumSize(QtCore.QSize(0, 40))
        font = QtGui.QFont()
        font.setFamily("Menlo")
        self.pushButtonQuizzes.setFont(font)
        self.pushButtonQuizzes.setAutoDefault(False)
        self.pushButtonQuizzes.setObjectName("pushButtonQuizzes")
        self.verticalLayout.addWidget(self.pushButtonQuizzes)
        self.pushButtonGames = QtWidgets.QPushButton(DeckMenu)
        sizePolicy = QtWidgets.QSizePolicy(QtWidgets.QSizePolicy.Expanding, QtWidgets.QSizePolicy.Expanding)
        sizePolicy.setHorizontalStretch(0)
        sizePolicy.setVerticalStretch(0)
        sizePolicy.setHeightForWidth(self.pushButtonGames.sizePolicy().hasHeightForWidth())
        self.pushButtonGames.setSizePolicy(sizePolicy)
        self.pushButtonGames.setMinimumSize(QtCore.QSize(0, 40))
        font = QtGui.QFont()
        font.setFamily("Menlo")
        self.pushButtonGames.setFont(font)
        self.pushButtonGames.setAutoDefault(False)
        self.pushButtonGames.setObjectName("pushButtonGames")
        self.verticalLayout.addWidget(self.pushButtonGames)
        self.pushButtonEditDeck = QtWidgets.QPushButton(DeckMenu)
        sizePolicy = QtWidgets.QSizePolicy(QtWidgets.QSizePolicy.Expanding, QtWidgets.QSizePolicy.Expanding)
        sizePolicy.setHorizontalStretch(0)
        sizePolicy.setVerticalStretch(0)
        sizePolicy.setHeightForWidth(self.pushButtonEditDeck.sizePolicy().hasHeightForWidth())
        self.pushButtonEditDeck.setSizePolicy(sizePolicy)
        self.pushButtonEditDeck.setMinimumSize(QtCore.QSize(0, 40))
        font = QtGui.QFont()
        font.setFamily("Menlo")
        self.pushButtonEditDeck.setFont(font)
        self.pushButtonEditDeck.setAutoDefault(False)
        self.pushButtonEditDeck.setObjectName("pushButtonEditDeck")
        self.verticalLayout.addWidget(self.pushButtonEditDeck)
        self.pushButtonImporter = QtWidgets.QPushButton(DeckMenu)
        sizePolicy = QtWidgets.QSizePolicy(QtWidgets.QSizePolicy.Expanding, QtWidgets.QSizePolicy.Expanding)
        sizePolicy.setHorizontalStretch(0)
        sizePolicy.setVerticalStretch(0)
        sizePolicy.setHeightForWidth(self.pushButtonImporter.sizePolicy().hasHeightForWidth())
        self.pushButtonImporter.setSizePolicy(sizePolicy)
        self.pushButtonImporter.setMinimumSize(QtCore.QSize(0, 40))
        font = QtGui.QFont()
        font.setFamily("Menlo")
        self.pushButtonImporter.setFont(font)
        self.pushButtonImporter.setAutoDefault(False)
        self.pushButtonImporter.setObjectName("pushButtonImporter")
        self.verticalLayout.addWidget(self.pushButtonImporter)
        self.pushButtonQuit = QtWidgets.QPushButton(DeckMenu)
        sizePolicy = QtWidgets.QSizePolicy(QtWidgets.QSizePolicy.Expanding, QtWidgets.QSizePolicy.Expanding)
        sizePolicy.setHorizontalStretch(0)
        sizePolicy.setVerticalStretch(0)
        sizePolicy.setHeightForWidth(self.pushButtonQuit.sizePolicy().hasHeightForWidth())
        self.pushButtonQuit.setSizePolicy(sizePolicy)
        self.pushButtonQuit.setMinimumSize(QtCore.QSize(0, 40))
        font = QtGui.QFont()
        font.setFamily("Menlo")
        self.pushButtonQuit.setFont(font)
        self.pushButtonQuit.setAutoDefault(False)
        self.pushButtonQuit.setObjectName("pushButtonQuit")
        self.verticalLayout.addWidget(self.pushButtonQuit)
        self.verticalLayout_2.addLayout(self.verticalLayout)

        self.retranslateUi(DeckMenu)
        QtCore.QMetaObject.connectSlotsByName(DeckMenu)

    def retranslateUi(self, DeckMenu):
        _translate = QtCore.QCoreApplication.translate
        DeckMenu.setWindowTitle(_translate("DeckMenu", "Inter Planetary Flash Cards"))
        self.pushButtonQuizzes.setText(_translate("DeckMenu", "Quizzes"))
        self.pushButtonGames.setText(_translate("DeckMenu", "Games"))
        self.pushButtonEditDeck.setText(_translate("DeckMenu", "View and edit deck"))
        self.pushButtonImporter.setText(_translate("DeckMenu", "Choose, import and export decks"))
        self.pushButtonQuit.setText(_translate("DeckMenu", "Quit"))
