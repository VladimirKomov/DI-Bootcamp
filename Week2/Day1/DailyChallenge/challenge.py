class Farm:
    dict_animals = {}

    def __init__(self, name: str):
        self.name = name

    def add_animal(self, type: str, count=1):
        self.dict_animals[type] = self.dict_animals.setdefault(type, 0) + count

    def get_info(self):
        info = f"{self.name}'s farm\n\n"
        list_info = [f"{animal} : {count}\n" for animal, count in self.dict_animals.items()]
        info += "".join(list_info) + "\n    E-I-E-I-0!\n"
        return info

    def get_animal_types(self) -> list:
        types = self.dict_animals.keys()
        return sorted(types)

    def get_short_info(self):
        info = f"{self.name}’s farm has "
        list_info = [f"{animal}s" if count > 1 else f"{animal}" for animal, count in self.dict_animals.items()]
        info += ", ".join(list_info[:-1]) + f" and {list_info[-1]}." if len(list_info) > 1 else f"{list_info[0]}."
        return info


macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

print(macdonald.get_info())
print(macdonald.get_animal_types())
print(macdonald.get_short_info)
