FROM ethereum/client-go:stable

MAINTAINER Ryan Bezdicek

ARG ADDRESS
ENV ADDRESS=$ADDRESS

ARG PASSWORD=test
ENV PASSWORD=$PASSWORD

RUN mkdir /geth
WORKDIR /geth

ADD data/genesis .
ADD data/config.toml .
ADD /data/create_account.sh .

RUN mkdir /root/.ethereum
# Add account keystore files.
RUN mkdir -p /root/.ethereum/keystore

ADD data/keystore /root/.ethereum/keystore

# Initialize geth with genesis file
RUN geth init genesis.json
# Generate DAG to speed things up on first deploy.
RUN geth makedag 0 ~/.ethash

RUN echo ${PASSWORD} > password

RUN chmod +x /geth/create_account.sh && /geth/create_account.sh

RUN rm password

ENTRYPOINT ["geth", "--config", "config.toml"]
CMD ["--mine"]

RUN echo "********************************Address**************************************" && \
  cat address && \
  echo "*****************************************************************************"
