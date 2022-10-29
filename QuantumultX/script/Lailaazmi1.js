[General]
allow-udp-proxy=true
bypass-tun=10.0.0.0/8,100.64.0.0/10,127.0.0.0/8,169.254.0.0/16,172.16.0.0/12,192.0.0.0/24,192.0.2.0/24,192.88.99.0/24,192.168.0.0/16,198.18.0.0/15,198.51.100.0/24,203.0.113.0/24,224.0.0.0/4,255.255.255.255/32
dns-server=system,119.29.29.29,223.5.5.5
host=127.0.0.1
skip-proxy=192.168.0.0/16,10.0.0.0/8,172.16.0.0/12,localhost,*.local,e.crashlynatics.com

[Proxy]
-KR&093 = trojan,jjkk.usdeth.top,443,977b33b5-6aa7-4c55-bc17-9fdf8028e728,tls-name:jjkk.usdeth.top,skip-cert-verify:1

[Remote Proxy]

[Proxy Group]
🔰 节点选择 = select,♻️ 自动选择,🎯 全球直连,-KR&093
♻️ 自动选择 = url-test,-KR&093,url=http://www.gstatic.com/generate_204,interval=300
🎥 NETFLIX = select,🔰 节点选择,♻️ 自动选择,🎯 全球直连,-KR&093
⛔️ 广告拦截 = select,🛑 全球拦截,🎯 全球直连,🔰 节点选择
🚫 运营劫持 = select,🛑 全球拦截,🎯 全球直连,🔰 节点选择
🌍 国外媒体 = select,🔰 节点选择,♻️ 自动选择,🎯 全球直连,-KR&093
🌏 国内媒体 = select,🎯 全球直连,🔰 节点选择
Ⓜ️ 微软服务 = select,🎯 全球直连,🔰 节点选择,-KR&093
📲 电报信息 = select,🔰 节点选择,🎯 全球直连,-KR&093
🍎 苹果服务 = select,🔰 节点选择,🎯 全球直连,♻️ 自动选择,-KR&093
🎯 全球直连 = select,DIRECT
🛑 全球拦截 = select,REJECT,DIRECT
🐟 漏网之鱼 = select,🔰 节点选择,🎯 全球直连,♻️ 自动选择,-KR&093

[Rule]
GEOIP,CN,🎯 全球直连
FINAL,🐟 漏网之鱼

