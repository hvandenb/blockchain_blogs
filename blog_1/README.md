Deploying a private geth network using docker
=============================================

DISCLAIMER
----------

This is intended for non-production environments only.



Quick Start
-----------

    export TRUFFLE_ACCOUNT_PASSWORD=<Your custom passowrd here>
    docker-compose build --build-arg PASSWORD=$TRUFFLE_ACCOUNT_PASSWORD geth
    export TRUFFLE_ACCOUNT=<The address output by build>
    docker-compose up

    cd truffle
    npm install
    truffle deploy


Advanced Setup
--------------

We reccomend altering the chainID and nonce in geth/data/genesis.json as well as altering the NetworkId in geth/data/config.toml.

    cp <Your address UTC file> geth/data/keystore
    export TRUFFLE_ACCOUNT=<The address from your UTC file>
    export TRUFFLE_ACCOUNT_PASSWORD=<The password for your wallet>

    docker-compose build --build-arg ADDRESS=$TRUFFLE_ACCOUNT --build-arg PASSWORD=$TRUFFLE_ACCOUNT_PASSWORD geth
    docker-compose up

    cd truffle
    npm install
    truffle deploy
