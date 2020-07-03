# OP Logger

## Update
I'll try to make it terminal based. The only thing is i don't have a Mac to test the mac version. I'll also try to make it so that it downloads everything needed for you. It would of course be harder for Windows so maybe for Windows i'll make a Wizard Install that installs ngrok, mongodb and nodejs for you in C#.
For Mac and Linux, the install script will be in Python because i hate bash language. In the next update, you will probably need Python (already in Mac and Linux) but maybe i'll install it via the installer too.

## Credits
Credits to Web Dev Simplified for the UI and most of it. This project is really his url shortener but modified with an ip logger.
## Prerequisites
Well you need a few things first
- NodeJS
- MongoDB (download it in their website it's really easy)
- Ngrok (I'll show you how to download that)
It would also be great if you were familiar with the terminal, because we will be using it.
## How to run it?
1. You download this repo
2. You extract it
3. You open your terminal at the exact path the files are in
4. You run this command: <code>npm init -y && npm i express express-useragent mongoose geoip-lite ejs shortid</code>
4. You run: <code>node server.js</code> or <code>nodemon server.js</code> if you have nodemon installed
5. You download ngrok: https://ngrok.com/download
6. Extract it and open the terminal (another terminal window) on the path with ngrok
7. you run the command <code>ngrok http 5000</code>

The command might be different, it depends.
On windows, it is <code>ngrok http 5000</code> for CMD.
On Mac and Linux, it is ./ngrok http 5000

Then, you copy the ngrok url that is given and open it on your browser of choice. You will then put a url in the text box and click on shrink. It is gonna generate you another link. You then copy that link and use some normal url shortener (bit.ly for example) to shorten it again otherwise it looks weird. You can then share this link to your victim.

When your victim clicks this link, you will get his ip, user agent, location and language. The user agent gives a ton of info btw. All of this will print out on the first terminal, the one you used to run the code in this repo.

I hope i made it easy!
If you have any bugs, please make an issue. I will fix them if i can.
