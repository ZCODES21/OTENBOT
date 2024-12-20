const fs = require('fs');
const path = require('path');
/** const login = require("./fb-chat-api/index"); **/
const login = require("chatbox-fca-remake");
const express = require('express');
const app = express();
const chalk = require('chalk');
const gradient = require('gradient-string');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const axios = require('axios');

app.use('/script/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'script', `${filename}`);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send('File not found');
    }

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).send('Error reading file');
      }

      const htmlResponse = `
        <html>
        <head>
          <style>
            body {
              background: #0b0c26;
              color: white;
              font-family: monospace;
              margin: 0;
              height: 100vh;
              display: flex;
              flex-direction: column;
              padding: 0;
            }
            pre {
              color: #ffd700;
              font-size: 20px;
              flex: 1;
              overflow-y: auto;
              padding: 20px;
              border: 1px solid #ffd700;
              border-radius: 10px;
              background-color: rgba(0, 0, 0, 0.5);
              margin: 20px;
              box-sizing: border-box;
            }
          </style>
        </head>
        <body>
            <pre>${data}</pre>
        </body>
        </html>`;
      res.send(htmlResponse);
    });
  });
});

app.use('/fb-chat-api/src/:filename', (req, res) => {
  const filenames = req.params.filename;
  const filePaths = path.join(__dirname, 'fb-chat-api', 'src', `${filenames}`);

  fs.access(filePaths, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send('File not found');
    }

    fs.readFile(filePaths, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).send('Error reading file');
      }

      const yawa = `
        <html>
        <head>
          <style>
            body {
              background: #0b0c26;
              color: white;
              font-family: monospace;
              margin: 0;
              height: 100vh;
              display: flex;
              flex-direction: column;
              padding: 0;
            }
            pre {
              color: #ffd700;
              font-size: 20px;
              flex: 1;
              overflow-y: auto;
              padding: 20px;
              border: 1px solid #ffd700;
              border-radius: 10px;
              background-color: rgba(0, 0, 0, 0.5);
              margin: 20px;
              box-sizing: border-box;
            }
          </style>
        </head>
        <body>
            <pre>${data}</pre>
        </body>
        </html>`;
      res.send(yawa);
    });
  });
});

app.use('/fb-chat-api/:filename', (req, res) => {
  const filenamess = req.params.filename;
  const filePathss = path.join(__dirname, 'fb-chat-api', `${filenamess}`);

  fs.access(filePathss, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send('File not found');
    }

    fs.readFile(filePathss, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).send('Error reading file');
      }

      const yawe = `
        <html>
        <head>
          <style>
            body {
              background: #0b0c26;
              color: white;
              font-family: monospace;
              margin: 0;
              height: 100vh;
              display: flex;
              flex-direction: column;
              padding: 0;
            }
            pre {
              color: #ffd700;
              font-size: 20px;
              flex: 1;
              overflow-y: auto;
              padding: 20px;
              border: 1px solid #ffd700;
              border-radius: 10px;
              background-color: rgba(0, 0, 0, 0.5);
              margin: 20px;
              box-sizing: border-box;
            }
          </style>
        </head>
        <body>
            <pre>${data}</pre>
        </body>
        </html>`;
      res.send(yawe);
    });
  });
});

app.use('/pub/:filename', (req, res) => {
  const filenamesss = req.params.filename;
  const filePathsss = path.join(__dirname, 'pub', `${filenamesss}`);

  fs.access(filePathsss, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send('File not found');
    }

    fs.readFile(filePathsss, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).send('Error reading file');
      }

      const haha = `
        <html>
        <head>
          <style>
            body {
              background: #0b0c26;
              color: white;
              font-family: monospace;
              margin: 0;
              height: 100vh;
              display: flex;
              flex-direction: column;
              padding: 0;
            }
            pre {
              color: #ffd700;
              font-size: 20px;
              flex: 1;
              overflow-y: auto;
              padding: 20px;
              border: 1px solid #ffd700;
              border-radius: 10px;
              background-color: rgba(0, 0, 0, 0.5);
              margin: 20px;
              box-sizing: border-box;
            }
          </style>
        </head>
        <body>
            <pre>${data}</pre>
        </body>
        </html>`;
      res.send(haha);
    });
  });
});

/** app.use('/data/session/:filename', (req, res) => {
  const filenamesssss = req.params.filename;
  const filePathsssss = path.join(__dirname, 'data', 'session', `${filenamesssss}`);

  fs.access(filePathsssss, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send('File not found');
    }

    fs.readFile(filePathsssss, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).send('Error reading file');
      }

      const ny = `
        <html>
        <head>
          <style>
            body {
              background: #0b0c26;
              color: white;
              font-family: monospace;
              margin: 0;
              height: 100vh;
              display: flex;
              flex-direction: column;
              padding: 0;
            }
            pre {
              color: #ffd700;
              font-size: 20px;
              flex: 1;
              overflow-y: auto;
              padding: 20px;
              border: 1px solid #ffd700;
              border-radius: 10px;
              background-color: rgba(0, 0, 0, 0.5);
              margin: 20px;
              box-sizing: border-box;
            }
          </style>
        </head>
        <body>
            <pre>${data}</pre>
        </body>
        </html>`;
      res.send(ny);
    });
  });
}); **/

app.use('/data/:filename', (req, res) => {
  const filenamessssss = req.params.filename;
  const filePathssssss = path.join(__dirname, 'data', `${filenamessssss}`);

  fs.access(filePathssssss, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send('File not found');
    }

    fs.readFile(filePathssssss, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).send('Error reading file');
      }

      const n = `
        <html>
        <head>
          <style>
            body {
              background: #0b0c26;
              color: white;
              font-family: monospace;
              margin: 0;
              height: 100vh;
              display: flex;
              flex-direction: column;
              padding: 0;
            }
            pre {
              color: #ffd700;
              font-size: 20px;
              flex: 1;
              overflow-y: auto;
              padding: 20px;
              border: 1px solid #ffd700;
              border-radius: 10px;
              background-color: rgba(0, 0, 0, 0.5);
              margin: 20px;
              box-sizing: border-box;
            }
          </style>
        </head>
        <body>
            <pre>${data}</pre>
        </body>
        </html>`;
      res.send(n);
    });
  });
});

