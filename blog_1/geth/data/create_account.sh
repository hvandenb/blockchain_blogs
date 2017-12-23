#!/bin/sh

if [ "x$ADDRESS" = "x" ]
then
  echo "No account found, creating one"
  ADDRESS="0x$(geth --password password account new | sed -e 's/Address: {\(.*\)}/\1/')"
fi

sed -i "/Etherbase/s/= .*/= \"$ADDRESS\"/" config.toml ;
echo $ADDRESS > address

