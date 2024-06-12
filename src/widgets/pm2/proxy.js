const { exec } = require('child_process');

export default async function pm2ProxyHandler(req, res) {
  exec('pm2 jlist', (err, stdout, stderr) => {
    if (err) {
      res.status(500).send(stderr);
      console.error(err)
      return;
    }

    try {
      const processList = JSON.parse(stdout);
      res.status(200).send(processList);
      console.log('data fetched from exec')
    } catch (parseError) {
      console.error(parseError)
      res.status(500).send('Error parsing PM2 list output');
    }
  });

}
