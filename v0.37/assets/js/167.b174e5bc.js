(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{739:function(e,t,o){"use strict";o.r(t);var a=o(1),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"rfc-024-block-structure-consolidation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rfc-024-block-structure-consolidation"}},[e._v("#")]),e._v(" RFC 024: Block Structure Consolidation")]),e._v(" "),o("h2",{attrs:{id:"changelog"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),o("ul",[o("li",[e._v("19-Apr-2022: Initial draft started (@williambanfield).")]),e._v(" "),o("li",[e._v("3-May-2022: Initial draft complete (@williambanfield).")])]),e._v(" "),o("h2",{attrs:{id:"abstract"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("Block")]),e._v(" data structure is a very central structure within Tendermint. Because\nof its centrality, it has gained several fields over the years through accretion.\nNot all of these fields may be necessary any more. This document examines which\nof these fields may no longer be necessary for inclusion in the block and makes\nrecommendations about how to proceed with each of them.")]),e._v(" "),o("h2",{attrs:{id:"background"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),o("p",[e._v("The current block structure contains multiple fields that are not required for\nvalidation or execution of a Tendermint block. Some of these fields had vestigial\npurposes that they no longer serve and some of these fields exist as a result of\ninternal Tendermint domain objects leaking out into the external data structure.")]),e._v(" "),o("p",[e._v("In so far as is possible, we should consolidate and prune these superfluous\nfields before releasing a 1.0 version of Tendermint. All pruning of these\nfields should be done with the aim of simplifying the structures to what\nis needed while preserving information that aids with debugging and that also\nallow external protocols to function more efficiently than if they were removed.")]),e._v(" "),o("h3",{attrs:{id:"current-block-structure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#current-block-structure"}},[e._v("#")]),e._v(" Current Block Structure")]),e._v(" "),o("p",[e._v("The current block structures are included here to aid discussion.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"bWVzc2FnZSBCbG9jayB7CiAgSGVhZGVyICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyICAgICAgPSAxOwogIERhdGEgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgICAgICAgID0gMjsKICB0ZW5kZXJtaW50LnR5cGVzLkV2aWRlbmNlTGlzdCBldmlkZW5jZSAgICA9IDM7CiAgQ29tbWl0ICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9jb21taXQgPSA0Owp9Cg=="}}),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"bWVzc2FnZSBIZWFkZXIgewogIHRlbmRlcm1pbnQudmVyc2lvbi5Db25zZW5zdXMgdmVyc2lvbiAgICAgICAgICAgICAgPSAxOwogIHN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5faWQgICAgICAgICAgICAgPSAyOwogIGludDY0ICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ICAgICAgICAgICAgICAgPSAzOwogIGdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAgICAgdGltZSAgICAgICAgICAgICAgICAgPSA0OwogIEJsb2NrSUQgICAgICAgICAgICAgICAgICAgICAgbGFzdF9ibG9ja19pZCAgICAgICAgPSA1OwogIGJ5dGVzICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9jb21taXRfaGFzaCAgICAgPSA2OwogIGJ5dGVzICAgICAgICAgICAgICAgICAgICAgICAgZGF0YV9oYXNoICAgICAgICAgICAgPSA3OwogIGJ5dGVzICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yc19oYXNoICAgICAgPSA4OwogIGJ5dGVzICAgICAgICAgICAgICAgICAgICAgICAgbmV4dF92YWxpZGF0b3JzX2hhc2ggPSA5OwogIGJ5dGVzICAgICAgICAgICAgICAgICAgICAgICAgY29uc2Vuc3VzX2hhc2ggICAgICAgPSAxMDsKICBieXRlcyAgICAgICAgICAgICAgICAgICAgICAgIGFwcF9oYXNoICAgICAgICAgICAgID0gMTE7CiAgYnl0ZXMgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X3Jlc3VsdHNfaGFzaCAgICA9IDEyOwogIGJ5dGVzICAgICAgICAgICAgICAgICAgICAgICAgZXZpZGVuY2VfaGFzaCAgICAgICAgPSAxMzsKICBieXRlcyAgICAgICAgICAgICAgICAgICAgICAgIHByb3Bvc2VyX2FkZHJlc3MgICAgID0gMTQ7Cn0KCg=="}}),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"bWVzc2FnZSBEYXRhIHsKICByZXBlYXRlZCBieXRlcyB0eHMgPSAxOwp9Cg=="}}),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"bWVzc2FnZSBFdmlkZW5jZUxpc3QgewogIHJlcGVhdGVkIEV2aWRlbmNlIGV2aWRlbmNlID0gMTsKfQo="}}),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"bWVzc2FnZSBDb21taXQgewogIGludDY0ICAgICAgICAgICAgICBoZWlnaHQgICAgID0gMTsKICBpbnQzMiAgICAgICAgICAgICAgcm91bmQgICAgICA9IDI7CiAgQmxvY2tJRCAgICAgICAgICAgIGJsb2NrX2lkICAgPSAzOwogIHJlcGVhdGVkIENvbW1pdFNpZyBzaWduYXR1cmVzID0gNDsKfQo="}}),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"bWVzc2FnZSBDb21taXRTaWcgewogIEJsb2NrSURGbGFnICAgICAgICAgICAgICAgYmxvY2tfaWRfZmxhZyAgICAgPSAxOwogIGJ5dGVzICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yX2FkZHJlc3MgPSAyOwogIGdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAgdGltZXN0YW1wICAgICAgICAgPSAzOwogIGJ5dGVzICAgICAgICAgICAgICAgICAgICAgc2lnbmF0dXJlICAgICAgICAgPSA0Owp9Cg=="}}),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"bWVzc2FnZSBCbG9ja0lEIHsKICBieXRlcyAgICAgICAgIGhhc2ggICAgICAgICAgICA9IDE7CiAgUGFydFNldEhlYWRlciBwYXJ0X3NldF9oZWFkZXIgPSAyOwp9Cg=="}}),e._v(" "),o("h3",{attrs:{id:"on-tendermint-blocks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#on-tendermint-blocks"}},[e._v("#")]),e._v(" On Tendermint Blocks")]),e._v(" "),o("h4",{attrs:{id:"what-is-a-tendermint-block"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-tendermint-block"}},[e._v("#")]),e._v(" What is a Tendermint 'Block'?")]),e._v(" "),o("p",[e._v("A block is the structure produced as the result of an instance of the Tendermint\nconsensus algorithm. At its simplest, the 'block' can be represented as a Merkle\nroot hash of all of the data used to construct and produce the hash. Our current\nblock proto structure includes "),o("em",[e._v("far")]),e._v(" from all of the data used to produce the\nhashes included in the block.")]),e._v(" "),o("p",[e._v("It does not contain the full "),o("code",[e._v("AppState")]),e._v(", it does not contain the "),o("code",[e._v("ConsensusParams")]),e._v(",\nnor the "),o("code",[e._v("LastResults")]),e._v(", nor the "),o("code",[e._v("ValidatorSet")]),e._v(". Additionally, the layout of\nthe block structure is not inherently tied to this Merkle root hash. Different\nlayouts of the same set of data could trivially be used to construct the\nexact same hash. The thing we currently call the 'Block' is really just a view\ninto a subset of the data used to construct the root hash. Sections of the\nstructure can be modified as long as alternative methods exist to query and\nretrieve the constituent values.")]),e._v(" "),o("h4",{attrs:{id:"why-this-digression"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#why-this-digression"}},[e._v("#")]),e._v(" Why this digression?")]),e._v(" "),o("p",[e._v("This digression is aimed at informing what it means to consolidate 'fields' in the\n'block'. The discussion of what should be included in the block can be teased\napart into a few different lines of inquiry.")]),e._v(" "),o("ol",[o("li",[e._v("What values need to be included as part of the Merkle tree so that the\nconsensus algorithm can use proof-of-stake consensus to validate all of the\nproperties of the chain that we would like?")]),e._v(" "),o("li",[e._v("How can we create views of the data that can be easily retrieved, stored, and\nverified by the relevant protocols?")])]),e._v(" "),o("p",[e._v("These two concerns are intertwined at the moment as a result of how we store\nand propagate our data but they don't necessarily need to be. This document\nfocuses primarily on the first concern by suggesting fields that can be\ncompletely removed without any loss in the function of our consensus algorithm.")]),e._v(" "),o("p",[e._v("This document also suggests ways that we may update our storage and propagation\nmechanisms to better take advantage of Merkle tree nature of our data although\nthese are not its primary concern.")]),e._v(" "),o("h2",{attrs:{id:"discussion"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#discussion"}},[e._v("#")]),e._v(" Discussion")]),e._v(" "),o("h3",{attrs:{id:"data-to-consider-removing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#data-to-consider-removing"}},[e._v("#")]),e._v(" Data to consider removing")]),e._v(" "),o("p",[e._v("This section proposes a list of data that could be completely removed from the\nMerkle tree with no loss to the functionality of our consensus algorithm.")]),e._v(" "),o("p",[e._v("Where the change is possible but would hamper external protocols or make\ndebugging more difficult, that is noted in discussion.")]),e._v(" "),o("h4",{attrs:{id:"commitsig-timestamp"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#commitsig-timestamp"}},[e._v("#")]),e._v(" CommitSig.Timestamp")]),e._v(" "),o("p",[e._v("This field contains the timestamp included in the precommit message that was\nissued for the block. The field was once used to produce the timestamp of the block.\nWith the introduction of Proposer-Based Timestamps, This field is no longer used\nin any Tendermint algorithms and can be completely removed.")]),e._v(" "),o("h4",{attrs:{id:"commitsig-validatoraddress"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#commitsig-validatoraddress"}},[e._v("#")]),e._v(" CommitSig.ValidatorAddress")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("ValidatorAddress")]),e._v(" is included in each "),o("code",[e._v("CommitSig")]),e._v(" structure. This field\nis hashed along with all of the other fields of the "),o("code",[e._v("CommitSig")]),e._v("s in the block\nto form the "),o("code",[e._v("LastCommitHash")]),e._v(" field in the "),o("code",[e._v("Header")]),e._v(". The "),o("code",[e._v("ValidatorAddress")]),e._v(" is\nsomewhat redundant in the hash. Each validator has a unique position in the\n"),o("code",[e._v("CommitSig")]),e._v(" and the hash is built preserving this order. Therefore, the\ninformation of which signature corresponds to which validator is included in\nthe root hash, even if the address is absent.")]),e._v(" "),o("p",[e._v("It's worth noting that the validator address could still be included in the\n"),o("em",[e._v("hash")]),e._v(" even if it is absent from the "),o("code",[e._v("CommitSig")]),e._v(" structure in the block by\nsimply hashing it locally at each validator but not including it in the block.\nThe reverse is also true. It would be perfectly possible to not include the\n"),o("code",[e._v("ValidatorAddress")]),e._v(" data in the "),o("code",[e._v("LastCommitHash")]),e._v(" but still include the field in\nthe block.")]),e._v(" "),o("h4",{attrs:{id:"blockid-partsetheader"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#blockid-partsetheader"}},[e._v("#")]),e._v(" BlockID.PartSetHeader")]),e._v(" "),o("p",[e._v("The "),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/208a15dadf01e4e493c187d8c04a55a61758c3cc/types/block.go#L1090",target:"_blank",rel:"noopener noreferrer"}},[e._v("BlockID"),o("OutboundLink")],1),e._v(" field comprises the "),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/208a15dadf01e4e493c187d8c04a55a61758c3cc/types/part_set.go#L94",target:"_blank",rel:"noopener noreferrer"}},[e._v("PartSetHeader"),o("OutboundLink")],1),e._v(" and the hash of the block.\nThe "),o("code",[e._v("PartSetHeader")]),e._v(" is used by nodes to gossip the block by dividing it into\nparts. Nodes receive the "),o("code",[e._v("PartSetHeader")]),e._v(" from their peers, informing them of\nwhat pieces of the block to gather. There is no strong reason to include this\nvalue in the block. Validators will still be able to gossip and validate the\nblocks that they received from their peers using this mechanism even if it is\nnot written into the block. The "),o("code",[e._v("BlockID")]),e._v(" can therefore be consolidated into\njust the hash of the block. This is by far the most uncontroversial change\nand there appears to be no good reason "),o("em",[e._v("not")]),e._v(" to do it. Further evidence that\nthe field is not meaningful can be found in the fact that the field is not\nactually validated to ensure it is correct during block validation. Validation\nonly checks that the "),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/208a15dadf01e4e493c187d8c04a55a61758c3cc/types/part_set.go#L116",target:"_blank",rel:"noopener noreferrer"}},[e._v("field is well formed"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h4",{attrs:{id:"chainid"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#chainid"}},[e._v("#")]),e._v(" ChainID")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("ChainID")]),e._v(" is a string selected by the chain operators, usually a\nhuman-readable name for the network. This value is immutable for the lifetime\nof the chain and is defined in the genesis file. It is therefore hashed into the\noriginal block and therefore transitively included as in the Merkle root hash of\nevery block. The redundant field is a candidate for removal from the root hash\nof each block. However, aesthetically, it's somewhat nice to include in each\nblock, as if the block was 'stamped' with the ID. Additionally, re-validating\nthe value from genesis would be painful and require reconstituting potentially\nlarge chains. I'm therefore mildly in favor of maintaining this redundant\npiece of information. We pay almost no storage cost for maintaining this\nidentical data, so the only cost is in the time required to hash it into the\nstructure.")]),e._v(" "),o("h4",{attrs:{id:"lastresultshash"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#lastresultshash"}},[e._v("#")]),e._v(" LastResultsHash")]),e._v(" "),o("p",[o("code",[e._v("LastResultsHash")]),e._v(" is a hash covering the result of executing the transactions\nfrom the previous block. It covers the response "),o("code",[e._v("Code")]),e._v(", "),o("code",[e._v("Data")]),e._v(", "),o("code",[e._v("GasWanted")]),e._v(",\nand "),o("code",[e._v("GasUsed")]),e._v(" with the aim of ensuring that execution of all of the transactions\nwas performed identically on each node. The data covered by this field "),o("em",[e._v("should")]),e._v("\nbe also reflected in the "),o("code",[e._v("AppHash")]),e._v(". The "),o("code",[e._v("AppHash")]),e._v(" is provided by the application\nand should be deterministically calculated by each node. This field could\ntherefore be removed on the grounds that its data is already reflected elsewhere.")]),e._v(" "),o("p",[e._v("I would advocate for keeping this field. This field provides an additional check\nfor determinism across nodes. Logic to update the application hash is more\ncomplicated for developers to implement because it relies either on building a\ncomplete view of the state of the application data. The "),o("code",[e._v("Results")]),e._v(" returned by\nthe application contain simple response codes and deterministic data bytes.\nLeaving the field will allow for transaction execution issues that are not\ncorrectly reflected in the "),o("code",[e._v("AppHash")]),e._v(" to be more completely diagnosed.")]),e._v(" "),o("p",[e._v("Take the case of mismatch of "),o("code",[e._v("LastResultsHash")]),e._v(" between two nodes, A and B, where both\nnodes report divergent values. If "),o("code",[e._v("A")]),e._v(" and "),o("code",[e._v("B")]),e._v(" both report\nthe same "),o("code",[e._v("AppHash")]),e._v(", then some non-deterministic behavior occurred that was not\naccurately reflected in the "),o("code",[e._v("AppHash")]),e._v(". The issue caused by this\nnon-determinism may not show itself for several blocks, but catching the divergent\nstate earlier will improve the chances that a chain is able to recover.")]),e._v(" "),o("h4",{attrs:{id:"validatorshash"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#validatorshash"}},[e._v("#")]),e._v(" ValidatorsHash")]),e._v(" "),o("p",[e._v("Both "),o("code",[e._v("ValidatorsHash")]),e._v(" and "),o("code",[e._v("NextValidatorsHash")]),e._v(" are included in the block\nheader. "),o("code",[e._v("Validatorshash")]),e._v(" contains the hash of the "),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/29e5fbcc648510e4763bd0af0b461aed92c21f30/types/validator.go#L160",target:"_blank",rel:"noopener noreferrer"}},[e._v("public key and voting power"),o("OutboundLink")],1),e._v("\nof each validator in the active set for the current block and "),o("code",[e._v("NextValidatorsHash")]),e._v("\ncontains the same data but for the next height.")]),e._v(" "),o("p",[e._v("This data is effectively redundant. Having both values present in the block\nstructure is helpful for light client verification. The light client is able to\neasily determine if two sequential blocks used the same validator set by querying\nonly one header.")]),e._v(" "),o("p",[o("code",[e._v("ValidatorsHash")]),e._v(" is also important to the light client algorithm for performing block\nvalidation. The light client uses this field to ensure that the validator set\nit fetched from a full node is correct. It can be sure of the correctness of\nthe retrieved structure by hashing it and checking the hash against the "),o("code",[e._v("ValidatorsHash")]),e._v("\nof the block it is verifying. Because a validator that the light client trusts\nsigned over the "),o("code",[e._v("ValidatorsHash")]),e._v(", it can be certain of the validity of the\nstructure. Without this check, phony validator sets could be handed to the light\nclient and the code tricked into believing a different validator set was present\nat a height, opening up a major hole in the light client security model.")]),e._v(" "),o("p",[e._v("This creates a recursive problem. To verify the validator set that signed the\nblock at height "),o("code",[e._v("H")]),e._v(", what information do we need? We could fetch the\n"),o("code",[e._v("NextValidatorsHash")]),e._v(" from height "),o("code",[e._v("H-1")]),e._v(", but how do we verify that that hash is correct?")]),e._v(" "),o("h4",{attrs:{id:"proposeraddress"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#proposeraddress"}},[e._v("#")]),e._v(" ProposerAddress")]),e._v(" "),o("p",[e._v("The section below details a change to allow the "),o("code",[e._v("ProposerAddress")]),e._v(" to be calculated\nfrom a field added to the block. This would allow the "),o("code",[e._v("Address")]),e._v(" to be dropped\nfrom the block. Consumers of the chain could run the proposer selection "),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/208a15dadf01e4e493c187d8c04a55a61758c3cc/spec/consensus/proposer-selection.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("algorithm"),o("OutboundLink")],1),e._v("\nto determine who proposed each block.")]),e._v(" "),o("p",[e._v("I would advocate against this. Any consumer of the chain that wanted to\nknow which validator proposed a block would have to run the proposer selection\nalgorithm. This algorithm is not widely implemented, meaning that consumers\nin other languages would need to implement the algorithm to determine a piece\nof basic information about the chain.")]),e._v(" "),o("h3",{attrs:{id:"data-to-consider-adding"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#data-to-consider-adding"}},[e._v("#")]),e._v(" Data to consider adding")]),e._v(" "),o("h4",{attrs:{id:"proofoflockround"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#proofoflockround"}},[e._v("#")]),e._v(" ProofOfLockRound")]),e._v(" "),o("p",[e._v("The "),o("em",[e._v("proof of lock round")]),e._v(" is the round of consensus for a height in which the\nTendermint algorithm observed a super majority of voting power on the network for\na block.")]),e._v(" "),o("p",[e._v("Including this value in the block will allow validation of currently\nun-validated metadata. Specifically, including this value will allow Tendermint\nto validate that the "),o("code",[e._v("ProposerAddress")]),e._v(" in the block is correct. Without knowing\nthe locked round number, Tendermint cannot calculate which validator was supposed\nto propose a height. Because of this, our "),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/29e5fbcc648510e4763bd0af0b461aed92c21f30/internal/state/validation.go#L102",target:"_blank",rel:"noopener noreferrer"}},[e._v("validation logic"),o("OutboundLink")],1),e._v(" does not check that\nthe "),o("code",[e._v("ProposerAddress")]),e._v(" included in the block corresponds to the validator that\nproposed the height. Instead, the validation logic simply checks that the value\nis an address of one of the known validators.")]),e._v(" "),o("p",[e._v("Currently, we maintain the "),o("em",[e._v("committed round")]),e._v(" in the "),o("code",[e._v("Commit")]),e._v(" for height "),o("code",[e._v("H")]),e._v(", which is\nwritten into the block at height "),o("code",[e._v("H+1")]),e._v(". This value corresponds to the round in\nwhich the proposer of height "),o("code",[e._v("H+1")]),e._v(" received the commit for height "),o("code",[e._v("H")]),e._v(". The proof\nof lock round would not subsume this value.")]),e._v(" "),o("h3",{attrs:{id:"additional-possible-updates"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#additional-possible-updates"}},[e._v("#")]),e._v(" Additional possible updates")]),e._v(" "),o("h4",{attrs:{id:"updates-to-storage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#updates-to-storage"}},[e._v("#")]),e._v(" Updates to storage")]),e._v(" "),o("p",[e._v("Currently we store the "),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/59f0236b845c83009bffa62ed44053b04370b8a9/internal/store/store.go#L490",target:"_blank",rel:"noopener noreferrer"}},[e._v("every piece of each block"),o("OutboundLink")],1),e._v(" in the "),o("code",[e._v("BlockStore")]),e._v(".\nI suspect that this has lead to some mistakes in reasoning around the merits of\nconsolidating fields in the block. We could update the storage scheme we use to\nstore only some pieces of each block and still achieve a space savings without having\nto change the block structure at all.")]),e._v(" "),o("p",[e._v("The main way to achieve this would be by "),o("em",[e._v("no longer saving data that does not change")]),e._v(".\nAt each height we save a set of data that is unlikely to have changed from the\nprevious height in the block structure, this includes the "),o("code",[e._v("ValidatorAddress")]),e._v("es,\nthe "),o("code",[e._v("ValidatorsHash")]),e._v(", the "),o("code",[e._v("ChainID")]),e._v(". These do not need to be saved along with\n"),o("em",[e._v("each")]),e._v(" block. We could easily save the value and the height at which the value\nwas updated and construct each block using the data that existed at the time.")]),e._v(" "),o("p",[e._v("This document does not make any specific recommendations around storage since\nthat is likely to change with upcoming improvements to to the database infrastructure.\nHowever, it's important to note that removing fields from the block for the\npurposes of 'saving space' may not be that meaningful. We should instead focus\nour attention of removing fields from the block that are no longer needed\nfor correct functioning of the protocol.")]),e._v(" "),o("h4",{attrs:{id:"updates-to-propagation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#updates-to-propagation"}},[e._v("#")]),e._v(" Updates to propagation")]),e._v(" "),o("p",[e._v("Block propagation suffers from the same issue that plagues block storage, we\npropagate all of the contents of each block proto "),o("em",[e._v("even when these contents are redundant\nor unchanged from previous blocks")]),e._v(". For example, we propagate the "),o("code",[e._v("ValidatorAddress")]),e._v("es\nfor each block in the "),o("code",[e._v("CommitSig")]),e._v(" structure even when it never changed from a\nprevious height. We could achieve a speed-up in many cases by communicating the\nhashes "),o("em",[e._v("first")]),e._v(" and letting peers request additional information when they do not\nrecognize the communicated hash.")]),e._v(" "),o("p",[e._v("For example, in the case of the "),o("code",[e._v("ValidatorAddress")]),e._v("es, the node would first\ncommunicate the "),o("code",[e._v("ValidatorsHash")]),e._v(" of the block to its peers. The peers would\ncheck their storage for a validator set matching the provided hash. If the peer\nhas a matching set, it would populate its local block structure with the\nappropriate values from its store. If peer did not have a matching set, it would\nissue a request to its peers, either via P2P or RPC for the data it did not have.")]),e._v(" "),o("p",[e._v("Conceptually, this is very similar to how content addressing works in protocols\nsuch as git where pushing a commit does not require pushing the entire contents\nof the tree referenced by the commit.")]),e._v(" "),o("h3",{attrs:{id:"impact-on-light-clients"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#impact-on-light-clients"}},[e._v("#")]),e._v(" Impact on light clients")]),e._v(" "),o("p",[e._v("As outlined in the section "),o("a",{attrs:{href:"#on-tendermint-blocks"}},[e._v("On Tendermint Blocks")]),e._v(", there\nis a distinction between what data is referenced in the Merkle root hash and the\ncontents of the proto structure we currently call the "),o("code",[e._v("Block")]),e._v(".")]),e._v(" "),o("p",[e._v("Any changes to the Merkle root hash will necessarily be breaking for legacy light clients.\nEither a soft-upgrades scheme will need to be implemented or a hard fork will\nbe required for chains and light clients to function with the new hashes.\nThis means that all of the additions and deletions from the Merkle root hash\nproposed by this document will be light client breaking.")]),e._v(" "),o("p",[e._v("Changes to the block structure alone are not necessarily light client breaking if the\ndata being hashed are identical and legacy views into the data are provided\nfor old light clients during transitions. For example, a newer version of the\nblock structure could move the "),o("code",[e._v("ValidatorAddress")]),e._v(" field to a different field\nin the block while still including it in the hashed data of the "),o("code",[e._v("LastCommitHash")]),e._v(".\nAs long as old light clients could still fetch the old data structure, then\nthis would not be light client breaking.")]),e._v(" "),o("h2",{attrs:{id:"references"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);