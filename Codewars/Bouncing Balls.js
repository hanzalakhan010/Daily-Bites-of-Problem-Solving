function bouncingBall(h, bounce, window) {
    // your code here
    if ((h > window) && (h > 0) && (bounce > 0) && (bounce < 1)) {
        counts = 1
        do {
            console.log(h)
            h*=bounce
            if (h > window) {
                counts += 2
            }
        }
        while (h > window)
        return counts
    }
    return -1
}
console.log(bouncingBall(30.0, 0.66, 1.5))