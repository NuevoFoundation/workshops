import turtle

OUTLINE_COLOR = "black"
EYE_COLOR = "#f6ca45"
BLACK_EYES = False
DISPLAY_SCALE = 0.4
SCALE = 1000.0 / 1720


def position(point):
    x, y = point
    return (x - 780) * SCALE * DISPLAY_SCALE, (517 - y) * SCALE * DISPLAY_SCALE


def draw_path(needle, start, *segments):
    needle.penup()
    needle.goto(position(start))
    needle.pendown()

    for segment in segments:
        controls = (start,) + segment
        degree = len(controls) - 1
        if degree == 1:
            needle.goto(position(segment[-1]))
        else:
            # Smooth the reference curves for drawing, not stitch generation.
            coefficients = (1, 2, 1) if degree == 2 else (1, 3, 3, 1)
            for step in range(1, 25):
                t = step / 24.0
                weights = [
                    coefficients[i] * (1 - t) ** (degree - i) * t ** i
                    for i in range(degree + 1)
                ]
                point = tuple(
                    sum(weight * p[axis] for weight, p in zip(weights, controls))
                    for axis in (0, 1)
                )
                needle.goto(position(point))
        start = segment[-1]


def draw_nuvi_outline(needle):
    draw_path(
        needle, (158, 230),
        ((1373, 230),),
        ((1390, 230), (1390, 247)),
        ((1390, 992),),
        ((1390, 1009), (1373, 1009)),
        ((158, 1009),),
        ((141, 1009), (141, 992)),
        ((141, 247),),
        ((141, 230), (158, 230)),
    )
    draw_path(
        needle, (141, 430),
        ((-3, 533), (-3, 704), (141, 805)),
    )
    draw_path(needle, (96, 766), ((96, 623),))
    draw_path(
        needle, (508, 230),
        ((580, -48), (1025, -48), (1105, 230)),
    )
    draw_path(needle, (529, 181), ((884, 181),))
    draw_path(
        needle, (1390, 434),
        ((1585, 520), (1580, 710), (1390, 804)),
    )
    draw_path(needle, (1430, 780), ((1430, 574),))
    draw_path(
        needle, (242, 418),
        ((1275, 418),), ((1275, 907),),
        ((242, 907),), ((242, 418),),
    )


def draw_eye(needle, center_x):
    def p(dx, y):
        return center_x + dx, y

    draw_path(
        needle, p(46, 730),
        (p(46, 779.15), p(25.41, 819), p(0, 819)),
        (p(-25.41, 819), p(-46, 779.15), p(-46, 730)),
        (p(-46, 680.85), p(-25.41, 641), p(0, 641)),
        (p(25.41, 641), p(46, 680.85), p(46, 730)),
    )


turtle.speed(0)
turtle.hideturtle()
turtle.color(OUTLINE_COLOR)
draw_nuvi_outline(turtle)
turtle.color(OUTLINE_COLOR if BLACK_EYES else EYE_COLOR)
draw_eye(turtle, 385)
draw_eye(turtle, 1095)
turtle.done()
