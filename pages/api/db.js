import db from '../../db.json';

export default (req, res) => {
  if (req.status === 'OPTIONS') {
    res.status(200).end();
  }

  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, PATCH, DELETE, POST, PUT');

  res.json(db);
};
