function moves(r, d) {

    if (r < d || d < 0)
        return 0;

    k = Math.min(d, n - d);
    r = r - d;

    for (var i = 1, c = 1; i <= d; i++)
        c = c * (r + i) / i;

    return c;
}

function latticePaths(gridSize) {

  for (var i = 1, c = 1; i <= gridSize; i++)
        c = c * (gridSize + i) / i;
    return c;
}

latticePaths(4);
