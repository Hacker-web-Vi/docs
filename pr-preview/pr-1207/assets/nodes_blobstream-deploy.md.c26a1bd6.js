import{_ as e,o as s,c as a,Q as t}from"./chunks/framework.f1446dd9.js";const m=JSON.parse('{"title":"Deploy the Blobstream contract","description":"Learn how to deploy the Blobstream smart contract.","frontmatter":{"sidebar_label":"Deploy the Blobstream contract","description":"Learn how to deploy the Blobstream smart contract.","head":[["meta",{"name":"og:title","content":"Deploy the Blobstream contract | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/blobstream-deploy.md","filePath":"nodes/blobstream-deploy.md","lastUpdated":1698443824000}'),o={name:"nodes/blobstream-deploy.md"},n=t(`<h1 id="deploy-the-blobstream-contract" tabindex="-1">Deploy the Blobstream contract <a class="header-anchor" href="#deploy-the-blobstream-contract" aria-label="Permalink to &quot;Deploy the Blobstream contract&quot;">​</a></h1><p>The <code>deploy</code> is a helper command that allows deploying the Blobstream smart contract to a new EVM chain:</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream deploy --help</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Deploys the Blobstream contract and initializes it using the provided Celestia chain</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Usage:</span></span>
<span class="line"><span style="color:#e1e4e8;">  blobstream deploy &lt;flags&gt; [flags]</span></span>
<span class="line"><span style="color:#e1e4e8;">  blobstream deploy [command]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Available Commands:</span></span>
<span class="line"><span style="color:#e1e4e8;">  keys        Blobstream keys manager</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream deploy --help</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Deploys the Blobstream contract and initializes it using the provided Celestia chain</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Usage:</span></span>
<span class="line"><span style="color:#24292e;">  blobstream deploy &lt;flags&gt; [flags]</span></span>
<span class="line"><span style="color:#24292e;">  blobstream deploy [command]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Available Commands:</span></span>
<span class="line"><span style="color:#24292e;">  keys        Blobstream keys manager</span></span></code></pre></div><h2 id="how-to-run" tabindex="-1">How to run <a class="header-anchor" href="#how-to-run" aria-label="Permalink to &quot;How to run&quot;">​</a></h2><h3 id="install-the-blobstream-binary" tabindex="-1">Install the Blobstream binary <a class="header-anchor" href="#install-the-blobstream-binary" aria-label="Permalink to &quot;Install the Blobstream binary&quot;">​</a></h3><p>Make sure to have the Blobstream binary installed. Check <a href="https://docs.celestia.org/nodes/blobstream-binary" target="_blank" rel="noreferrer">the Blobstream binary page</a> for more details.</p><h3 id="add-keys" tabindex="-1">Add keys <a class="header-anchor" href="#add-keys" aria-label="Permalink to &quot;Add keys&quot;">​</a></h3><p>In order to deploy a Blobstream smart contract, you will need a funded EVM address and its private key. The <code>keys</code> command will help you set up this key:</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream deploy keys  --help</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream deploy keys  --help</span></span></code></pre></div><p>To import your EVM private key, there is the <code>import</code> subcommand to assist you with that:</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream deploy keys evm import --help</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream deploy keys evm import --help</span></span></code></pre></div><p>This subcommand allows you to either import a raw ECDSA private key provided as plaintext, or import it from a file. The files are JSON keystore files encrypted using a passphrase like in <a href="https://geth.ethereum.org/docs/developers/dapp-developer/native-accounts" target="_blank" rel="noreferrer">this example</a>.</p><p>After adding the key, you can check that it&#39;s added via running:</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream deploy keys evm list</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream deploy keys evm list</span></span></code></pre></div><p>For more information about the <code>keys</code> command, check <a href="https://docs.celestia.org/nodes/blobstream-keys" target="_blank" rel="noreferrer">the <code>keys</code> documentation</a>.</p><h3 id="deploy-the-contract" tabindex="-1">Deploy the contract <a class="header-anchor" href="#deploy-the-contract" aria-label="Permalink to &quot;Deploy the contract&quot;">​</a></h3><p>Now, we can deploy the Blobstream contract to a new EVM chain:</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream deploy \\</span></span>
<span class="line"><span style="color:#e1e4e8;">  --evm.chain-id 4 \\</span></span>
<span class="line"><span style="color:#e1e4e8;">  --evm.contract-address 0x27a1F8CE94187E4b043f4D57548EF2348Ed556c7 \\</span></span>
<span class="line"><span style="color:#e1e4e8;">  --core.grpc.host localhost \\</span></span>
<span class="line"><span style="color:#e1e4e8;">  --core.grpc.port 9090 \\</span></span>
<span class="line"><span style="color:#e1e4e8;">  --starting-nonce latest \\</span></span>
<span class="line"><span style="color:#e1e4e8;">  --evm.rpc http://localhost:8545</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream deploy \\</span></span>
<span class="line"><span style="color:#24292e;">  --evm.chain-id 4 \\</span></span>
<span class="line"><span style="color:#24292e;">  --evm.contract-address 0x27a1F8CE94187E4b043f4D57548EF2348Ed556c7 \\</span></span>
<span class="line"><span style="color:#24292e;">  --core.grpc.host localhost \\</span></span>
<span class="line"><span style="color:#24292e;">  --core.grpc.port 9090 \\</span></span>
<span class="line"><span style="color:#24292e;">  --starting-nonce latest \\</span></span>
<span class="line"><span style="color:#24292e;">  --evm.rpc http://localhost:8545</span></span></code></pre></div><p>The <code>latest</code> can be replaced by the following:</p><ul><li><code>latest</code>: to deploy the Blobstream contract starting from the latest validator set.</li><li><code>earliest</code>: to deploy the Blobstream contract starting from genesis.</li><li><code>nonce</code>: you can provide a custom nonce on where you want Blobstream to start. If the provided nonce is not a <code>Valset</code> attestation, then the one before it will be used to deploy the Blobstream smart contract.</li></ul><p>And, now you will see the Blobstream smart contract address in the logs along with the transaction hash.</p>`,21),l=[n];function p(r,c,i,d,h,y){return s(),a("div",null,l)}const g=e(o,[["render",p]]);export{m as __pageData,g as default};
