const axios = require('axios');
const { google } = require('googleapis');
const mime = require('mime-types');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const getFBInfo = require("@xaviabot/fb-downloader");

const download = {};

download["config"] = {
  name: "media-downloader",
  version: "69",
  credits: "Cliff", 
  description: "Tiktok, googledrive, Facebook, fbwatch, instagram, youtube, capcut" 
};

const downloadDirectory = path.resolve(__dirname, 'cache');

download["handleEvent"] = async function ({ api, event }) {
  if (event.body !== null) {
    const regEx_tiktok = /https:\/\/(www\.|vt\.)?tiktok\.com\//;
    const link = event.body;

    if (regEx_tiktok.test(link)) {
      api.setMessageReaction("📥", event.messageID, () => {}, true);
      try {
        const response = await axios.post(`https://www.tikwm.com/api/`, { url: link });
        const data = response.data.data;
        const videoStream = await axios({
          method: 'get',
          url: data.play,
          responseType: 'stream'
        });

        api.sendMessage({
          body: `𝖠𝗎𝗍𝗈 𝖣𝗈𝗐𝗇 𝖳𝗂𝗄𝖳𝗈𝗄 \n\n𝙲𝚘𝚗𝚝𝚎𝚗𝚝: ${data.title}\n\n𝙻𝚒𝚔𝚎𝚜: ${data.digg_count}\n\n𝙲𝚘𝚖𝚖𝚎𝚗𝚝𝚜: ${data.comment_count}\n\n𝗬𝗔𝗭𝗞𝗬 𝗕𝗢𝗧 𝟮.𝟬.𝟬𝘃`,
          attachment: videoStream.data
        }, event.threadID);
      } catch (error) {
      }
    }
  }

  if (event.body !== null) {
    (async () => {
      const apiKey = 'AIzaSyCYUPzrExoT9f9TsNj7Jqks1ZDJqqthuiI';
      if (!apiKey) {
        return;
      }

      const drive = google.drive({ version: 'v3', auth: apiKey });
      const gdriveLinkPattern = /(?:https?:\/\/)?(?:drive\.google\.com\/(?:folderview\?id=|file\/d\/|open\?id=))([\w-]{33}|\w{19})(&usp=sharing)?/gi;
      let match;

      while ((match = gdriveLinkPattern.exec(event.body)) !== null) {
        const fileId = match[1];

        try {
          const res = await drive.files.get({ fileId: fileId, fields: 'name, mimeType' });
          const fileName = res.data.name;
          const mimeType = res.data.mimeType;
          const extension = mime.extension(mimeType);
          const destFilename = `${fileName}${extension ? '.' + extension : ''}`;
          const destPath = path.join(downloadDirectory, destFilename);

          const dest = fs.createWriteStream(destPath);
          let progress = 0;

          const resMedia = await drive.files.get(
            { fileId: fileId, alt: 'media' },
            { responseType: 'stream' }
          );

          await new Promise((resolve, reject) => {
            resMedia.data
              .on('end', () => {
                console.log();
                resolve();
              })
              .on('error', (err) => {
                console.error();
                reject(err);
              })
              .on('data', (d) => {
                progress += d.length;
                process.stdout.write(`Downloaded ${progress} bytes\r`);
              })
              .pipe(dest);
          });

          await api.sendMessage({ body: `𝖦𝗈𝗈𝗀𝗅𝖾 𝖣𝗋𝗂𝗏𝖾 𝖫𝗂𝗇𝗄 \n\n𝙵𝙸𝙻𝙴𝙽𝙰𝙼𝙴: ${fileName}\n\n𝗬𝗔𝗭𝗞𝗬 𝗕𝗢𝗧 𝟮.𝟬.𝟬𝘃`, attachment: fs.createReadStream(destPath) }, event.threadID, () => fs.unlinkSync(destPath),
        event.messageID);

          await fs.promises.unlink(destPath);
          console.log();
        } catch (err) {
          console.error();
        }
      }
    })();
  }

  if (event.body !== null) {
    const facebookLinkRegex = /https:\/\/www\.facebook\.com\/\S+/;

    const downloadAndSendFBContent = async (url) => {
      try {
        const result = await getFBInfo(url);
        const videoData = await axios.get(encodeURI(result.sd), { responseType: 'stream' });

        api.sendMessage({
          body: `𝖠𝗎𝗍𝗈 𝖣𝗈𝗐𝗇 𝖥𝖺𝖼𝖾𝖻𝗈𝗈𝗄\n\nTitle: ${result.title}\n\n𝗬𝗔𝗭𝗞𝗬 𝗕𝗢𝗧 𝟮.𝟬.𝟬𝘃`,
          attachment: videoData.data
        }, event.threadID);
      } catch (e) {
        console.error();
      }
    };

    if (facebookLinkRegex.test(event.body)) {
      downloadAndSendFBContent(event.body);
    }
  }

if (event.body !== null) {
  const fbWatchRegex = /https:\/\/fb\.watch\/[a-zA-Z0-9_-]+/i;
  try {
    if (event.body !== null) {
      const url = event.body;
      if (fbWatchRegex.test(url)) {
        const res = await fbDownloader(url);
        if (res.success && res.download && res.download.length > 0) {
          const videoUrl = res.download[0].url;
          const response = await axios.get(videoUrl, { responseType: "stream" });
          const filePath = path.join(downloadDirectory, `${Date.now()}.mp4`);
          const fileStream = fs.createWriteStream(filePath);
          response.data.pipe(fileStream);
          fileStream.on('finish', () => {
            const messageBody = `𝖠𝗎𝗍𝗈 𝖣𝗈𝗐𝗇 FB.Watch\n\n𝗬𝗔𝗓𝗞𝗬 𝗕𝗢𝗧 𝟮.𝟬.𝟬𝘃`;
            api.sendMessage({
              body: messageBody,
              attachment: fs.createReadStream(filePath)
            }, event.threadID, () => fs.unlinkSync(filePath), event.messageID);
          });
        }
      }
    }
  } catch (err) {
    console.error();
  }
}

async function fbDownloader(url) {
  try {
    const response1 = await axios({
      method: 'POST',
      url: 'https://snapsave.app/action.php?lang=en',
      headers: {
        "accept": "*/*",
        "accept-language": "vi,en-US;q=0.9,en;q=0.8",
        "content-type": "multipart/form-data",
        "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Microsoft Edge\";v=\"110\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "Referer": "https://snapsave.app/en",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      data: { url }
    });

    let html;
    const evalCode = response1.data.replace('return decodeURIComponent', 'html = decodeURIComponent');
    eval(evalCode);
    html = html.split('innerHTML = "')[1].split('";\n')[0].replace(/\\"/g, '"');
    const $ = cheerio.load(html);
    const download = [];
    const tbody = $('table').find('tbody');
    const trs = tbody.find('tr');
    trs.each(function (i, elem) {
      const trElement = $(elem);
      const tds = trElement.children();
      const quality = $(tds[0]).text().trim();
      const url = $(tds[2]).children('a').attr('href');
      if (url != undefined) {
        download.push({ quality, url });
      }
    });
    return { success: true, video_length: $("div.clearfix > p").text().trim(), download };
  } catch (err) {
    return { success: false };
  }
}

  if (event.body !== null) {
    const youtubeLinkPattern = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    const yj = event.body;
    if (youtubeLinkPattern.test(yj)) {
      try {
        const y = await axios.get(`https://www.noobs-api.000.pe/dipto/alldl?url=${encodeURIComponent(yj)}`);
        if (y.data && y.data.result) {
          const yih = y.data.result;
          const uh = y.data.Title;
          const ytr = await axios.get(yih, { responseType: "stream" });
          const yPath = path.join(downloadDirectory, `yut.mp4`);
          const fileStream = fs.createWriteStream(yPath);
          ytr.data.pipe(fileStream);
          fileStream.on('finish', () => {
            api.sendMessage({
              body: `𝖠𝗎𝗍𝗈 𝖣𝗈𝗐𝗇 Youtube\n\nTitle: ${uh}\n\n𝗬𝗔𝗭𝗞𝗬 𝗕𝗢𝗧 𝟮.𝟬.𝟬𝘃`,
              attachment: fs.createReadStream(yPath)
            }, event.threadID, () => fs.unlinkSync(yPath), event.messageID);
          });
        }
      } catch (err) {
      }
    }
  }

  if (event.body !== null) {
    const regex = /https:\/\/www\.instagram\.com\/reel\/[a-zA-Z0-9_-]+\/\?igsh=[a-zA-Z0-9_=-]+$/;
    const syukk = event.body;
    if (regex.test(syukk)) {
      try {
        const atay = await axios.get(`https://cprojectapisjonellv2.adaptable.app/api/fbdl?url=${encodeURIComponent(syukk)}`);
        if (atay.data && atay.data.url && atay.data.url.data.length > 0) {
          const aww = atay.data.url.data[0].url;
          const juk = atay.data.title;
          const jkm = await axios.get(aww, { responseType: "stream" });
          const ffath = path.join(downloadDirectory, `insta.mp4`);
          const trar = fs.createWriteStream(ffath);
          jkm.data.pipe(trar);
          trar.on('finish', () => {
            api.sendMessage({
              body: `𝖠𝗎𝗍𝗈 𝖣𝗈𝗐𝗇 Instagram Reels\n\n𝗬𝗔𝗭𝗞𝗬 𝗕𝗢𝗧 𝟮.𝟬.𝟬𝘃`,
              attachment: fs.createReadStream(ffath)
            }, event.threadID, () => fs.unlinkSync(ffath), event.messageID);
          });
        }
      } catch (e) {
      }
    }
  }

  if (event.body !== null) {
    const regex = /https:\/\/www\.capcut\.com\/t\/[A-Za-z0-9]+/;
    const capLink = event.body;
    if (regex.test(capLink)) {
      try {
        const downloadData = await axios.get(`https://cprojectapisjonellv2.adaptable.app/api/capcut?url=${encodeURIComponent(capLink)}`);
        if (downloadData.data && downloadData.data.url) {
          const bi = downloadData.data.result.title;
        const des = downloadData.data.result.description;
          const fileUrl = downloadData.data.url;
          const fileName = `capcut_${Date.now()}.mp4`;
          const filePath = path.join(downloadDirectory, fileName);
          const response = await axios.get(fileUrl, { responseType: 'stream' });
          const fileStream = fs.createWriteStream(filePath);

          response.data.pipe(fileStream);
          fileStream.on('finish', () => {
            api.sendMessage({
              body: '𝖠𝗎𝗍𝗈 𝖣𝗈𝗐𝗇 CapCut\n\nTitle: ${bi}\nDescription: ${des}\n\n𝗬𝗔𝗭𝗞𝗬 𝗕𝗢𝗧 𝟮.𝟬.𝟬𝘃',
              attachment: fs.createReadStream(filePath)
            }, event.threadID, () => fs.unlinkSync(filePath));
          });
        }
      } catch (error) {
        api.sendMessage(downloadData.data, event.threadID, event.messageID);
      }
    }
  }
};

module.exports = download;