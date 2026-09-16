export const adminAuth = (req, res, next) => {
    const isAuthorized = true

    if (!isAuthorized) {
        res.status(401).send("Unauthorized");
    } else {
        next();
    }
}

export const userAuth = (req, res, next) => {
    const isAuthorized = false

    if (!isAuthorized) {
        res.status(401).send("Unauthorized");
    } else {
        next();
    }
}