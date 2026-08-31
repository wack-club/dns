// @ts-check
/// <reference path="types-dnscontrol.d.ts" />

var REG_NONE = NewRegistrar("none");
var DSP_CLOUDFLARE = NewDnsProvider("cloudflare");

D(
  "wack.club",
  REG_NONE,
  DnsProvider(DSP_CLOUDFLARE),
  DefaultTTL(1),
  CNAME("_dmarc", "dmarcroot.purelymail.com."),
  CNAME("purelymail1._domainkey", "key1.dkimroot.purelymail.com."),
  CNAME("purelymail2._domainkey", "key2.dkimroot.purelymail.com."),
  CNAME("purelymail3._domainkey", "key3.dkimroot.purelymail.com."),
  MX("@", 69, "mailserver.purelymail.com."),
  TXT("@", '"v=spf1 include:_spf.purelymail.com ~all"'),
  TXT(
    "@",
    '"purelymail_ownership_proof=cfccc9e7f9c8bf6bb31c87ca1c5339dcbe3bdf03b07de22c72e1229137f45e514651bbb5432851eedcf883f3a8542eeccc2d3b9341d3c5b36f461e0cfabc5758"'
  ),

  ALIAS("@", "642d762550a8bccc.vercel-dns-017.com."),
  TXT("_vercel", "vc-domain-verify=wack.club,b80f8d0b71bdb381431c"),
  CNAME("www", "642d762550a8bccc.vercel-dns-017.com."),
  TXT("_vercel", "vc-domain-verify=www.wack.club,8306de1f4215966665f2")
);
