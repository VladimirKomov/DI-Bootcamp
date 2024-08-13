class Cat:
    count = 0
    def __init__(self, name):
        self.name = name
        Cat.count += 1


new_cat = Cat("Murzick")
new_cat_2 = Cat("Sosiska")
print(Cat.count)
print(type(new_cat)) 