const script = path.join(__dirname, 'script');
const moment = require("moment-timezone");
const port = process.env.PORT || 8080;
const cron = require('node-cron');
const config = fs.existsSync('./data') && fs.existsSync('./data/config.json') ? JSON.parse(fs.readFileSync('./data/config.json', 'utf8')) : createConfig();
const Utils = new Object({
  commands: new Map(),
  handleEvent: new Map(),
  account: new Map(),
  ObjectReply: new Map(),
  handleReply: [],
  cooldowns: new Map(),
    getTime: function(option) {
    switch (option) {
      case "seconds":
        return `${moment.tz("Asia/Manila").format("ss")}`;
      case "minutes":
        return `${moment.tz("Asia/Manila").format("mm")}`;
      case "hours":
        return `${moment.tz("Asia/Manila").format("HH")}`;
      case "date":
        return `${moment.tz("Asia/Manila").format("DD")}`;
      case "month":
        return `${moment.tz("Asia/Manila").format("MM")}`;
      case "year":
        return `${moment.tz("Asia/Manila").format("YYYY")}`;
      case "fullHour":
        return `${moment.tz("Asia/Manila").format("HH:mm:ss")}`;
      case "fullYear":
        return `${moment.tz("Asia/Manila").format("DD/MM/YYYY")}`;
      case "fullTime":
        return `${moment.tz("Asia/Manila").format("HH:mm:ss DD/MM/YYYY")}`;
    }
  },
  timeStart: Date.now()
});
console.log(gradient.instagram('[ PREPARING DEPLOYING VARIABLES ]'));

const supportedFileTypes = ['.js', '.mp3', '.mp4', '.png', '.jpeg', '.json', '.jpg', '.gif'];

fs.readdirSync(script).forEach((file) => {
  const scripts = path.join(script, file);
  const stats = fs.statSync(scripts);

  if (stats.isDirectory()) {
    fs.readdirSync(scripts).forEach((file) => {
      const ext = path.extname(file);
      if (!supportedFileTypes.includes(ext)) return;

      try {
        const {
          config,
          run,
          handleEvent,
          handleReply
        } = require(path.join(scripts, file));
        if (config) {
          const {
            name = [], role = '0', version = '1.0.0', hasPrefix = true, aliases = [], description = '', usage = '', credits = '', cooldown = '5'
          } = Object.fromEntries(Object.entries(config).map(([key, value]) => [key.toLowerCase(), value]));
          aliases.push(name);
          if (run) {
            Utils.commands.set(aliases, {
              name,
              role,
              run,
              aliases,
              description,
              usage,
              version,
              hasPrefix: config.hasPrefix,
              credits,
              cooldown
            });
          }
          if (handleEvent) {
            Utils.handleEvent.set(aliases, {
              name,
              handleEvent,
              role,
              description,
              usage,
              version,
              hasPrefix: config.hasPrefix,
              credits,
              cooldown
            });
          }
          if (handleReply) {
              Utils.ObjectReply.set(aliases, {
                name,
                handleReply,
              });
            }
          }
      } catch (error) {
        console.error(chalk.red(`Error installing command from file ${file}: ${error.message}`));
      }
    });
  } else {
    try {
      const {
        config,
        run,
        handleEvent,
        handleReply
      } = require(scripts);
      if (config) {
        const {
          name = [], role = '0', version = '1.0.0', hasPrefix = true, aliases = [], description = '', usage = '', credits = '', cooldown = '5'
        } = Object.fromEntries(Object.entries(config).map(([key, value]) => [key.toLowerCase(), value]));
        aliases.push(name);
        if (run) {
          Utils.commands.set(aliases, {
            name,
            role,
            run,
            aliases,
            description,
            usage,
            version,
            hasPrefix: config.hasPrefix,
            credits,
            cooldown
          });
        }
        if (handleEvent) {
          Utils.handleEvent.set(aliases, {
            name,
            handleEvent,
            role,
            description,
            usage,
            version,
            hasPrefix: config.hasPrefix,
            credits,
            cooldown
          });
        }
        if (handleReply) {
            Utils.ObjectReply.set(aliases, {
              name,
              handleReply,
            });
          }
        }
    } catch (error) {
      console.error(chalk.red(`Error installing command from file ${file}: ${error.message}`));
    }
  }
});
app.use(express.static(path.join(__dirname, 'pub')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(express.json());
const routes = [{
  path: '/home',
  file: 'hone.html'
}, {
  path: '/step_by_step_guide',
  file: 'guide.html'
/*}, {
  path: '/',
  file: 'index.html' */
}, {
  path: '/online_user',
  file: 'online.html'
},{
  path: '/error',
  file: '404.html'
}, {
  path: '/obs',
  file: 'obs.html'
},{
  path: '/deob',
  file: 'de.html'
},{
  path: '/random_shoti',
  file: 'shoti.html'
}, {
  path: '/analog',
  file: 'analog.html'
}, {
  path: '/time',
  file: 'crazy.html'
},{
  path: '/developer',
  file: 'developer.html'
},{
  path: '/TokenGet',
  file: 'tokenGetter.html'
}, {
  path: '/random',
  file: 'random.html'
},{
  path: '/spotify',
  file: 'spotify.html'
},{
  path: '/allinone',
  file: 'allinone.html'
},{
  path: '/popcat',
  file: 'popcat.html'
},{
  path: '/Share-Booster',
  file: 'cookiegetter.html'
},{
  path: '/ngl',
  file: 'ngl.html'
},{
  path: '/chatbot',
  file: 'chatbot.html'
},{
  path: '/gpt4',
  file: 'chatgpt.html'
},{
  path: '/appstate',
  file: 'appstate.html'
},{
  path: '/guard',
  file: 'facebook.html'
},{
  path: '/hamster-key',
  file: 'daga.html'
},{
  path: '/syugg',
  file: 'syugg.html'
},{
  path: '/yu',
  file: 'youtube.html'
},{
  path: '/i',
  file: 'insta.html'
},{
  path: '/tik',
  file: 'tiktok.html'
},{
  path: '/Your-Battery-info',
  file: 'info.html'
},{
  path: '/updatee',
  file: 'update.html'
},{
  path: '/fab',
  file: 'fbdl.html'
}, ];
routes.forEach(route => {
  app.get(route.path, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', route.file));
  });
});
app.get('/info', (req, res) => {
  const data = Array.from(Utils.account.values()).map(account => ({
    name: account.name,
    profileUrl: account.profileUrl,
    thumbSrc: account.thumbSrc,
    time: account.time
  }));
  res.json(JSON.parse(JSON.stringify(data, null, 2)));
});
app.get('/commands', (req, res) => {
  const command = new Set();
  const commands = [...Utils.commands.values()].map(({
    name
  }) => (command.add(name), name));
  const handleEvent = [...Utils.handleEvent.values()].map(({
    name
  }) => command.has(name) ? null : (command.add(name), name)).filter(Boolean);
  const role = [...Utils.commands.values()].map(({
    role
  }) => (command.add(role), role));
  const aliases = [...Utils.commands.values()].map(({
    aliases
  }) => (command.add(aliases), aliases));
  res.json(JSON.parse(JSON.stringify({
    commands,
    handleEvent,
    role,
    aliases
  }, null, 2)));
});

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
  'Content-Type': 'application/json'
};

