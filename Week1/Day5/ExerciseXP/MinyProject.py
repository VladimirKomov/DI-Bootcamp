import random

matrix = [["" for i in range(3)] for j in range(3)]
name_winner = ""
dict_players = {}


def play():
    plyer_1 = input("Name player #1 :")
    plyer_2 = input("Name player #2 :")
    list_participates = [plyer_1, plyer_2]
    # The first step is random
    random.shuffle(list_participates)
    print("Let's get started!")
    main(list_participates)


def main(list_participates: list):
    count_steps = 0
    # who has "X" who has "O"
    dict_players[list_participates[0]] = "X"
    dict_players[list_participates[1]] = "O"
    list_players = [list_participates[0], list_participates[1]]
    # order of the steps
    key = 0
    # starting position
    display_board()

    while count_steps < 9 and not name_winner:
        current_plyer = list_players[key]
        take_step(current_plyer)
        check_victory()
        display_board()
        # change position
        if key == 0:
            key += 1
        else:
            key -= 1
        count_steps += 1

    if not name_winner:
        print("No one won, and no one lost!")
    else:
        print(f"!!!Won {name_winner}!!!")


def take_step(current_plyer: str):
    is_valid = False
    print(f"Plyer {current_plyer}'s turn...")
    # check each step for validity
    while not is_valid:
        row = int(input("Enter row :"))
        if not validation(row):
            continue
        colum = int(input("Enter colum :"))
        if not validation(colum):
            continue
        # check that the cell is empty
        if not save_step(current_plyer, row, colum):
            continue
        break


# save player's step
def save_step(current_plyer: str, row: int, colum: int) -> bool:
    if len(matrix[row - 1][colum - 1]) == 0:
        matrix[row - 1][colum - 1] = current_plyer
        return True
    else:
        print("Cell is full. Try again.")
        return False


# check input
def validation(int_input: int) -> bool:
    if 1 <= int_input <= 3:
        return True
    else:
        print("Input can be from 1 to 3, in empty cells. Try again.")
        return False


def display_board():
    print("*******************")
    print("*     |     |     *")
    for i, row in enumerate(matrix):
        print(f"*  {dict_players.get(row[0], " ")}  "
              f"|  {dict_players.get(row[1], " ")}  "
              f"|  {dict_players.get(row[2], " ")}  *")
        if i < len(matrix) - 1:
            print("*_____|_____|____ *")
        print("*     |     |     *")
    print("*******************")


def check_victory():
    # checking rows, columns and diagonals
    for row in matrix:
        check_line(row)
    for i in range(len(matrix[0])):
        colum = [row[i] for row in matrix]
        check_line(colum)
    diagonal_left_right = [matrix[i][i] for i in range(len(matrix))]
    check_line(diagonal_left_right)
    diagonal_right_left = [matrix[i][len(matrix) - i - 1] for i in range(len(matrix))]
    check_line(diagonal_right_left)


def check_line(list_line: list):
    global name_winner
    if list_line[0] and all(list_line[0] == value for value in list_line):
        name_winner = list_line[0]


play()
