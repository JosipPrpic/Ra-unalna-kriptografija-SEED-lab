
### Step 1: Download a certificate from a real web server
## command for moj.tvz.hr cert:

`$ openssl s_client -connect moj.tvz.hr:443 -showcerts`
----------------------------------------------------------------------------
### Step 2: Extract the public key (e,n) from the issuer’s certificate.
## cert issuer: 


- komanda: 
`$ openssl x509 -in issuer_cert.pem -pubkey -noout > issuer_public_key.pem     `

će ispisati potrebne stvari u issuer_public_key.pem file, te se iz njega može izvaditi (e, n) pomoću komande: 

`openssl rsa -pubin -inform PEM -text -noout < issuer_public_key.pem`

Rezultat:
```
Modulus (n): 00:a5:88:62:d5:a1:22:3e:c8:3d:64:a4:4c:03:0f:50:af:c3:2d:86:ca:fa:47:6d:15:49:f1:5e:87:b4:e0:c2:d2:d0:8b:a4:52:44:b3:a1:e2:8a:f8:10:c1:bf:d6:d8:7c:96:28:ef:ef:19:c1:31:56:64:4f:2b:05:88:f9:93:3e:22:ce:7e:fc:fe:43:03:b5:37:08:ef:81:8f:89:ae:ce:df:4a:85:40:fd:34:24:5f:37:31:bb:84:e5:dd:61:e2:fa:a2:66:28:b2:55:bb:f2:4e:b8:7b:9d:ea:63:a9:2d:69:08:6e:13:83:4b:33:b1:00:d2:76:e0:81:8f:c7:d8:78:39:70:f2:cb:af:f7:e3:67:84:e9:43:d7:0a:d2:7c:03:37:ae:99:31:ba:0d:fb:f9:29:5c:76:e2:50:85:4c:65:33:1d:40:7e:8f:e8:34:95:22:a0:fd:27:f5:3b:38:02:6a:32:55:f5:e9:e6:67:ff:38:c9:d8:78:f3:03:e9:ea:f6:d6:7f:51:f4:3b:74:5d:dc:b8:69:31:25:67:4e:a1:53:2c:a6:52:6d:07:8b:73:1f:e5:f4:33:8a:65:f0:42:0b:d8:21:5b:1b:20:4e:a5:bd:81:0e:ef:dd:3d:da:21:f4:9a:54:2f:6b:9f:05:71:3b:45:63:98:37:4f:14:d6:dd:a3:19:e1:d3:36:30:7f:8e:67:57:54:10:82:94:70:64:9f:77:c9:67:9d:86:9e:1c:87:56:ba:02:3c:2a:b3:ec:2f:e2:66:73:98:14:a3:a2:fb:55:d2:62:b0:77:e0:90:6d:24:e8:6a:51:14:3f:84:1e:26:ae:14:77:3e:56:36:63:4c:23:83:98:3f:a7:20:ae:79:49:e7:46:9a:d0:36:4f:94:9a:ab:29:03:c6:2f:af:4a:41:0c:f5:d9:68:31:be:10:ae:55:4e:f4:cb:a6:56:00:fa:29:05:ad:72:91:bb:2d:b6:92:f1:00:36:6b:7b:97:07:e7:bd:e5:22:e2:c7:76:3c:7b:36:3a:58:21:74:71:db:e4:09:51:19:d7:da:ac:77:ed:e6:48:c5:85:f3:f2:08:0c:fb:05:c7:e9:10:db:53:75:76:a3:90:cf:eb:b8:57:3c:74:80:6c:0f:a9:d2:8a:e3:02:87:29:93:6a:2c:c4:72:a8:35:21:37:2c:28:cd:c7:c5:95:77:19:d7:be:e4:36:f2:d2:9d:68:ae:bd:92:77:e6:dd:b0:7b:c6:97:5f:b0:d3:53:3c:7f:44:95:c8:ec:71:66:71:a5:e6:79:22:28:fc:97:2a:c2:1b:5c:f4:bd:25:ad:48:1b:20:4a:75:32:1b
```

Public Exponent (e): `65537 (0x10001)`

