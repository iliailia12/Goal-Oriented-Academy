def points(games):
    score = 0
    for i in games:
        i = i.split(":")
        if i[0] > i[1]:
            score += 3
        elif i[0] == i[1]:
            score += 1
    return score




def points(games):
     return sum(3 if x > y else 1 if x == y else 0 for x, y in (game.split(":") for game in games))