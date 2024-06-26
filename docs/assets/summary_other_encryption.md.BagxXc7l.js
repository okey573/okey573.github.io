import{_ as t,c as e,o as n,a4 as r}from"./chunks/framework.CbHUKvme.js";const p=JSON.parse('{"title":"加密算法","description":"","frontmatter":{"title":"加密算法"},"headers":[],"relativePath":"summary/other/encryption.md","filePath":"summary/other/encryption.md","lastUpdated":1719405336000}'),l={name:"summary/other/encryption.md"},a=r('<h1 id="加密算法" tabindex="-1">加密算法 <a class="header-anchor" href="#加密算法" aria-label="Permalink to &quot;加密算法&quot;">​</a></h1><p>加密算法分 <strong>对称加密</strong> 和 <strong>非对称加密</strong>，其中对称加密算法的加密与解密 密钥相同，非对称加密算法的加密密钥与解密 密钥不同，此外，还有一类 不需要密钥 的 <strong>散列算法</strong>。</p><h2 id="对称加密算法" tabindex="-1">对称加密算法 <a class="header-anchor" href="#对称加密算法" aria-label="Permalink to &quot;对称加密算法&quot;">​</a></h2><p><strong>对称加密算法</strong> 是应用较早的加密算法，又称为 <strong>共享密钥加密算法</strong>。在 对称加密算法 中，使用的密钥只有一个，发送 和 接收 双方都使用这个密钥对数据进行 加密 和 解密。这就要求加密和解密方事先都必须知道加密的密钥。</p><ol><li><p>数据加密过程：在对称加密算法中，数据发送方 将 明文 (原始数据) 和 加密密钥 一起经过特殊 加密处理，生成复杂的 加密密文 进行发送。</p></li><li><p>数据解密过程：数据接收方 收到密文后，若想读取原数据，则需要使用 加密使用的密钥 及相同算法的 逆算法 对加密的密文进行解密，才能使其恢复成 可读明文。</p></li></ol><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">密钥名称</th><th style="text-align:center;">运行速度</th><th style="text-align:center;">安全性</th><th style="text-align:center;">资源消耗</th></tr></thead><tbody><tr><td style="text-align:center;">DES</td><td style="text-align:center;">56位</td><td style="text-align:center;">较快</td><td style="text-align:center;">低</td><td style="text-align:center;">中</td></tr><tr><td style="text-align:center;">3DES</td><td style="text-align:center;">112位或168位</td><td style="text-align:center;">慢</td><td style="text-align:center;">中</td><td style="text-align:center;">高</td></tr><tr><td style="text-align:center;">AES</td><td style="text-align:center;">128、192、256位</td><td style="text-align:center;">快</td><td style="text-align:center;">高</td><td style="text-align:center;">低</td></tr></tbody></table><h2 id="非对称加密算法" tabindex="-1">非对称加密算法 <a class="header-anchor" href="#非对称加密算法" aria-label="Permalink to &quot;非对称加密算法&quot;">​</a></h2><p><strong>非对称加密算法</strong>，又称为 <strong>公开密钥加密算法</strong>。它需要两个密钥，一个称为 公开密钥 (public key)，即 公钥，另一个称为 私有密钥 (private key)，即 私钥。</p><p>因为 <strong>加密</strong> 和 <strong>解密</strong> 使用的是两个不同的密钥，所以这种算法称为 非对称加密算法。</p><ol><li><p>如果使用 <strong>公钥</strong> 对数据 进行加密，只有用对应的 <strong>私钥</strong> 才能 进行解密。</p></li><li><p>如果使用 <strong>私钥</strong> 对数据 进行加密，只有用对应的 <strong>公钥</strong> 才能 进行解密。</p></li></ol><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">成熟度</th><th style="text-align:center;">安全性</th><th style="text-align:center;">运算速度</th><th style="text-align:center;">资源消耗</th></tr></thead><tbody><tr><td style="text-align:center;">RSA</td><td style="text-align:center;">高</td><td style="text-align:center;">高</td><td style="text-align:center;">中</td><td style="text-align:center;">中</td></tr><tr><td style="text-align:center;">ECC</td><td style="text-align:center;">高</td><td style="text-align:center;">高</td><td style="text-align:center;">慢</td><td style="text-align:center;">高</td></tr></tbody></table><h2 id="线性散列加密算法" tabindex="-1">线性散列加密算法 <a class="header-anchor" href="#线性散列加密算法" aria-label="Permalink to &quot;线性散列加密算法&quot;">​</a></h2><p><strong>线性散列加密算法</strong> 不需要秘钥，只生成一串不可逆的密文，经常用其效验数据传输过程中是否经过修改，因为相同的生成算法对于同一明文只会生成唯一的密文</p><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">安全性</th><th style="text-align:center;">速度</th></tr></thead><tbody><tr><td style="text-align:center;">SHA-1</td><td style="text-align:center;">高</td><td style="text-align:center;">慢</td></tr><tr><td style="text-align:center;">MD5</td><td style="text-align:center;">中</td><td style="text-align:center;">快</td></tr></tbody></table>',14),s=[a];function d(i,o,c,g,h,y){return n(),e("div",null,s)}const _=t(l,[["render",d]]);export{p as __pageData,_ as default};