----------------------------------------------------------------------------
### Step 3: Extract the signature from the server’s certificate.

komanda: `openssl x509 -in issuer_cert.pem -text -noout`

komanda će ispisati sadržaj certa u text formatu. Signature se nalazi pod "Signature Value" sekcijom:
```
52:d9:42:dd:ed:31:8f:fd:41:31:f3:e1:75:08:54:5d:e2:e3:
6f:4c:69:f1:41:36:f2:4c:d6:13:9c:43:cc:62:9b:7c:68:27:
ad:3d:91:97:0e:60:2c:8c:7e:fd:c3:55:ad:a7:7f:ff:e3:2b:
a5:3a:69:32:5c:6a:e7:d0:2c:5d:86:56:df:14:5a:b2:bb:e4:
8c:67:cd:47:7b:ed:ff:54:40:97:c8:88:df:59:46:84:88:3a:
75:f2:17:e4:de:1e:b0:b9:2b:41:e3:7c:1e:2c:87:28:7e:a4:
86:6e:3d:eb:a2:24:55:5b:67:c7:3e:42:81:43:ea:11:89:f8:
79:0f:b8:79:e1:12:ad:60:61:02:a5:da:8a:fe:c7:46:fa:6c:
77:02:d8:7a:40:21:9e:b9:46:a6:2a:19:fc:22:48:4f:63:d3:
4f:17:fe:18:73:3a:72:e5:27:36:a7:54:cd:fb:eb:42:00:3c:
92:dd:7f:01:25:f1:da:87:7f:33:e7:3c:9e:52:6a:ac:6c:f6:
f6:5a:c9:bd:e2:4e:48:43:17:d1:cf:ed:b3:4d:96:86:c7:cc:
86:46:1a:e9:7b:a3:51:92:e6:bd:1d:44:ab:4f:2b:e3:cf:c4:
67:89:7e:b7:92:f8:c2:dd:03:57:c5:5a:3d:bb:04:04:5d:44:
38:5a:73:fd:84:b6:1f:a9:92:c1:c1:5a:34:96:e7:62:aa:89:
1c:8b:e6:dc:f2:c9:1e:41:66:12:82:d7:45:5a:d0:5d:d0:93:
fb:7c:20:05:f8:14:ea:17:82:57:90:98:07:3f:d8:92:b7:56:
11:2e:ed:8a:24:fc:b1:55:03:a9:79:95:95:3b:1b:89:13:62:
c8:bb:36:6e:61:16:58:55:25:ef:a8:d5:88:82:68:83:97:e8:
9e:01:2a:37:78:cb:20:64:c6:fe:65:eb:25:3d:54:cb:29:88:
72:86:e7:20:6a:db:c3:04:55:cf:f9:a9:15:0a:34:bc:16:08:
8b:59:36:4e:15:61:d0:3c:7c:f0:16:c5:f5:88:8f:f3:87:5d:
f0:59:27:e7:06:c4:e8:5c:57:60:9d:bc:ee:a7:d1:4e:09:a1:
78:f7:9c:3d:ce:f7:62:bc:ed:6a:97:51:72:c2:95:1a:43:a9:
69:32:09:3f:f9:7e:94:01:d1:2d:9c:64:fd:d5:2d:c8:df:79:
1b:ef:9b:39:24:2a:9c:e0:a9:54:f6:9b:50:69:76:13:f3:84:
c8:5a:e9:22:9c:20:bb:62:ff:58:97:25:bd:de:a0:f9:90:3f:
89:69:0b:48:c7:29:9c:56:fe:b9:7e:90:06:ab:c3
```

### Step 4: Extract body and sha256

$ openssl x509 -in issuer_cert.pem -noout -fingerprint -sha256

sha256 Fingerprint=37:83:4F:A5:EA:40:FB:F7:B6:11:96:95:59:62:E1:CA:05:58:87:24:35:E4:20:66:53:D3:F6:20:DD:8E:98:8E


$  sha256sum issuer_cert_body.bin
60c904d84635239211adf81a89bc7c1fe6caa0c3efe9d6f93794eca70b355ea8 *issuer_cert_body.bin
