// If the hostname matches buy.itunes.apple.com or www.buy.itunes.apple.com
// send direct to the Internet.
 
if (dnsDomainIs(host, "buy.itunes.apple.com") || dnsDomainIs(host, "www.buy.itunes.apple.com"))
    return "PROXY 34.68.164.252:8888";
