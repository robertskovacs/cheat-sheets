import{_ as e,o as a,c as t,d as i}from"./app.013e88f7.js";const r={},n=i(`<h1 id="\u{1F407}-rabbitmq" tabindex="-1"><a class="header-anchor" href="#\u{1F407}-rabbitmq" aria-hidden="true">#</a> \u{1F407} RabbitMQ</h1><h2 id="rabbitmq-instance-with-docker" tabindex="-1"><a class="header-anchor" href="#rabbitmq-instance-with-docker" aria-hidden="true">#</a> RabbitMQ Instance with Docker</h2><p>First, let\u2019s pull the RabbitMQ docker image</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker pull rabbitmq:3-management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Map port 15672 for the management web app and port 5672 for the message broker</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker run --rm -it -p 15672:15672 -p 5672:5672 rabbitmq:3-management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Management Web app: http://localhost:15672</li><li>Username: <code>guest</code></li><li>Password: <code>guest</code></li></ul>`,7),d=[n];function s(c,l){return a(),t("div",null,d)}const m=e(r,[["render",s],["__file","index.html.vue"]]);export{m as default};