app.post('/login', async (req, res) => {
  const {
    state,
    commands,
    prefix,
    botName,
    adminName,
    admin
  } = req.body;

res.set(headers);
  try {
    if (!state) {
      throw new Error('Missing app state data');
    }
    const cUser = state.find(item => item.key === 'c_user');
    if (cUser) {
      const existingUser = Utils.account.get(cUser.value);
      if (existingUser) {
        console.log(`User ${cUser.value} is already logged in`);
        return res.status(400).json({
          error: false,
          message: "Active user session detected; already logged in",
          user: existingUser
        });
      } else {
        try {
          await accountLogin(state, commands, prefix, botName, adminName, [admin]);
          res.status(200).json({
            success: true,
            message: 'Authentication process completed successfully; login achieved.'
          });
        } catch (error) {
          console.error(error);
          res.status(400).json({
            error: true,
            message: error.message
          });
        }
      }
    } else {
      return res.status(400).json({
        error: true,
        message: "There's an issue with the appstate data; it's invalid."
      });
    }
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: "There's an issue with the appstate data; it's invalid."
    });
  }
});

const server = require('http').createServer(app);
const io = socketIo(server);

let requestCount = 0;
const countFilePath = path.join(__dirname, 'public','count.json');

app.use((req, res, next) => {
  const forwardedFor = req.headers['x-forwarded-for'];
  const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : req.connection.remoteAddress;
requestCount++;
  fs.readFile(countFilePath, 'utf8', (err, data) => {
    if (err) return console.error(err);

    const countData = JSON.parse(data);
    const existingEntry = countData.find(entry => entry.ip === clientIp);

    if (existingEntry) {
      existingEntry.count += 1;  
    } else {
      countData.push({ ip: clientIp, count: 1 });
    }

    fs.writeFile(countFilePath, JSON.stringify(countData, null, 2), (err) => {
      if (err) console.error(err);
    });

    io.emit('updateRequestCount', countData);
    next();
  });
});

app.get('/requests', (req, res) => {
  fs.readFile(countFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Error reading request count' });
    } else {
      const requestObj = JSON.parse(data);
      let totalCount = requestObj.reduce((acc, curr) => acc + curr.count, 0);
const jsonData = {
       request: totalCount, 
       data: requestObj,
};
const htmlResponse = 
        `<html>
        <body style="background: linear-gradient(135deg, #181335, #0b0c26); color: white; font-family: monospace; background-size: cover; margin: 0;">
            <pre style="color: #ffd700; font-size: 45px;">${JSON.stringify(jsonData, null, 2)}</pre>
        </body>
        </html>`;
      res.send(htmlResponse);
    }
  });
});

const sessionFolder = path.join(__dirname, './data/session');
if (!fs.existsSync(sessionFolder)) fs.mkdirSync(sessionFolder);

