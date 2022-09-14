
var obj = JSON.parse($response.body);
obj = {
	"user_subscription": {
		"user_id": 20167004,
		"subscription_code": "VSCOANNUAL",
		"sku": "VSCOANNUAL",
		"expired": false,
		"starts_on_sec": null,
		"expires_on_sec": null,
		"last_verified_sec": 1566463819,
		"canceled_at_sec": null,
		"source": 1,
		"payment_type": 4,
		"invalid_reason": 2,
		"is_active": true,
		"is_in_grace_period": false
	},
	"created_at": "2019-10-21T21:22:39.719371376Z"
};

$done({body: JSON.stringify(obj)});

// Testing...
