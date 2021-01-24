const nonsenseFunction = () => 0;

export default (req, res) => {
  throw new Error('test');
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
