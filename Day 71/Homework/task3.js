function calculateCircleArea(radius) {
    if (radius < 0) {
        return "Radius cannot be negative.";
    }
    const area = Math.PI * Math.pow(radius, 2);
    return area;
}