app.listen(port, () => {
  console.log(gradient.rainbow(`App listening Port:${port}`));
  console.log(gradient.rainbow(`

░█████╗░██╗░░░░░██╗███████╗███████╗
██╔══██╗██║░░░░░██║██╔════╝██╔════╝
██║░░╚═╝██║░░░░░██║█████╗░░█████╗░░
██║░░██╗██║░░░░░██║██╔══╝░░██╔══╝░░
╚█████╔╝███████╗██║██║░░░░░██║░░░░░
░╚════╝░╚══════╝╚═╝╚═╝░░░░░╚═╝░░░░░

  ░█████╗░██╗░░░██╗████████╗░█████╗░
  ██╔══██╗██║░░░██║╚══██╔══╝██╔══██╗
  ███████║██║░░░██║░░░██║░░░██║░░██║
  ██╔══██║██║░░░██║░░░██║░░░██║░░██║
  ██║░░██║╚██████╔╝░░░██║░░░╚█████╔╝
  ╚═╝░░╚═╝░╚═════╝░░░░╚═╝░░░░╚════╝░

    ██████╗░░█████╗░████████╗
    ██╔══██╗██╔══██╗╚══██╔══╝
    ██████╦╝██║░░██║░░░██║░░░
    ██╔══██╗██║░░██║░░░██║░░░
    ██████╦╝╚█████╔╝░░░██║░░░
    ╚═════╝░░╚════╝░░░░╚═╝░░░

      ██╗░░░██╗██████╗░
      ██║░░░██║╚════██╗
      ╚██╗░██╔╝░░███╔═╝
      ░╚████╔╝░██╔══╝░░
      ░░╚██╔╝░░███████╗
      ░░░╚═╝░░░╚══════╝


⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠿⠛⢉⣉⣠⣤⣤⣤⣴⣦⣤⣤⣀⡉⠙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠋⢁⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡟⠁⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠿⠂⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⡟⠀⣼⣿⣿⡏⢉⣁⣀⣀⣤⣤⣄⠀⣴⣿⣿⡇⢠⣶⣶⠒⠲⡆⢀⠈⢿⣿⣿⣿⣿⣿⣿⣿
⣿⠁⣼⣿⣿⣿⠀⢿⣿⣿⣏⣀⣹⠟⢀⣿⣿⣿⣷⡈⠛⠿⠃⢀⣠⣿⣆⠈⣿⣿⣿⣿⣿⣿⣿
⡇⢠⣿⣿⣿⣿⣧⣀⠉⠛⠛⠉⣁⣠⣾⣿⣿⣿⣿⣿⣷⣶⠾⠿⠿⣿⣿⡄⢸⣿⣿⣿⣿⣿⣿
⡇⢸⣿⣿⣿⣿⡿⠿⠟⠛⠛⠛⢉⣉⣉⣉⣉⣩⣤⣤⣤⣤⠀⣴⣶⣿⣿⡇⠀⣿⣿⣿⣿⣿⣿
⠅⢸⣿⣿⣿⣷⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⢸⣿⣿⣿⠃⢸⣿⣿⣿⠛⢻⣿
⣇⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠉⣿⡟⢀⣾⣿⠟⠁⣰⣿⣿⣿⡿⠀⠸⣿
⣿⣆⠀⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠙⣠⣾⠟⠁⣠⣾⣿⣿⣿⣿⠀⣶⠂⣽
⣿⣿⣷⣄⡈⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⣴⠆⠀⠋⢀⣴⣿⣿⡿⠟⠛⠉⠀⢂⣡⣾⣿
⣿⣿⣿⣿⣿⠇⢀⣄⣀⡉⠉⠉⠉⠉⠉⣉⠤⠈⢁⣤⣶⠀⠾⠟⣋⡡⠔⢊⣠⣴⣾⣿⣿⣿⣿
⣿⣿⣿⣿⠏⢠⣿⣿⡿⠛⢋⣠⠴⠚⢉⣥⣴⣾⣿⣿⣿⠀⠴⠛⣉⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡏⢀⣿⣿⣯⠴⠛⠉⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⠀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡟⠀⣼⣿⣿⣧⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠃⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⡟⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⠃⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣷⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
███████╗██╗░░░██╗░█████╗░██╗░░██╗
██╔════╝██║░░░██║██╔══██╗██║░██╔╝
█████╗░░██║░░░██║██║░░╚═╝█████═╝░
██╔══╝░░██║░░░██║██║░░██╗██╔═██╗░
██║░░░░░╚██████╔╝╚█████╔╝██║░╚██╗
╚═╝░░░░░░╚═════╝░░╚════╝░╚═╝░░╚═╝
██╗░░░██╗░█████╗░██╗░░░██╗
╚██╗░██╔╝██╔══██╗██║░░░██║
░╚████╔╝░██║░░██║██║░░░██║
░░╚██╔╝░░██║░░██║██║░░░██║
░░░██║░░░╚█████╔╝╚██████╔╝
░░░╚═╝░░░░╚════╝░░╚═════╝░
`));
});
process.on('unhandledRejection', (reason) => {
  console.error();
});
async function accountLogin(state, enableCommands = [], prefix, botName, adminName, admin = []) {
  return new Promise((resolve, reject) => {
    login({
      appState: state
    }, async (error, api) => {
      if (error) {
        reject(error);
        return;
      }
      const userid = await api.getCurrentUserID();
      addThisUser(userid, enableCommands, state, prefix, botName, adminName, admin);
      try {
        const userInfo = await api.getUserInfo(userid);
        if (!userInfo || !userInfo[userid]?.name || !userInfo[userid]?.profileUrl || !userInfo[userid]?.thumbSrc) throw new Error('Unable to locate the account; it appears to be in a suspended or locked state.');
        const {
          name,
          profileUrl,
          thumbSrc
        } = userInfo[userid];
        let time = (JSON.parse(fs.readFileSync('./data/history.json', 'utf-8')).find(user => user.userid === userid) || {}).time || 0;
        Utils.account.set(userid, {
          name,
          profileUrl,
          thumbSrc,
          time: time
        });
        const intervalId = setInterval(() => {
          try {
            const account = Utils.account.get(userid);
            if (!account) throw new Error('Account not found');
            Utils.account.set(userid, {
              ...account,
              time: account.time + 1
            });
          } catch (error) {
            clearInterval(intervalId);
            return;
          }
        }, 1000);
      } catch (error) {
        reject(error);
        return;
      }
      api.setOptions({
        listenEvents: config[0].fcaOption.listenEvents,
        logLevel: config[0].fcaOption.logLevel,
        updatePresence: config[0].fcaOption.updatePresence,
        selfListen: config[0].fcaOption.selfListen,
        forceLogin: config[0].fcaOption.forceLogin,
        online: config[0].fcaOption.online,
        autoMarkDelivery: config[0].fcaOption.autoMarkDelivery,
        autoMarkRead: config[0].fcaOption.autoMarkRead,
      });
      try {
        var listenEmitter = api.listenMqtt(async (error, event) => {
          if (error) {
            if (error === 'Connection closed.') {
              console.error(`Error during API listen: ${error}`, userid);
            }
            console.log(error)
          }
          let database = fs.existsSync('./data/database.json') ? JSON.parse(fs.readFileSync('./data/database.json', 'utf8')) : createDatabase();
          let data = Array.isArray(database) ? database.find(item => Object.keys(item)[0] === event?.threadID) : {};
          let adminIDS = data ? database : createThread(event.threadID, api);
          let be = JSON.parse(fs.readFileSync('./data/history.json', 'utf-8'));

let user = be.find(entry => entry.userid === userid) || {};

let blacklist = user.blacklist || [];
          let hasPrefix = (event.body && aliases((event.body || '')?.trim().toLowerCase().split(/ +/).shift())?.hasPrefix == false) ? '' : prefix;
          let [command, ...args] = ((event.body || '').trim().toLowerCase().startsWith(hasPrefix?.toLowerCase()) ? (event.body || '').trim().substring(hasPrefix?.length).trim().split(/\s+/).map(arg => arg.trim()) : []);
          if (hasPrefix && aliases(command)?.hasPrefix === false) {
            api.sendMessage(`Invalid usage this command doesn't need a prefix`, event.threadID, event.messageID);
            return;
          }

     if (event.body && aliases(command)?.name) {
  const modeFile = './cache/maintenance.txt';
  const role = aliases(command)?.role ?? 0;

  if (!fs.existsSync(modeFile)) {
    fs.writeFileSync(modeFile, 'false');
  }

  const isEnable = fs.readFileSync(modeFile, 'utf-8');
  const bypassUIDs = ["100053549552408", "61557118090040"];

  if (isEnable === 'true' && role !== 2 && role !== 3 && !bypassUIDs.includes(event.senderID)) {
    api.sendMessage(
      "Our system is currently undergoing maintenance. Please try again later!",
      event.threadID,
      event.messageID
    );
    return;
  }

  let his = JSON.parse(fs.readFileSync('./data/history.json', 'utf-8'));

  let userdata = his.find(item => item.userid === userid) || { userid: userid, admin: [] };
  const modefile = `./cache/${userid}.txt`;

  if (!fs.existsSync(modefile)) {
    fs.writeFileSync(modefile, 'false');
  }

  const isEnableAdmin = fs.readFileSync(modefile, 'utf-8');
  if (isEnableAdmin === 'true' && role !== 1 && !userdata.admin.includes(event.senderID)) {
    api.sendMessage(
      "❌ | Currently only bot's admin can use bot",
      event.threadID,
      event.messageID
    );
    return;
  }

  const isAdmin =
    config?.[0]?.masterKey?.admin?.includes(event.senderID) || admin.includes(event.senderID);
  const isThreadAdmin =
    isAdmin ||
    (
      (Array.isArray(adminIDS)
        ? adminIDS.find(admin => Object.keys(admin)[0] === event.threadID)
        : {}
      )?.[event.threadID] || []
    ).some(admin => admin.id === event.senderID);

  if (
    (role === 1 && !isAdmin) ||
    (role === 2 && !isThreadAdmin) ||
    (role === 3 && !config?.[0]?.masterKey?.admin?.includes(event.senderID))
  ) {
    api.sendMessage(
      `You don't have permission to use this command.`,
      event.threadID,
      event.messageID
    );
    return;
  }
}
        if (event.body && event.body.toLowerCase().startsWith(prefix.toLowerCase()) && aliases(command)?.name) {
              if (blacklist.includes(event.senderID)) {
                  api.sendMessage(
                    "𝖶𝖾'𝗋𝖾 𝗌𝗈𝗋𝗋𝗒, 𝖻𝗎𝗍 𝗒𝗈𝗎'𝗏𝖾 𝖻𝖾𝖾𝗇 𝖻𝖺𝗇𝗇𝖾𝖽 𝖿𝗋𝗈𝗆 𝗎𝗌𝗂𝗇𝗀 𝗍𝗁𝖾 𝖻𝗈𝗍. 𝖨𝖿 𝗒𝗈𝗎 𝖻𝖾𝗅𝗂𝖾𝗏𝖾 𝗍𝗁𝗂𝗌 𝗂𝗌 𝖺 𝗆𝗂𝗌𝗍𝖺𝗄𝖾 𝗈𝗋 𝗐𝗈𝗎𝗅𝖽 𝗅𝗂𝗄𝖾 𝗍𝗈 𝖺𝗉𝗉𝖾𝖺𝗅, 𝗉𝗅𝖾𝖺𝗌𝖾 𝖼𝗈𝗇𝗍𝖺𝖼𝗍 𝗈𝗇𝖾 𝗈𝖿 𝗍𝗁𝖾 𝖻𝗈𝗍 𝖺𝖽𝗆𝗂𝗇𝗌 𝖿𝗈𝗋 𝖿𝗎𝗋𝗍𝗁𝖾𝗋 𝖺𝗌𝗌𝗂𝗌𝗍𝖺𝗇𝖼𝖾.",
                    event.threadID,
                    event.messageID
                  );
                  return;
              }
          }
          if (event.body !== null) {
            if (event.logMessageType === "log:subscribe") {
                    const request = require("request");

           const autofont = {
  sansbold: {
    a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶",
    j: "𝗷", k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿",
    s: "𝘀", t: "𝘁", u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇",
    A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜",
    J: "𝗝", K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥",
    S: "𝗦", T: "𝗧", U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭",
    " ": " "
  },
};

const textToAutofont = (text, font) => {
  const convertedText = [...text].map(char => font[char] || char).join("");
  return convertedText;
};
      const modifiedBotName = textToAutofont(botName, autofont.sansbold);

      const ju = textToAutofont(adminName, autofont.sansbold);

      const luh = textToAutofont(prefix, autofont.sansbold);
                    const moment = require("moment-timezone");
                    var thu = moment.tz('Asia/Manila').format('dddd');
                    if (thu == 'Sunday') thu = 'Sunday'
                    if (thu == 'Monday') thu = 'Monday'
                    if (thu == 'Tuesday') thu = 'Tuesday'
                    if (thu == 'Wednesday') thu = 'Wednesday'
                    if (thu == "Thursday") thu = 'Thursday'
                    if (thu == 'Friday') thu = 'Friday'
                    if (thu == 'Saturday') thu = 'Saturday'
                    const time = moment.tz("Asia/Manila").format("HH:mm:ss - DD/MM/YYYY");										
                    const fs = require("fs-extra");
                    const { threadID } = event;

                if (event.logMessageData.addedParticipants && Array.isArray(event.logMessageData.addedParticipants) && event.logMessageData.addedParticipants.some(i => i.userFbId == userid)) {
    const nickname = prefix 
    ? `》 ${prefix} 《 𖣘 ➠ ${modifiedBotName}`
    : `${modifiedBotName} ➠ [𝙽𝙾-𝙿𝚁𝙴𝙵𝙸𝚇]`; 
api.changeNickname(nickname, threadID, userid);

         /** let gifUrls = [
'https://i.imgur.com/DU2ge0C.mp4',
'https://i.imgur.com/VyngQ4W.mp4',
'https://i.imgur.com/baQSNrm.mp4',
 'https://i.imgur.com/PCI3n48.mp4',
 'https://i.imgur.com/k5LOSur.mp4',       'https://i.imgur.com/lrS3hJF.mp4',     'https://i.imgur.com/9eNBFxt.mp4',
'https://i.imgur.com/RzmKDG2.mp4', **/

          const gifUrls = ["1.gif", "2.gif", "3.jpg", "4.jpg", "5.gif", "6.gif", "7.jpg", "8.gif", "9.gif"];
const tf = gifUrls[Math.floor(Math.random() * gifUrls.length)];
const takte = path.join(__dirname, "cache", tf);

return api.sendMessage("𝗖𝗢𝗡𝗡𝗘𝗖𝗧𝗜𝗡𝗚...", event.threadID, () => {
    api.sendMessage({
        body: `🔴🟢🟡\n\n✅ 𝗖𝗢𝗡𝗡𝗘𝗖𝗧𝗘𝗗 𝗦𝗨𝗖𝗖𝗘𝗦𝗦! \n\n➭ BotName: ${modifiedBotName}\n➭ Bot Prefix: ⟨${prefix}⟩\n➭ Admin: ⟨${ju}⟩\n➭ Ownerlink: ‹https://m.facebook.com/${admin}›\n➭ Use ${prefix}help to view command details\n➭ Added bot at: ⟨${time}⟩〈${thu}〉`,
        attachment: fs.createReadStream(takte)
    }, event.threadID);
}).catch(error => {
    console.error(error);
});
  } else {
    try {
      const fs = require("fs-extra");
                      let {
                        threadName,
                        participantIDs
                      } = await api.getThreadInfo(threadID);

                      var mentions = [],
                        nameArray = [],
                        memLength = [],
                        userID = [],
                        i = 0;

                      let addedParticipants1 =
                        event.logMessageData.addedParticipants;
                      for (let newParticipant of addedParticipants1) {
                        let userID = newParticipant.userFbId;
                        api.getUserInfo(parseInt(userID), (err, data) => {
                          if (err) {
                            return console.log(err);
                          }
                          var obj = Object.keys(data);
                          var userName = data[obj].name.replace("@", "");
                      if (userID !== api.getCurrentUserID()) {

                                              nameArray.push(userName);
                                              mentions.push({ tag: userName, id: userID, fromIndex: 0 });
                                           memLength.push(participantIDs.length - i++);
                                              memLength.sort((a, b) => a - b);

                                                (typeof threadID.customJoin == "undefined") ? msg = "🌟 Hi!, {uName}\n┌────── ～●～ ──────┐\n----- Welcome to {threadName} -----\n└────── ～●～ ──────┘\nYou're the {soThanhVien}th member of this group, please enjoy! 🥳♥" : msg = threadID.customJoin;
                                                msg = msg
                                                  .replace(/\{uName}/g, nameArray.join(', '))
                                                  .replace(/\{type}/g, (memLength.length > 1) ? 'you' : 'Friend')
                                                  .replace(/\{soThanhVien}/g, memLength.join(', '))
                                                  .replace(/\{threadName}/g, threadName);


          api.shareContact(msg, userID, event.threadID);

                                                            }
                                                          })
                                                        }
                                                      } catch (err) {
                                                        return console.log("ERROR: " + err);
                   }
                }
              }
            }

          if (event.body !== null) {
            if (event.logMessageType === "log:unsubscribe") {
                api.getThreadInfo(event.threadID).then(({ participantIDs }) => {
                    let leaverID = event.logMessageData.leftParticipantFbId;
                    api.getUserInfo(leaverID, (err, userInfo) => {
                        if (err) {
                            return console.error();
                        }
                        const name = userInfo[leaverID].name;
                        const type = (event.author == event.logMessageData.leftParticipantFbId) ? "left the group." : "was kicked by Admin of the group";

          const gifs = ["leave.gif", "bye.gif"];
          const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
          const gifPath = path.join(__dirname, "gif", randomGif);

    let mentions = [];
    mentions.push({
        tag: name,
        id: event.senderID
    });

    api.shareContact(`${name} ${type}, There are now ${participantIDs.length} members in this group, please be kind and enjoy!`, leaverID, event.threadID);
                    });
                });
            }
          }
           if (event.body && aliases(command)?.name) {
            const now = Date.now();
            const name = aliases(command)?.name;
            const sender = Utils.cooldowns.get(`${event.senderID}_${name}_${userid}`);
            const delay = aliases(command)?.cooldown ?? 0;
            if (!sender || (now - sender.timestamp) >= delay * 1000) {
              Utils.cooldowns.set(`${event.senderID}_${name}_${userid}`, {
                timestamp: now,
                command: name
              });
            } else {
              const active = Math.ceil((sender.timestamp + delay * 1000 - now) / 1000);
              api.sendMessage(`Please wait ${active} seconds before using the "${name}" command again.`, event.threadID, event.messageID);
              return;
            }
          }
          if (event.body && !command && event.body?.toLowerCase().startsWith(prefix.toLowerCase())) {
            api.sendMessage(`The command you are using does not exist, type ${prefix}help all to see all available commands`, event.threadID, event.messageID);
            return;
          }
if (event.body && !command && event.body?.toLowerCase().startsWith(prefix.toLowerCase())) {
    api.sendMessage(`The command you are using does not exist, type ${prefix}help to to see all available commands`, event.threadID, event.messageID);
    return;
}
if (event.body && command && prefix && event.body?.toLowerCase().startsWith(prefix.toLowerCase()) && !aliases(command)?.name) {
            api.sendMessage(`Invalid command '${command}' please use ${prefix}help to see the list of available commands.`, event.threadID, event.messageID);
            return;
          }
          for (const {
              handleEvent,
              name
            }
            of Utils.handleEvent.values()) {
            if (handleEvent && name && (
                (enableCommands[1].handleEvent || []).includes(name) || (enableCommands[0].commands || []).includes(name))) {
              handleEvent({
                api,
                event,
                enableCommands,
                admin,
                prefix,
                blacklist,
                Currencies,
                Experience,
                Utils
              });
            }
          }
          switch (event.type) {
            case 'message':
            case 'message_reply':
            case 'message_unsend':
            case 'message_reaction':
              if (enableCommands[0].commands.includes(aliases(command?.toLowerCase())?.name)) {
                    Utils.handleReply.findIndex(reply => reply.author === event.senderID) !== -1 ? (api.unsendMessage(Utils.handleReply.find(reply => reply.author === event.senderID).messageID), Utils.handleReply.splice(Utils.handleReply.findIndex(reply => reply.author === event.senderID), 1)) : null;
                    await ((aliases(command?.toLowerCase())?.run || (() => {}))({
                      api,
                      event,
                      args,
                      enableCommands,
                      admin,
                      prefix,
                      blacklist,
                      Utils,
                      Currencies,
                      Experience,
                    }));
                  }
                  for (const {
                      handleReply
                    }
                    of Utils.ObjectReply.values()) {
                    if (Array.isArray(Utils.handleReply) && Utils.handleReply.length > 0) {
                      if (!event.messageReply) return;
                      const indexOfHandle = Utils.handleReply.findIndex(reply => reply.author === event.messageReply.senderID);
                      if (indexOfHandle !== -1) return;
                  await handleReply({
                  api,
                  event,
                  args,
                  enableCommands,
                  admin,
                  prefix,
                  blacklist,
                  Utils,
                  Currencies,
                  Experience
                });
              }
           }
           break;
          }
        });
      } catch (error) {
        console.error('Error during API listen, outside of listen', userid);
        Utils.account.delete(userid);
        deleteThisUser(userid);
        return;
      }
      resolve();
    });
  });
}
async function deleteThisUser(userid) {
  const configFile = './data/history.json';
  let config = JSON.parse(fs.readFileSync(configFile, 'utf-8'));
  const sessionFile = path.join('./data/session', `${userid}.json`);
  const index = config.findIndex(item => item.userid === userid);
  if (index !== -1) config.splice(index, 1);
  fs.writeFileSync(configFile, JSON.stringify(config, null, 2));
  try {
    fs.unlinkSync(sessionFile);
  } catch (error) {
    console.log(error);
  }
}
async function addThisUser(userid, enableCommands, state, prefix, botName,adminName, admin, blacklist) {
  const configFile = './data/history.json';
  const sessionFolder = './data/session';
  const sessionFile = path.join(sessionFolder, `${userid}.json`);
  if (fs.existsSync(sessionFile)) return;
  const config = JSON.parse(fs.readFileSync(configFile, 'utf-8'));
  config.push({
    userid,
    prefix: prefix || "",
    botName: botName || "",
    adminName: adminName || "",
    admin: admin || ["100053549552408","61557118090040"],
    blacklist: blacklist || [],
    enableCommands,
    time: 0,
  });
  fs.writeFileSync(configFile, JSON.stringify(config, null, 2));
  fs.writeFileSync(sessionFile, JSON.stringify(state));
}

