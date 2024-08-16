# 1 #########################
#
# Answer the following questions
#
# What is a class?
#  a model for creating objects of a certain type,
# describing their structure (a set of fields and their initial state)
# and defining algorithms (functions or methods) for working with these objects.

# What is an instance?
# an object in memory created based on a class

# What is encapsulation?
# combining data and methods of this data, hiding the implementation. Data access control.

# What is abstraction?
# highlighting the main characteristics, hiding implementation details at a lower level.
# Providing access to the necessary methods and properties.

# What is inheritance?
# creating new classes based on the current ones using their methods and attributes

# What is multiple inheritance?
# inheritance of methods and attributes from multiple parent classes


# What is polymorphism?
# using the same methods by objects of different types

# What is method resolution order or MRO?
# the order of defining methods and their own in the hierarchy, the first current class,
# then the parent classes (in the order of inheritance). As soon as the method is found, the search stops


# 2 ######################
import random


# The Deck of cards class should NOT inherit from a Card class.
class Card:
    def __init__(self, suit: str, value: str):
        self.__suit = suit
        self.__value = value

    @property
    def suit(self):
        return self.__suit

    @property
    def value(self):
        return self.__value

    def __eq__(self, other) -> bool:
        return isinstance(other, Card) and self.suit == other.suit and self.value == other.value

    def __hash__(self):
        return hash((self.suit, self.value))

    def __str__(self):
        return f'{self.value}-{self.suit}'

    def __repr__(self):
        return self.__str__()


# The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and
# a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
class Deck:
    start_deck = tuple([Card(suit, value) for suit in ['Hearts', 'Diamonds', 'Clubs', 'Spades']
                        for value in ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']])

    def __init__(self, cards: list = None):
        if not cards:
            self.__cards = list(Deck.start_deck)
        else:
            self.__cards = cards

    @property
    def cards(self):
        return self.__cards

    #should have a shuffle method which makes sure the deck of cards has
    # all 52 cards and then rearranges them randomly.

    def shuffle(self):
        if self.__check_desk() is not True:
            raise ValueError("The deck is not valid")
        random.shuffle(self.cards)

    # should have a method called deal which deals a single card from the deck.
    # After a card is dealt, it should be removed from the deck.
    def deal(self):
        if len(self.cards) > 0:
            return self.cards.pop()
        else:
            print("The deck is empy")

    def __check_desk(self) -> bool:
        return len(self.cards) == len(Deck.start_deck) and set(self.cards) == set(Deck.start_deck)


deck = Deck()
print(deck.cards)
deck.shuffle()
print(deck.cards)
for i in range(55):
    print(f'{deck.deal()} your card')
    print(deck.cards)
