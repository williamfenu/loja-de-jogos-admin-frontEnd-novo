FROM ubuntu

RUN mkdir /home/william && mkdir /home/william/loja-de-jogos-admin

RUN apt update && apt upgrade -y 

RUN apt install npm -y

WORKDIR /home/william/loja-de-jogos-admin

EXPOSE 3000

CMD ["npm", "start"]