#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ec2-user/express-app

#navigate into our working directory where we have all our github files
cd /home/ec2-user/express-app

#add npm and node to path
export NVM_DIR="$HOME/.nvm"	
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm	
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # loads nvm bash_completion (node is in path now)

#install node modules
sudo npm install


sudo pkill node
sudo pm2 delete express-app
sudo pm2 start -i 1 npm --no-automation --name express-app  -- run start 

#start our node app in the background
node app.js > app.out.log 2> app.err.log < /dev/null & 
# pm2 restart nodejs-express-app >> /home/ec2-user/express-app-pipline/deploy.log ....