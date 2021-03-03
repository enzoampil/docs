(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{416:function(e,t,a){"use strict";a.r(t);var s=a(5),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"joining-a-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#joining-a-network"}},[e._v("#")]),e._v(" Joining a Network")]),e._v(" "),a("p",[e._v("After you've tried out running a simple local Terra network, you may want to participate in an existing Terra network, such as the Columbus mainnet or Tequila testnet. This document will help you configure and set up your node for just that.")]),e._v(" "),a("h2",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),a("p",[e._v("These instructions are for setting up a brand new full node from scratch.")]),e._v(" "),a("h3",{attrs:{id:"initialize-and-configure-moniker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initialize-and-configure-moniker"}},[e._v("#")]),e._v(" Initialize and configure moniker")]),e._v(" "),a("p",[e._v("First, initialize the node and create the necessary config files:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("terrad init "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your_custom_moniker"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("Monikers can only contain ASCII characters; using Unicode characters will render your node unreachable by other peers in the network.")])]),e._v(" "),a("p",[e._v("You can edit this "),a("code",[e._v("moniker")]),e._v(" later, in the "),a("code",[e._v("~/.terrad/config/config.toml")]),e._v(" file:")]),e._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# A custom human readable name for this node")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[e._v("moniker")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<your_custom_moniker>"')]),e._v("\n")])])]),a("h3",{attrs:{id:"set-minimum-gas-prices-for-transactions-recommended"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-minimum-gas-prices-for-transactions-recommended"}},[e._v("#")]),e._v(" Set minimum gas prices for transactions (recommended)")]),e._v(" "),a("p",[e._v("You can edit "),a("code",[e._v("~/.terrad/config/app.toml")]),e._v(" in order to enable anti-spam by rejecting incoming transactions with implied gas price less than a specified minimum. The minimum gas prices recommended for the Terra mainnet network is the following:")]),e._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The minimum gas prices a validator is willing to accept for processing a")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# transaction. A transaction's fees must meet the minimum of any denomination")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# specified in this config (e.g. 0.25token1,0.0001token2).")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[e._v("minimum-gas-prices")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0.00506uluna,0.0015uusd,0.00102usdr,1.7805ukrw,4.31626umnt,0.00125ueur,0.0097ucny,0.16ujpy,0.0011ugbp,0.11uinr,0.0019ucad,0.0013uchf,0.0019uaud,0.002usgd"')]),e._v("\n")])])]),a("p",[e._v("Your full node has now been initialized!")]),e._v(" "),a("h2",{attrs:{id:"picking-a-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picking-a-network"}},[e._v("#")]),e._v(" Picking a Network")]),e._v(" "),a("p",[e._v("You specify the network you want to join by setting the "),a("strong",[e._v("genesis file")]),e._v(" and "),a("strong",[e._v("seeds")]),e._v(". If you need more information about past networks, check our "),a("a",{attrs:{href:"https://github.com/terra-project/testnet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Networks Repo"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Network")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Homepage")]),e._v(" "),a("th",[e._v("Address Book")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("columbus-4")])]),e._v(" "),a("td",[e._v("Mainnet")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/terra-project/mainnet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Link"),a("OutboundLink")],1)]),e._v(" "),a("td",[e._v("https://network.terra.dev/addrbook.json")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("tequila-0004")])]),e._v(" "),a("td",[e._v("Testnet")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/terra-project/testnet/tree/master/tequila-0004",target:"_blank",rel:"noopener noreferrer"}},[e._v("Link"),a("OutboundLink")],1)]),e._v(" "),a("td",[e._v("https://network.terra.dev/testnet/addrbook.json")])])])]),e._v(" "),a("h3",{attrs:{id:"download-the-genesis-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-the-genesis-file"}},[e._v("#")]),e._v(" Download the genesis file")]),e._v(" "),a("p",[e._v("You'll need to select the network you want to join and download its "),a("code",[e._v("genesis.json")]),e._v(" file into your "),a("code",[e._v("~/.terrad/config")]),e._v(" directory. This file specifies the genesis account balances and parameters to use when replaying transactions and syncing.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" -p ~/.terrad/config\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" https://columbus-genesis.s3-ap-northeast-1.amazonaws.com/columbus-4-genesis.json "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ~/.terrad/config/genesis.json\n")])])]),a("p",[e._v("Note we use the "),a("code",[e._v("latest")]),e._v(" directory in the "),a("a",{attrs:{href:"https://github.com/terra-project/testnet",target:"_blank",rel:"noopener noreferrer"}},[e._v("networks repo"),a("OutboundLink")],1),e._v(" which contains details for the latest testnet. If you are connecting to a different testnet, ensure you get the right files.")]),e._v(" "),a("p",[e._v("To verify the correctness of the configuration run:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("terrad start\n")])])]),a("h3",{attrs:{id:"download-address-book-recommended-for-the-mainnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-address-book-recommended-for-the-mainnet"}},[e._v("#")]),e._v(" Download address book (recommended for the mainnet)")]),e._v(" "),a("p",[e._v("If you have an address book of peers, download "),a("code",[e._v("addrbook.json")]),e._v(" and move it into "),a("code",[e._v("~/.terrad/config/addrbook.json")]),e._v(". This will give your node a selection of peers to dial to find other nodes.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" https://network.terra.dev/addrbook.json "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ~/.terrad/config/addrbook.json\n")])])]),a("h3",{attrs:{id:"define-seed-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#define-seed-nodes"}},[e._v("#")]),e._v(" Define seed nodes")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("For more information on seeds and peers, you can "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/docs/tendermint-core/using-tendermint.md#peers",target:"_blank",rel:"noopener noreferrer"}},[e._v("read this"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("Your node needs to know how to find peers. You'll need to add healthy seed nodes to "),a("code",[e._v("~/.terrad/config/config.toml")]),e._v(". The following are the current seeds for Terra mainnet:")]),e._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key property"}},[e._v("seeds")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"87048bf71526fb92d73733ba3ddb79b7a83ca11e@public-seed.terra.dev:26656,b5205baf1d52b6f91afb0da7d7b33dcebc71755f@public-seed2.terra.dev:26656,5fa582d7c9931e5be8c02069d7b7b243c79d25bf@seed.terra.de-light.io:26656"')]),e._v("\n")])])]),a("h2",{attrs:{id:"connecting-to-the-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-the-network"}},[e._v("#")]),e._v(" Connecting to the Network")]),e._v(" "),a("h3",{attrs:{id:"run-your-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-your-node"}},[e._v("#")]),e._v(" Run your node")]),e._v(" "),a("p",[e._v("Start the full node with this command:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("terrad start\n")])])]),a("p",[e._v("Check that everything is running smoothly:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("terracli status\n")])])]),a("h3",{attrs:{id:"wait-for-node-to-sync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wait-for-node-to-sync"}},[e._v("#")]),e._v(" Wait for node to sync")]),e._v(" "),a("p",[e._v("Your node should now be catching up with the network by replaying all the transactions from genesis and recreating the blockchain state locally. This will take a long time, so make sure you've set it up on a stable connection so you can leave while it syncs.")]),e._v(" "),a("p",[e._v("View the status of the network with the "),a("a",{attrs:{href:"https://finder.terra.money",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terra Finder"),a("OutboundLink")],1),e._v(". Once your full node syncs up to the current block height, you should see it appear on the "),a("a",{attrs:{href:"https://terra.stake.id/",target:"_blank",rel:"noopener noreferrer"}},[e._v("list of full nodes"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Congratulations! You've now successfully joined a network as a full node operator.")]),e._v(" "),a("h3",{attrs:{id:"using-a-data-backup-recommended-for-the-mainnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-a-data-backup-recommended-for-the-mainnet"}},[e._v("#")]),e._v(" Using a data backup (recommended for the mainnet)")]),e._v(" "),a("p",[e._v("If you are connecting to an existing network for which you have a data backup (from a provider you trust), you can optionally load the backup into your node storage rather than syncing from scratch.")]),e._v(" "),a("p",[e._v("ChainLayer has generously provided node data backups for Columbus mainnet, which you can find in their "),a("a",{attrs:{href:"https://terra.quicksync.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terra QuickSync"),a("OutboundLink")],1),e._v(" page.")]),e._v(" "),a("h2",{attrs:{id:"appendix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appendix"}},[e._v("#")]),e._v(" Appendix")]),e._v(" "),a("h3",{attrs:{id:"upgrading-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-testnet"}},[e._v("#")]),e._v(" Upgrading Testnet")]),e._v(" "),a("p",[e._v("These instructions are for full nodes that have ran on previous testnets and would like to upgrade to the latest testnet.")]),e._v(" "),a("h4",{attrs:{id:"reset-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset-data"}},[e._v("#")]),e._v(" Reset data")]),e._v(" "),a("p",[e._v("First, remove the outdated files and reset the data.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" ~/.terrad/config/genesis.json\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" ~/.terrad/config/addrbook.json\nterrad unsafe-reset-all\n")])])]),a("p",[e._v("Your node is now in a pristine state while keeping the original "),a("code",[e._v("priv_validator.json")]),e._v(" and "),a("code",[e._v("config.toml")]),e._v(". If you had any sentry nodes or full nodes setup before, your node will still try to connect to them, but may fail if they haven't also been upgraded.")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Make sure that every node has a unique "),a("code",[e._v("priv_validator.json")]),e._v(". Do not copy the "),a("code",[e._v("priv_validator.json")]),e._v(" from an old node to multiple new nodes. Running two nodes with the same "),a("code",[e._v("priv_validator.json")]),e._v(" will cause you to double sign.")])]),e._v(" "),a("h4",{attrs:{id:"software-upgrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#software-upgrade"}},[e._v("#")]),e._v(" Software upgrade")]),e._v(" "),a("p",[e._v("Now it is time to upgrade the software. Go to the project directory, and run:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout master "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" pull\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("If you have issues at this step, please check that you have the latest stable version of GO installed.")])]),e._v(" "),a("p",[e._v("Note we use "),a("code",[e._v("master")]),e._v(" here since it contains the latest stable release. See the "),a("a",{attrs:{href:"https://github.com/terra-project/testnet",target:"_blank",rel:"noopener noreferrer"}},[e._v("testnet repo"),a("OutboundLink")],1),e._v(" for details on which version is needed for which testnet, and the "),a("a",{attrs:{href:"https://github.com/terra-project/core/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terra Core release page"),a("OutboundLink")],1),e._v(" for details on each release. Your full node has been cleanly upgraded!")]),e._v(" "),a("h3",{attrs:{id:"exporting-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exporting-state"}},[e._v("#")]),e._v(" Exporting state")]),e._v(" "),a("p",[e._v("Terra can dump the entire application state to a JSON file, which could be useful for manual analysis and can also be used as the genesis file of a new network.")]),e._v(" "),a("p",[e._v("Export state with:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("terrad "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(".json\n")])])]),a("p",[e._v("You can also export state from a particular height (at the end of processing the block of that height):")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("terrad "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" --height "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(".json\n")])])]),a("p",[e._v("If you plan to start a new network from the exported state, export with the "),a("code",[e._v("--for-zero-height")]),e._v(" flag:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("terrad "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" --height "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" --for-zero-height "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(".json\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);