var body = $response.body;
let obj = JSON.parse(body);

	obj.user.subscription["isSubscriptionActive"] = true;
	obj.user.subscription["entitlement"] = ["OVER_PRO"];
	body = JSON.stringify(obj);

$done({body});

// test vip Over by Tiny.
// https://api.overhq.com/user/token/refresh
// https://api.overhq.com/subscription/verifyReceipt
