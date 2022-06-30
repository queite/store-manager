module.exports = (err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    case 'ValidationError':
      if (!message.includes('is required')) return res.status(422).json({ message });
      res.status(400).json({ message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    default:
      res.sendStatus(500).json({ message });
  }
};
