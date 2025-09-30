function authCheck(req, res, next) {
    // Check if user is logged in (this is a placeholder, implement your own logic)
    const isLoggedIn = req.session && req.session.user;

    if (!isLoggedIn) {
        // Redirect to login page if not logged in
        console.log("Not logged in, redirecting to /login");
      
        return res.redirect('/login');
    }

    // Proceed to the next middleware or route handler
    next();
}

module.exports = authCheck;