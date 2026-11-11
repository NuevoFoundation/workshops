import argparse
from math import ceil, comb, dist
from pathlib import Path

from pyembroidery import COLOR_CHANGE, write
from turtlethread import Turtle


STITCH_LENGTH = 20  # TurtleThread units: 20 = 2 mm.
SCALE = 1000 / 1720  # Match the scale of the 100 mm-wide SVG page.


def position(point):
    x, y = point
    return (x - 780) * SCALE, (517 - y) * SCALE


def draw_path(needle, start, *segments):
    with needle.jump_stitch():
        needle.goto(position(start))

    with needle.running_stitch(STITCH_LENGTH):
        for segment in segments:
            controls = (start, *segment)
            degree = len(controls) - 1
            if degree == 1:
                needle.goto(position(segment[-1]))
            else:
                # Bound curve steps to at most the target stitch length.
                longest = max(dist(a, b) for a, b in zip(controls, controls[1:]))
                steps = max(1, ceil(degree * longest * SCALE / STITCH_LENGTH))
                for step in range(1, steps + 1):
                    t = step / steps
                    weights = [
                        comb(degree, i) * (1 - t) ** (degree - i) * t ** i
                        for i in range(degree + 1)
                    ]
                    point = tuple(
                        sum(weight * p[axis] for weight, p in zip(weights, controls))
                        for axis in (0, 1)
                    )
                    needle.goto(position(point))
            start = segment[-1]


def draw_nuvi_outline(needle):
    # Each segment supplies an endpoint, or control points plus an endpoint.
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


def main():
    parser = argparse.ArgumentParser(description="Draw Nuvi with TurtleThread.")
    parser.add_argument("--black-eyes", action="store_true")
    parser.add_argument("--no-preview", action="store_true")
    args = parser.parse_args()

    needle = Turtle()
    draw_nuvi_outline(needle)
    eye_start = len(needle.pattern.to_pyembroidery().stitches)
    draw_eye(needle, 385)
    draw_eye(needle, 1095)

    pattern = needle.pattern.to_pyembroidery()
    pattern.add_thread("#000000")
    if not args.black_eyes:
        pattern.add_thread("#f6ca45")
        x, y, _ = pattern.stitches[eye_start - 1]
        pattern.stitches.insert(eye_start, (x, y, COLOR_CHANGE))

    # Turtle uses upward-positive Y; embroidery files use downward-positive Y.
    pattern.stitches = [(x, -y, command) for x, y, command in pattern.stitches]
    output = Path(__file__).resolve().parent
    for extension in ("pes", "svg"):
        filename = output / f"nuvi-turtlethread.{extension}"
        write(pattern, str(filename))
        print(f"Saved {filename}")

    if not args.no_preview:
        needle.visualise(width=1100, height=800, scale=0.9)


if __name__ == "__main__":
    main()