[Remote Rule]
https://pub-api-1.bianyuan.xyz/getruleset?type=1&url=c3VyZ2U6cnVsZXMvTG9jYWxBcmVhTmV0d29yay5saXN0,🎯 全球直连
https://pub-api-1.bianyuan.xyz/getruleset?type=1&url=c3VyZ2U6cnVsZXMvTVNTZXJ2aWNlcy5saXN0,Ⓜ️ 微软服务
https://pub-api-1.bianyuan.xyz/getruleset?type=1&url=c3VyZ2U6cnVsZXMvRGl2aW5lRW5naW5lL1N1cmdlL1J1bGVzZXQvVW5icmVhay5saXN0,🎯 全球直连
https://pub-api-1.bianyuan.xyz/getruleset?type=1&url=c3VyZ2U6cnVsZXMvTm9ieURhL1N1cmdlL0FkUnVsZS5saXN0,🛑 全球拦截
https://pub-api-1.bianyuan.xyz/getruleset?type=1&url=c3VyZ2U6cnVsZXMvRGl2aW5lRW5naW5lL1N1cmdlL1J1bGVzZXQvR3VhcmQvSGlqYWNraW5nLmxpc3Q,🛑 全球拦截
https://pub-api-1.bianyuan.xyz/getruleset?type=1&url=c3VyZ2U6cnVsZXMvRGl2aW5lRW5naW5lL1N1cmdlL1J1bGVzZXQvU3RyZWFtaW5nTWVkaWEvVmlkZW8vTmV0ZmxpeC5saXN0,🎥 NETFLIX
https://pub-api-1.bianyuan.xyz/getruleset?type=1&url=c3VyZ2U6cnVsZXMvRGl2aW5lRW5naW5lL1N1cmdlL1J1bGVzZXQvU3RyZWFtaW5nTWVkaWEvU3RyZWFtaW5nLmxpc3Q,🌍 国外媒体
https://pub-api-1.bianyuan.xyz/getruleset?type=1&url=c3VyZ2U6cnVsZXMvbGhpZTEvU3VyZ2UvU3VyZ2UgMy9Qcm92aWRlci9NZWRpYS9CaWxpYmlsaS5saXN0,🌏 国内媒体
https://pub-api-1.bianyuan.xyz/getruleset?type=1&url=c3VyZ2U6cnVsZXMvbGhpZTEvU3VyZ2UvU3VyZ2UgMy9Qcm92aWRlci9NZWRpYS9pUWl5aS5saXN0,🌏 国内媒体
https://pub-api-1.bianyuan.xyz/getruleset?type=1&url=c3VyZ2U6cnVsZXMvbGhpZTEvU3VyZ2UvU3VyZ2UgMy9Qcm92aWRlci9NZWRpYS9MZXR2Lmxpc3Q,🌏 国内媒体
https://pub-api-1.bianyuan.xyz/getruleset?type=1&url=c3VyZ2U6cnVsZXMvbGhpZTEvU3VyZ2UvU3VyZ2UgMy9Qcm92aWRlci9NZWRpYS9NT08ubGlzdA,🌏 国内媒体
https://pub-api-1.bianyuan.xyz/getruleset?type=1&url=c3VyZ2U6cnVsZXMvbGhpZTEvU3VyZ2UvU3VyZ2UgMy9Qcm92aWRlci9NZWRpYS9UZW5jZW50IFZpZGVvLmxpc3Q,🌏 国内媒体
https://pub-api-1.bianyuan.xyz/getruleset?type=1&url=c3VyZ2U6cnVsZXMvbGhpZTEvU3VyZ2UvU3VyZ2UgMy9Qcm92aWRlci9NZWRpYS9Zb3VrdS5saXN0,🌏 国内媒体
https://pub-api-1.bianyuan.xyz/getruleset?type=1&url=c3VyZ2U6cnVsZXMvRGl2aW5lRW5naW5lL1N1cmdlL1J1bGVzZXQvRXh0cmEvVGVsZWdyYW0vVGVsZWdyYW0ubGlzdA,📲 电报信息
https://pub-api-1.bianyuan.xyz/getruleset?type=1&url=c3VyZ2U6cnVsZXMvRGl2aW5lRW5naW5lL1N1cmdlL1J1bGVzZXQvR2xvYmFsLmxpc3Q,🔰 节点选择
https://pub-api-1.bianyuan.xyz/getruleset?type=1&url=c3VyZ2U6cnVsZXMvRGl2aW5lRW5naW5lL1N1cmdlL1J1bGVzZXQvRXh0cmEvQXBwbGUvQXBwbGUubGlzdA,🍎 苹果服务
https://pub-api-1.bianyuan.xyz/getruleset?type=1&url=c3VyZ2U6cnVsZXMvRGl2aW5lRW5naW5lL1N1cmdlL1J1bGVzZXQvQ2hpbmEubGlzdA,🎯 全球直连
https://pub-api-1.bianyuan.xyz/getruleset?type=1&url=c3VyZ2U6cnVsZXMvTm9ieURhL1N1cmdlL0Rvd25sb2FkLmxpc3Q,🎯 全球直连

[URL Rewrite]
enable=true
^https?:\/\/(www.)?(g|google)\.cn https://www.google.com 302

[Remote Rewrite]
https://raw.githubusercontent.com/Loon0x00/LoonExampleConfig/master/Rewrite/AutoRewrite_Example.list,auto

[MITM]
enable=true
hostname=*.example.com,*.sample.com
skip-server-cert-verify=true
