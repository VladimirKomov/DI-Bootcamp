import math
import random
import turtle


class Circle:
    # by condition A Circle can be defined by either specifying the radius or the diameter.
    def __init__(self, radius: (int, float)):
        self.__radius = radius
        self.__diameter = radius * 2

    @classmethod
    def from_diameter(cls, diameter: (int, float)):
        radius = diameter / 2
        return cls(radius)

    @property
    def radius(self):
        return self.__radius

    @property
    def diameter(self):
        return self.__diameter

    @property
    def area(self):
       return self.radius * self.radius * math.pi

    def __repr__(self):
        return f'radius={self.radius} diameter={self.diameter}'

    def __str__(self):
        return f'radius={self.radius} diameter={self.diameter} area={self.area}'

    def __add__(self, other: 'Circle') -> 'Circle':
        return Circle(math.sqrt((self.area + other.area) / math.pi))

    def __eq__(self, other: 'Circle') -> bool:
        return self.radius == other.radius

    def __lt__(self, other: 'Circle') -> bool:
        return self.radius < other.radius


circle_radius = Circle(3)
print(circle_radius)
circle_diameter = Circle.from_diameter(2)
print(circle_diameter)
diameter = circle_diameter.diameter
print(diameter)
radius = circle_diameter.radius
print(radius)
area = circle_radius.area
print(area)
new_circle = circle_radius + circle_diameter
print(new_circle)
print(circle_radius == circle_diameter)
print(circle_radius < circle_diameter)
list_circle = [circle_radius, circle_diameter, new_circle]
print(list_circle)
list_sorted = sorted(list_circle)
print(list_sorted)

screen = turtle.Screen()
screen.setup(width=800, height=800)
screen.bgcolor("white")

t = turtle.Turtle()
t.speed(1)
colors = ["red", "blue", "green", "purple", "orange"]

for circle in list_sorted:
    t.penup()
    t.goto(0, -circle.radius * 30)
    t.pendown()
    t.color(random.choice(colors))
    t.circle(circle.radius * 30)

turtle.done()


