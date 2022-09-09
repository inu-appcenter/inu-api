#https://blogs.oracle.com/opal/dockerfiles-for-node-oracledb-are-easy-and-simple 참고
FROM oraclelinux:7-slim

RUN  yum -y install oracle-release-el7 oracle-nodejs-release-el7 && \
     yum-config-manager --disable ol7_developer_EPEL && \
     yum -y install oracle-instantclient19.3-basiclite nodejs && \
     rm -rf /var/cache/yum

WORKDIR /opt/inu-api

COPY . .

RUN npm ci

CMD ["npm", "start"]
