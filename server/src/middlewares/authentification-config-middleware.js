const authentificationConfigMiddleware = (req, res, next) => {
  if (!process.env.JWT_SECRET) {
    res.status(500).json({ message: 'Server is not configured for authentication' });

    return;
  }

  next();
};

module.exports = authentificationConfigMiddleware;