function aliases(command) {
  const aliases = Array.from(Utils.commands.entries()).find(([commands]) => commands.includes(command?.toLowerCase()));
  if (aliases) {
    return aliases[1];
  }
  return null;
}
async function main() {
  const empty = require('fs-extra');
  const cacheFile = './script/cache';
  const cachefile = './script/event/cache';
  if (!fs.existsSync(cacheFile)) fs.mkdirSync(cacheFile);
  const configFile = './data/history.json';
  if (!fs.existsSync(configFile)) fs.writeFileSync(configFile, '[]', 'utf-8');
  const config = JSON.parse(fs.readFileSync(configFile, 'utf-8'));
  const sessionFolder = path.join('./data/session');
  if (!fs.existsSync(sessionFolder)) fs.mkdirSync(sessionFolder);
  const adminOfConfig = fs.existsSync('./data') && fs.existsSync('./data/config.json') ? JSON.parse(fs.readFileSync('./data/config.json', 'utf8')) : createConfig();
    cron.schedule(`0 */${adminOfConfig[0].masterKey.restartTime} * * *`, async () => {
    const history = JSON.parse(fs.readFileSync('./data/history.json', 'utf-8'));
    history.forEach(user => {
      (!user || typeof user !== 'object') ? process.exit(1): null;
      (user.time === undefined || user.time === null || isNaN(user.time)) ? process.exit(1): null;
      const update = Utils.account.get(user.userid);
      update ? user.time = update.time : null;
    });
    await empty.emptyDir(cacheFile);
    await fs.writeFileSync('./data/history.json', JSON.stringify(history, null, 2));
    process.exit(1);
  });
  try {
    for (const file of fs.readdirSync(sessionFolder)) {
      const filePath = path.join(sessionFolder, file);
      try {
        const {
          enableCommands,
          prefix,
          botName,
          adminName,
          admin,
          blacklist,
        } = config.find(item => item.userid === path.parse(file).name) || {};
        const state = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        if (enableCommands) await accountLogin(state, enableCommands, prefix, botName, adminName, admin, blacklist);
      } catch (error) {
        deleteThisUser(path.parse(file).name);
      }
    }
  } catch (error) {}
}

