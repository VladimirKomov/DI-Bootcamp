from Week2.Day5.ExerciseXP.game.game import Game


def get_user_menu_choice():
    user_input = input('(g) Play a game \n'
                       '(q) Show scores and Quit \n '
                       ':')
    return user_input


def print_results(results: dict):
    print(f"Game results:\n"
          f"    You won  {results["won"]} times\n"
          f"    You loss {results["lost"]} times\n"
          f"    You drew {results["drew"]} times\n"
          "Thank you for your playing!")


# Displaying the menu repeatedly, until the user types in the value to exit the program:
# (Make use of the get_user_menu_choice function)
game = None


def main():
    global game
    user_input = get_user_menu_choice().lower()
    if user_input not in ('g', 'q'):
        print("Invalid input. Please choose 'g' for game, 'q' for result and quit")
        main()
    # When the user chooses to play a game.
    # Remember the results of every game that is played.
    if game is None:
        game = Game()

    if user_input == 'g':
        game.play()
        main()

    if user_input == 'q':
        print_results(game.results_dist)


main()
