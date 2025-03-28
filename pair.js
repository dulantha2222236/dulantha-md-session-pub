const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Gifted_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function DULANTHA_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Dulantha_md = dulantha_md({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Dulantha_md.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Dulantha_md.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Dulantha_md.ev.on('creds.update', saveCreds)
            Pair_Code_By_Dulantha_md.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Dulantha_md.sendMessage(Pair_Code_By_Dulantha_md.user.id, { text: '' + b64data });

               let DULANTHA_MD_TEXT = `
*_Pair Code Connected by DULANTHA-MD*
*_Made BY DULANTHA*
______________________________________
╔════◇
║ *『 WOW YOU'VE CHOSEN DULANTHA MD 』*
║ _You Have Completed the First Step to Deploy a Whatsapp Bot._
╚════════════════════════╝
╔═════◇
║  『HII THERE』
║❒ DON,T SHARE THIS CODE WITH OTHER
║❒ You can deploy dulantha md now
╚════════════════════════╝
_____________________________________

_Don't Forget To Give Star To My Repo_`
 await Pair_Code_By_Dulantha_md.sendMessage(Pair_Code_By_Dulantha_md.user.id,{text:DULANTHA_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Dulantha_Md.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    DULANTHA_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await DULANTHA_MD_PAIR_CODE()
});
module.exports = router
