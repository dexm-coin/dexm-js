#!/bin/bash

pbjs -t static-module -w commonjs -o proto.js network.proto blockchain.proto
pbts -o proto.d.ts proto.js
