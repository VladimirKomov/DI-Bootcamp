class Game:

    def get_user_item(self):
        input('Select (r)ock, (p)aper, or (s)cissor: ')


# classes are more convenient to compare
class Rock:
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

class Paper:
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

class Scissor:
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