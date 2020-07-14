(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{415:function(a,r,s){"use strict";s.r(r);var t=s(5),e=Object(t.a)({},(function(){var a=this,r=a.$createElement,s=a._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"distribution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#distribution"}},[a._v("#")]),a._v(" Distribution")]),a._v(" "),s("h2",{attrs:{id:"withdraw-rewards"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#withdraw-rewards"}},[a._v("#")]),a._v(" Withdraw Rewards")]),a._v(" "),s("p",[a._v("Withdraw rewards from a given delegation address, and withdraw validator commission if the delegation address given is a validator operator.")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("terracli tx distribution withdraw-rewards "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("validator-address"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"set-withdraw-address"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-withdraw-address"}},[a._v("#")]),a._v(" Set Withdraw Address")]),a._v(" "),s("p",[a._v("Change the default withdraw address for rewards associated with an address.")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("terracli tx distribution set-withdraw-addr "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("withdraw-address"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"withdraw-all-rewards"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#withdraw-all-rewards"}},[a._v("#")]),a._v(" Withdraw All Rewards")]),a._v(" "),s("p",[a._v("Withdraw all delegations rewards for a delegator.")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("terracli tx distribution withdraw-all-rewards \n")])])]),s("h2",{attrs:{id:"fund-community-pool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fund-community-pool"}},[a._v("#")]),a._v(" Fund Community Pool")]),a._v(" "),s("p",[a._v("Funds the community pool with the specified amount.")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("terracli tx distribution fund-community-pool "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("amount"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("Argument "),s("code",[a._v("amount")]),a._v(" is in a format such as: "),s("code",[a._v("1000uluna")]),a._v(", or "),s("code",[a._v("100ukrw,200uusd")])]),a._v(" "),s("h2",{attrs:{id:"query-distribution-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-distribution-parameters"}},[a._v("#")]),a._v(" Query Distribution Parameters")]),a._v(" "),s("p",[a._v("To check the current distribution parameters, run:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("terracli query distribution params\n")])])]),s("h2",{attrs:{id:"query-community-pool-coins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-community-pool-coins"}},[a._v("#")]),a._v(" Query Community Pool Coins")]),a._v(" "),s("p",[a._v("To query all coins in the Community Pool, which is under Governance control:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("terracli query distribution community-pool\n")])])]),s("h2",{attrs:{id:"query-outstanding-rewards"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-outstanding-rewards"}},[a._v("#")]),a._v(" Query Outstanding Rewards")]),a._v(" "),s("p",[a._v("To check the current outstanding (un-withdrawn) rewards, run:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("terracli query distribution outstanding-rewards\n")])])]),s("h2",{attrs:{id:"query-validator-commission"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-validator-commission"}},[a._v("#")]),a._v(" Query Validator Commission")]),a._v(" "),s("p",[a._v("To check the current outstanding commission for a validator, run:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("terracli query distribution commission "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("validator_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"query-validator-slashes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-validator-slashes"}},[a._v("#")]),a._v(" Query Validator Slashes")]),a._v(" "),s("p",[a._v("To check historical slashes for a validator, run:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("terracli query distribution slashes "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("validator_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("start_height"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("end_height"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"query-delegator-rewards"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-delegator-rewards"}},[a._v("#")]),a._v(" Query Delegator Rewards")]),a._v(" "),s("p",[a._v("To check current rewards for a delegator (if they were to be withdrawn), run:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("terracli query distribution rewards "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("delegator_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("validator_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"query-all-delegator-rewards"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-all-delegator-rewards"}},[a._v("#")]),a._v(" Query All Delegator Rewards")]),a._v(" "),s("p",[a._v("To check all current rewards for a delegator (if they were to be withdrawn), run:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("terracli query distribution rewards "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("delegator_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])])}),[],!1,null,null,null);r.default=e.exports}}]);