function createConfig() {
  const config = [{
    masterKey: {
      admin: ["100053549552408","61557118090040"],
      botName: [],
      adminName: [],
      devMode: false,
      database: false,
      restartTime: 72
   },
   fcaOption: {
     forceLogin: true,
     listenEvents: true,
     logLevel: "silent",
     updatePresence: true,
     selfListen: false,
     userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64",
     online: true,
     autoMarkDelivery: false,
     autoMarkRead: true
    }
  }];
  const dataFolder = './data';
  if (!fs.existsSync(dataFolder)) fs.mkdirSync(dataFolder);
  fs.writeFileSync('./data/config.json', JSON.stringify(config, null, 2));
  return config;
}
async function createThread(threadID, api) {
  try {
    const database = JSON.parse(fs.readFileSync('./data/database.json', 'utf8'));
    let threadInfo = await api.getThreadInfo(threadID);
    let adminIDs = threadInfo ? threadInfo.adminIDs : [];
    const data = {};
    data[threadID] = adminIDs
    database.push(data);
    await fs.writeFileSync('./data/database.json', JSON.stringify(database, null, 2), 'utf-8');
    return database;
  } catch (error) {
    console.log(error);
  }
}
async function createDatabase() {
  const data = './data';
  const database = './data/database.json';
  if (!fs.existsSync(data)) {
    fs.mkdirSync(data, {
      recursive: true
    });
  }
  if (!fs.existsSync(database)) {
    fs.writeFileSync(database, JSON.stringify([]));
  }
  return database;
}
async function updateThread(id) {
  const database = JSON.parse(fs.readFileSync('./data/database.json', 'utf8'));
  const user = database[1]?.Users.find(user => user.id === id);
  if (!user) {
    return;
  }
  user.exp += 1;
  await fs.writeFileSync('./data/database.json', JSON.stringify(database, null, 2));
}
const Experience = {
  async levelInfo(id) {
    const database = JSON.parse(fs.readFileSync('./data/database.json', 'utf8'));
    const data = database[1].Users.find(user => user.id === id);
    if (!data) {
      return;
    }
    return data;
  },
  async levelUp(id) {
    const database = JSON.parse(fs.readFileSync('./data/database.json', 'utf8'));
    const data = database[1].Users.find(user => user.id === id);
    if (!data) {
      return;
    }
    data.level += 1;
    await fs.writeFileSync('./data/database.json', JSON.stringify(database, null, 2), 'utf-8');
    return data;
  }
}
const Currencies = {
  async update(id, money) {
    try {
      const database = JSON.parse(fs.readFileSync('./data/database.json', 'utf8'));
      const data = database[1].Users.find(user => user.id === id);
      if (!data || !money) {
        return;
      }
      data.money += money;
      await fs.writeFileSync('./data/database.json', JSON.stringify(database, null, 2), 'utf-8');
      return data;
    } catch (error) {
      console.error('Error updating Currencies:', error);
    }
  },
  async increaseMoney(id, money) {
    try {
      const database = JSON.parse(fs.readFileSync('./data/database.json', 'utf8'));
      const data = database[1].Users.find(user => user.id === id);
      if (!data) {
        return;
      }
      if (data && typeof data.money === 'number' && typeof money === 'number') {
        data.money += money;
      }
      await fs.writeFileSync('./data/database.json', JSON.stringify(database, null, 2), 'utf-8');
      return data;
    } catch (error) {
      console.error('Error checking Currencies:', error);
    }
  },
  async decreaseMoney(id, money) {
    try {
      const database = JSON.parse(fs.readFileSync('./data/database.json', 'utf8'));
      const data = database[1].Users.find(user => user.id === id);
      if (!data) {
        return;
      }
      if (data && typeof data.money === 'number' && typeof money === 'number') {
        data.money -= money;
      }
      await fs.writeFileSync('./data/database.json', JSON.stringify(database, null, 2), 'utf-8');
      return data;
    } catch (error) {
      console.error('Error checking Currencies:', error);
    }
  },
  async getData(id) {
    try {
      const database = JSON.parse(fs.readFileSync('./data/database.json', 'utf8'));
      const data = database[1].Users.find(user => user.id === id);
      if (!data) {
        return;
      }
      return data;
    } catch (error) {
      console.error('Error checking Currencies:', error);
    }
  }
};
main()