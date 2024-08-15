import random
from typing import Union


# classes are more convenient to compare
class GameItem:
    pass


class Rock(GameItem):
    # equally
    def __eq__(self, other):
        return isinstance(other, Rock)

    # less
    def __lt__(self, other):
        return isinstance(other, Paper)

    # more
    def __gt__(self, other):
        return isinstance(other, Scissor)

    def __str__(self):
        return "Rock"


class Paper(GameItem):
    # equally
    def __eq__(self, other):
        return isinstance(other, Paper)

    # less
    def __lt__(self, other):
        return isinstance(other, Scissor)

    # more
    def __gt__(self, other):
        return isinstance(other, Rock)

    def __str__(self):
        return "Paper"


class Scissor(GameItem):
    # equally
    def __eq__(self, other):
        return isinstance(other, Scissor)

    # less
    def __lt__(self, other):
        return isinstance(other, Rock)

    # more
    def __gt__(self, other):
        return isinstance(other, Paper)

    def __str__(self):
        return "Scissor"


class Game:

    def __init__(self):
        self.__results_dist = {"won": 0, "lost": 0, "drew": 0}

    @property
    def results_dist(self):
        return self.__results_dist


    def play(self):
        user_item = self.__get_user_item()
        computer_item = self.__get_computer_item()
        result = self.__get_game_result(user_item, computer_item)
        print(f'You selected {user_item}. The computer selected {computer_item}. {result.upper()}')
        self.results_dist[result] += 1
    def __get_user_item(self) -> GameItem:
        user_item = None
        while not user_item:
            user_input = input('Select (r)ock, (p)aper, or (s)cissor: ')
            user_item = self.__make_item(user_input.lower())
            if not user_item:
                print("Invalid selection. Please choose 'r' for Rock, 'p' for Paper, or 's' for Scissor.")
        return user_item

    def __get_computer_item(self) -> GameItem:
        items_list = [Rock(), Paper(), Scissor()]
        return random.choice(items_list)

    def __make_item(self, chose: str) -> Union[GameItem, None]:
        if chose == 'r':
            return Rock()
        elif chose == 'p':
            return Paper()
        elif chose == 's':
            return Scissor()
        else:
            return None

    # get_game_result(self, user_item, computer_item) – Determine the result of the game.
    def __get_game_result(self, user_item: GameItem,
                          computer_item: GameItem) -> str:
        if user_item > computer_item:
            return 'won'
        elif user_item < computer_item:
            return 'lost'
        else:
            return 'drew'

