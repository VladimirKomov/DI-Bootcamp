class Farm:
    dict_animals = {}

    def __init__(self, name: str):
        self.name = name

    def add_animal(self, type: str, count=1):
        if type in self.dict_animals:
            self.dict_animals[type] = (self.dict_animals.get(type) + count)
        else:
            self.dict_animals[type] = count

    def get_info(self):
        info = f"{self.name}'s farm\n\n"
        for animal, count in self.dict_animals.items():
            info += f"{animal} : {count}\n"
        info += "\n    E-I-E-I-0!\n"
        return info

    def get_animal_types(self) -> list:
        types = list(self.dict_animals.keys())
        list.sort(types)
        return types

    def get_short_info(self):
        info = f"{self.name}’s farm has "
        list_info = []

        for alimal, count in self.dict_animals.items():
            if count > 1:
                list_info.append(f"{alimal}s")
            else:
                list_info.append(f"{alimal}")
        if len(list_info) > 1:
            info += ", ".join(list_info[:-1]) + f" and {list_info[-1]}."
        # for one elemrnt
        else:
            info += f"{list_info[0]}."

        return info


macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

print(macdonald.get_info())
print(macdonald.get_animal_types())
print(macdonald.get_short_info())
